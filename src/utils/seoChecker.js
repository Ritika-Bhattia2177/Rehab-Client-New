/**
 * SEO Checker Utility
 * Verify SEO implementation on your rehabilitation center website
 */

/**
 * Check if page has proper meta tags
 */
export const checkMetaTags = () => {
  const results = {
    title: null,
    description: null,
    keywords: null,
    ogTitle: null,
    ogDescription: null,
    ogImage: null,
    twitterCard: null,
    canonical: null,
    viewport: null
  };

  // Check title
  const title = document.querySelector('title');
  results.title = {
    exists: !!title,
    content: title?.textContent || '',
    length: title?.textContent?.length || 0,
    isOptimal: title?.textContent?.length >= 50 && title?.textContent?.length <= 60
  };

  // Check meta description
  const description = document.querySelector('meta[name="description"]');
  results.description = {
    exists: !!description,
    content: description?.getAttribute('content') || '',
    length: description?.getAttribute('content')?.length || 0,
    isOptimal: description?.getAttribute('content')?.length >= 150 && description?.getAttribute('content')?.length <= 160
  };

  // Check meta keywords
  const keywords = document.querySelector('meta[name="keywords"]');
  results.keywords = {
    exists: !!keywords,
    content: keywords?.getAttribute('content') || ''
  };

  // Check Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  results.ogTitle = {
    exists: !!ogTitle,
    content: ogTitle?.getAttribute('content') || ''
  };

  const ogDescription = document.querySelector('meta[property="og:description"]');
  results.ogDescription = {
    exists: !!ogDescription,
    content: ogDescription?.getAttribute('content') || ''
  };

  const ogImage = document.querySelector('meta[property="og:image"]');
  results.ogImage = {
    exists: !!ogImage,
    content: ogImage?.getAttribute('content') || ''
  };

  // Check Twitter Card
  const twitterCard = document.querySelector('meta[property="twitter:card"]');
  results.twitterCard = {
    exists: !!twitterCard,
    content: twitterCard?.getAttribute('content') || ''
  };

  // Check canonical URL
  const canonical = document.querySelector('link[rel="canonical"]');
  results.canonical = {
    exists: !!canonical,
    href: canonical?.getAttribute('href') || ''
  };

  // Check viewport
  const viewport = document.querySelector('meta[name="viewport"]');
  results.viewport = {
    exists: !!viewport,
    content: viewport?.getAttribute('content') || ''
  };

  return results;
};

/**
 * Check heading structure (H1, H2, H3, etc.)
 */
export const checkHeadingStructure = () => {
  const h1 = document.querySelectorAll('h1');
  const h2 = document.querySelectorAll('h2');
  const h3 = document.querySelectorAll('h3');
  const h4 = document.querySelectorAll('h4');
  const h5 = document.querySelectorAll('h5');
  const h6 = document.querySelectorAll('h6');

  return {
    h1: {
      count: h1.length,
      isOptimal: h1.length === 1, // Should have exactly one H1
      content: Array.from(h1).map(el => el.textContent)
    },
    h2: {
      count: h2.length,
      content: Array.from(h2).map(el => el.textContent)
    },
    h3: {
      count: h3.length,
      content: Array.from(h3).map(el => el.textContent)
    },
    h4: {
      count: h4.length
    },
    h5: {
      count: h5.length
    },
    h6: {
      count: h6.length
    },
    totalHeadings: h1.length + h2.length + h3.length + h4.length + h5.length + h6.length
  };
};

/**
 * Check for Schema.org structured data
 */
export const checkStructuredData = () => {
  const scripts = document.querySelectorAll('script[type="application/ld+json"]');
  const structuredData = [];

  scripts.forEach(script => {
    try {
      const data = JSON.parse(script.textContent);
      structuredData.push({
        type: data['@type'],
        raw: data
      });
    } catch (e) {
      structuredData.push({
        type: 'Invalid JSON',
        error: e.message
      });
    }
  });

  return {
    count: scripts.length,
    hasStructuredData: scripts.length > 0,
    data: structuredData
  };
};

/**
 * Check image alt attributes
 */
