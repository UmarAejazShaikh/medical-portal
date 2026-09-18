export interface MedicalProfile {
  id: string;
  name: string;
  type: "doctor" | "lab";
  categoryEn: string;
  categoryGu: string;
  qualificationEn: string;
  qualificationGu: string;
  affiliationEn: string;
  affiliationGu: string;
  rating?: {
    score: string;
    reviewsCount: string;
    source: string;
  };
  address: string;
  locality: string;
  phone: string;
  email?: string;
  timingsEn: string;
  timingsGu: string;
  primaryFocusEn: string[];
  primaryFocusGu: string[];
  secondaryServicesEn: string[];
  secondaryServicesGu: string[];
  summaryEn: string;
  summaryGu: string;
  keywords: string[];
  profileUrl: string;
  whatsappMessageEn: string;
  whatsappMessageGu: string;
}

export const medicalProfiles: MedicalProfile[] = [
  {
    id: "dr-nasir-salar",
    name: "Dr. Nasir Salar",
    type: "doctor",
    categoryEn: "Orthopedic & Spine Surgeon",
    categoryGu: "ઓર્થોપેડિક & સ્પાઇન સર્જન",
    qualificationEn: "M.B.B.S, M.S. Orthopedic",
    qualificationGu: "M.B.B.S, M.S. ઓર્થોપેડિક",
    affiliationEn: "B.J. Medical College & Civil Hospital, Ahmedabad | Spine Surgery Fellowship (Dr. Rohit Thaker)",
    affiliationGu: "બી. જે. મેડિકલ કોલેજ & સિવિલ હોસ્પિટલ, અમદાવાદ | સ્પાઇન સર્જરી ફેલોશિપ (ડો. રોહિત ઠાકર)",
    address: "B 401, Sunflower Residency, Sarkhej, Ahmedabad, Gujarat",
    locality: "Sarkhej, Ahmedabad",
    phone: "8511954797",
    email: "mohammadnasirsalar7866@gmail.com",
    timingsEn: "Mon–Sat: Consultation by Appointment",
    timingsGu: "સોમ–શનિ: એપોઇન્ટમેન્ટ મુજબ કન્સલ્ટેશન",
    primaryFocusEn: [
      "Endoscopic Spine Surgery (Keyhole technique)",
      "Minimally Invasive Spine Surgery (MIS)",
      "Sciatica & Slip Disc (Lumbar Discectomy)",
      "Spinal Stenosis Decompression & Instrumentation (TLIF)"
    ],
    primaryFocusGu: [
      "એન્ડોસ્કોપિક સ્પાઇન સર્જરી (દૂરબીન દ્વારા ટાંકા વગર ઓપરેશન)",
      "મિનિમલી ઇન્વેસિવ સ્પાઇન સર્જરી (MIS)",
      "સાયટીકા અને સ્લિપ ડિસ્ક (ડિસ્કેક્ટોમી)",
      "સ્પાઇનલ સ્ટેનોસિસ ડીકમ્પ્રેશન & ફિક્સેશન (TLIF)"
    ],
    secondaryServicesEn: [
      "Orthopedic Trauma Management & Fracture Fixation",
      "Arthroplasty (Total Knee & Hip Joint Replacement)",
      "Arthroscopy & Ligament Care",
      "C-Arm Guided Spine Nerve Injections"
    ],
    secondaryServicesGu: [
      "ઓર્થોપેડિક ટ્રોમા અને હાડકાના ફેક્ચર સારવાર",
      "સાંધા બદલવાનું ઓપરેશન (TKR અને THR જોઈન્ટ રિપ્લેસમેન્ટ)",
      "આર્થ્રોસ્કોપી અને લિગામેન્ટ સારવાર",
      "સી-આર્મ ગાઇડેડ સ્પાઇન ઇન્જેક્શન"
    ],
    summaryEn:
      "Orthopedic surgeon with super-specialized fellowship training in Spine Surgery under Dr. Rohit Thaker. Heavy clinical focus on Endoscopic and Minimally Invasive (MIS) spine procedures, alongside trauma care and joint replacement.",
    summaryGu:
      "ઓર્થોપેડિક સર્જન જેમણે પ્રખ્યાત સ્પાઇન સર્જન ડો. રોહિત ઠાકર પાસે સ્પાઇન સર્જરીની ફેલોશિપ મેળવેલ છે. દૂરબીનથી ટાંકા વગરની એન્ડોસ્કોપિક સ્પાઇન સર્જરી, MIS સ્પાઇન સારવાર, ફેક્ચર અને સાંધા બદલવાના નિષ્ણાત.",
    keywords: [
      "dr nasir salar",
      "orthopedic",
      "spine surgeon",
      "endoscopic spine surgery",
      "mis spine",
      "sciatica",
      "slip disc",
      "back pain",
      "neck pain",
      "joint replacement",
      "tkr",
      "thr",
      "fracture",
      "trauma",
      "arthroscopy",
      "bj medical college",
      "civil hospital",
      "sarkhej",
      "ahmedabad",
      "ઓર્થોપેડિક",
      "મણકા",
      "સ્પાઇન",
      "કમરનો દુખાવો",
      "સ્લિપ ડિસ્ક",
      "સાયટીકા",
      "સાંધા બદલવા"
    ],
    profileUrl: "/orthopedic",
    whatsappMessageEn: "Hello Dr. Nasir Salar, I would like to consult regarding spine / orthopedic issues.",
    whatsappMessageGu: "નમસ્તે ડો. નાસિર સાલાર, મારે મણકા / ઓર્થોપેડિક કન્સલ્ટેશન માટે સંપર્ક કરવો છે."
  },
  {
    id: "unity-pathology-laboratory",
    name: "Unity Pathology Laboratory",
    type: "lab",
    categoryEn: "Diagnostic & Pathology Laboratory",
    categoryGu: "ડાયગ્નોસ્ટિક & પેથોલોજી લેબોરેટરી",
    qualificationEn: "Medical Diagnostic Laboratory",
    qualificationGu: "મેડિકલ ડાયગ્નોસ્ટિક લેબોરેટરી",
    affiliationEn: "Makarba, Sarkhej Roza Road, Ahmedabad",
    affiliationGu: "મકરબા, સરખેજ રોઝા રોડ, અમદાવાદ",
    rating: {
      score: "5.0",
      reviewsCount: "60",
      source: "Google Reviews"
    },
    address: "First floor, Samir Residency, 01, Sarkhej Roza Road, Opp. Mastanbava Dargah, Makarba, Ahmedabad, Gujarat 382210",
    locality: "Makarba, Sarkhej, Ahmedabad",
    phone: "6353065009",
    timingsEn: "Mon–Sat: 8:00 AM – 9:00 PM | Sun: 8:00 AM – 2:00 PM",
    timingsGu: "સોમ–શનિ: સવારે ૮:૦૦ થી રાત્રે ૯:૦૦ | રવિવાર: સવારે ૮:૦૦ થી બપોરે ૨:૦૦",
    primaryFocusEn: [
      "Complete Blood Count (CBC) with ESR",
      "HbA1c & Fasting / PP Blood Sugar",
      "Lipid Profile (Cholesterol Panel)",
      "Thyroid Profile (T3, T4, TSH)",
      "Liver Function (LFT) & Kidney Function (KFT)"
    ],
    primaryFocusGu: [
      "સંપૂર્ણ લોહી તપાસ (CBC + ESR)",
      "HbA1c & બ્લડ સુગર ટેસ્ટ",
      "લિપિડ પ્રોફાઇલ (કોલેસ્ટ્રોલ)",
      "થાયરોઇડ પ્રોફાઇલ (T3, T4, TSH)",
      "લિવર (LFT) અને કિડની (KFT) ટેસ્ટ"
    ],
    secondaryServicesEn: [
      "Home Sample Collection Available (Call to arrange)",
      "Urine Routine & Microscopy",
      "Vitamin D3 & Vitamin B12 Testing",
      "Digital PDF Reports via WhatsApp / Email"
    ],
    secondaryServicesGu: [
      "ઘરબેઠા સેમ્પલ કલેક્શનની સુવિધા ઉપલબ્ધ",
      "પેશાબની રૂટિન તપાસ (Urine R/M)",
      "વિટામિન D3 અને B12 ટેસ્ટ",
      "વોટ્સએપ / ઇમેઇલ પર ડિજિટલ PDF રિપોર્ટ"
    ],
    summaryEn:
      "Established medical laboratory in Makarba, Ahmedabad with a 5.0 Google rating across 60 reviews. Provides comprehensive clinical diagnostic blood testing, routine health checks, and home sample collection inquiries.",
    summaryGu:
      "મકરબા, અમદાવાદ ખાતે આવેલી ૫.૦ ગૂગલ રેટિંગ (૬૦ રિવ્યુઝ) ધરાવતી લેબોરેટરી. લોહી અને પેશાબના તમામ રૂટિન અને સ્પેશિયલ ટેસ્ટ તથા ઘરબેઠા સેમ્પલ કલેક્શનની સુવિધા.",
    keywords: [
      "unity pathology laboratory",
      "pathology lab",
      "blood test",
      "cbc",
      "hba1c",
      "sugar",
      "diabetes",
      "lipid profile",
      "cholesterol",
      "thyroid",
      "lft",
      "kft",
      "creatinine",
      "urine test",
      "vitamin d",
      "b12",
      "home sample collection",
      "makarba",
      "sarkhej",
      "ahmedabad",
      "lipid profile",
      "renal profile",
      "thyroid profile",
      "coagulation profile",
      "pt aptt test",
      "vitamin d3 test",
      "vitamin b12 test",
      "લેબ",
      "લોહીની તપાસ",
      "પેથોલોજી લેબોરેટરી",
      "ડાયાબિટીસ",
      "થાયરોઇડ",
      "લિપિડ પ્રોફાઇલ",
      "રેનલ પ્રોફાઇલ",
      "કોગ્યુલેશન પ્રોફાઇલ"
    ],
    profileUrl: "/pathology",
    whatsappMessageEn: "Hello Unity Pathology Laboratory, I would like to inquire about tests / sample collection.",
    whatsappMessageGu: "નમસ્તે યુનિટી પેથોલોજી લેબ, મારે લેબ ટેસ્ટ / સેમ્પલ કલેક્શન અંગે પૂછપરછ કરવી છે."
  }
];
