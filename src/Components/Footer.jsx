import IpsLogo from "../assets/Logo/ips_white.webp";
import PyexpoLogo from "../assets/Logo/PyExpoLogo.png";

const Footer = () => {
  return (
    <footer>
      <a href="https://www.linkedin.com/in/ips-tech-community-9aa024297/" target="_blank">
        <img src={IpsLogo} className="logo spin" alt="IPS logo" />
      </a>
      <a href="/" target="_blank">
        <img src={PyexpoLogo} className="logo expo" alt="PYEXPO logo" />
      </a>
    </footer>
  );
};

export default Footer;
