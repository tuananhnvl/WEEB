import NavLogo from "../asset/logo.svg";
import "../styles/Footer.css";
import "../styles/GIRD.css";

import { FaFacebook,FaTelegram,FaInstagram,FaLinkedin,FaGoogle,FaGlobeAmericas } from 'react-icons/fa';
import { IconContext } from "react-icons";

function Footer() {
  return (
    <div className="Footer">
      <div className="Container">
        <div className="Row" style={{margin:"0 0 3rem 0"}}>
          <div className="col-lg-30 col-lrtosm-30">
          <img src={NavLogo} alt="ImageTitle" />
          </div>
          
          <div className="col-lg-70 col-lrtosm-70 d32r" style={{display:'flex'}}>
            <div className="col-lg-33 col-lrtosm-100">
              <div className="FooterDetail">
                <h3>Dịch vụ</h3>
                <ul style={{paddingLeft:"0",listStyleType:"none"}}>
                  <li>Tối ưu hóa công cụ tìm kiếm (SEO)</li>
                  <li>Xây dựng Website</li>
                  <li>Thiết kế thương hiệu</li>
                
                </ul>
              </div>
            </div>
            <div className="col-lg-66 col-lrtosm-100" style={{display:'flex'}}>
              <div className="col-lg-50 col-lrtosm-50">
                <div className="FooterDetail">
                <h3>Công ty</h3>
                <ul style={{paddingLeft:"0",listStyleType:"none"}}>
                  <li>Liên hệ</li>
                  <li>Để lại yêu cầu</li> 
                  <li>Chính sách & quyền lợi khách hàng</li>
                 
                </ul>
                </div>
              </div>
            <div className="col-lg-50 col-lrtosm-50">
              <div className="FooterDetail">
                <h3>Hỗ trợ</h3>
                <ul style={{paddingLeft:"0",listStyleType:"none"}}>
                  <li>Về Chúng tôi</li>
                  <li>Đội ngũ</li>
                  <li>Dự án</li>
                  <li>Công tác</li>
                </ul>
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
      <div className="Container">
      <IconContext.Provider value={{ className: "Icon-Footer" }}>
        <div className="Row">
          <div className="col-lg-253 col-lrtosm-100 safg3" style={{textAlign:'center'}}>
          <FaFacebook />
          <FaTelegram />
          <FaInstagram />
          <FaLinkedin />
          <FaGoogle />
          </div>
          <div className="col-lg-253 col-lrtosm-100 safg3">
            <p style={{color:"white",margin:"0",textAlign:"center"}}>Bản quyền bởi WeeB Company Co.ltd. Alright services.</p>
          </div>
          <div className="col-lg-253 col-lrtosm-100 safg3">
            <div className="Lang-Icon">
            <FaGlobeAmericas/>
            <p>Tiếng Việt</p>
            </div>
            
          </div>
        </div>
      </IconContext.Provider>
      </div>
    </div>
  );
}

export default Footer;
