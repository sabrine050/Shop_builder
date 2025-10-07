import React, { useState } from 'react';
import './services.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="services-page">
      <Header />
      <ServiceHero />
      <AllServices selectedService={selectedService} setSelectedService={setSelectedService} />
      <ServiceComparison />
      <Process />
      <Technologies />
      <CTA />
      <Footer />
    </div>
  );
}

function ServiceHero() {
  return (
    <section className="service-hero">
      <div className="container">
        <h1>Professional Development Services</h1>
        <p>From simple websites to complex web applications, we connect you with expert developers who bring your vision to life.</p>
      </div>
    </section>
  );
}

function AllServices({ selectedService, setSelectedService }) {
  const services = [
    {
      id: 1,
      icon: "🛍️",
      title: "E-commerce Stores",
      shortDesc: "Full-featured online stores",
      description: "Launch your online store with a custom e-commerce solution built specifically for your products and customers. We handle everything from product catalogs to secure checkout.",
      features: [
        "Custom shopping cart and checkout flow",
        "Payment gateway integration (Stripe, PayPal, etc.)",
        "Product catalog with categories and filters",
        "Inventory management system",
        "Order tracking and management",
        "Customer accounts and wishlists",
        "Mobile-optimized responsive design",
        "SEO optimization for products",
        "Email notifications and receipts",
        "Analytics and reporting dashboard"
      ],
      idealFor: ["Retail businesses", "Product brands", "Digital products", "Subscription services"],
      timeline: "4-8 weeks",
      startingPrice: "$6,500"
    },
    {
      id: 2,
      icon: "💼",
      title: "Business Websites",
      shortDesc: "Professional corporate presence",
      description: "Establish your professional online presence with a custom business website that showcases your brand, services, and converts visitors into customers.",
      features: [
        "Custom design matching your brand",
        "Multiple page layouts (About, Services, Contact, etc.)",
        "Contact forms with CRM integration",
        "Blog/News section with CMS",
        "Team member profiles",
        "Portfolio/Case studies showcase",
        "SEO optimization",
        "Google Analytics integration",
        "Social media integration",
        "Fast loading and performance optimized"
      ],
      idealFor: ["Professional services", "Consulting firms", "Agencies", "Corporate businesses"],
      timeline: "2-4 weeks",
      startingPrice: "$2,500"
    },
    {
      id: 3,
      icon: "📱",
      title: "Web Applications",
      shortDesc: "Custom software solutions",
      description: "Build custom web applications tailored to your specific business processes. From internal tools to customer-facing platforms, we develop scalable solutions.",
      features: [
        "User authentication and authorization",
        "Role-based access control",
        "Custom database design and architecture",
        "RESTful API development",
        "Real-time features (chat, notifications)",
        "File upload and management",
        "Data visualization and reporting",
        "Third-party API integrations",
        "Admin panel for management",
        "Cloud hosting and deployment"
      ],
      idealFor: ["SaaS businesses", "Internal tools", "Custom platforms", "B2B solutions"],
      timeline: "8-16 weeks",
      startingPrice: "$15,000"
    },
    {
      id: 4,
      icon: "🎨",
      title: "Landing Pages",
      shortDesc: "High-converting campaign pages",
      description: "Create high-converting landing pages optimized for your marketing campaigns. Perfect for product launches, lead generation, and promotional campaigns.",
      features: [
        "Conversion-focused design",
        "A/B testing ready structure",
        "Lead capture forms",
        "Email marketing integration",
        "Analytics and tracking setup",
        "Fast loading optimization",
        "Mobile-first responsive design",
        "Social proof elements",
        "Call-to-action optimization",
        "Thank you page and automation"
      ],
      idealFor: ["Marketing campaigns", "Product launches", "Lead generation", "Event promotion"],
      timeline: "1-2 weeks",
      startingPrice: "$1,500"
    },
    {
      id: 5,
      icon: "📊",
      title: "Dashboards & Portals",
      shortDesc: "Data visualization platforms",
      description: "Build custom dashboards and client portals for data visualization, reporting, and business intelligence. Perfect for managing complex data and user interactions.",
      features: [
        "Interactive data visualizations",
        "Custom charts and graphs",
        "Real-time data updates",
        "User role management",
        "Multi-user access levels",
        "Export and reporting tools",
        "API integrations",
        "Secure data handling",
        "Responsive dashboard layouts",
        "Custom widgets and modules"
      ],
      idealFor: ["Data-driven businesses", "Client portals", "Internal dashboards", "Analytics platforms"],
      timeline: "6-12 weeks",
      startingPrice: "$10,000"
    },
    {
      id: 6,
      icon: "🔄",
      title: "Redesigns & Migrations",
      shortDesc: "Modernize your existing site",
      description: "Refresh your existing website with modern design and improved functionality, or migrate to a new platform seamlessly without losing data or SEO rankings.",
      features: [
        "Complete design refresh",
        "Platform migration (WordPress, Shopify, etc.)",
        "Content migration and preservation",
        "SEO preservation and 301 redirects",
        "Performance optimization",
        "Mobile responsiveness upgrade",
        "Modern UX/UI improvements",
        "Security enhancements",
        "Zero downtime deployment",
        "Post-launch support and training"
      ],
      idealFor: ["Outdated websites", "Platform changes", "Rebranding projects", "Performance issues"],
      timeline: "3-6 weeks",
      startingPrice: "$4,000"
    }
  ];

  return (
    <section className="all-services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`service-card-detailed ${selectedService === service.id ? 'expanded' : ''}`}
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
            >
              <div className="service-card-header">
                <div className="service-icon-large">{service.icon}</div>
                <div>
                  <h3>{service.title}</h3>
                  <p className="short-desc">{service.shortDesc}</p>
                </div>
              </div>

              {selectedService === service.id && (
                <div className="service-details">
                  <p className="service-description">{service.description}</p>
                  
                  <div className="service-info">
                    <div className="info-item">
                      <strong>Timeline:</strong> {service.timeline}
                    </div>
                    <div className="info-item">
                      <strong>Starting at:</strong> {service.startingPrice}
                    </div>
                  </div>

                  <div className="features-section">
                    <h4>What's Included</h4>
                    <ul className="detailed-features">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="ideal-for-section">
                    <h4>Ideal For</h4>
                    <div className="ideal-tags">
                      {service.idealFor.map((item, idx) => (
                        <span key={idx} className="tag">{item}</span>
                      ))}
                    </div>
                  </div>

                  <button className="cta-button">Request This Service</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceComparison() {
  return (
    <section className="service-comparison">
      <div className="container">
        <h2 className="section-title">Not Sure Which Service?</h2>
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>Need to sell products?</h3>
            <p>Choose E-commerce Stores</p>
            <ul>
              <li>Product catalogs</li>
              <li>Payment processing</li>
              <li>Inventory management</li>
            </ul>
          </div>
          <div className="comparison-card">
            <h3>Need online presence?</h3>
            <p>Choose Business Website</p>
            <ul>
              <li>Information pages</li>
              <li>Contact forms</li>
              <li>Brand showcase</li>
            </ul>
          </div>
          <div className="comparison-card">
            <h3>Need custom features?</h3>
            <p>Choose Web Application</p>
            <ul>
              <li>User accounts</li>
              <li>Custom workflows</li>
              <li>Database management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="service-process">
      <div className="container">
        <h2 className="section-title">Our Development Process</h2>
        <div className="process-timeline">
          <div className="process-step">
            <div className="step-num">1</div>
            <h3>Discovery</h3>
            <p>We learn about your needs, goals, and vision for the project</p>
          </div>
          <div className="process-step">
            <div className="step-num">2</div>
            <h3>Planning</h3>
            <p>Detailed project planning, wireframes, and technical specifications</p>
          </div>
          <div className="process-step">
            <div className="step-num">3</div>
            <h3>Design</h3>
            <p>Custom design mockups aligned with your brand identity</p>
          </div>
          <div className="process-step">
            <div className="step-num">4</div>
            <h3>Development</h3>
            <p>Building your solution with clean, scalable code</p>
          </div>
          <div className="process-step">
            <div className="step-num">5</div>
            <h3>Testing</h3>
            <p>Rigorous quality assurance and bug fixing</p>
          </div>
          <div className="process-step">
            <div className="step-num">6</div>
            <h3>Launch</h3>
            <p>Deployment and post-launch support</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Technologies() {
  const techStack = {
    frontend: ["React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Python", "PHP", "Ruby on Rails", "Laravel"],
    database: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    platforms: ["Shopify", "WordPress", "WooCommerce", "Webflow"],
    tools: ["Git", "Docker", "AWS", "Vercel", "Netlify"]
  };

  return (
    <section className="technologies">
      <div className="container">
        <h2 className="section-title">Technologies We Use</h2>
        <div className="tech-categories">
          {Object.entries(techStack).map(([category, techs]) => (
            <div key={category} className="tech-category">
              <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              <div className="tech-tags">
                {techs.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="services-cta">
      <div className="container">
        <h2>Ready to Start Your Project?</h2>
        <p>Tell us about your needs and we'll match you with the perfect developer</p>
        <button className="cta-button">Get Started Now</button>
      </div>
    </section>
  );
}
