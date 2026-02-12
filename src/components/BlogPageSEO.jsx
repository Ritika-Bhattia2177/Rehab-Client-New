import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlogPageSEO = ({ 
  title, 
  description, 
  author = "Hope Path Recovery Team",
  publishDate,
  category = "Addiction Recovery",
  image = "/images/blog-default.jpg",
  url
}) => {
  const siteUrl = "https://hopepathrecovery.com";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImageUrl = `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title} | Hope Path Recovery Blog</title>
      <meta name="title" content={`${title} | Hope Path Recovery Blog`} />
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      {publishDate && <meta property="article:published_time" content={publishDate} />}
      <meta property="article:author" content={author} />
      <meta property="article:section" content={category} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />

      {/* Article Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": description,
          "image": fullImageUrl,
          "author": {
            "@type": "Organization",
            "name": author
          },
          "publisher": {
            "@type": "Organization",
            "name": "Hope Path Recovery",
            "logo": {
              "@type": "ImageObject",
              "url": `${siteUrl}/logo.png`
            }
          },
          "datePublished": publishDate,
          "dateModified": publishDate,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": fullUrl
          }
        })}
      </script>
    </Helmet>
  );
};

export default BlogPageSEO;