export const checkImageAltTags = () => {
  const images = document.querySelectorAll('img');
  let withAlt = 0;
  let withoutAlt = 0;
  let emptyAlt = 0;
  const missingAltImages = [];

  images.forEach((img, index) => {
    const alt = img.getAttribute('alt');
    
    if (alt === null) {
      withoutAlt++;
      missingAltImages.push({
        index,
        src: img.src,
        issue: 'Missing alt attribute'
      });
    } else if (alt === '') {
      emptyAlt++;
    } else {
      withAlt++;
    }
  });

  return {
    totalImages: images.length,
    withAlt,
    withoutAlt,
    emptyAlt,
    percentage: images.length > 0 ? ((withAlt / images.length) * 100).toFixed(2) : 0,
    isOptimal: withoutAlt === 0,
    missingAltImages: missingAltImages.slice(0, 10) // First 10 issues
  };
};

/**
 * Check page load performance
 */
export const checkPagePerformance = () => {
  const navigation = performance.getEntriesByType('navigation')[0];
  
  return {
    loadTime: navigation?.loadEventEnd - navigation?.loadEventStart || 0,
    domContentLoaded: navigation?.domContentLoadedEventEnd - navigation?.domContentLoadedEventStart || 0,
    totalTime: navigation?.loadEventEnd - navigation?.fetchStart || 0,
    isOptimal: (navigation?.loadEventEnd - navigation?.fetchStart || 0) < 3000 // Under 3 seconds
  };
};

/**
 * Check for robots meta tag
 */
export const checkRobotsMeta = () => {
  const robots = document.querySelector('meta[name="robots"]');
  
  return {
    exists: !!robots,
    content: robots?.getAttribute('content') || 'Not set (defaults to index, follow)',
    isBlocking: robots?.getAttribute('content')?.includes('noindex') || false
  };
};

/**
 * Check internal linking
 */
export const checkInternalLinks = () => {
  const allLinks = document.querySelectorAll('a[href]');
  let internal = 0;
  let external = 0;
  let broken = 0;

  allLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    if (href.startsWith('/') || href.includes(window.location.hostname)) {
      internal++;
    } else if (href.startsWith('http')) {
      external++;
    }
    
    if (href === '#' || href === '') {
      broken++;
    }
  });

  return {
    total: allLinks.length,
    internal,
    external,
    broken,
    hasGoodStructure: internal > external
  };
};

/**
 * Check keyword density
 */
export const checkKeywordDensity = (keywords = []) => {
  const bodyText = document.body.textContent.toLowerCase();
  const words = bodyText.split(/\s+/).filter(word => word.length > 0);
  const totalWords = words.length;
  
  const keywordStats = keywords.map(keyword => {
    const regex = new RegExp(keyword.toLowerCase(), 'gi');
    const matches = bodyText.match(regex) || [];
    const count = matches.length;
    const density = ((count / totalWords) * 100).toFixed(2);
    
    return {
      keyword,
      count,
      density: parseFloat(density),
      isOptimal: density >= 1 && density <= 5 // 1-5% is optimal
    };
  });

  return {
    totalWords,
    keywords: keywordStats
  };
};

/**
 * Check mobile responsiveness
 */
export const checkMobileResponsiveness = () => {
  const viewport = document.querySelector('meta[name="viewport"]');
  const viewportContent = viewport?.getAttribute('content') || '';
  
  return {
    hasViewportMeta: !!viewport,
    viewportContent,
    hasResponsiveViewport: viewportContent.includes('width=device-width'),
    screenWidth: window.innerWidth,
    isMobile: window.innerWidth < 768
  };
};

/**
 * Check for HTTPS
 */
export const checkHTTPS = () => {
  return {
    isHTTPS: window.location.protocol === 'https:',
    protocol: window.location.protocol
  };
};

/**
 * Comprehensive SEO Audit
 */
