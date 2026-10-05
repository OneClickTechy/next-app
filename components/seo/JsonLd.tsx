import { site } from "@/lib/site";

export default function LocalBusinessJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: site.name,
    image: 'https://mggoldmart.com/assets/images/about-us.jpg',
    '@id': 'https://mggoldmart.com',
    url: 'https://mggoldmart.com',
    telephone: site.phone,
    priceRange: '₹₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No.44A, Rajeshwari Complex, 100 Feet Road, Gandhipuram',
      addressLocality: 'Coimbatore',
      addressRegion: 'Tamil Nadu',
      postalCode: '641012',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 11.020671, 
      longitude: 76.9688687, 
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '09:00',
      closes: '19:00',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Gold Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sell Used Gold',
            description: 'Get instant cash for second-hand and used gold jewelry at live market rates.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Release Pledged Gold',
            description: 'Clear bank loans or mortgage debt to release and sell pledged gold.',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
