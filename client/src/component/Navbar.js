/*import style and defen */

import "../styles/Navbar.css";import "../styles/RollHeading.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

/* import Page */
import AboutUs from "../AboutUs";
import Services from "../Services";
import Project from "../Project";
import ServicesDesignBrand from "../ServicesDesignBrand";
import ServicesSEO from "../ServicesSEO";
import ServicesDesignWeb from "../ServicesDesignWeb";
import Home from "../Home";
import FormLog from "./FormLog";
/* import icon */
import { FiMenu } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdPhoneInTalk } from 'react-icons/md';
function Navbar() {
  /* const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  } */

  /* SCROLL MERNU & LOGO EFFECT */
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 300);
    });
  }, []);

  /* ACTIVE MENU MOBLIE */
  const [ActiNavMobi, setActiNavMobi] = useState("");
  const [BgMobiNav, setBgMobiNav] = useState("");
  const [TitleMobiNav, setTitleMobiNav] = useState("");
  const console = () => {
    setActiNavMobi("yu7");
    setTimeout(() => {
      setBgMobiNav("hud3hu");
    }, 0.1);
    
    setTimeout(() => {
      setTitleMobiNav("jtf679");
    }, 1.3);
  };
  const console02 = () => {
    setActiNavMobi("");
    setBgMobiNav("");
    setTitleMobiNav("");
  };
  

  /* ROLLING TEXT */
  useEffect(() => {
    const g54g = document.querySelectorAll('.RollingText');
    g54g.forEach(f345 => {
      const innerText = f345.innerText;
      //console.log(innerText);
      f345.innerHTML = '';

      const textContainer = document.createElement('div');
      textContainer.classList.add('block');

      for (const letter of innerText) {
        const span = document.createElement('span');
        span.innerText = letter.trim() === '' ? '\xa0' : letter;
        span.classList.add('letter');
        textContainer.appendChild(span);
      }

      f345.appendChild(textContainer);
      f345.appendChild(textContainer.cloneNode(true));
    });
  }, []);
  
  return (
    <BrowserRouter>
      <nav id="g45">
        <div className="Navbar">
          <div className="Navbardetail">
            <div className="Navbar_Logo">
              <Link to="/" style={{ display: "flex", width: "200px" }}>
                {/* <img
                  src={NavLogo}
                  alt="ImageTitle"
                  className="LogoCompanyWeebNav"
                /> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 90">
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="logo">
                      <g id="side-show-logo">
                        <polygon
                          className="cls-1"
                          points="0.8 1.22 29.73 1.22 63.94 71.8 49.72 101.15 0.8 1.22"
                        />
                        <polygon
                          className="cls-1"
                          points="69.25 1.15 98.14 1.22 131.89 71.46 117.5 101.15 69.25 1.15"
                        />
                        <polygon
                          className="cls-1"
                          points="136.88 1.3 165.96 1.15 151.43 31.31 136.88 1.3"
                        />
                        <polygon
                          className={scroll ? "cls-1 rtr4" : "cls-1"}
                          points="180.35 31.31 151.43 31.31 165.85 61.08 180.35 31.31"
                        />
                        <polygon
                          className={
                            scroll ? "slide-logo cls-2 e3e" : "slide-logo cls-2"
                          }
                          points="69.25 1.15 49.47 41.96 63.94 71.8 83.8 31.31 69.25 1.15"
                        />
                        <polygon
                          className={
                            scroll ? "slide-logo cls-2 e3e" : "slide-logo cls-2"
                          }
                          points="151.43 31.31 131.89 71.46 117.43 41.35 136.74 1.23 151.43 31.31"
                        />
                      </g>
                      <g
                        id={
                          scroll ? "side-hidden-logo dw3" : "side-hidden-logo"
                        }
                      >
                        <polygon
                          className={scroll ? "cls-2 pathrun" : "cls-2"}
                          points="180.35 1.22 209.28 1.22 243.49 71.8 229.27 101.15 180.35 1.22"
                        />
                        <polygon
                          className={scroll ? "cls-2 pathrun" : "cls-2"}
                          points="248.8 1.15 277.69 1.22 311.44 71.46 297.06 101.15 248.8 1.15"
                        />
                        <polygon
                          className={scroll ? "cls-2 pathrun" : "cls-2"}
                          points="316.44 1.3 345.52 1.15 330.98 31.31 316.44 1.3"
                        />
                        <polygon
                          className={scroll ? "cls-2 pathrun" : "cls-2"}
                          points="248.8 1.15 229.02 41.96 243.49 71.8 263.35 31.31 248.8 1.15"
                        />
                        <polygon
                          className={scroll ? "cls-2 pathrun" : "cls-2"}
                          points="330.98 31.31 311.44 71.46 296.98 41.35 316.29 1.23 330.98 31.31"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </Link>
            </div>
            <div className="Navbar_Detail_Deskop">
              <div className="MarginCenterProp">
                <div className="NavbarMenu">
                  <ul className="ListItemMenu">
                    <li>
                      <Link
                        to="/"
                        
                        className="ItemMenu RollingText"
                      >
                        Trang chủ
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/AboutUs"
                        
                        className="ItemMenu RollingText"
                      >
                        Về chúng tôi
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Services"
                        
                        className="ItemMenu RollingText"
                      >
                        <a
                        /* aria-owns={anchorEl ? "simple-menu" : undefined}
                          aria-haspopup="true"
                          onClick={handleClick}
                          onMouseOver={handleClick} */
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
                        
                        className="ItemMenu RollingText"
                      >
                        Dự án
                      </Link>
                    </li>
                    <li>
                      <Link
                       to="/FormLog"
                        
                        className="ItemMenu RollingText"
                      >
                        Đăng nhập
                      </Link>
                    </li>
                  </ul>
                  {/* <div>
                    <a className="ButtonContacttNavMenu"><MdPhoneInTalk className="cs45tr"/>Liên hệ</a>
                  </div> */}
                 
                </div>
              </div>
            </div>
            <div className="Navbar_Detail_Mobie">
              <a onClick={console}>
                <FiMenu fontSize={"5vh"} />
              </a>
              <a onClick={console02}>
                <AiOutlineCloseCircle fontSize={"5vh"} />
              </a>
             {/*  <a onClick={console03}>
                <FaBeer fontSize={"5vh"} />
              </a> */}
            </div>
          </div>
        </div>
        <div className={`DemoNavbarMobie ${ActiNavMobi} ${BgMobiNav}`}>
          <div className={`b01i7y de42`}></div>
          <div className={`b01i7y de42 `}></div>
          <div className={`b01i7y de42 `}></div>
          <div className={`b01i7y de42 `}></div>
          <div className={`b01i7y de42 `}></div>
          <div className={`sbret5 ${TitleMobiNav}`}>
            <p className="jyg7 vgo34">SERVICES</p>
            <p className="jyg7 vgo34">PROCESS</p>
            <p className="jyg7 vgo34">PROJECT</p>
            <p className="jyg7 vgo34">CONTACT</p>
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
        <Route path="/FormLog" element={<FormLog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navbar;
