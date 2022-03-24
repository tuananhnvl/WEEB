/*import style and defen */
import NavLogo from "../asset/logo.svg";
import "../styles/Navbar.css";
import React,{useState,useEffect} from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

/* import Page */
import AboutUs from "../AboutUs";
import Services from "../Services";
import Project from "../Project";
import ServicesDesignBrand from "../ServicesDesignBrand";
import ServicesSEO from "../ServicesSEO";
import ServicesDesignWeb from "../ServicesDesignWeb";
import Home from "../Home";

/* import icon */
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const [scroll, setScroll] = useState(false);
  const [fixedmenu, setFixedmenu] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 120);
    });
    window.addEventListener("scroll", () => {
      setFixedmenu(window.scrollY > 50);
    });
  }, []);
  return (
    <BrowserRouter>
      <nav>
     
        <div className="Navbar" id={fixedmenu ? "g45" : ""}>
          <div className="Navbardetail">
            <div className="Navbar_Logo">
            
              <Link to="/" style={{display:'flex',width:'200px'}}>
                
                {/* <img
                  src={NavLogo}
                  alt="ImageTitle"
                  className="LogoCompanyWeebNav"
                /> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 346.31 102.3">
                  <g id="Layer_2" data-name="Layer 2"><g id="logo"><g id="side-show-logo">
                  <polygon class="cls-1" points="0.8 1.22 29.73 1.22 63.94 71.8 49.72 101.15 0.8 1.22"/>
                  <polygon class="cls-1" points="69.25 1.15 98.14 1.22 131.89 71.46 117.5 101.15 69.25 1.15"/>
                  <polygon class="cls-1" points="136.88 1.3 165.96 1.15 151.43 31.31 136.88 1.3"/>
                  <polygon className={scroll ? "cls-1 rtr4" : "cls-1"} points="180.35 31.31 151.43 31.31 165.85 61.08 180.35 31.31"/>
                  <polygon className={scroll ? "slide-logo cls-2 e3e" : "slide-logo cls-2"} points="69.25 1.15 49.47 41.96 63.94 71.8 83.8 31.31 69.25 1.15"/>
                  <polygon className={scroll ? "slide-logo cls-2 e3e" : "slide-logo cls-2"} points="151.43 31.31 131.89 71.46 117.43 41.35 136.74 1.23 151.43 31.31"/></g>
                  <g id={scroll ? "side-hidden-logo dw3" : "side-hidden-logo"}>
                  <polygon className={scroll ? "cls-2 pathrun" : "cls-2"} points="180.35 1.22 209.28 1.22 243.49 71.8 229.27 101.15 180.35 1.22"/>
                  <polygon className={scroll ? "cls-2 pathrun" : "cls-2"} points="248.8 1.15 277.69 1.22 311.44 71.46 297.06 101.15 248.8 1.15"/>
                  <polygon className={scroll ? "cls-2 pathrun" : "cls-2"} points="316.44 1.3 345.52 1.15 330.98 31.31 316.44 1.3"/>
                  <polygon className={scroll ? "cls-2 pathrun" : "cls-2"} points="248.8 1.15 229.02 41.96 243.49 71.8 263.35 31.31 248.8 1.15"/>
                  <polygon className={scroll ? "cls-2 pathrun" : "cls-2"} points="330.98 31.31 311.44 71.46 296.98 41.35 316.29 1.23 330.98 31.31"/></g></g></g></svg>
              </Link>
            </div>
            <div className="Navbar_Detail_Deskop">
              <div className="MarginCenterProp">
                <div className="NavbarMenu">
                  <ul className="ListItemMenu">
                    <li>
                      <Link
                        to="/"
                        activeClassName="active"
                        className="ItemMenu"
                      >
                        Trang chủ
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/AboutUs"
                        activeClassName="active"
                        className="ItemMenu"
                      >
                        Về chúng tôi
                      </Link>
                    </li>
                    <li>
                      <Link to="/Services" activeClassName="active" className="ItemMenu">
                        <a
                          aria-owns={anchorEl ? "simple-menu" : undefined}
                          aria-haspopup="true"
                          onClick={handleClick}
                          onMouseOver={handleClick}
                        >
                          Dịch vụ
                        </a>
                    {/*     <Menu
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                          }}
                          id="simple-menu"
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                          MenuListProps={{ onMouseLeave: handleClose }}
                          getContentAnchorEl={null}
                        >
                          <Link to="/ServicesDesignWeb">
                            <MenuItem onClick={handleClose}>
                              Dịch vụ thiết kế Website
                            </MenuItem>
                          </Link>
                          <Link to="/ServicesDesignBrand">
                            <MenuItem onClick={handleClose}>
                              Dịch vụ thiết kế Thương Hiệu
                            </MenuItem>
                          </Link>
                          <Link to="/ServicesSEO">
                            <MenuItem onClick={handleClose}>
                              Dịch vụ tối ưu SEO và Ads
                            </MenuItem>
                          </Link>
                        </Menu> */}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Project"
                        activeClassName="active"
                        className="ItemMenu"
                      >
                        Dự án
                      </Link>
                    </li>
                  </ul>
                  <button className="ButtonContacttNavMenu">LIÊN HỆ</button>
                </div>
              </div>
            </div>
            <div className="Navbar_Detail_Mobie">
              <a>
                <FiMenu fontSize={"5vh"} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/ServicesDesignBrand" element={<ServicesDesignBrand />} />
        <Route path="/ServicesDesignWeb" element={<ServicesDesignWeb />} />
        <Route path="/ServicesSEO" element={<ServicesSEO />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navbar;
