import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <h1>ResumeCraft</h1>
          </div>
          <div className="nav-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <span className="close-icon">✕</span>
            ) : (
              <span className="menu-icon"><FiMenu/></span>
            )}
          </div>
          <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
              <li><a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a></li>
              <li><a href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a></li>
              <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;