import React, { useState } from 'react';
import './pricing.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('project'); // project or hourly
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <div className="pricing-page">
      <Header />
      <PricingHero />
      <BillingToggle billingCycle={billingCycle} setBillingCycle={setBillingCycle} />
      <PricingPackages billingCycle={billingCycle} selectedPackage={selectedPackage} setSelectedPackage={setSelectedPackage} />
      <PricingComparison />
      <AddOns />
      <PaymentProcess />
      <MoneyBackGuarantee />
      <PricingFAQ />
      <CTASection />
      <Footer />
    </div>
  );
}



function PricingHero() {
  return (
    <section className="pricing-hero">
      <div className="container">
        <h1>Simple, Transparent Pricing</h1>
        <p>No hidden fees, no surprises. Choose a package that fits your needs or pay by the hour. All projects include direct communication with your developer and post-launch support.</p>
      </div>
    </section>
  );
}

function BillingToggle({ billingCycle, setBillingCycle }) {
  return (
    <section className="billing-toggle-section">
      <div className="container">
        <div className="toggle-container">
          <button 
            className={`toggle-btn ${billingCycle === 'project' ? 'active' : ''}`}
            onClick={() => setBillingCycle('project')}
          >
            Project-Based
          </button>
          <button 
            className={`toggle-btn ${billingCycle === 'hourly' ? 'active' : ''}`}
            onClick={() => setBillingCycle('hourly')}
          >
            Hourly Rate
          </button>
        </div>
      </div>
    </section>
  );
}

