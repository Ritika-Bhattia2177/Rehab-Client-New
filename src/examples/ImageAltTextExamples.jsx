import React from 'react';
import { getAltText, imageAltTexts } from '../utils/imageAltText';

/**
 * Example Component: Facility Gallery
 * Demonstrates how to use SEO-optimized alt text in real components
 */

const FacilityGallery = () => {
  return (
    <section className="facility-gallery">
      <h2>Our Facilities</h2>
      
      <div className="gallery-grid">
        {/* Example 1: Using helper function */}
        <div className="gallery-item">
          <img 
            src="/images/therapy-room.jpg" 
            alt={getAltText('therapy', 'individual')}
            loading="lazy"
          />
          <p>Individual Therapy Rooms</p>
        </div>

        {/* Example 2: Direct object access */}
        <div className="gallery-item">
          <img 
            src="/images/bedroom.jpg" 
            alt={imageAltTexts.facilities.bedroom}
            loading="lazy"
          />
          <p>Private Bedrooms</p>
        </div>

        {/* Example 3: Group therapy */}
        <div className="gallery-item">
          <img 
            src="/images/group-session.jpg" 
            alt={getAltText('therapy', 'group')}
            loading="lazy"
          />
          <p>Group Therapy Sessions</p>
        </div>

        {/* Example 4: Facility exterior */}
        <div className="gallery-item">
          <img 
            src="/images/campus.jpg" 
            alt={imageAltTexts.outdoor.campus}
            loading="lazy"
          />
          <p>Our Campus</p>
        </div>

        {/* Example 5: Medical facilities */}
        <div className="gallery-item">
          <img 
            src="/images/medical-room.jpg" 
            alt={getAltText('medical', 'detoxRoom')}
            loading="lazy"
          />
          <p>Medical Detox Unit</p>
        </div>

        {/* Example 6: Outdoor spaces */}
        <div className="gallery-item">
          <img 
            src="/images/garden.jpg" 
            alt={imageAltTexts.facilities.garden}
            loading="lazy"
          />
          <p>Healing Gardens</p>
        </div>

        {/* Example 7: Fitness center */}
        <div className="gallery-item">
          <img 
            src="/images/gym.jpg" 
            alt={getAltText('facilities', 'gymFitness')}
            loading="lazy"
          />
          <p>Fitness Center</p>
        </div>

        {/* Example 8: Yoga room */}
        <div className="gallery-item">
          <img 
            src="/images/yoga.jpg" 
            alt={imageAltTexts.facilities.yogaRoom}
            loading="lazy"
          />
          <p>Yoga Studio</p>
        </div>
      </div>
    </section>
  );
};

/**
 * Example Component: Staff Profiles
 */
