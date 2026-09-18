import { NextRequest, NextResponse } from "next/server";
import { SUBDOMAIN_ROUTES, ROOT_DOMAIN } from "@/config/subdomains";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const hostname = host.split(":")[0];

  if (hostname === ROOT_DOMAIN || hostname === `www.${ROOT_DOMAIN}`) {
    return NextResponse.next();
  }

  const label = hostname.replace(`.${ROOT_DOMAIN}`, "");
  const targetPath = SUBDOMAIN_ROUTES[label];

  if (targetPath && request.nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL(targetPath, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
