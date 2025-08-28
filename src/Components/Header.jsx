import IpsLogo from "/img/Logo/ips_white.webp";
import linkedin from "/img/Logo/linkedin.svg";
import Instagram from "/img/Logo/instagram.svg";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll(".nav-menu a");

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          navLinks.forEach((link) =>
            link.parentElement.classList.remove("menu-active")
          );
          const activeLink = document.querySelector(
            `.nav-menu a[href="#${section.id}"]`
          );
          if (activeLink) activeLink.parentElement.classList.add("menu-active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  return (
    <>
      {/* Topbar */}
      <div className="topbar">
        <div className="topbar-content">
          {/* Left Section: Social Media */}
          <div className="social-section">
            <span className="text-light">Follow IPS Tech Community:</span>
            <div className="social-links flex">
              <a
                href="https://www.linkedin.com/in/ips-tech-community-9aa024297/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a
                href="https://www.instagram.com/ips_tech.community?igsh=MXA4dWJhaXFyaHljcg=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Instagram} alt="Instagram" />
              </a>
            </div>
          </div>
          {/* Right Section: Slogan */}
          <div className="slogan">
            <span className="text-light">
              Genius Innovation Creates a Lasting Legacy
            </span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-100 main-navbar">
        <div className="mx-auto py-4 flex items-center justify-evenly px-10">
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            ☰
          </button>
          <div className="nav-logo">
            <a href="/" target="_blank">
              <img src="/img/Logo/PyExpoLogo.png" className="h-15" alt="PYEXPO logo" />
            </a>
          </div>
          <div
            className={`nav-menu ${isMobileMenuActive ? "mobile-active" : ""}`}
          >
            <ul>
              <li className="menu-active">
                <Link
                  smooth
                  offset={-90}
                  to="Home"
                  style={{ cursor: "pointer" }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  smooth
                  offset={-50}
                  to="About"
                  style={{ cursor: "pointer" }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  smooth
                  offset={-120}
                  to="Speakers"
                  style={{ cursor: "pointer" }}
                >
                  Speakers
                </Link>
              </li>
              <li>
                <Link
                  smooth
                  offset={-90}
                  to="Events"
                  style={{ cursor: "pointer" }}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  smooth
                  offset={-90}
                  to="Domains"
                  style={{ cursor: "pointer" }}
                >
                  Domains
                </Link>
              </li>
              <li>
                <Link
                  smooth
                  offset={-90}
                  to="Sponsers"
                  style={{ cursor: "pointer" }}
                >
                  Sponsors
                </Link>
              </li>
              <li>
                <Link
                  smooth
                  offset={-90}
                  to="Pycrew"
                  style={{ cursor: "pointer" }}
                >
                  Pycrew
                </Link>
              </li>
              <li>
                <Link
                  smooth
                  offset={-90}
                  to="FAQ"
                  style={{ cursor: "pointer" }}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <button className="login-btn">
              <a href="https://portal.pyexpo.co">Login</a>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
