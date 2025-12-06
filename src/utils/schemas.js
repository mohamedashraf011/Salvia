/**
 * Schema.org structured data utilities for SEO
 */

// Organization Schema - represents the company
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Salvia Naturals",
  "alternateName": "Salvia Natural",
  "url": "https://salvia.com",
  "logo": "https://salvia.com/icon.png",
  "description": "Leading Egyptian exporter of premium dried herbs, botanicals, seeds, dried leaves, and dried flowers from the fertile Nile Valley.",
  "foundingLocation": {
    "@type": "Place",
    "name": "Egypt"
  },
  "areaServed": "Worldwide",
  "knowsAbout": [
    "Dried Herbs",
    "Botanical Products",
    "Seeds Export",
    "Dried Flowers",
    "Dried Leaves",
    "Herbal Products"
  ],
  "sameAs": [
    "https://facebook.com/salvianaturals",
    "https://instagram.com/salvianaturals",
    "https://linkedin.com/company/salvianaturals",
    "https://twitter.com/salvianaturals"
  ]
});

// WebSite Schema - for sitelinks search box
export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Salvia Naturals",
  "url": "https://salvia.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://salvia.com/product?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

// LocalBusiness Schema - for contact page
export const getLocalBusinessSchema = (contactInfo = {}) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Salvia Naturals",
  "image": "https://salvia.com/icon.png",
  "url": "https://salvia.com",
  "telephone": contactInfo.phone || "",
  "email": contactInfo.email || "",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": contactInfo.address || "",
    "addressCountry": "EG"
  },
  "priceRange": "$$",
  "openingHours": "Mo-Fr 09:00-17:00"
});

// Product Schema - for individual products
export const getProductSchema = (product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description || product.shortDescription,
  "image": product.image,
  "category": product.category,
  "brand": {
    "@type": "Brand",
    "name": "Salvia Naturals"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Salvia Naturals"
  },
  "countryOfOrigin": {
    "@type": "Country",
    "name": "Egypt"
  }
});

// Breadcrumb Schema - for navigation
export const getBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://salvia.com${item.path}`
  }))
});

// FAQ Schema - for FAQ sections
export const getFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Event Schema - for events page
export const getEventSchema = (event) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "name": event.title,
  "description": event.description,
  "startDate": event.startDate,
  "endDate": event.endDate,
  "location": {
    "@type": "Place",
    "name": event.location
  },
  "organizer": {
    "@type": "Organization",
    "name": "Salvia Naturals"
  },
  "image": event.image
});
