import { useEffect, useState } from 'react';
import { FaBrain } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa6";
import { LuNotebookPen } from "react-icons/lu";
import { SiQuicklook } from "react-icons/si";
import { TbGraphFilled } from "react-icons/tb";
import { PiExportFill } from "react-icons/pi";

export default function FeaturesSection() {
  const [visibleFeatures, setVisibleFeatures] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const features = document.querySelectorAll('.feature-card');

      features.forEach((feature, index) => {
        const featureTop = feature.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (featureTop < windowHeight * 0.75 && !visibleFeatures.includes(index)) {
          setVisibleFeatures(prev => [...prev, index]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleFeatures]);

  const features = [
    {
      title: "AI Resume Analyzer",
      description: "Get instant feedback on your resume's strengths and areas for improvement with our advanced AI analysis.",
      icon: <FaBrain />
    },
    {
      title: "Smart Content Suggestions",
      description: "Receive tailored recommendations for skills, keywords, and phrasing to make your resume stand out.",
      icon: <FaLightbulb/>
    },
    {
      title: "Template Customization",
      description: "Choose from a variety of professionally designed templates and customize them to fit your personal style.",
      icon: <LuNotebookPen/>
    },
    {
      title: "Real-Time Editing",
      description: "Edit your resume on the fly with real-time updates and suggestions powered by AI.",
      icon: <SiQuicklook/>
    },
    {
      title: "Career Insights",
      description: "Access data-driven insights on industry trends and job market demands to tailor your resume effectively.",
      icon: <TbGraphFilled/>
    },
    {
      title: "Easy Sharing & Export",
      description: "Seamlessly export your resume in multiple formats and share it with employers and networks.",
      icon: <PiExportFill/>
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <h2>Revolutionary Features</h2>
          <p>Transform your job search with tools designed for success.</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card ${visibleFeatures.includes(index) ? 'visible' : ''}`}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