function PricingPackages({ billingCycle, selectedPackage, setSelectedPackage }) {
  const projectPackages = [
    {
      id: 1,
      name: "Landing Page",
      price: "$1,500",
      priceNum: 1500,
      timeline: "1-2 weeks",
      description: "Perfect for campaigns and lead generation",
      features: [
        "Single responsive page",
        "Contact form integration",
        "Basic SEO optimization",
        "Mobile-optimized design",
        "Analytics setup",
        "2 rounds of revisions",
        "1 week support"
      ],
      idealFor: ["Product launches", "Marketing campaigns", "Event promotion"],
      popular: false
    },
    {
      id: 2,
      name: "Business Website",
      price: "$2,500",
      priceNum: 2500,
      timeline: "2-4 weeks",
      description: "Professional online presence for your business",
      features: [
        "Up to 5 custom pages",
        "Responsive design",
        "Contact forms & CRM integration",
        "Blog/News section",
        "SEO optimization",
        "Content management system",
        "3 rounds of revisions",
        "30 days support"
      ],
      idealFor: ["Small businesses", "Professional services", "Consultants"],
      popular: false
    },
    {
      id: 3,
      name: "E-commerce Store",
      price: "$6,500",
      priceNum: 6500,
      timeline: "4-8 weeks",
      description: "Full-featured online store ready to sell",
      features: [
        "Custom store design",
        "Payment processing setup",
        "Up to 100 products",
        "Shopping cart & checkout",
        "Admin dashboard",
        "Inventory management",
        "Email notifications",
        "Mobile-optimized",
        "SEO optimization",
        "Unlimited revisions",
        "60 days support"
      ],
      idealFor: ["Retail businesses", "Product brands", "Online shops"],
      popular: true
    },
    {
      id: 4,
      name: "Dashboard/Portal",
      price: "$10,000",
      priceNum: 10000,
      timeline: "6-12 weeks",
      description: "Custom dashboards and client portals",
      features: [
        "Custom data visualization",
        "User authentication",
        "Role-based access",
        "API integrations",
        "Real-time updates",
        "Export functionality",
        "Admin panel",
        "Database design",
        "Unlimited revisions",
        "90 days support"
      ],
      idealFor: ["SaaS platforms", "Internal tools", "Client portals"],
      popular: false
    },
    {
      id: 5,
      name: "Web Application",
      price: "$15,000+",
      priceNum: 15000,
      timeline: "8-16 weeks",
      description: "Custom web applications built to your specs",
      features: [
        "Fully custom features",
        "User authentication",
        "Database architecture",
        "RESTful API development",
        "Real-time functionality",
        "Third-party integrations",
        "Admin dashboard",
        "Scalable infrastructure",
        "Security best practices",
        "Unlimited revisions",
        "90 days support"
      ],
      idealFor: ["SaaS businesses", "Startups", "Enterprise solutions"],
      popular: false
    },
    {
      id: 6,
      name: "Redesign/Migration",
      price: "$4,000",
      priceNum: 4000,
      timeline: "3-6 weeks",
      description: "Refresh or migrate your existing website",
      features: [
        "Complete design refresh",
        "Platform migration",
        "Content migration",
        "SEO preservation",
        "Performance optimization",
        "Mobile responsiveness",
        "Security updates",
        "Zero downtime deployment",
        "Training included",
        "60 days support"
      ],
      idealFor: ["Outdated websites", "Platform changes", "Rebranding"],
      popular: false
    }
  ];

  const hourlyRates = [
    {
      level: "Junior Developer",
      rate: "$50-65/hr",
      experience: "2-4 years",
      skills: ["HTML/CSS", "JavaScript", "Basic frameworks", "WordPress"],
      bestFor: "Simple websites and basic functionality"
    },
    {
      level: "Mid-Level Developer",
      rate: "$70-85/hr",
      experience: "5-7 years",
      skills: ["React/Vue", "Node.js", "Database design", "API integration"],
      bestFor: "Business websites and moderate complexity"
    },
    {
      level: "Senior Developer",
      rate: "$90-120/hr",
      experience: "8+ years",
      skills: ["Full-stack", "Architecture", "Complex systems", "Team leadership"],
      bestFor: "Complex applications and enterprise solutions"
    },
    {
      level: "Specialist",
      rate: "$100-150/hr",
      experience: "10+ years",
      skills: ["E-commerce", "Security", "Performance", "Scaling"],
      bestFor: "Specialized projects and high-performance systems"
    }
  ];

  return (
    <section className="pricing-packages-section">
      <div className="container">
        {billingCycle === 'project' ? (
          <>
            <h2 className="section-title">Fixed-Price Packages</h2>
            <p className="section-subtitle">All-inclusive packages with no surprises. Pay once, get everything listed.</p>
            <div className="packages-grid">
              {projectPackages.map((pkg) => (
                <div 
                  key={pkg.id} 
                  className={`package-card ${pkg.popular ? 'popular' : ''} ${selectedPackage === pkg.id ? 'selected' : ''}`}
                  onClick={() => setSelectedPackage(selectedPackage === pkg.id ? null : pkg.id)}
                >
                  {pkg.popular && <div className="popular-badge">Most Popular</div>}
                  <div className="package-header">
                    <h3>{pkg.name}</h3>
                    <div className="package-price">{pkg.price}</div>
                    <div className="package-timeline">{pkg.timeline}</div>
                    <p className="package-description">{pkg.description}</p>
                  </div>

                  <div className="package-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {pkg.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="package-ideal">
                    <h4>Ideal For:</h4>
                    <div className="ideal-tags">
                      {pkg.idealFor.map((item, idx) => (
                        <span key={idx} className="ideal-tag">{item}</span>
                      ))}
                    </div>
                  </div>

                  <button className="select-package-btn">
                    {selectedPackage === pkg.id ? 'Selected ✓' : 'Select Package'}
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="section-title">Hourly Rates by Experience Level</h2>
            <p className="section-subtitle">Flexible hourly billing for ongoing work or undefined scope projects.</p>
            <div className="hourly-grid">
              {hourlyRates.map((rate, idx) => (
                <div key={idx} className="hourly-card">
                  <h3>{rate.level}</h3>
                  <div className="hourly-rate">{rate.rate}</div>
                  <div className="hourly-experience">{rate.experience} experience</div>
                  <div className="hourly-skills">
                    <h4>Skills:</h4>
                    <div className="skills-list">
                      {rate.skills.map((skill, i) => (
                        <span key={i} className="skill-badge">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div className="hourly-bestfor">
                    <strong>Best for:</strong> {rate.bestFor}
                  </div>
                  <button className="contact-hourly-btn">Request Quote</button>
                </div>
              ))}
            </div>
            <div className="hourly-note">
              <p><strong>Note:</strong> Hourly projects typically require a minimum of 20 hours. We'll provide time estimates before starting work.</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function PricingComparison() {
  return (
    <section className="pricing-comparison">
      <div className="container">
        <h2 className="section-title">What's Included in Every Package</h2>
        <div className="comparison-table">
          <div className="comparison-row header-row">
            <div className="comparison-cell">Feature</div>
            <div className="comparison-cell">Landing Page</div>
            <div className="comparison-cell">Business</div>
            <div className="comparison-cell">E-commerce</div>
            <div className="comparison-cell">Application</div>
          </div>
          <div className="comparison-row">
            <div className="comparison-cell">Responsive Design</div>
            <div className="comparison-cell">✓</div>
            <div className="comparison-cell">✓</div>
            <div className="comparison-cell">✓</div>
            <div className="comparison-cell">✓</div>
          </div>
          <div className="comparison-row">
            <div className="comparison-cell">SEO Optimization</div>
            <div className="comparison-cell">Basic</div>
            <div className="comparison-cell">✓</div>
            <div className="comparison-cell">✓</div>
            <div className="comparison-cell">✓</div>
          </div>
          <div className="comparison-row">
            <div className="comparison-cell">Content Management</div>
            <div className="comparison-cell">—</div>
            <div className="comparison-cell">✓</div>
            <div className="comparison-cell">✓</div>
            <div className="comparison-cell">✓</div>
          </div>
          <div className="comparison-row">
            <div className="comparison-cell">User Authentication</div>
            <div className="comparison-cell">—</div>
            <div className="comparison-cell">—</div>
            <div className="comparison-cell">✓</div>
            <div className="comparison-cell">✓</div>
          </div>
          <div className="comparison-row">
            <div className="comparison-cell">Payment Processing</div>
            <div className="comparison-cell">—</div>
            <div className="comparison-cell">—</div>
            <div className="comparison-cell">✓</div>
            <div className="comparison-cell">Optional</div>
          </div>
          <div className="comparison-row">
            <div className="comparison-cell">Database Integration</div>
            <div className="comparison-cell">—</div>
            <div className="comparison-cell">—</div>
            <div className="comparison-cell">✓</div>
            <div className="comparison-cell">✓</div>
          </div>
          <div className="comparison-row">
            <div className="comparison-cell">API Development</div>
            <div className="comparison-cell">—</div>
            <div className="comparison-cell">—</div>
            <div className="comparison-cell">—</div>
            <div className="comparison-cell">✓</div>
          </div>
          <div className="comparison-row">
            <div className="comparison-cell">Post-Launch Support</div>
            <div className="comparison-cell">7 days</div>
            <div className="comparison-cell">30 days</div>
            <div className="comparison-cell">60 days</div>
            <div className="comparison-cell">90 days</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AddOns() {
  const addons = [
    {
      name: "Extra Pages",
      price: "$200-500",
      description: "Add additional pages beyond the package limit"
    },
    {
      name: "Advanced SEO",
      price: "$800",
      description: "Comprehensive SEO audit and optimization"
    },
    {
      name: "Content Writing",
      price: "$150/page",
      description: "Professional copywriting for your website"
    },
    {
      name: "Logo Design",
      price: "$500",
      description: "Custom logo design with multiple concepts"
    },
    {
      name: "Email Integration",
      price: "$300",
      description: "Newsletter signup and email marketing setup"
    },
    {
      name: "Social Media Integration",
      price: "$200",
      description: "Connect and display social media feeds"
    },
    {
      name: "Maintenance Package",
      price: "$200/month",
      description: "Ongoing updates, backups, and support"
    },
    {
      name: "Rush Delivery",
      price: "+30%",
      description: "Expedited timeline (when possible)"
    }
  ];

  return (
    <section className="addons-section">
      <div className="container">
        <h2 className="section-title">Optional Add-Ons</h2>
        <p className="section-subtitle">Enhance your package with these additional services</p>
        <div className="addons-grid">
          {addons.map((addon, idx) => (
            <div key={idx} className="addon-card">
              <div className="addon-header">
                <h3>{addon.name}</h3>
                <div className="addon-price">{addon.price}</div>
              </div>
              <p className="addon-description">{addon.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PaymentProcess() {
  return (
    <section className="payment-process">
      <div className="container">
        <h2 className="section-title">How Payment Works</h2>
        <div className="payment-steps">
          <div className="payment-step">
            <div className="step-number">1</div>
            <h3>Initial Deposit</h3>
            <p>Pay 30% upfront to secure your developer and begin work</p>
          </div>
          <div className="payment-arrow">→</div>
          <div className="payment-step">
            <div className="step-number">2</div>
            <h3>Milestone Payments</h3>
            <p>Pay as key milestones are completed (design approval, development phases)</p>
          </div>
          <div className="payment-arrow">→</div>
          <div className="payment-step">
            <div className="step-number">3</div>
            <h3>Final Payment</h3>
            <p>Pay remaining balance upon project completion and your approval</p>
          </div>
        </div>
        <div className="payment-methods">
          <h3>We Accept:</h3>
          <div className="methods-list">
            <span className="method-item">💳 Credit/Debit Cards</span>
            <span className="method-item">🏦 Bank Transfer</span>
            <span className="method-item">💰 PayPal</span>
            <span className="method-item">⚡ Stripe</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function MoneyBackGuarantee() {
  return (
    <section className="guarantee-section">
      <div className="container">
        <div className="guarantee-content">
          <div className="guarantee-icon">🛡️</div>
          <div className="guarantee-text">
            <h2>100% Satisfaction Guarantee</h2>
            <p>If you're not satisfied with the initial design mockups, we'll refund your deposit in full. No questions asked. Once development begins, we work until you're 100% happy with the result.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingFAQ() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const faqs = [
    {
      question: "What's included in the price?",
      answer: "All prices include everything listed in the package: design, development, testing, deployment, and post-launch support. No hidden fees."
    },
    {
      question: "Can I customize a package?",
      answer: "Absolutely! Use our packages as a starting point and add or remove features based on your needs. We'll provide a custom quote."
    },
    {
      question: "What if my project takes longer than estimated?",
      answer: "Timeline estimates are based on typical projects. If delays occur due to scope changes, we'll discuss adjustments. Otherwise, no extra charges."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes! For projects over $5,000, we offer flexible payment plans split across milestones. Contact us to discuss options."
    },
    {
      question: "What's not included in the price?",
      answer: "Domain name, hosting, premium plugins/themes, stock photos, and third-party service fees are not included but we can help you set these up."
    },
    {
      question: "Can I get a refund?",
      answer: "Full refund available before development starts. Once work begins, refunds are prorated based on work completed."
    },
    {
      question: "What happens after the support period ends?",
      answer: "You can purchase ongoing maintenance packages starting at $200/month, or we can train you to manage the site yourself."
    },
    {
      question: "Do prices include revisions?",
      answer: "Yes! Unlimited revisions during development are included for most packages. Post-launch changes may incur additional fees."
    }
  ];

  return (
    <section className="pricing-faq">
      <div className="container">
        <h2 className="section-title">Pricing Questions</h2>
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

function CTASection() {
  return (
    <section className="pricing-cta">
      <div className="container">
        <h2>Ready to Start Your Project?</h2>
        <p>Get matched with the perfect developer and receive a detailed quote</p>
        <button className="cta-button">Get Your Custom Quote</button>
      </div>
    </section>
  );
}
