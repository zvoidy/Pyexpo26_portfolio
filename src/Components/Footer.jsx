import IpsLogo from "/img/Logo/ips_white.webp";
import PyexpoLogo from "/img/Logo/PyExpoLogo.png";

const Footer = () => {
  return (
    <>
      {/* Footer Start */}
      <div className="footer">
        <div className="footer-container">
          <div className="footer-row">
            {/* Location Column */}
            <div className="footer-col">
              <p className="section-title">Location</p>
              <p className="location-text">
                <span className="icon">📍</span>
                KGISL Institute Of Technology
              </p>
            </div>

            {/* Quick Links Column */}
            <div className="footer-col">
              <p className="section-title">Quick Links</p>
              <a className="footer-link" href="#about">
                About Us
              </a>
              <a className="footer-link" href="tel:+919025861567">
                Contact Us
              </a>
            </div>

            {/* Student Coordinator Column */}
            <div className="footer-col">
              <p className="section-title">Student Coordinator</p>
              <p className="contact-text">
                <span className="icon">📞</span>
                <a href="tel:+919025861567">+91 11111 11111</a>
              </p>
              <p className="contact-text">
                <span className="icon">📞</span>
                <a href="tel:+918248564527">+91 00000 00000</a>
              </p>
            </div>

            {/* Queries Column */}
            <div className="footer-col">
              <p className="section-title">For Queries</p>
              <p className="queries-text">Feel free to mail us!</p>
              <p className="contact-text">
                <span className="icon">✉️</span>
                <a href="mailto:pyexpo@kgkite.ac.in?subject=Help%20Fort%20Pyexpo">
                  pyexpo@kgkite.ac.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Copyright Start */}
      <div className="copyright">
        <div className="copyright-container">
          <div className="copyright-row">
            <div className="copyright-col">
              <div className="copyright-content">
                <a href="/" className="footer-logo-link">
                  <img src={PyexpoLogo} className="footer-logo logo expo" alt="PYEXPO logo" />
                </a>
                <div className="copyright-text">
                  &copy;{" "}
                  <a className="fw-semi-bold" href="#">
                    PYEXPO'25
                  </a>
                  , All Right Reserved.
                </div>
              </div>
            </div>
            <div className="copyright-col text-right">
              <div className="copyright-content">
                <a
                  href="https://www.linkedin.com/in/ips-tech-community-9aa024297/"
                  className="footer-logo-link"
                  target="_blank"
                >
                  <img src={IpsLogo} className="footer-logo logo spin" alt="IPS logo" />
                </a>
                <div className="copyright-text">
                  Developed with ❤️ By{" "}
                  <a
                    className="fw-semi-bold"
                    href="https://www.linkedin.com/in/ips-tech-community-9aa024297/"
                  >
                    IPS TECH COMMUNITY
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright End */}
    </>
  );
};

export default Footer;
