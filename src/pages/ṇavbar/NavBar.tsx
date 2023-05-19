import {useEffect, useState} from "react";
import "./NavBar.css";
import Logo from "../../assets/images/krishna_logo.png";
import {Link, useLocation} from "react-router-dom";
import {portfolioData} from "resources/cms";

export default function Navbar() {
  const location = useLocation();
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    setIsNavExpanded(false);
  }, [location.pathname]);
  return (
    <>
      <div className="navigation">
        <div className="brand-name">
          <img alt="" src={Logo} />
        </div>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <Link to="/home">{portfolioData.HOME}</Link>
            </li>
            <li>
              <Link to="/about">{portfolioData.ABOUT}</Link>
            </li>
            <li>
              <Link to="/projectpage">{portfolioData.PROJECT}</Link>
            </li>
            <li>
              <Link to="/skillpage">{portfolioData.SKILLS}</Link>
            </li>
            <li>
              <Link to="/contact">{portfolioData.CONTACT}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-divider"></div>
    </>
  );
}
