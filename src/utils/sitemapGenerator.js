/**
 * Sitemap Generator Utility
 * Generate dynamic sitemap.xml for rehabilitation center website
 * Domain: https://www.rehabcareindia.com
 */

const SITE_URL = 'https://www.rehabcareindia.com';
const CURRENT_DATE = new Date().toISOString().split('T')[0];

/**
 * All website pages with their SEO properties
 */
export const sitePages = {
  // Main Pages
  mainPages: [
    {
      url: '/',
      lastmod: CURRENT_DATE,
      changefreq: 'daily',
      priority: 1.0,
      title: 'Homepage'
    },
    {
      url: '/programs',
      lastmod: CURRENT_DATE,
      changefreq: 'weekly',
      priority: 0.95,
      title: 'Treatment Programs'
    },
    {
      url: '/about',
      lastmod: CURRENT_DATE,
      changefreq: 'monthly',
      priority: 0.9,
      title: 'About Us'
    },
    {
      url: '/contact',
      lastmod: CURRENT_DATE,
      changefreq: 'monthly',
      priority: 0.9,
      title: 'Contact'
    }
  ],

  // Treatment Programs
  programs: [
    {
      url: '/programs/inpatient',
      lastmod: CURRENT_DATE,
      changefreq: 'monthly',
      priority: 0.9,
      title: 'Inpatient Rehabilitation Program'
    },
    {
      url: '/programs/outpatient',
      lastmod: CURRENT_DATE,
      changefreq: 'monthly',
      priority: 0.9,
      title: 'Outpatient Rehab Services'
    },
    {
      url: '/programs/detox',
      lastmod: CURRENT_DATE,
      changefreq: 'monthly',
      priority: 0.9,
      title: 'Medical Detox Program'
    },
    {
      url: '/programs/dual-diagnosis',
      lastmod: CURRENT_DATE,
      changefreq: 'monthly',
      priority: 0.9,
      title: 'Dual Diagnosis Treatment'
    },
    {
      url: '/programs/holistic',
      lastmod: CURRENT_DATE,
      changefreq: 'monthly',
      priority: 0.9,
      title: 'Holistic Recovery Treatment'
    },
    {
      url: '/programs/relapse-prevention',
      lastmod: CURRENT_DATE,
      changefreq: 'monthly',
      priority: 0.9,
      title: 'Relapse Prevention Program'
    }
  ],

  // Resources
  resources: [
    {
      url: '/resources',
      lastmod: CURRENT_DATE,
      changefreq: 'weekly',
      priority: 0.9,
      title: 'Resources Hub'
    },
    {
      url: '/centers',
      lastmod: CURRENT_DATE,
      changefreq: 'weekly',
      priority: 0.85,
      title: 'Browse Rehab Centers'
    },
    {
      url: '/communities',
      lastmod: CURRENT_DATE,
      changefreq: 'weekly',
      priority: 0.85,
      title: 'Recovery Communities'
    }
  ],

  // Blog Posts
  blogPosts: [
    {
      url: '/blogs',
      lastmod: CURRENT_DATE,
      changefreq: 'daily',
      priority: 0.85,
      title: 'Blog Main Page'
    },
    {
      url: '/blog/understanding-path-to-recovery',
      lastmod: '2026-02-12',
      changefreq: 'monthly',
      priority: 0.8,
      title: 'Understanding Your Path to Recovery'
    },
    {
      url: '/blog/how-to-overcome-drug-addiction',
      lastmod: '2026-02-10',
      changefreq: 'monthly',
      priority: 0.75,
      title: 'How to Overcome Drug Addiction'
    },
    {
      url: '/blog/signs-you-need-addiction-treatment',
      lastmod: '2026-02-08',
      changefreq: 'monthly',
      priority: 0.75,
      title: 'Signs You Need Addiction Treatment'
    },
    {
      url: '/blog/benefits-of-rehabilitation-centers',
      lastmod: '2026-02-06',
      changefreq: 'monthly',
      priority: 0.75,
      title: 'Benefits of Rehabilitation Centers'
    },
    {
      url: '/blog/alcohol-recovery-process',
      lastmod: '2026-02-04',
      changefreq: 'monthly',
      priority: 0.75,
      title: 'Alcohol Recovery Process Explained'
    },
    {
      url: '/blog/mental-health-recovery-journey',
      lastmod: '2026-02-02',
      changefreq: 'monthly',
      priority: 0.75,
      title: 'Mental Health Recovery Journey'
    },
    {
      url: '/blog/family-support-addiction-recovery',
      lastmod: '2026-01-30',
      changefreq: 'monthly',
      priority: 0.75,
      title: 'Family Support in Addiction Recovery'
    },
    {
      url: '/blog/dual-diagnosis-treatment-guide',
      lastmod: '2026-01-28',
      changefreq: 'monthly',
      priority: 0.75,
      title: 'Dual Diagnosis Treatment Guide'
    },
    {
      url: '/blog/relapse-prevention-strategies',
      lastmod: '2026-01-25',
      changefreq: 'monthly',
      priority: 0.75,
      title: 'Relapse Prevention Strategies'
    },
    {
      url: '/blog/choosing-right-rehab-center',
      lastmod: '2026-01-22',
      changefreq: 'monthly',
      priority: 0.75,
      title: 'Choosing the Right Rehab Center'
    },
    {
      url: '/blog/holistic-addiction-treatment',
      lastmod: '2026-01-20',
      changefreq: 'monthly',
      priority: 0.75,
      title: 'Holistic Addiction Treatment'
    }
  ],

  // Location Pages
  locations: [
    {
      url: '/centers/mumbai',
      lastmod: CURRENT_DATE,
      changefreq: 'weekly',
      priority: 0.8,
      title: 'Mumbai Rehab Centers'
    },
    {
      url: '/centers/delhi',
      lastmod: CURRENT_DATE,
      changefreq: 'weekly',
      priority: 0.8,
      title: 'Delhi Rehab Centers'
    },
    {
      url: '/centers/bangalore',
      lastmod: CURRENT_DATE,
      changefreq: 'weekly',
      priority: 0.8,
      title: 'Bangalore Rehab Centers'
    },
    {
      url: '/centers/pune',
      lastmod: CURRENT_DATE,
      changefreq: 'weekly',
      priority: 0.8,
      title: 'Pune Rehab Centers'
    },
    {
      url: '/centers/goa',
      lastmod: CURRENT_DATE,
      changefreq: 'weekly',
      priority: 0.8,
      title: 'Goa Rehab Centers'
    }
  ],

  // Additional Pages
  additionalPages: [
    {
      url: '/treatment-details',
      lastmod: CURRENT_DATE,
      changefreq: 'monthly',
      priority: 0.7,
      title: 'Treatment Details'
    },
    {
      url: '/insurance',
      lastmod: CURRENT_DATE,
      changefreq: 'monthly',
      priority: 0.7,
      title: 'Insurance Verification'
    },
    {
      url: '/admissions',
      lastmod: CURRENT_DATE,
      changefreq: 'monthly',
      priority: 0.7,
      title: 'Admissions Process'
    },
    {
      url: '/faq',
      lastmod: CURRENT_DATE,
      changefreq: 'monthly',
      priority: 0.7,
      title: 'FAQ'
    },
    {
      url: '/testimonials',
      lastmod: CURRENT_DATE,
      changefreq: 'weekly',
      priority: 0.75,
      title: 'Testimonials'
    },
    {
      url: '/virtual-tour',
      lastmod: CURRENT_DATE,
      changefreq: 'monthly',
      priority: 0.65,
      title: 'Virtual Tour'
    },
    {
      url: '/alumni',
      lastmod: CURRENT_DATE,
      changefreq: 'monthly',
      priority: 0.65,
      title: 'Alumni'
    },
    {
      url: '/advertise',
      lastmod: CURRENT_DATE,
      changefreq: 'monthly',
      priority: 0.6,
      title: 'Advertise with Us'
    },
    {
      url: '/careers',
      lastmod: CURRENT_DATE,
      changefreq: 'monthly',
      priority: 0.6,
      title: 'Careers'
    }
  ],

  // User Pages
  userPages: [
    {
      url: '/login',
      lastmod: CURRENT_DATE,
      changefreq: 'yearly',
      priority: 0.3,
      title: 'Login'
    },
    {
      url: '/register',
      lastmod: CURRENT_DATE,
      changefreq: 'yearly',
      priority: 0.3,
      title: 'Register'
    }
  ],

  // Legal Pages
  legalPages: [
    {
      url: '/privacy-policy',
      lastmod: CURRENT_DATE,
      changefreq: 'yearly',
      priority: 0.3,
      title: 'Privacy Policy'
    },
    {
      url: '/terms-of-service',
      lastmod: CURRENT_DATE,
      changefreq: 'yearly',
      priority: 0.3,
      title: 'Terms of Service'
    }
  ]
};

