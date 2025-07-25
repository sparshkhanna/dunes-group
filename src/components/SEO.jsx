import React, { useEffect } from "react";

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
  const defaultImage = `${siteUrl}/og-image.png`;

  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Dunes Group",
    url: siteUrl,
    logo: `${siteUrl}/og-image.png`,
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

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updatePropertyTag = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Update basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", siteName);
    updateMetaTag("robots", "index, follow");
    updateMetaTag("language", "English");
    updateMetaTag("revisit-after", "7 days");
    updateMetaTag("industry", "Aviation");
    updateMetaTag("business_type", "Aviation Services");
    updateMetaTag(
      "services",
      "Pilot Training, Aircraft Operations, Maintenance Repair Overhaul, Airworthiness Management"
    );

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = fullCanonical;

    // Update Open Graph tags
    updatePropertyTag("og:title", fullTitle);
    updatePropertyTag("og:description", description);
    updatePropertyTag("og:type", ogType);
    updatePropertyTag("og:url", fullCanonical);
    updatePropertyTag("og:image", ogImage || defaultImage);
    updatePropertyTag("og:site_name", siteName);
    updatePropertyTag("og:locale", "en_US");

    // Update Twitter Card tags
    updatePropertyTag("twitter:card", "summary_large_image");
    updatePropertyTag("twitter:title", fullTitle);
    updatePropertyTag("twitter:description", description);
    updatePropertyTag("twitter:image", ogImage || defaultImage);
    updatePropertyTag("twitter:site", "@dunesgroup");

    // Add structured data
    const addStructuredData = (data) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    };

    // Remove existing structured data scripts
    const existingScripts = document.querySelectorAll(
      'script[type="application/ld+json"]'
    );
    existingScripts.forEach((script) => script.remove());

    // Add new structured data
    addStructuredData(structuredData || defaultStructuredData);

    // Cleanup function
    return () => {
      // Remove meta tags we added (optional cleanup)
      const metaTags = document.querySelectorAll(
        'meta[name="description"], meta[name="keywords"], meta[property^="og:"], meta[property^="twitter:"]'
      );
      metaTags.forEach((tag) => {
        if (
          tag.content === description ||
          tag.content === keywords ||
          tag.content === fullTitle
        ) {
          tag.remove();
        }
      });
    };
  }, [
    title,
    description,
    keywords,
    canonical,
    ogImage,
    ogType,
    structuredData,
    fullTitle,
    fullCanonical,
    defaultImage,
    siteName,
  ]);

  // This component doesn't render anything visible
  return null;
};

export default SEO;
