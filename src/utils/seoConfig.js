// SEO Configuration for The Dunes Group - Single Page Application
export const seoConfig = {
    // Site-wide configuration
    site: {
        name: 'The Dunes Group',
        url: 'https://dunesgroup.in',
        logo: 'https://dunesgroup.in/dunes-group-logo.png',
        description: 'The Dunes Group represents the unified strength of three core aviation verticals—Flying Training Organization (FTO), Non-Scheduled Air Operations (NSOP), and Maintenance, Repair & Overhaul (MRO) along with Continuing Airworthiness Management Organization (CAMO) services.',
        keywords: 'aviation training, pilot training, aircraft operations, maintenance repair overhaul, MRO services, airworthiness management, CAMO, flying school, aviation academy, aircraft charter, cargo operations, aviation maintenance, aircraft repair, aviation services, India aviation',
        language: 'en_US',
        geo: {
            region: 'IN',
            placename: 'India',
            position: '28.6139;77.2090',
            icbm: '28.6139, 77.2090'
        }
    },

    // Single page application - only homepage is indexed
    pages: {
        home: {
            title: 'Aviation Ecosystem | Pilot Training, Aircraft Operations & Maintenance',
            description: 'The Dunes Group represents the unified strength of three core aviation verticals—Flying Training Organization (FTO), Non-Scheduled Air Operations (NSOP), and Maintenance, Repair & Overhaul (MRO) along with Continuing Airworthiness Management Organization (CAMO) services.',
            keywords: 'aviation training, pilot training, aircraft operations, maintenance repair overhaul, MRO services, airworthiness management, CAMO, flying school, aviation academy, aircraft charter, cargo operations, aviation maintenance, aircraft repair, aviation services, India aviation',
            canonical: '/',
            ogType: 'website'
        }
    },

    // Page sections for single-page application
    sections: {
        about: {
            id: 'about',
            title: 'About Us',
            description: 'Learn about The Dunes Group\'s mission to provide world-class aviation services with uncompromising safety standards.'
        },
        services: {
            id: 'services',
            title: 'Our Services',
            description: 'Comprehensive aviation services including DGCA-approved pilot training, non-scheduled air operations, and MRO & CAMO services.'
        },
        fleet: {
            id: 'fleet',
            title: 'Our Fleet',
            description: 'Modern aircraft fleet including Cessna 208B, Citation CJ2+, and Challenger 605 for training and operations.'
        },
        stats: {
            id: 'stats',
            title: 'Our Achievements',
            description: '15+ years experience, 500+ pilots trained, 50+ aircraft serviced, 1000+ flight hours.'
        },
        contact: {
            id: 'contact',
            title: 'Contact Us',
            description: 'Get in touch with The Dunes Group for aviation services including pilot training, aircraft operations, and maintenance.'
        }
    },

    // Structured data templates
    structuredData: {
        organization: {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "The Dunes Group",
            "url": "https://dunesgroup.in",
            "logo": "https://dunesgroup.in/dunes-group-logo.png",
            "description": "The Dunes Group represents the unified strength of three core aviation verticals—Flying Training Organization (FTO), Non-Scheduled Air Operations (NSOP), and Maintenance, Repair & Overhaul (MRO) along with Continuing Airworthiness Management Organization (CAMO) services.",
            "foundingDate": "2020",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "703, The Umed Heights, Cazri Road Light Industrial Area, Milkman Colony",
                "addressLocality": "Jodhpur",
                "addressRegion": "Rajasthan",
                "addressCountry": "IN",
                "postalCode": "342003"
            },
            "contactPoint": [
                {
                    "@type": "ContactPoint",
                    "contactType": "customer service",
                    "telephone": "+91 96101 60999",
                    "email": "group@dunesaviation.in",
                    "availableLanguage": "English"
                }
            ],
            "sameAs": [
                "https://www.linkedin.com/company/dunes-group",
                "https://www.facebook.com/dunesgroup",
                "https://twitter.com/dunesgroup"
            ]
        },

        services: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Aviation Services",
            "provider": {
                "@type": "Organization",
                "name": "The Dunes Group"
            },
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Aviation Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Flying Training Organization",
                            "description": "DGCA-approved pilot training with state-of-the-art simulators and experienced instructors.",
                            "provider": {
                                "@type": "Organization",
                                "name": "Dunes Aviation Academy"
                            }
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Non-Scheduled Air Operations",
                            "description": "Premium charter services with our modern fleet for business and leisure travel.",
                            "provider": {
                                "@type": "Organization",
                                "name": "Dunes Air"
                            }
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "MRO & CAMO Services",
                            "description": "Comprehensive maintenance, repair, and overhaul services with certified technicians.",
                            "provider": {
                                "@type": "Organization",
                                "name": "Dunes Aerotech"
                            }
                        }
                    }
                ]
            }
        }
    }
};

// Helper function to get page SEO config
export const getPageSEO = (pageName) => {
    return seoConfig.pages[pageName] || seoConfig.pages.home;
};

// Helper function to get structured data
export const getStructuredData = (type) => {
    return seoConfig.structuredData[type] || seoConfig.structuredData.organization;
};

// Helper function to get section information
export const getSectionInfo = (sectionName) => {
    return seoConfig.sections[sectionName] || null;
}; 