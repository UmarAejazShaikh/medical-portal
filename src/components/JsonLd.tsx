import React from "react";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "@id": "https://drnasirsalar.com/#physician",
        "name": "Dr. Nasir Salar",
        "jobTitle": "Orthopedic & Spine Surgeon",
        "description": "Fellowship-trained Spine Surgeon specializing in Minimally Invasive Spine (MIS) Surgery, Endoscopic Spine Surgery, Joint Replacement, and Trauma in Ahmedabad.",
        "medicalSpecialty": [
          "OrthopedicSurgery",
          "SpineSurgery"
        ],
        "telephone": "+918511954797",
        "email": "mohammadnasirsalar7866@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "B 401, Sunflower Residency",
          "addressLocality": "Sarkhej, Ahmedabad",
          "addressRegion": "Gujarat",
          "postalCode": "382210",
          "addressCountry": "IN"
        },
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": "B.J. Medical College & Civil Hospital, Ahmedabad"
          }
        ],
        "availableService": [
          {
            "@type": "MedicalProcedure",
            "name": "Endoscopic Spine Surgery"
          },
          {
            "@type": "MedicalProcedure",
            "name": "Minimally Invasive Spine Surgery (MIS)"
          },
          {
            "@type": "MedicalProcedure",
            "name": "Sciatica & Slip Disc Treatment"
          },
          {
            "@type": "MedicalProcedure",
            "name": "Joint Replacement (TKR & THR)"
          },
          {
            "@type": "MedicalProcedure",
            "name": "Orthopedic Trauma & Fracture Fixation"
          }
        ]
      },
      {
        "@type": "DiagnosticLab",
        "@id": "https://unitypathologylab.com/#lab",
        "name": "Unity Pathology Laboratory",
        "image": "https://unitypathologylab.com/logo.png",
        "telephone": "+916353065009",
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "First Floor, Samir Residency, 01, Sarkhej Roza Road, Opp. Mastanbava Dargah",
          "addressLocality": "Makarba, Ahmedabad",
          "addressRegion": "Gujarat",
          "postalCode": "382210",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "22.9818",
          "longitude": "72.4996"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "21:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "08:00",
            "closes": "14:00"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "60",
          "bestRating": "5",
          "worstRating": "1"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