/**
 * Get all pages as a flat array
 */
export const getAllPages = () => {
  const allPages = [];
  
  Object.keys(sitePages).forEach(category => {
    allPages.push(...sitePages[category]);
  });
  
  return allPages;
};

/**
 * Generate XML sitemap string
 */
export const generateSitemapXML = () => {
  const allPages = getAllPages();
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

  allPages.forEach(page => {
    xml += `
  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  xml += `
</urlset>
`;

  return xml;
};

/**
 * Generate robots.txt content
 */
export const generateRobotsTxt = () => {
  return `# Robots.txt for Rehab Care India
# https://www.rehabcareindia.com

User-agent: *
Allow: /

# Disallow admin and user-specific pages
Disallow: /admin/
Disallow: /api/
Disallow: /private/

# Sitemap location
Sitemap: ${SITE_URL}/sitemap.xml

# Crawl delay (optional - adjust as needed)
Crawl-delay: 1

# Popular search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

# Block bad bots (optional)
User-agent: AhrefsBot
Crawl-delay: 10

User-agent: SemrushBot
Crawl-delay: 10
`;
};

/**
 * Get pages by category
 */
export const getPagesByCategory = (category) => {
  return sitePages[category] || [];
};

/**
 * Get pages by priority
 */
export const getPagesByPriority = (minPriority = 0.7) => {
  const allPages = getAllPages();
  return allPages.filter(page => page.priority >= minPriority);
};

/**
 * Get recently updated pages
 */
export const getRecentlyUpdatedPages = (daysAgo = 7) => {
  const allPages = getAllPages();
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - daysAgo);
  
  return allPages.filter(page => {
    const pageDate = new Date(page.lastmod);
    return pageDate >= cutoffDate;
  });
};

/**
 * Add new page to sitemap data
 */
export const addPage = (category, pageData) => {
  if (!sitePages[category]) {
    console.error(`Category ${category} does not exist`);
    return false;
  }
  
  const newPage = {
    url: pageData.url,
    lastmod: pageData.lastmod || CURRENT_DATE,
    changefreq: pageData.changefreq || 'monthly',
    priority: pageData.priority || 0.5,
    title: pageData.title || 'Untitled Page'
  };
  
  sitePages[category].push(newPage);
  return true;
};

/**
 * Export sitemap to file (Node.js environment)
 */
export const exportSitemapToFile = (filePath = './public/sitemap.xml') => {
  if (typeof window === 'undefined') {
    // Node.js environment
    const fs = require('fs');
    const xml = generateSitemapXML();
    fs.writeFileSync(filePath, xml, 'utf8');
    console.log(`Sitemap exported to ${filePath}`);
  } else {
    console.error('This function only works in Node.js environment');
  }
};

/**
 * Example usage:
 * 
 * import { generateSitemapXML, getAllPages, getPagesByPriority } from './sitemapGenerator';
 * 
 * // Get all pages
 * const pages = getAllPages();
 * console.log(`Total pages: ${pages.length}`);
 * 
 * // Get high-priority pages
 * const highPriorityPages = getPagesByPriority(0.8);
 * console.log(`High priority pages: ${highPriorityPages.length}`);
 * 
 * // Generate sitemap XML
 * const sitemapXML = generateSitemapXML();
 * console.log(sitemapXML);
 * 
 * // In Node.js script:
 * exportSitemapToFile('./public/sitemap.xml');
 */

export default {
  sitePages,
  getAllPages,
  generateSitemapXML,
  generateRobotsTxt,
  getPagesByCategory,
  getPagesByPriority,
  getRecentlyUpdatedPages,
  addPage,
  exportSitemapToFile,
  SITE_URL
};
