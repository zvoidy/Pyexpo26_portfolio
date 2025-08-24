import IpsLogo from "../assets/Logo/ips_white.webp";
import PyexpoLogo from "../assets/Logo/PyExpoLogo.png";
import linkedin from "../assets/Logo/linkedin.svg";
import Instagram from "../assets/Logo/instagram.svg";
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll(".nav-menu a");
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          navLinks.forEach((link) => link.parentElement.classList.remove("menu-active"));
          const activeLink = document.querySelector(`.nav-menu a[href="#${section.id}"]`);
          if (activeLink) activeLink.parentElement.classList.add("menu-active");
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  return (
    <>
      {/* Topbar */}
      <div className="topbar" style={{ backgroundColor: "#100f45" }}>
        <div className="topbar-content">
          {/* Left Section: Social Media */}
          <div className="social-section">
            <span className="text-light">Follow IPS Tech Community:</span>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/ips-tech-community-9aa024297/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/ips_tech.community?igsh=MXA4dWJhaXFyaHljcg==" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram" />
              </a>
            </div>
          </div>
          {/* Right Section: Slogan */}
          <div className="slogan">
            <span className="text-light">Genius Innovation Creates a Lasting Legacy</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="main-navbar">
        <div className="nav-container">
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            ☰
          </button>
          <div className="nav-logo">
            <a href="/" target="_blank">
              <img src={PyexpoLogo} className="logo expo" alt="PYEXPO logo" />
            </a>
          </div>
          <div className={`nav-menu ${isMobileMenuActive ? 'mobile-active' : ''}`}>
            <ul>
              <li><a href="#" className="active">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="speaker.html">Speakers</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#domains">Domains</a></li>
              <li><a href="#sponsors">Sponsors</a></li>
              <li><a href="#crew">Pycrew</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li className="login-btn"><a href="https://portal.pyexpo.co">Login</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
