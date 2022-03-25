import NavLogo from '../asset/logo.svg';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbardetail">
        <div className="Navbar_Logo">
          <img src={NavLogo} alt="ImageTitle" />
        </div>
        <div className="Navbar_Detail">
            <div className="NavbarMenu">
              <ul className="ListItemMenu Nar">
                <li className="ItemMenu">
                  <a href="" class="">Về chúng tôi</a> 
                </li>
                <li className="ItemMenu">
                  <a href="" class="">Dự án</a>
                </li>
                <li className="ItemMenu">
                  <a href="" class="">Dịch vụ</a>
                </li>
              </ul>
            </div>
            <div className="ButtonContact_NavMenu">
              <button>LIÊN HỆ</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