export const runFullSEOAudit = (targetKeywords = []) => {
  console.log('🔍 Running comprehensive SEO audit...\n');
  
  const audit = {
    timestamp: new Date().toISOString(),
    url: window.location.href,
    metaTags: checkMetaTags(),
    headings: checkHeadingStructure(),
    structuredData: checkStructuredData(),
    images: checkImageAltTags(),
    performance: checkPagePerformance(),
    robots: checkRobotsMeta(),
    links: checkInternalLinks(),
    keywords: targetKeywords.length > 0 ? checkKeywordDensity(targetKeywords) : null,
    mobile: checkMobileResponsiveness(),
    security: checkHTTPS()
  };

  // Calculate overall score
  let score = 0;
  let maxScore = 0;

  // Meta tags (20 points)
  maxScore += 20;
  if (audit.metaTags.title.exists && audit.metaTags.title.isOptimal) score += 5;
  if (audit.metaTags.description.exists && audit.metaTags.description.isOptimal) score += 5;
  if (audit.metaTags.ogTitle.exists) score += 3;
  if (audit.metaTags.ogDescription.exists) score += 3;
  if (audit.metaTags.ogImage.exists) score += 2;
  if (audit.metaTags.canonical.exists) score += 2;

  // Headings (15 points)
  maxScore += 15;
  if (audit.headings.h1.isOptimal) score += 10;
  if (audit.headings.h2.count >= 3) score += 5;

  // Structured data (10 points)
  maxScore += 10;
  if (audit.structuredData.hasStructuredData) score += 10;

  // Images (15 points)
  maxScore += 15;
  if (audit.images.isOptimal) score += 15;
  else score += (audit.images.withAlt / audit.images.totalImages) * 15;

  // Performance (10 points)
  maxScore += 10;
  if (audit.performance.isOptimal) score += 10;

  // Links (10 points)
  maxScore += 10;
  if (audit.links.hasGoodStructure) score += 5;
  if (audit.links.broken === 0) score += 5;

  // Mobile (10 points)
  maxScore += 10;
  if (audit.mobile.hasResponsiveViewport) score += 10;

  // Security (10 points)
  maxScore += 10;
  if (audit.security.isHTTPS) score += 10;

  audit.score = {
    points: Math.round(score),
    maxPoints: maxScore,
    percentage: Math.round((score / maxScore) * 100),
    grade: score >= 80 ? 'A' : score >= 60 ? 'B' : score >= 40 ? 'C' : 'F'
  };

  return audit;
};

/**
 * Print audit results to console
 */
