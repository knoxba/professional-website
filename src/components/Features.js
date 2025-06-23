import React from 'react';
import './Features.css';

function Features() {
  const features = [
    {
      icon: "ðŸ“Š",
      title: "Advanced Analytics",
      description: "Comprehensive data analysis and reporting tools"
    },
    {
      icon: "ðŸ”’",
      title: "Secure Platform",
      description: "Enterprise-grade security for your investments"
    },
    {
      icon: "ðŸ“±",
      title: "Mobile Access",
      description: "Manage your portfolio from anywhere"
    }
  ];

  return (
    <section id="features" className="features">
      <h2>Why Choose Us</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;