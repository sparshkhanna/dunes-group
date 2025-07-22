import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = "website",
  structuredData,
  pageType = "website",
}) => {
  const siteName = "The Dunes Group";
  const siteUrl = "https://dunesgroup.in";
  const defaultImage = `${siteUrl}/dunes-group-logo.png`;

  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Dunes Group",
    url: siteUrl,
    logo: `${siteUrl}/dunes-group-logo.png`,
    description:
      "The Dunes Group represents the unified strength of three core aviation verticals—Flying Training Organization (FTO), Non-Scheduled Air Operations (NSOP), and Maintenance, Repair & Overhaul (MRO) along with Continuing Airworthiness Management Organization (CAMO) services.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "703, The Umed Heights, Cazri Road Light Industrial Area, Milkman Colony",
      addressLocality: "Jodhpur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
      postalCode: "342003",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+91 96101 60999",
        email: "info@dunesaviation.in",
        availableLanguage: "English",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/dunes-group",
      "https://www.facebook.com/dunesgroup",
      "https://twitter.com/dunesgroup",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Aviation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pilot Training",
            description:
              "Comprehensive pilot training programs including Private Pilot License, Commercial Pilot License, and Instrument Rating",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Aircraft Operations",
            description:
              "Non-scheduled air operations including charter flights and cargo operations",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Maintenance Services",
            description:
              "Maintenance, Repair & Overhaul (MRO) services for aircraft",
          },
        },
      ],
    },
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />
      <meta name="twitter:site" content="@dunesgroup" />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={siteName} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Industry-specific meta tags */}
      <meta name="industry" content="Aviation" />
      <meta name="business_type" content="Aviation Services" />
      <meta
        name="services"
        content="Pilot Training, Aircraft Operations, Maintenance Repair Overhaul, Airworthiness Management"
      />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
