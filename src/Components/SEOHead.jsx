import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

/**
 * SEOHead - Reusable SEO component for dynamic meta management
 * Handles meta titles, descriptions, Open Graph, Twitter Cards, and JSON-LD schema
 */
const SEOHead = ({
  title = 'Salvia Naturals | Premium Dried Herbs & Botanicals Exporter',
  description = 'Leading Egyptian exporter of premium dried herbs, flowers, leaves & seeds. Quality botanicals from the fertile Nile Valley. Request a quote today!',
  keywords = 'dried herbs exporter, botanical products supplier, dried flowers wholesale, dried leaves supplier, Egypt herbs, herbal products',
  canonicalUrl,
  ogImage = '/public/icon.png',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  schema,
  noIndex = false,
}) => {
  const siteUrl = 'https://salvia.com'; // Update with actual domain
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="Salvia Naturals" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

SEOHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  canonicalUrl: PropTypes.string,
  ogImage: PropTypes.string,
  ogType: PropTypes.string,
  twitterCard: PropTypes.string,
  schema: PropTypes.object,
  noIndex: PropTypes.bool,
};

export default SEOHead;
