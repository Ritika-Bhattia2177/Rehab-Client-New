// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://rehab-server.vercel.app/'

export const API_ENDPOINTS = {
  // Auth
  LOGIN: `${API_BASE_URL}/api/auth`,
  REGISTER: `${API_BASE_URL}/api/auth`,
  AUTH: `${API_BASE_URL}/api/auth`,
  
  // Centers
  CENTERS: `${API_BASE_URL}/api/centers`,
  
  // Testimonials
  TESTIMONIALS: `${API_BASE_URL}/api/testimonials`,
  
  // Appointments
  APPOINTMENTS: `${API_BASE_URL}/api/appointments`,
  
  // Blogs
  BLOGS: `${API_BASE_URL}/api/blogs`,
  
  // Resources
  RESOURCES: `${API_BASE_URL}/api/resources`,
  
  // Staff
  STAFF: `${API_BASE_URL}/api/staff`,
  
  // Services
  SERVICES: `${API_BASE_URL}/api/services`,
  
  // Messages
  MESSAGES: `${API_BASE_URL}/api/messages`,
  
  // Inquiries
  INQUIRIES: `${API_BASE_URL}/api/inquiries`,
  
  // Consultations
  CONSULTATIONS: `${API_BASE_URL}/api/consultations`,
  
  // Newsletter
  NEWSLETTER: `${API_BASE_URL}/api/newsletter/subscribe`,
};

export default API_BASE_URL;