export const printAuditResults = (audit) => {
  console.log('═══════════════════════════════════════════');
  console.log('       SEO AUDIT RESULTS');
  console.log('═══════════════════════════════════════════\n');
  
  console.log(`📊 Overall Score: ${audit.score.points}/${audit.score.maxPoints} (${audit.score.percentage}%) - Grade: ${audit.score.grade}\n`);
  
  console.log('📝 META TAGS');
  console.log(`   Title: ${audit.metaTags.title.exists ? '✅' : '❌'} (${audit.metaTags.title.length} chars) ${audit.metaTags.title.isOptimal ? '✅ Optimal' : '⚠️ Not optimal'}`);
  console.log(`   Description: ${audit.metaTags.description.exists ? '✅' : '❌'} (${audit.metaTags.description.length} chars) ${audit.metaTags.description.isOptimal ? '✅ Optimal' : '⚠️ Not optimal'}`);
  console.log(`   Open Graph: ${audit.metaTags.ogTitle.exists && audit.metaTags.ogDescription.exists ? '✅' : '❌'}`);
  console.log(`   Canonical: ${audit.metaTags.canonical.exists ? '✅' : '❌'}\n`);
  
  console.log('📋 HEADINGS');
  console.log(`   H1: ${audit.headings.h1.count} ${audit.headings.h1.isOptimal ? '✅ Optimal' : '⚠️ Should have exactly 1'}`);
  console.log(`   H2: ${audit.headings.h2.count}`);
  console.log(`   H3: ${audit.headings.h3.count}\n`);
  
  console.log('🔗 STRUCTURED DATA');
  console.log(`   Schema.org: ${audit.structuredData.hasStructuredData ? '✅' : '❌'} (${audit.structuredData.count} found)\n`);
  
  console.log('🖼️ IMAGES');
  console.log(`   Total: ${audit.images.totalImages}`);
  console.log(`   With Alt: ${audit.images.withAlt} (${audit.images.percentage}%)`);
  console.log(`   Missing Alt: ${audit.images.withoutAlt} ${audit.images.isOptimal ? '✅' : '⚠️'}\n`);
  
  console.log('⚡ PERFORMANCE');
  console.log(`   Load Time: ${(audit.performance.totalTime / 1000).toFixed(2)}s ${audit.performance.isOptimal ? '✅ Fast' : '⚠️ Could be faster'}\n`);
  
  console.log('🔗 LINKS');
  console.log(`   Internal: ${audit.links.internal}`);
  console.log(`   External: ${audit.links.external}`);
  console.log(`   Broken: ${audit.links.broken} ${audit.links.broken === 0 ? '✅' : '❌'}\n`);
  
  console.log('📱 MOBILE');
  console.log(`   Responsive: ${audit.mobile.hasResponsiveViewport ? '✅' : '❌'}\n`);
  
  console.log('🔒 SECURITY');
  console.log(`   HTTPS: ${audit.security.isHTTPS ? '✅' : '❌'}\n`);
  
  if (audit.keywords) {
    console.log('🔑 KEYWORDS');
    audit.keywords.keywords.forEach(kw => {
      console.log(`   "${kw.keyword}": ${kw.count} times (${kw.density}%) ${kw.isOptimal ? '✅' : '⚠️'}`);
    });
    console.log('');
  }
  
  console.log('═══════════════════════════════════════════\n');
  
  // Recommendations
  const recommendations = [];
  
  if (!audit.metaTags.title.isOptimal) {
    recommendations.push('Optimize title tag length (50-60 characters)');
  }
  if (!audit.metaTags.description.isOptimal) {
    recommendations.push('Optimize meta description length (150-160 characters)');
  }
  if (!audit.headings.h1.isOptimal) {
    recommendations.push('Use exactly one H1 heading per page');
  }
  if (!audit.structuredData.hasStructuredData) {
    recommendations.push('Add Schema.org structured data');
  }
  if (audit.images.withoutAlt > 0) {
    recommendations.push(`Add alt text to ${audit.images.withoutAlt} images`);
  }
  if (!audit.performance.isOptimal) {
    recommendations.push('Improve page load speed (target under 3 seconds)');
  }
  if (!audit.security.isHTTPS) {
    recommendations.push('Use HTTPS for security');
  }
  
  if (recommendations.length > 0) {
    console.log('💡 RECOMMENDATIONS:');
    recommendations.forEach((rec, i) => {
      console.log(`   ${i + 1}. ${rec}`);
    });
    console.log('');
  } else {
    console.log('🎉 Great! No critical SEO issues found!\n');
  }
  
  return audit;
};

/**
 * Quick SEO check function
 * Use this in browser console
 */
export const quickSEOCheck = () => {
  const keywords = [
    'inpatient rehabilitation program',
    'outpatient rehab services',
    'addiction therapy session',
    'counseling for substance abuse',
    'recovery environment',
    'professional rehab facility in India',
    'mental health support center'
  ];
  
  const audit = runFullSEOAudit(keywords);
  printAuditResults(audit);
  
  return audit;
};

// Make it available globally for console use
if (typeof window !== 'undefined') {
  window.checkSEO = quickSEOCheck;
  window.seoAudit = {
    quick: quickSEOCheck,
    full: runFullSEOAudit,
    metaTags: checkMetaTags,
    headings: checkHeadingStructure,
    images: checkImageAltTags,
    keywords: checkKeywordDensity,
    print: printAuditResults
  };
}

export default {
  checkMetaTags,
  checkHeadingStructure,
  checkStructuredData,
  checkImageAltTags,
  checkPagePerformance,
  checkRobotsMeta,
  checkInternalLinks,
  checkKeywordDensity,
  checkMobileResponsiveness,
  checkHTTPS,
  runFullSEOAudit,
  printAuditResults,
  quickSEOCheck
};