const StaffSection = () => {
  const staffMembers = [
    {
      name: "Dr. Priya Sharma",
      role: "Lead Psychiatrist",
      image: "/images/staff/doctor-1.jpg",
      altText: imageAltTexts.staff.psychiatrist
    },
    {
      name: "Rajesh Kumar",
      role: "Licensed Counselor",
      image: "/images/staff/counselor-1.jpg",
      altText: imageAltTexts.staff.counselor
    },
    {
      name: "Anita Patel",
      role: "Addiction Therapist",
      image: "/images/staff/therapist-1.jpg",
      altText: imageAltTexts.staff.therapist
    }
  ];

  return (
    <section className="staff-section">
      <h2>Meet Our Team</h2>
      
      <div className="staff-grid">
        {staffMembers.map((staff, index) => (
          <div key={index} className="staff-card">
            <img 
              src={staff.image} 
              alt={staff.altText}
              loading="lazy"
            />
            <h3>{staff.name}</h3>
            <p>{staff.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

/**
 * Example Component: Programs Overview
 */
const ProgramsOverview = () => {
  const programs = [
    {
      title: "Inpatient Treatment",
      image: "/images/programs/inpatient.jpg",
      altCategory: 'programs',
      altType: 'inpatient',
      description: "Comprehensive 24/7 residential care"
    },
    {
      title: "Outpatient Services",
      image: "/images/programs/outpatient.jpg",
      altCategory: 'programs',
      altType: 'outpatient',
      description: "Flexible treatment while maintaining daily life"
    },
    {
      title: "Medical Detox",
      image: "/images/programs/detox.jpg",
      altCategory: 'programs',
      altType: 'detox',
      description: "Safe, medically supervised withdrawal"
    },
    {
      title: "Holistic Therapy",
      image: "/images/programs/holistic.jpg",
      altCategory: 'programs',
      altType: 'holistic',
      description: "Mind-body-spirit healing approach"
    }
  ];

  return (
    <section className="programs-overview">
      <h2>Our Treatment Programs</h2>
      
      <div className="programs-grid">
        {programs.map((program, index) => (
          <div key={index} className="program-card">
            <img 
              src={program.image} 
              alt={getAltText(program.altCategory, program.altType)}
              loading="lazy"
            />
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

/**
 * Example Component: Hero Section with Background Image
 */
const HeroSection = () => {
  return (
    <section 
      className="hero-section"
      style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
      role="img"
      aria-label={imageAltTexts.hero.main}
    >
      <div className="hero-content">
        <h1>Begin Your Journey to Recovery</h1>
        <p>Professional addiction treatment in a healing environment</p>
        <button className="cta-button">Get Help Now</button>
      </div>
    </section>
  );
};

/**
 * Example Component: Testimonials with Images
 */
const TestimonialsSection = () => {
  return (
    <section className="testimonials">
      <h2>Success Stories</h2>
      
      <div className="testimonial-card">
        <img 
          src="/images/success-story.jpg" 
          alt={imageAltTexts.testimonials.successStory}
          loading="lazy"
        />
        <blockquote>
          "The compassionate care I received changed my life..."
        </blockquote>
        <cite>— Anonymous Graduate</cite>
      </div>
    </section>
  );
};

/**
 * Example Component: Activities Carousel
 */
const ActivitiesCarousel = () => {
  const activities = [
    {
      image: "/images/yoga-class.jpg",
      alt: getAltText('patients', 'yogaClass'),
      title: "Yoga & Meditation"
    },
    {
      image: "/images/art-therapy.jpg",
      alt: imageAltTexts.patients.artTherapy,
      title: "Art Therapy"
    },
    {
      image: "/images/group-activity.jpg",
      alt: getAltText('patients', 'groupActivity'),
      title: "Group Activities"
    },
    {
      image: "/images/walking-therapy.jpg",
      alt: imageAltTexts.patients.walkingTherapy,
      title: "Nature Therapy"
    }
  ];

  return (
    <section className="activities-carousel">
      <h2>Therapeutic Activities</h2>
      
      <div className="carousel">
        {activities.map((activity, index) => (
          <div key={index} className="carousel-item">
            <img 
              src={activity.image} 
              alt={activity.alt}
              loading="lazy"
            />
            <h3>{activity.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

/**
 * Example: Image with Custom Generated Alt Text
 */
const CustomImageExample = () => {
  // For dynamic images where you need to generate alt text
  const generateCustomAlt = (baseDescription) => {
    return `${baseDescription} at professional rehab facility in India`;
  };

  return (
    <div className="custom-image">
      <img 
        src="/images/custom-photo.jpg"
        alt={generateCustomAlt("Therapist guiding meditation session")}
        loading="lazy"
      />
    </div>
  );
};

/**
 * Example: Responsive Images with Different Alt Text
 */
const ResponsiveImageExample = () => {
  return (
    <picture>
      <source 
        media="(min-width: 768px)" 
        srcSet="/images/facility-wide.jpg"
      />
      <source 
        media="(max-width: 767px)" 
        srcSet="/images/facility-mobile.jpg"
      />
      <img 
        src="/images/facility-wide.jpg" 
        alt={imageAltTexts.hero.overview}
        loading="lazy"
      />
    </picture>
  );
};

/**
 * Example: Icon Usage with Decorative Images
 */
const ServicesIcons = () => {
  // Decorative icons should have empty alt text
  // SVG icons with role="img" should have aria-label
  return (
    <div className="services-icons">
      <div className="service-item">
        <img 
          src="/icons/therapy.svg" 
          alt="" 
          role="presentation" 
        />
        <span>Therapy Services</span>
      </div>
      
      <div className="service-item">
        <svg role="img" aria-label={imageAltTexts.icons.therapy}>
          {/* SVG content */}
        </svg>
        <span>Counseling</span>
      </div>
    </div>
  );
};

/**
 * Best Practice Examples
 */

// ✅ CORRECT: Descriptive, keyword-rich alt text
const GoodExample1 = () => (
  <img 
    src="/images/session.jpg" 
    alt="One-on-one addiction therapy session between licensed counselor and patient in private room"
  />
);

// ✅ CORRECT: Using utility function
const GoodExample2 = () => (
  <img 
    src="/images/facility.jpg" 
    alt={getAltText('facilities', 'bedroom')}
  />
);

// ❌ WRONG: Generic alt text
const BadExample1 = () => (
  <img 
    src="/images/session.jpg" 
    alt="therapy"
  />
);

// ❌ WRONG: Keyword stuffing
const BadExample2 = () => (
  <img 
    src="/images/facility.jpg" 
    alt="addiction therapy session counseling for substance abuse recovery environment professional rehab facility"
  />
);

// ❌ WRONG: Using "image of"
const BadExample3 = () => (
  <img 
    src="/images/room.jpg" 
    alt="Image of a therapy room"
  />
);

// ✅ CORRECT: Decorative image with empty alt
const DecorativeExample = () => (
  <img 
    src="/images/decorative-line.png" 
    alt="" 
    role="presentation"
  />
);

/**
 * Export all examples
 */
export {
  FacilityGallery,
  StaffSection,
  ProgramsOverview,
  HeroSection,
  TestimonialsSection,
  ActivitiesCarousel,
  CustomImageExample,
  ResponsiveImageExample,
  ServicesIcons
};

export default FacilityGallery;
