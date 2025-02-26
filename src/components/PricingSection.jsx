import { useState } from 'react';

export default function PricingSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const plans = [
    {
      name: "Basic",
      price: "₹0",
      period: "month",
      features: [
        "Basic Resume Templates",
        "AI Resume Analyzer (Limited)",
        "Manual Editing Tools",
        "Export as PDF"
      ],
      highlighted: false,
      cta: "Try for Free"
    },
    {
      name: "Pro",
      price: "₹399",
      period: "month",
      features: [
        "All Basic Features",
        "Advanced AI Content Suggestions",
        "Unlimited Resume Analysis",
        "Premium Templates",
        "One-Click Export to Multiple Formats"
      ],
      highlighted: true,
      cta: "Upgrade to Pro"
    },
    {
      name: "Premium",
      price: "₹999",
      period: "month",
      features: [
        "All Pro Features",
        "Personalized Career Insights",
        "One-on-One Resume Consultations",
        "Priority Support",
        "Customizable Branding Options"
      ],
      highlighted: false,
      cta: "Go Premium"
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-header">
          <h2>Choose Your Plan</h2>
          <p>Flexible options for every professional's needs</p>
        </div>
        <div className="pricing-cards">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.highlighted ? 'highlighted' : ''} ${hoveredCard === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-header">
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="amount">{plan.price}</span>
                  <span className="period">/{plan.period}</span>
                </div>
              </div>
              <div className="card-body">
                <ul className="features-list">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="card-footer">
                <button className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-secondary'}`}>
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="pricing-note">
          <p>All plans include a 14-day free trial. No credit card required.</p>
        </div>
      </div>
    </section>
  );
}