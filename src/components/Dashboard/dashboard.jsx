import React from 'react';
import './dashboard.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';

export default function ShopBuilder({setCurrentPage}) {
  return (
    <div className="shopbuilder">
      <Header setCurrentPage={setCurrentPage} />
      <Hero setCurrentPage={setCurrentPage} />
      <HowItWorks setCurrentPage={setCurrentPage} />
      <Services setCurrentPage={setCurrentPage} />
      <Developers setCurrentPage={setCurrentPage} />
      <Pricing setCurrentPage={setCurrentPage}  />
      <Testimonials setCurrentPage={setCurrentPage} />
      <FinalCTA setCurrentPage={setCurrentPage} />
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

// ============================================
// HERO - Boutons principaux
// ============================================
function Hero({setCurrentPage}) {
  return (
    <section className="hero">
      <div className="container">
        <h1>Get Matched with Expert Developers for Your Website</h1>
        <p>Describe your vision, we connect you with the perfect developer. From e-commerce stores to custom web applications, bring your ideas to life with professional development services.</p>
       
        <div className="button-group">       
          {/* Bouton 1: Va vers la page Get Matched */}
          <button 
            className="cta-button"
            onClick={() => setCurrentPage('get-matched')}
          >
            Start Your Project
          </button>
          
          {/* Bouton 2: Va vers la page Developers */}
          <button 
            className="cta-button cta-secondary"
            onClick={() => setCurrentPage('developers')}
          >
            Browse Developers
          </button>
        </div> 
      </div>
    </section>
  );
}

// ============================================
// HOW IT WORKS
// ============================================
function HowItWorks({setCurrentPage}) {
  const steps = [
    {
      number: 1,
      title: "Submit Your Project",
      description: "Tell us about your website needs, goals, and vision. The more details you provide, the better we can match you."
    },
    {
      number: 2,
      title: "Get Matched",
      description: "Our team reviews your requirements and connects you with vetted developers who specialize in your project type."
    },
    {
      number: 3,
      title: "Collaborate & Build",
      description: "Work directly with your developer to refine your vision and watch your website come to life."
    },
    {
      number: 4,
      title: "Launch & Grow",
      description: "Your website goes live with ongoing support and maintenance options available as you scale."
    }
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.number} className="step-card">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Bouton: Va vers How It Works pour plus de détails */}
        <div style={{textAlign: 'center', marginTop: '40px'}}>
          <button 
            className="cta-button"
            onClick={() => setCurrentPage('how-it-works')}
          >
            Learn More About Our Process
          </button>
        </div>
      </div>
    </section>
  );
}

