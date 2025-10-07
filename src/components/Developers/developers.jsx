import React, { useState } from 'react';
import './developers.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';


export default function DevelopersPage() {
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const [filters, setFilters] = useState({
    specialty: 'all',
    experience: 'all',
    availability: 'all'
  });

  return (
    <div className="developers-page">
      <Header />
      <DevelopersHero />
      <FilterSection filters={filters} setFilters={setFilters} />
      <DeveloperGrid 
        filters={filters} 
        selectedDeveloper={selectedDeveloper}
        setSelectedDeveloper={setSelectedDeveloper}
      />
      <WhyOurDevelopers />
      <BecomeADeveloper />
      <CTASection />
      <Footer />
    </div>
  );
}

function DevelopersHero() {
  return (
    <section className="dev-hero">
      <div className="container">
        <h1>Meet Our Expert Developers</h1>
        <p>Hand-picked professionals with proven track records. Each developer is vetted, reviewed, and ready to bring your vision to life.</p>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Expert Developers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4.9★</span>
            <span className="stat-label">Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FilterSection({ filters, setFilters }) {
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <section className="filter-section">
      <div className="container">
        <h3>Filter Developers</h3>
        <div className="filters">
          <div className="filter-group">
            <label>Specialty</label>
            <select 
              value={filters.specialty}
              onChange={(e) => handleFilterChange('specialty', e.target.value)}
            >
              <option value="all">All Specialties</option>
              <option value="ecommerce">E-commerce</option>
              <option value="frontend">Frontend</option>
              <option value="fullstack">Full-Stack</option>
              <option value="backend">Backend</option>
              <option value="design">UI/UX Design</option>
              <option value="mobile">Mobile</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Experience</label>
            <select 
              value={filters.experience}
              onChange={(e) => handleFilterChange('experience', e.target.value)}
            >
              <option value="all">All Levels</option>
              <option value="5+">5+ Years</option>
              <option value="10+">10+ Years</option>
              <option value="15+">15+ Years</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Availability</label>
            <select 
              value={filters.availability}
              onChange={(e) => handleFilterChange('availability', e.target.value)}
            >
              <option value="all">All</option>
              <option value="available">Available Now</option>
              <option value="soon">Available Soon</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

function DeveloperGrid({ filters, selectedDeveloper, setSelectedDeveloper }) {
  const developers = [
    {
      id: 1,
      name: "Sarah Kim",
      avatar: "👩‍💻",
      title: "E-commerce Specialist",
      specialty: "ecommerce",
      experience: "10 years",
      experienceYears: 10,
      rating: 5.0,
      projects: 62,
      hourlyRate: "$85/hr",
      availability: "available",
      location: "San Francisco, CA",
      bio: "E-commerce expert specializing in Shopify, WooCommerce, and custom online stores. I've helped over 60 businesses launch successful online shops.",
      skills: ["Shopify", "WooCommerce", "Payment Integration", "Inventory Systems", "React", "Node.js"],
      languages: ["English", "Korean"],
      portfolio: [
        "Fashion boutique with 500+ products",
        "Electronics store with custom configurator",
        "Subscription box service platform"
      ],
      reviews: [
        { author: "Jessica M.", text: "Sarah built our entire e-commerce platform. Professional, fast, and understood exactly what we needed.", rating: 5 },
        { author: "Tom R.", text: "Excellent communication and technical skills. Our store has been running flawlessly for 6 months.", rating: 5 }
      ]
    },
    {
      id: 2,
      name: "Alex Martinez",
      avatar: "👨‍💻",
      title: "Full-Stack Developer",
      specialty: "fullstack",
      experience: "8 years",
      experienceYears: 8,
      rating: 5.0,
      projects: 47,
      hourlyRate: "$80/hr",
      availability: "available",
      location: "Austin, TX",
      bio: "Full-stack developer passionate about building scalable web applications. Specializing in React, Node.js, and modern JavaScript frameworks.",
      skills: ["React", "Node.js", "PostgreSQL", "MongoDB", "AWS", "TypeScript"],
      languages: ["English", "Spanish"],
      portfolio: [
        "SaaS platform for project management",
        "Real-time collaboration tool",
        "Custom CRM system"
      ],
      reviews: [
        { author: "Marcus T.", text: "Alex delivered beyond expectations. Clean code, great documentation, and excellent problem-solving skills.", rating: 5 },
        { author: "Lisa K.", text: "Very professional and responsive. Would definitely work with Alex again!", rating: 5 }
      ]
    },
    {
      id: 3,
      name: "David Chen",
      avatar: "👨‍💻",
      title: "UI/UX Designer & Developer",
      specialty: "design",
      experience: "6 years",
      experienceYears: 6,
      rating: 4.9,
      projects: 38,
      hourlyRate: "$75/hr",
      availability: "soon",
      location: "New York, NY",
      bio: "Designer and developer with a keen eye for detail. I create beautiful, user-friendly interfaces that convert visitors into customers.",
      skills: ["Figma", "React", "CSS/SASS", "Animation", "Responsive Design", "Prototyping"],
      languages: ["English", "Mandarin"],
      portfolio: [
        "Landing page with 40% conversion increase",
        "Mobile app redesign",
        "Corporate website rebrand"
      ],
      reviews: [
        { author: "Rachel K.", text: "David's design skills are exceptional. Our landing page looks amazing and performs even better.", rating: 5 },
        { author: "John S.", text: "Great designer who also understands development. Best of both worlds!", rating: 5 }
      ]
    },
    {
      id: 4,
      name: "Emma Johnson",
      avatar: "👩‍💻",
      title: "React & Node.js Expert",
      specialty: "frontend",
      experience: "9 years",
      experienceYears: 9,
      rating: 5.0,
      projects: 54,
      hourlyRate: "$90/hr",
      availability: "available",
      location: "Seattle, WA",
      bio: "React specialist with extensive experience building complex web applications. I focus on performance, accessibility, and clean code.",
      skills: ["React", "Next.js", "Node.js", "GraphQL", "Jest", "Webpack"],
      languages: ["English", "French"],
      portfolio: [
        "Dashboard for data analytics platform",
        "Social media management tool",
        "Video streaming web app"
      ],
      reviews: [
        { author: "Mike D.", text: "Emma is a React wizard. Our app is fast, beautiful, and maintainable. Highly recommend!", rating: 5 },
        { author: "Sarah P.", text: "Professional, knowledgeable, and great to work with. Exceeded all expectations.", rating: 5 }
      ]
    },
    {
      id: 5,
      name: "James Wilson",
      avatar: "👨‍💻",
      title: "Backend Architect",
      specialty: "backend",
      experience: "12 years",
      experienceYears: 12,
      rating: 5.0,
      projects: 71,
      hourlyRate: "$95/hr",
      availability: "available",
      location: "Boston, MA",
      bio: "Backend specialist focused on building robust, scalable APIs and database architectures. Security and performance are my top priorities.",
      skills: ["Node.js", "Python", "PostgreSQL", "Redis", "Docker", "Microservices"],
      languages: ["English"],
      portfolio: [
        "API for mobile app with 100k+ users",
        "Payment processing system",
        "Real-time messaging backend"
      ],
      reviews: [
        { author: "Anna L.", text: "James built a rock-solid backend for our app. Zero downtime in 8 months of operation.", rating: 5 },
        { author: "Chris M.", text: "Excellent technical skills and great communicator. Highly professional.", rating: 5 }
      ]
    },
    {
      id: 6,
      name: "Maria Garcia",
      avatar: "👩‍💻",
      title: "WordPress & PHP Expert",
      specialty: "fullstack",
      experience: "7 years",
      experienceYears: 7,
      rating: 4.9,
      projects: 45,
      hourlyRate: "$70/hr",
      availability: "available",
      location: "Miami, FL",
      bio: "WordPress specialist who builds custom themes and plugins. I help businesses create powerful, easy-to-manage websites.",
      skills: ["WordPress", "PHP", "MySQL", "JavaScript", "WooCommerce", "Elementor"],
      languages: ["English", "Spanish", "Portuguese"],
      portfolio: [
        "Custom WordPress theme for magazine",
        "Membership site with payment integration",
        "Multi-site WordPress network"
      ],
      reviews: [
        { author: "Robert F.", text: "Maria transformed our outdated site into a modern, fast WordPress site. Very happy!", rating: 5 },
        { author: "Diana S.", text: "Great work on our custom plugin. Exactly what we needed.", rating: 5 }
      ]
    },
    {
      id: 7,
      name: "Kevin Park",
      avatar: "👨‍💻",
      title: "Mobile & Web Developer",
      specialty: "mobile",
      experience: "6 years",
      experienceYears: 6,
      rating: 4.8,
      projects: 33,
      hourlyRate: "$80/hr",
      availability: "soon",
      location: "Los Angeles, CA",
      bio: "Cross-platform developer specializing in React Native and responsive web apps. I build apps that work seamlessly across all devices.",
      skills: ["React Native", "React", "TypeScript", "Firebase", "iOS", "Android"],
      languages: ["English", "Korean"],
      portfolio: [
        "Fitness tracking mobile app",
        "Food delivery platform",
        "Event management app"
      ],
      reviews: [
        { author: "Amy T.", text: "Kevin built our mobile app and it works perfectly on both iOS and Android. Great developer!", rating: 5 },
        { author: "Paul W.", text: "Responsive and skilled. Would hire again.", rating: 5 }
      ]
    },
    {
      id: 8,
      name: "Linda Brown",
      avatar: "👩‍💻",
      title: "Frontend Engineer",
      specialty: "frontend",
      experience: "5 years",
      experienceYears: 5,
      rating: 4.9,
      projects: 29,
      hourlyRate: "$75/hr",
      availability: "available",
      location: "Denver, CO",
      bio: "Frontend developer who loves creating pixel-perfect, interactive user interfaces. Specializing in modern JavaScript frameworks and CSS.",
      skills: ["Vue.js", "React", "Tailwind CSS", "JavaScript", "Sass", "Webpack"],
      languages: ["English"],
      portfolio: [
        "Interactive product showcase",
        "Admin dashboard with charts",
        "Marketing website with animations"
      ],
      reviews: [
        { author: "Steve K.", text: "Linda's attention to detail is amazing. Our website looks and works beautifully.", rating: 5 },
        { author: "Karen J.", text: "Professional and talented. Delivered on time and on budget.", rating: 5 }
      ]
    }
  ];

  // Filter developers
  const filteredDevelopers = developers.filter(dev => {
    if (filters.specialty !== 'all' && dev.specialty !== filters.specialty) return false;
    if (filters.experience === '5+' && dev.experienceYears < 5) return false;
    if (filters.experience === '10+' && dev.experienceYears < 10) return false;
    if (filters.experience === '15+' && dev.experienceYears < 15) return false;
    if (filters.availability !== 'all' && dev.availability !== filters.availability) return false;
    return true;
  });

  return (
    <section className="developer-grid-section">
      <div className="container">
        <p className="results-count">{filteredDevelopers.length} developers found</p>
        <div className="developers-grid">
          {filteredDevelopers.map((dev) => (
            <div key={dev.id} className="developer-card">
              <div className="dev-card-header">
                <div className="dev-avatar-large">{dev.avatar}</div>
                <div className="dev-basic-info">
                  <h3>{dev.name}</h3>
                  <p className="dev-title">{dev.title}</p>
                  <div className="dev-meta">
                    <span className="dev-rating">★ {dev.rating}</span>
                    <span className="dev-projects">{dev.projects} projects</span>
                  </div>
                </div>
              </div>
              
              <div className="dev-card-body">
                <div className="dev-info-row">
                  <span className="info-label">Experience:</span>
                  <span className="info-value">{dev.experience}</span>
                </div>
                <div className="dev-info-row">
                  <span className="info-label">Location:</span>
                  <span className="info-value">{dev.location}</span>
                </div>
                <div className="dev-info-row">
                  <span className="info-label">Rate:</span>
                  <span className="info-value">{dev.hourlyRate}</span>
                </div>
                <div className="dev-info-row">
                  <span className="info-label">Availability:</span>
                  <span className={`availability-badge ${dev.availability}`}>
                    {dev.availability === 'available' ? 'Available Now' : 'Available Soon'}
                  </span>
                </div>

                <p className="dev-bio">{dev.bio}</p>

                <div className="dev-skills">
                  {dev.skills.slice(0, 4).map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                  {dev.skills.length > 4 && (
                    <span className="skill-tag">+{dev.skills.length - 4} more</span>
                  )}
                </div>
              </div>

              <div className="dev-card-footer">
                <button 
                  className="view-profile-btn"
                  onClick={() => setSelectedDeveloper(dev.id)}
                >
                  View Full Profile
                </button>
                <button className="contact-btn">Contact Developer</button>
              </div>
            </div>
          ))}
        </div>

        {selectedDeveloper && (
          <DeveloperModal 
            developer={developers.find(d => d.id === selectedDeveloper)}
            onClose={() => setSelectedDeveloper(null)}
          />
        )}
      </div>
    </section>
  );
}

function DeveloperModal({ developer, onClose }) {
  if (!developer) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <div className="dev-avatar-large">{developer.avatar}</div>
          <div>
            <h2>{developer.name}</h2>
            <p className="dev-title">{developer.title}</p>
            <div className="dev-meta">
              <span className="dev-rating">★ {developer.rating}</span>
              <span className="dev-projects">{developer.projects} projects completed</span>
            </div>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h3>About</h3>
            <p>{developer.bio}</p>
          </div>

          <div className="modal-section">
            <h3>Quick Info</h3>
            <div className="info-grid">
              <div><strong>Experience:</strong> {developer.experience}</div>
              <div><strong>Location:</strong> {developer.location}</div>
              <div><strong>Rate:</strong> {developer.hourlyRate}</div>
              <div><strong>Languages:</strong> {developer.languages.join(', ')}</div>
            </div>
          </div>

          <div className="modal-section">
            <h3>Skills</h3>
            <div className="dev-skills">
              {developer.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="modal-section">
            <h3>Notable Projects</h3>
            <ul className="portfolio-list">
              {developer.portfolio.map((project, idx) => (
                <li key={idx}>{project}</li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <h3>Client Reviews</h3>
            {developer.reviews.map((review, idx) => (
              <div key={idx} className="review-item">
                <div className="review-header">
                  <span className="review-author">{review.author}</span>
                  <span className="review-rating">★ {review.rating}</span>
                </div>
                <p className="review-text">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <button className="contact-btn-large">Contact {developer.name}</button>
        </div>
      </div>
    </div>
  );
}

function WhyOurDevelopers() {
  return (
    <section className="why-developers">
      <div className="container">
        <h2 className="section-title">Why Our Developers Stand Out</h2>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">✓</div>
            <h3>Thoroughly Vetted</h3>
            <p>Every developer goes through a rigorous screening process including portfolio review, technical assessment, and client reference checks.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">⭐</div>
            <h3>Proven Track Record</h3>
            <p>All developers have completed multiple successful projects with verified client reviews and ratings.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">💬</div>
            <h3>Excellent Communication</h3>
            <p>We prioritize developers who are responsive, clear communicators and keep clients updated throughout the project.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">🎓</div>
            <h3>Continuous Learning</h3>
            <p>Our developers stay current with the latest technologies and best practices in web development.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BecomeADeveloper() {
  return (
    <section className="become-developer">
      <div className="container">
        <div className="become-content">
          <div className="become-text">
            <h2>Are You a Developer?</h2>
            <p>Join our network of expert developers and work on exciting projects with great clients. We handle the client matching, you focus on building amazing websites.</p>
            <ul className="become-benefits">
              <li>Steady stream of quality projects</li>
              <li>Fair compensation</li>
              <li>Flexible schedule</li>
              <li>Supportive community</li>
            </ul>
          </div>
          <div className="become-cta">
            <button className="apply-btn">Apply to Join</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="dev-cta">
      <div className="container">
        <h2>Find Your Perfect Developer Match</h2>
        <p>Tell us about your project and we'll connect you with the ideal developer</p>
        <button className="cta-button">Get Matched Now</button>
      </div>
    </section>
  );
}

