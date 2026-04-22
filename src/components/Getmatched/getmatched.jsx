import React, { useState } from 'react';
import './getmatched.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';

export default function GetMatchedPage({ setCurrentPage }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    projectName: '',
    projectDescription: '',
    features: [],
    customFeatures: '',
    budget: '',
    timeline: '',
    startDate: '',
    designStyle: '',
    colorPreferences: '',
    referenceWebsites: '',
    hasLogo: '',
    fullName: '',
    email: '',
    phone: '',
    company: '',
    additionalNotes: '',
    heardFrom: ''
  });

  const totalSteps = 7;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFeatureToggle = (feature) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you! We will match you with the perfect developer within 24 hours.');
    // Retour au dashboard après soumission
    setCurrentPage('dashboard');
  };

  return (
    <div className="get-matched-page">
      <Header setCurrentPage={setCurrentPage} />
      <FormHero currentStep={currentStep} totalSteps={totalSteps} />
      <FormContainer
        currentStep={currentStep}
        formData={formData}
        handleInputChange={handleInputChange}
        handleFeatureToggle={handleFeatureToggle}
        handleNext={handleNext}
        handleBack={handleBack}
        handleSubmit={handleSubmit}
        totalSteps={totalSteps}
      />
      <FormBenefits />
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

function FormHero({ currentStep, totalSteps }) {
  return (
    <section className="form-hero">
      <div className="container">
        <h1>Get Matched with Your Perfect Developer</h1>
        <p>Tell us about your project and we will connect you with the ideal developer within 24 hours.</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
        </div>
        <div className="progress-text">Step {currentStep} of {totalSteps}</div>
      </div>
    </section>
  );
}

function FormContainer({ currentStep, formData, handleInputChange, handleFeatureToggle, handleNext, handleBack, handleSubmit, totalSteps }) {
  return (
    <section className="form-section">
      <div className="container">
        <div className="form-wrapper">
          <div>
            {currentStep === 1 && (
              <Step1ProjectType formData={formData} handleInputChange={handleInputChange} />
            )}
            {currentStep === 2 && (
              <Step2ProjectDetails formData={formData} handleInputChange={handleInputChange} />
            )}
            {currentStep === 3 && (
              <Step3Features formData={formData} handleFeatureToggle={handleFeatureToggle} handleInputChange={handleInputChange} />
            )}
            {currentStep === 4 && (
              <Step4BudgetTimeline formData={formData} handleInputChange={handleInputChange} />
            )}
            {currentStep === 5 && (
              <Step5Design formData={formData} handleInputChange={handleInputChange} />
            )}
            {currentStep === 6 && (
              <Step6Contact formData={formData} handleInputChange={handleInputChange} />
            )}
            {currentStep === 7 && (
              <Step7Additional formData={formData} handleInputChange={handleInputChange} />
            )}

            {/* BOUTONS DE NAVIGATION DU FORMULAIRE */}
            <div className="form-navigation">
              {currentStep > 1 && (
                <button type="button" className="btn-back" onClick={handleBack}>
                  ← Back
                </button>
              )}
              {currentStep < totalSteps ? (
                <button type="button" className="btn-next" onClick={handleNext}>
                  Next Step →
                </button>
              ) : (
                <button type="button" className="btn-submit" onClick={handleSubmit}>
                  Submit Project
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Step1ProjectType({ formData, handleInputChange }) {
  const projectTypes = [
    { value: 'landing', label: 'Landing Page', icon: '📄', desc: 'Single page for campaigns' },
    { value: 'business', label: 'Business Website', icon: '💼', desc: '5-10 pages, professional presence' },
    { value: 'ecommerce', label: 'E-commerce Store', icon: '🛍️', desc: 'Online store with payments' },
    { value: 'webapp', label: 'Web Application', icon: '📱', desc: 'Custom functionality & features' },
    { value: 'dashboard', label: 'Dashboard/Portal', icon: '📊', desc: 'Data visualization & management' },
    { value: 'redesign', label: 'Redesign/Migration', icon: '🔄', desc: 'Update existing website' }
  ];

  return (
    <div className="form-step">
      <h2>What type of project do you need?</h2>
      <p className="step-description">Select the option that best describes your project</p>
      <div className="project-type-grid">
        {projectTypes.map((type) => (
          <div
            key={type.value}
            className={`project-type-card ${formData.projectType === type.value ? 'selected' : ''}`}
            onClick={() => handleInputChange('projectType', type.value)}
          >
            <div className="type-icon">{type.icon}</div>
            <h3>{type.label}</h3>
            <p>{type.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Step2ProjectDetails({ formData, handleInputChange }) {
  return (
    <div className="form-step">
      <h2>Tell us about your project</h2>
      <p className="step-description">The more details you provide, the better we can match you</p>
      
      <div className="form-group">
        <label>Project Name</label>
        <input
          type="text"
          value={formData.projectName}
          onChange={(e) => handleInputChange('projectName', e.target.value)}
          placeholder="e.g., My Online Store"
        />
      </div>

      <div className="form-group">
        <label>Project Description</label>
        <textarea
          value={formData.projectDescription}
          onChange={(e) => handleInputChange('projectDescription', e.target.value)}
          placeholder="Describe your project, goals, target audience, and what you are trying to achieve..."
        />
        <span className="helper-text">Be as detailed as possible. Include your business goals, who your target audience is, and any specific requirements.</span>
      </div>
    </div>
  );
}

function Step3Features({ formData, handleFeatureToggle, handleInputChange }) {
  const features = [
    'Contact Form',
    'Blog/News Section',
    'User Registration/Login',
    'Payment Processing',
    'Shopping Cart',
    'Product Catalog',
    'Search Functionality',
    'Newsletter Signup',
    'Social Media Integration',
    'Google Analytics',
    'Live Chat',
    'Booking/Scheduling System',
    'Member Area',
    'API Integration',
    'Multi-language Support',
    'Mobile App'
  ];

  return (
    <div className="form-step">
      <h2>What features do you need?</h2>
      <p className="step-description">Select all features that apply to your project</p>
      
      <div className="features-grid">
        {features.map((feature) => (
          <div
            key={feature}
            className={`feature-checkbox ${formData.features.includes(feature) ? 'checked' : ''}`}
            onClick={() => handleFeatureToggle(feature)}
          >
            <span className="checkbox-icon">{formData.features.includes(feature) ? '✓' : ''}</span>
            <span className="feature-label">{feature}</span>
          </div>
        ))}
      </div>

      <div className="form-group">
        <label>Other Features or Custom Requirements</label>
        <textarea
          value={formData.customFeatures}
          onChange={(e) => handleInputChange('customFeatures', e.target.value)}
          placeholder="Describe any additional features or custom functionality you need..."
        />
      </div>
    </div>
  );
}

function Step4BudgetTimeline({ formData, handleInputChange }) {
  const budgets = [
    { value: '1000-2500', label: '$1,000 - $2,500' },
    { value: '2500-5000', label: '$2,500 - $5,000' },
    { value: '5000-10000', label: '$5,000 - $10,000' },
    { value: '10000-20000', label: '$10,000 - $20,000' },
    { value: '20000+', label: '$20,000+' },
    { value: 'not-sure', label: 'Not Sure Yet' }
  ];

  const timelines = [
    { value: 'urgent', label: 'ASAP (1-2 weeks)' },
    { value: 'normal', label: 'Normal (1 month)' },
    { value: 'flexible', label: 'Flexible (2-3 months)' },
    { value: 'planning', label: 'Just Planning' }
  ];

  return (
    <div className="form-step">
      <h2>Budget & Timeline</h2>
      <p className="step-description">Help us understand your budget and timeline expectations</p>
      
      <div className="form-group">
        <label>What is your budget?</label>
        <div className="radio-group">
          {budgets.map((budget) => (
            <label key={budget.value} className="radio-option">
              <input
                type="radio"
                name="budget"
                value={budget.value}
                checked={formData.budget === budget.value}
                onChange={(e) => handleInputChange('budget', e.target.value)}
              />
              <span className="radio-label">{budget.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>What is your timeline?</label>
        <div className="radio-group">
          {timelines.map((timeline) => (
            <label key={timeline.value} className="radio-option">
              <input
                type="radio"
                name="timeline"
                value={timeline.value}
                checked={formData.timeline === timeline.value}
                onChange={(e) => handleInputChange('timeline', e.target.value)}
              />
              <span className="radio-label">{timeline.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>Preferred Start Date</label>
        <input
          type="date"
          value={formData.startDate}
          onChange={(e) => handleInputChange('startDate', e.target.value)}
        />
      </div>
    </div>
  );
}

function Step5Design({ formData, handleInputChange }) {
  const styles = [
    { value: 'modern', label: 'Modern & Minimal', icon: '✨' },
    { value: 'corporate', label: 'Corporate & Professional', icon: '💼' },
    { value: 'creative', label: 'Creative & Bold', icon: '🎨' },
    { value: 'playful', label: 'Playful & Fun', icon: '🎉' },
    { value: 'elegant', label: 'Elegant & Luxurious', icon: '👑' },
    { value: 'not-sure', label: 'Not Sure / Need Help', icon: '❓' }
  ];

  return (
    <div className="form-step">
      <h2>Design Preferences</h2>
      <p className="step-description">Help us understand your design vision</p>
      
      <div className="form-group">
        <label>What design style do you prefer?</label>
        <div className="style-grid">
          {styles.map((style) => (
            <div
              key={style.value}
              className={`style-card ${formData.designStyle === style.value ? 'selected' : ''}`}
              onClick={() => handleInputChange('designStyle', style.value)}
            >
              <div className="style-icon">{style.icon}</div>
              <div className="style-label">{style.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>Color Preferences</label>
        <input
          type="text"
          value={formData.colorPreferences}
          onChange={(e) => handleInputChange('colorPreferences', e.target.value)}
          placeholder="e.g., Blue and white, Earth tones, Bold and vibrant"
        />
      </div>

      <div className="form-group">
        <label>Reference Websites</label>
        <textarea
          value={formData.referenceWebsites}
          onChange={(e) => handleInputChange('referenceWebsites', e.target.value)}
          placeholder="Share links to websites you like or want to use as inspiration..."
        />
      </div>

      <div className="form-group">
        <label>Do you have a logo and brand assets?</label>
        <div className="radio-group inline">
          <label className="radio-option">
            <input
              type="radio"
              name="hasLogo"
              value="yes"
              checked={formData.hasLogo === 'yes'}
              onChange={(e) => handleInputChange('hasLogo', e.target.value)}
            />
            <span className="radio-label">Yes, I have a logo</span>
          </label>
          <label className="radio-option">
            <input
              type="radio"
              name="hasLogo"
              value="no"
              checked={formData.hasLogo === 'no'}
              onChange={(e) => handleInputChange('hasLogo', e.target.value)}
            />
            <span className="radio-label">No, need design help</span>
          </label>
        </div>
      </div>
    </div>
  );
}

function Step6Contact({ formData, handleInputChange }) {
  return (
    <div className="form-step">
      <h2>Contact Information</h2>
      <p className="step-description">How should we reach you?</p>
      
      <div className="form-row">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            placeholder="John Doe"
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div className="form-group">
          <label>Company Name (Optional)</label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            placeholder="Your Company"
          />
        </div>
      </div>
    </div>
  );
}

function Step7Additional({ formData, handleInputChange }) {
  return (
    <div className="form-step">
      <h2>Almost Done!</h2>
      <p className="step-description">Any additional information you would like to share?</p>
      
      <div className="form-group">
        <label>Additional Notes or Questions</label>
        <textarea
          value={formData.additionalNotes}
          onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
          placeholder="Any other details, questions, or specific requirements we should know about..."
        />
      </div>

      <div className="form-group">
        <label>How did you hear about us?</label>
        <select
          value={formData.heardFrom}
          onChange={(e) => handleInputChange('heardFrom', e.target.value)}
        >
          <option value="">Select an option</option>
          <option value="google">Google Search</option>
          <option value="social">Social Media</option>
          <option value="referral">Friend/Colleague Referral</option>
          <option value="review">Review Site</option>
          <option value="ad">Online Advertisement</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="review-summary">
        <h3>Review Your Information</h3>
        <div className="summary-item">
          <strong>Project Type:</strong> {formData.projectType || 'Not specified'}
        </div>
        <div className="summary-item">
          <strong>Budget:</strong> {formData.budget || 'Not specified'}
        </div>
        <div className="summary-item">
          <strong>Timeline:</strong> {formData.timeline || 'Not specified'}
        </div>
        <div className="summary-item">
          <strong>Features:</strong> {formData.features.length > 0 ? `${formData.features.length} selected` : 'None selected'}
        </div>
      </div>
    </div>
  );
}

function FormBenefits() {
  return (
    <section className="form-benefits">
      <div className="container">
        <h2>What Happens Next?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-number">1</div>
            <h3>Review</h3>
            <p>Our team reviews your project details within 24 hours</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-number">2</div>
            <h3>Match</h3>
            <p>We match you with 2-3 developers who fit your needs perfectly</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-number">3</div>
            <h3>Connect</h3>
            <p>Schedule intro calls and choose your ideal developer</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-number">4</div>
            <h3>Build</h3>
            <p>Start your project and bring your vision to life</p>
          </div>
        </div>
      </div>
    </section>
  );
}