

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="fade-in">Introducing ResumeCraft</h1>
          <h2 className="fade-in delay-1">The Ultimate AI-Powered Resume Builder</h2>
          <p className="fade-in delay-2">
            Create, edit, and perfect your professional resume with the help of advanced artificial intelligence. Let ResumeCraft transform your career opportunities.
          </p>
          <div className="hero-buttons fade-in delay-3">
            <button className="btn btn-primary">Get Started Free</button>
            <button className="btn btn-primary">Watch Demo</button>
          </div>
        </div>
        <div className="hero-image fade-in delay-2">
          <img src="resume.svg" alt="ResumeCraft AI Resume Builder" />
        </div>
      </div>
    </section>
  );
}