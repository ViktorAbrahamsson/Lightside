import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Lundqvist Lightside';
const SITE_URL = 'https://lightside.pro';
const OG_IMAGE = `${SITE_URL}/LLS_Mountain_Darker.png`;
const OG_IMAGE_ALT = 'A dark mountain landscape — Lundqvist Lightside Swedish Esports';
const TWITTER_HANDLE = '@LightsideSWE';

interface PageSeoProps {
  title: string;
  description: string;
  path?: string;
}

export function PageSeo({ title, description, path = '' }: PageSeoProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonical = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={OG_IMAGE_ALT} />
      <meta property="og:locale" content="en_SE" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:image:alt" content={OG_IMAGE_ALT} />
    </Helmet>
  );
}
