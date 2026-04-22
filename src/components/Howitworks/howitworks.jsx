import React, { useState } from 'react';
import './howitworks.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';

export default function HowItWorksPage({ setCurrentPage }) {
  const [activeStep, setActiveStep] = useState(1);
  const [activeFAQ, setActiveFAQ] = useState(null);

  return (
    <div className="how-it-works-page">
      <Header setCurrentPage={setCurrentPage} />
      <HeroSection setCurrentPage={setCurrentPage} />
      <DetailedProcess 
        activeStep={activeStep} 
        setActiveStep={setActiveStep}
        setCurrentPage={setCurrentPage}
      />
      <Timeline />
      <ClientJourney />
      <DeveloperMatching setCurrentPage={setCurrentPage} />
      <Communication />
      <QualityAssurance />
      <FAQ activeFAQ={activeFAQ} setActiveFAQ={setActiveFAQ} />
      <CTASection setCurrentPage={setCurrentPage} />
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

function HeroSection({ setCurrentPage }) {
  return (
    <section className="hiw-hero">
      <div className="container">
        <h1>How ShopBuilder Works</h1>
        <p>From your first idea to your launched website, we guide you through every step of the development process. Here's exactly what to expect.</p>
        
        {/* BOUTON HERO */}
        <div style={{textAlign: 'center', marginTop: '30px'}}>
          <button 
            className="cta-button"
            onClick={() => setCurrentPage('get-matched')}
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}

function DetailedProcess({ activeStep, setActiveStep, setCurrentPage }) {
  const steps = [
    {
      number: 1,
      title: "Submit Your Project",
      subtitle: "Share Your Vision",
      description: "Tell us about your website needs through our simple project submission form. The more details you provide, the better we can match you with the right developer.",
      details: [
        "Fill out our comprehensive project form",
        "Describe your business and goals",
        "Specify your budget and timeline",
        "Upload any reference materials or brand assets",
        "Select your preferred features and functionality"
      ],
      duration: "10-15 minutes",
      icon: "📝"
    },
    {
      number: 2,
      title: "Get Matched",
      subtitle: "We Find Your Perfect Developer",
      description: "Our team reviews your requirements and connects you with vetted developers who specialize in your project type and have the right expertise.",
      details: [
        "Our team reviews your project within 24 hours",
        "We analyze your requirements and budget",
        "Match you with 2-3 suitable developers",
        "Review developer portfolios and expertise",
        "Schedule intro calls with your top choices"
      ],
      duration: "24-48 hours",
      icon: "🎯"
    },
    {
      number: 3,
      title: "Kickoff Meeting",
      subtitle: "Plan Your Project",
      description: "Meet your developer in a video call to discuss your project in detail, align on expectations, and create a detailed project roadmap.",
      details: [
        "Video call with your matched developer",
        "Review project scope and requirements",
        "Discuss design preferences and examples",
        "Define milestones and deliverables",
        "Set communication schedule and tools"
      ],
      duration: "1-2 hours",
      icon: "🚀"
    },
    {
      number: 4,
      title: "Design Phase",
      subtitle: "Visualize Your Website",
      description: "Your developer creates wireframes and design mockups for your approval before any code is written.",
      details: [
        "Receive initial wireframes and layouts",
        "Review design mockups aligned with your brand",
        "Provide feedback and request revisions",
        "Approve final designs before development",
        "Get style guide and design specifications"
      ],
      duration: "1-2 weeks",
      icon: "🎨"
    },
    {
      number: 5,
      title: "Development",
      subtitle: "Building Your Website",
      description: "Your developer builds your website using clean, professional code. You'll receive regular updates and can review progress at any time.",
      details: [
        "Developer builds your site with regular updates",
        "Access staging environment to preview progress",
        "Weekly check-ins and progress reports",
        "Request changes and refinements",
        "Backend and frontend development"
      ],
      duration: "2-8 weeks",
      icon: "⚙️"
    },
    {
      number: 6,
      title: "Review & Testing",
      subtitle: "Quality Assurance",
      description: "Thorough testing across devices and browsers to ensure everything works perfectly before launch.",
      details: [
        "Comprehensive functionality testing",
        "Cross-browser compatibility checks",
        "Mobile responsiveness testing",
        "Performance optimization",
        "Security review and bug fixes"
      ],
      duration: "3-5 days",
      icon: "✓"
    },
    {
      number: 7,
      title: "Launch",
      subtitle: "Go Live",
      description: "Your website goes live! We handle the deployment and ensure a smooth launch with zero downtime.",
      details: [
        "Final pre-launch checklist review",
        "Domain and hosting setup",
        "Deploy to production environment",
        "SSL certificate installation",
        "Analytics and tracking setup"
      ],
      duration: "1-2 days",
      icon: "🌐"
    },
    {
      number: 8,
      title: "Support",
      subtitle: "Ongoing Assistance",
      description: "30-90 days of post-launch support included with all projects. We're here to help with any questions or issues.",
      details: [
        "Bug fixes and technical support",
        "Training on how to use your new site",
        "Content update assistance",
        "Performance monitoring",
        "Optional maintenance packages available"
      ],
      duration: "30-90 days",
      icon: "💬"
    }
  ];

  return (
    <section className="detailed-process">
      <div className="container">
        <h2 className="section-title">The Complete Journey</h2>
        <div className="process-container">
          <div className="steps-sidebar">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`step-item ${activeStep === step.number ? 'active' : ''}`}
                onClick={() => setActiveStep(step.number)}
              >
                <div className="step-icon">{step.icon}</div>
                <div className="step-info">
                  <div className="step-num">Step {step.number}</div>
                  <div className="step-title">{step.title}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="step-content">
            {steps.filter(s => s.number === activeStep).map((step) => (
              <div key={step.number} className="step-detail">
                <div className="step-header">
                  <div className="step-icon-large">{step.icon}</div>
                  <div>
                    <h3>{step.title}</h3>
                    <p className="step-subtitle">{step.subtitle}</p>
                  </div>
                </div>
                <p className="step-description">{step.description}</p>
                <div className="duration-badge">Duration: {step.duration}</div>
                <h4>What Happens:</h4>
                <ul className="step-details-list">
                  {step.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
                
                {/* BOUTON si c'est le step 1 */}
                {step.number === 1 && (
                  <div style={{marginTop: '30px'}}>
                    <button 
                      className="cta-button"
                      onClick={() => setCurrentPage('get-matched')}
                    >
                      Submit Your Project Now
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="timeline-section">
      <div className="container">
        <h2 className="section-title">Typical Project Timeline</h2>
        <div className="timeline-examples">
          <div className="timeline-card">
            <h3>Landing Page</h3>
            <div className="timeline-bar">
              <div className="timeline-fill" style={{width: '20%'}}></div>
            </div>
            <p>1-2 weeks total</p>
          </div>
          <div className="timeline-card">
            <h3>Business Website</h3>
            <div className="timeline-bar">
              <div className="timeline-fill" style={{width: '40%'}}></div>
            </div>
            <p>2-4 weeks total</p>
          </div>
          <div className="timeline-card">
            <h3>E-commerce Store</h3>
            <div className="timeline-bar">
              <div className="timeline-fill" style={{width: '60%'}}></div>
            </div>
            <p>4-8 weeks total</p>
          </div>
          <div className="timeline-card">
            <h3>Web Application</h3>
            <div className="timeline-bar">
              <div className="timeline-fill" style={{width: '80%'}}></div>
            </div>
            <p>8-16 weeks total</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientJourney() {
  return (
    <section className="client-journey">
      <div className="container">
        <h2 className="section-title">What You Can Expect</h2>
        <div className="journey-grid">
          <div className="journey-card">
            <h3>💯 Transparency</h3>
            <p>Clear pricing, no hidden fees. You know exactly what you're paying for from day one.</p>
          </div>
          <div className="journey-card">
            <h3>🎯 Direct Communication</h3>
            <p>Work directly with your developer. No middlemen, no delays in getting responses.</p>
          </div>
          <div className="journey-card">
            <h3>📊 Progress Tracking</h3>
            <p>Access to staging environment and regular updates so you always know where things stand.</p>
          </div>
          <div className="journey-card">
            <h3>🔄 Unlimited Revisions</h3>
            <p>During development, request changes and refinements until you're 100% satisfied.</p>
          </div>
          <div className="journey-card">
            <h3>⚡ Fast Response Times</h3>
            <p>Your developer responds within 24 hours. No waiting weeks for simple questions.</p>
          </div>
          <div className="journey-card">
            <h3>🛡️ Quality Guarantee</h3>
            <p>All work is tested, reviewed, and meets professional development standards.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DeveloperMatching({ setCurrentPage }) {
  return (
    <section className="developer-matching">
      <div className="container">
        <h2 className="section-title">How We Match You</h2>
        <div className="matching-process">
          <div className="matching-card">
            <div className="matching-number">1</div>
            <h3>Analyze Your Project</h3>
            <p>We review your requirements, budget, timeline, and technical needs to understand exactly what you're looking for.</p>
          </div>
          <div className="matching-arrow">→</div>
          <div className="matching-card">
            <div className="matching-number">2</div>
            <h3>Review Developer Expertise</h3>
            <p>We check our network of developers for those with relevant experience, portfolio work, and availability.</p>
          </div>
          <div className="matching-arrow">→</div>
          <div className="matching-card">
            <div className="matching-number">3</div>
            <h3>Perfect Match</h3>
            <p>You get introduced to 2-3 developers who are the best fit for your specific project type and requirements.</p>
          </div>
        </div>
        <div className="matching-criteria">
          <h3>We Match Based On:</h3>
          <div className="criteria-grid">
            <div className="criteria-item">✓ Technical expertise</div>
            <div className="criteria-item">✓ Industry experience</div>
            <div className="criteria-item">✓ Portfolio quality</div>
            <div className="criteria-item">✓ Client ratings</div>
            <div className="criteria-item">✓ Communication style</div>
            <div className="criteria-item">✓ Availability</div>
          </div>
        </div>
        
        {/* BOUTON */}
        <div style={{textAlign: 'center', marginTop: '40px'}}>
          <button 
            className="cta-button"
            onClick={() => setCurrentPage('developers')}
          >
            Meet Our Developers
          </button>
        </div>
      </div>
    </section>
  );
}

function Communication() {
  return (
    <section className="communication">
      <div className="container">
        <h2 className="section-title">Communication & Collaboration</h2>
        <div className="comm-grid">
          <div className="comm-card">
            <h3>Project Dashboard</h3>
            <p>Access your personalized dashboard to view project status, milestones, files, and messages all in one place.</p>
          </div>
          <div className="comm-card">
            <h3>Video Calls</h3>
            <p>Regular video check-ins with your developer for kickoff, reviews, and important decisions.</p>
          </div>
          <div className="comm-card">
            <h3>Messaging</h3>
            <p>Direct messaging with your developer for quick questions and daily communication.</p>
          </div>
          <div className="comm-card">
            <h3>File Sharing</h3>
            <p>Easily share documents, images, and assets through our secure platform.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function QualityAssurance() {
  return (
    <section className="quality-assurance">
      <div className="container">
        <h2 className="section-title">Our Quality Promise</h2>
        <div className="qa-content">
          <div className="qa-item">
            <div className="qa-icon">🔍</div>
            <h3>Vetted Developers Only</h3>
            <p>All developers are thoroughly screened, with verified portfolios and client reviews.</p>
          </div>
          <div className="qa-item">
            <div className="qa-icon">📝</div>
            <h3>Code Standards</h3>
            <p>Clean, documented, professional code that follows industry best practices.</p>
          </div>
          <div className="qa-item">
            <div className="qa-icon">✅</div>
            <h3>Testing Protocol</h3>
            <p>Every project undergoes thorough testing before launch to ensure quality.</p>
          </div>
          <div className="qa-item">
            <div className="qa-icon">🛡️</div>
            <h3>Security First</h3>
            <p>All projects include security best practices and SSL certificates.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ({ activeFAQ, setActiveFAQ }) {
  const faqs = [
    {
      question: "How long does the matching process take?",
      answer: "We typically match you with developers within 24-48 hours of submitting your project. You'll receive profiles of 2-3 suitable developers along with their portfolios and availability."
    },
    {
      question: "Can I choose which developer I work with?",
      answer: "Absolutely! We provide you with 2-3 developer options and you choose who you'd like to work with based on their portfolio, expertise, and communication style."
    },
    {
      question: "What if I'm not happy with the developer?",
      answer: "If there are any issues, we'll work to resolve them or match you with a different developer at no additional cost. Your satisfaction is our priority."
    },
    {
      question: "How do payments work?",
      answer: "Projects are typically split into milestones with payments released as each milestone is completed. This protects both you and the developer."
    },
    {
      question: "What happens after my website launches?",
      answer: "All projects include 30-90 days of post-launch support for bug fixes and questions. We also offer ongoing maintenance packages if needed."
    },
    {
      question: "Can I make changes during development?",
      answer: "Yes! Unlimited revisions are included during the development phase. We want you to be 100% satisfied with the final product."
    },
    {
      question: "Do I own the code and design?",
      answer: "Yes, you own all rights to the code, design, and content created for your project once final payment is made."
    },
    {
      question: "What if my project takes longer than expected?",
      answer: "Timelines are estimates. If delays occur, your developer will communicate with you. There are no additional costs for reasonable timeline extensions."
    }
  ];

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeFAQ === index ? 'active' : ''}`}
              onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-toggle">{activeFAQ === index ? '−' : '+'}</span>
              </div>
              {activeFAQ === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ setCurrentPage }) {
  return (
    <section className="hiw-cta">
      <div className="container">
        <h2>Ready to Get Started?</h2>
        <p>Submit your project today and get matched with an expert developer</p>
        
        {/* BOUTON FINAL */}
        <button 
          className="cta-button"
          onClick={() => setCurrentPage('get-matched')}
        >
          Start Your Project
        </button>
      </div>
    </section>
  );
}