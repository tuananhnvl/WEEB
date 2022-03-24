/*import style and defen */
import NavLogo from "../asset/logo.svg";
import "../styles/Navbar.css";
import React from "react";
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
  return (
    <BrowserRouter>
      <nav>
        <div className="Navbar">
          <div className="Navbardetail">
            <div className="Navbar_Logo">
              <Link to="/">
                <img
                  src={NavLogo}
                  alt="ImageTitle"
                  className="LogoCompanyWeebNav"
                />
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