// ============================================
// SERVICES
// ============================================
function Services({setCurrentPage}) {
  const services = [
    {
      icon: "🛍️",
      title: "E-commerce Stores",
      description: "Full-featured online stores with payment processing, inventory management, and customer accounts.",
      features: ["Custom shopping cart", "Payment gateway integration", "Product catalog management", "Mobile-optimized checkout"]
    },
    {
      icon: "💼",
      title: "Business Websites",
      description: "Professional websites that showcase your brand and convert visitors into customers.",
      features: ["Custom design", "Contact forms & CRM integration", "SEO optimization", "Content management system"]
    },
    {
      icon: "📱",
      title: "Web Applications",
      description: "Custom web apps tailored to your specific business processes and workflows.",
      features: ["User authentication", "Database integration", "API development", "Real-time features"]
    },
    {
      icon: "🎨",
      title: "Landing Pages",
      description: "High-converting landing pages optimized for campaigns and lead generation.",
      features: ["A/B testing ready", "Analytics integration", "Form optimization", "Fast loading times"]
    },
    {
      icon: "📊",
      title: "Dashboards & Portals",
      description: "Custom admin panels and client portals for data visualization and management.",
      features: ["Data visualization", "User role management", "Report generation", "Third-party integrations"]
    },
    {
      icon: "🔄",
      title: "Redesigns & Migrations",
      description: "Modernize your existing website or migrate to a new platform seamlessly.",
      features: ["Platform migration", "Design refresh", "Performance optimization", "Zero downtime deployment"]
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">What We Build</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bouton: Va vers la page Services complète */}
        <div style={{textAlign: 'center', marginTop: '40px'}}>
          <button 
            className="cta-button"
            onClick={() => setCurrentPage('services')}
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}

// ============================================
// DEVELOPERS
// ============================================
function Developers({setCurrentPage}) {
  const developers = [
    { name: "Alex Martinez", avatar: "👨‍💻", specialty: "Full-Stack Developer", projects: 47, rating: "5★", experience: "8yr" },
    { name: "Sarah Kim", avatar: "👩‍💻", specialty: "E-commerce Specialist", projects: 62, rating: "5★", experience: "10yr" },
    { name: "David Chen", avatar: "👨‍💻", specialty: "UI/UX Designer & Developer", projects: 38, rating: "5★", experience: "6yr" },
    { name: "Emma Johnson", avatar: "👩‍💻", specialty: "React & Node.js Expert", projects: 54, rating: "5★", experience: "9yr" }
  ];

  return (
    <section className="developers" id="developers">
      <div className="container">
        <h2 className="section-title">Our Expert Developers</h2>
        <div className="dev-grid">
          {developers.map((dev, index) => (
            <div key={index} className="dev-card">
              <div className="dev-avatar">{dev.avatar}</div>
              <h4>{dev.name}</h4>
              <div className="specialty">{dev.specialty}</div>
              <div className="dev-stats">
                <div className="stat">
                  <div className="stat-value">{dev.projects}</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat">
                  <div className="stat-value">{dev.rating}</div>
                  <div className="stat-label">Rating</div>
                </div>
                <div className="stat">
                  <div className="stat-value">{dev.experience}</div>
                  <div className="stat-label">Experience</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bouton: Va vers la page Developers complète */}
        <div style={{textAlign: 'center', marginTop: '40px'}}>
          <button 
            className="cta-button"
            onClick={() => setCurrentPage('developers')}
          >
            Meet All Developers
          </button>
        </div>
      </div>
    </section>
  );
}

// ============================================
// PRICING
// ============================================
function Pricing({setCurrentPage}) {
  const plans = [
    {
      name: "Basic Website",
      price: "$2,500",
      subtitle: "Perfect for startups",
      features: ["Up to 5 pages", "Responsive design", "Contact form integration", "SEO basics", "2 weeks delivery", "30 days support"],
      featured: false
    },
    {
      name: "E-commerce Store",
      price: "$6,500",
      subtitle: "Most popular",
      features: ["Custom store design", "Payment processing", "Up to 100 products", "Admin dashboard", "Email notifications", "4-6 weeks delivery", "60 days support"],
      featured: true
    },
    {
      name: "Custom Application",
      price: "Custom",
      subtitle: "Enterprise solutions",
      features: ["Fully custom features", "Database architecture", "API integrations", "User authentication", "Scalable infrastructure", "Timeline varies", "90 days support"],
      featured: false
    }
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <h2 className="section-title">Transparent Project Pricing</h2>
        <p className="pricing-intro">Choose a package that fits your needs. All projects include direct communication with your developer, unlimited revisions during development, and 30 days of post-launch support.</p>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
              <div className="plan-name">{plan.name}</div>
              <div className="price">{plan.price}</div>
              <div className="price-subtitle">{plan.subtitle}</div>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              
              {/* Boutons: Vont vers Get Matched */}
              <button 
                className={`cta-button ${!plan.featured ? 'cta-secondary' : ''}`}
                onClick={() => setCurrentPage('get-matched')}
              >
                {plan.price === "Custom" ? "Contact Us" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
        
        {/* Bouton: Va vers la page Pricing complète */}
        <div style={{textAlign: 'center', marginTop: '40px'}}>
          <button 
            className="cta-button cta-secondary"
            onClick={() => setCurrentPage('pricing')}
          >
            View Detailed Pricing
          </button>
        </div>
      </div>
    </section>
  );
}


function Testimonials({setCurrentPage}) {
  const testimonials = [
    {
      stars: 5,
      text: "ShopBuilder matched me with Sarah who understood my vision perfectly. My online boutique launched in 3 weeks and we're already profitable. The process was seamless from start to finish.",
      author: "Jessica Moore",
      role: "Founder, Luna Boutique",
      project: "E-commerce Store"
    },
    {
      stars: 5,
      text: "I had zero technical knowledge and was worried about the process. My developer Alex guided me through everything, explained all the options, and delivered exactly what I needed for my consulting business.",
      author: "Marcus Thompson",
      role: "CEO, Thompson Consulting",
      project: "Business Website"
    },
    {
      stars: 5,
      text: "The quality of work exceeded expectations. David created a beautiful, fast, and conversion-focused landing page for our SaaS product. We saw a 40% increase in signups within the first month.",
      author: "Rachel Kim",
      role: "CMO, TechFlow",
      project: "Landing Page"
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Success Stories</h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">{testimonial.author}</div>
              <div className="testimonial-role">{testimonial.role}</div>
              <div className="testimonial-project">{testimonial.project}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function FinalCTA({setCurrentPage}) {
  return (
    <section className="final-cta">
      <div className="container">
        <h2>Ready to Build Your Website?</h2>
        <p>Get matched with the perfect developer for your project today</p>
        
        {/* Bouton: Va vers Get Matched */}
        <button 
          className="cta-button"
          onClick={() => setCurrentPage('get-matched')}
        >
          Start Your Project Now
        </button>
      </div>
    </section>
  );
}