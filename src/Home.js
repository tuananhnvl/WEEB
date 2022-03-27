/* IMPORT STYLE "CSS" AND DEFEN */
import React, { useEffect, useState } from "react";
import "./styles/Home.css";
import "./styles/GIRD.css";
import { anime } from "react-anime";

import "./styles/SliderWWU.css";
import "./styles/SliderFeedback.css";

import { FaPlus } from "react-icons/fa";
import { RiArrowRightSLine } from 'react-icons/ri';
/* IMPORT ASSET */
import svgdemo from "./asset/svgdemo.png";
import ImageBanner from "./asset/ab.svg";
import ImageProject from "./asset/demo-project.png";
import ProjectImg from "./asset/project.jpg"
import projectView01 from "./asset/projectView.jpg"
import projectView02 from "./asset/projectView01.jpg"
import projectView03 from "./asset/projectView02.jpg"
import projectView from "./asset/projectView03.jpg"
/* IMPORT COMPONENT */
import Slider2Bar from "./component/Slider2Bar";
import SliderFeedback from "./component/SliderFeedback";
import SliderWWU from "./component/SliderWWU.js";
import Footer from "./component/Footer.js";

function Home() {


  function animation() {
    anime({
      targets: ".kjsdhrfgkljdfs",

      translateX: 20,
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
    });
  }
  useEffect(() => {
    animation();
  }, []);

  function SliderLoop() {
    anime({
      targets: ".AnimejsSliderLoop",
      translateX: -1000,
      loop: true,
      autoplay: true,
      direction: "alternate",
      easing: "linear",
      duration: 62000,
    });
  }
  useEffect(() => {
    SliderLoop();
  }, []);
  const [hover, setHover] = useState("");
  const [hover01, setHover01] = useState("");
  const [hover02, setHover02] = useState("");
  const [hover03, setHover03] = useState("");


  const hoverOn = () => setHover("fr233");
  const hoverOff = () => setHover("");
  const hoverOn01 = () => setHover01("fr233");
  const hoverOff01 = () => setHover01("");
  const hoverOn02 = () => setHover02("fr233");
  const hoverOff02 = () => setHover02("");
  const hoverOn03 = () => setHover03("fr233");
  const hoverOff03 = () => setHover03("");



  /* CONFIG CONTROL HOVER ++ */
  function handleMouseEnter(e) {
    const iy9 = e.target;
    const en43t = iy9.querySelector('.TextSeeMore');
    const enasdasd43t = iy9.querySelector('.default');
    en43t.classList.add("movetext");
    enasdasd43t.classList.add("moveicon");
  }

  function handleMouseLeave(e) {
    const iy3ng = e.target;
    const en43sdt = iy3ng.querySelector('.TextSeeMore');
    const en23423t = iy3ng.querySelector('.default');
    en43sdt.classList.remove("movetext");
    en23423t.classList.remove("moveicon");
  }
/* CONFIG LOAING LAZY */
const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // activate loading state when component mounts
    setIsLoading(true);
    const timer = setTimeout(() => {
    
      // disable loading after 5 seconds
      setIsLoading(false);
    }, 1700);
    // Cancel the timer while unmounting
    return () => clearTimeout(timer);
  }, []);
 
  return (
    <>
    {isLoading && 
      <div className="LoadingPageFC">
        <div class="wheel-and-hamster" role="img" aria-label="Orange and tan hamster running in a metal wheel">
          <div class="wheel"></div>
          <div class="hamster">
            <div class="hamster__body">
              <div class="hamster__head">
                <div class="hamster__ear"></div>
                <div class="hamster__eye"></div>
                <div class="hamster__nose"></div>
              </div>
              <div class="hamster__limb hamster__limb--fr"></div>
              <div class="hamster__limb hamster__limb--fl"></div>
              <div class="hamster__limb hamster__limb--br"></div>
              <div class="hamster__limb hamster__limb--bl"></div>
              <div class="hamster__tail"></div>
            </div>
          </div>
          <div class="spoke"></div>
        </div>
      </div>
      }
      {!isLoading && (
    <div>
      <div className="BANNER">
        <div className="Container">
          <div className="Row" style={{ flexWrap: "unset" }}>
            <div className="col-lg-50 BannerItem">
              <div className="ImageBanner sdf254">
                <svg
                  id="svg"
                  width="550"
                  height="660"
                  viewBox="0 0 550 600"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.07"
                    d="M0.0696081 315.36C8.90983 310.203 15.3138 310.063 19.2814 314.941C23.2491 319.75 25.1981 327.903 25.1981 339.402V401.353C25.1981 413.13 26.3118 422.887 28.4697 430.622C30.6275 438.636 34.3168 444.35 39.3982 447.695C44.3403 451.11 51.0227 452.016 59.5149 450.413C67.7983 448.88 78.1699 444.559 90.5601 437.381L96.4768 433.967V385.186L89.0983 389.437C80.2581 394.594 74.3414 395.221 71.3483 391.458C68.2159 387.834 66.6149 380.238 66.6149 368.74V314.175C66.6149 299.959 65.2228 288.739 62.4384 280.446C59.6541 272.223 54.1551 266.927 45.8717 264.558C54.1551 252.641 59.6541 241.003 62.4384 229.575C65.2228 218.146 66.5453 205.324 66.5453 191.108V136.543C66.5453 125.044 68.1463 115.706 71.2787 108.389C74.2022 101.211 80.1189 95.0789 89.0287 89.922L96.4072 85.6711V36.8902L90.4905 40.3049C78.0306 47.5523 67.659 55.1482 59.4453 63.2319C50.9531 71.3853 44.2707 80.0962 39.3286 89.2252C34.1776 98.4935 30.5579 108.389 28.4001 118.912C26.2422 129.156 25.1285 140.166 25.1285 151.943V213.895C25.1285 225.394 23.1795 235.847 19.2118 245.185C15.2442 254.592 8.84022 261.84 0 266.927L0.0696081 315.36Z"
                    fill="url(#paint0_linear_21_469)"
                  />
                  <path
                    opacity="0.07"
                    d="M224.556 135.916C215.715 141.072 209.312 141.212 205.344 136.334C201.376 131.525 199.427 123.372 199.427 111.874V49.9218C199.427 38.1447 198.313 28.3885 196.156 20.6532C193.998 12.6392 190.448 6.85521 185.506 3.44055C180.355 0.0955706 173.672 -0.81036 165.389 0.722754C156.897 2.32556 146.455 6.71584 134.065 13.8936L128.148 17.3083V66.0892L135.527 61.8383C144.367 56.6814 150.423 55.9845 153.555 59.6083C156.479 63.3714 158.01 70.9673 158.01 82.4656V137.031C158.01 151.247 159.403 162.466 162.187 170.759C164.971 178.982 170.47 184.278 178.754 186.648C170.47 198.564 164.971 210.202 162.187 221.631C159.403 233.059 158.08 245.882 158.08 260.098V314.663C158.08 326.161 156.618 335.499 153.625 342.677C150.493 349.994 144.437 356.196 135.597 361.283L128.218 365.534V414.315L134.135 410.9C146.525 403.723 156.966 396.057 165.458 387.904C173.742 379.82 180.424 371.179 185.575 361.911C190.517 352.782 194.067 342.956 196.225 332.363C198.383 322.119 199.497 311.039 199.497 299.332V237.38C199.497 225.881 201.446 215.428 205.413 206.09C209.381 196.683 215.785 189.435 224.625 184.348L224.556 135.916Z"
                    fill="url(#paint1_linear_21_469)"
                  />
                  <path
                    opacity="0.4"
                    d="M27.9128 336.266C36.753 331.109 43.157 330.969 47.1246 335.847C51.0923 340.656 53.0413 348.809 53.0413 360.308V422.259C53.0413 434.036 54.155 443.793 56.3129 451.528C58.4707 459.542 62.16 465.256 67.2414 468.601C72.1835 472.016 78.8659 472.922 87.3581 471.319C95.6415 469.786 106.013 465.465 118.403 458.288L124.32 454.873V406.092L116.942 410.343C108.101 415.5 102.185 416.127 99.1915 412.364C96.0591 408.74 94.4581 401.144 94.4581 389.646V335.081C94.4581 320.865 93.066 309.645 90.2816 301.352C87.4973 293.129 81.9983 287.833 73.7149 285.464C81.9983 273.547 87.4973 261.91 90.2816 250.481C93.066 239.052 94.3885 226.23 94.3885 212.014V157.449C94.3885 145.95 95.9895 136.612 99.1219 129.295C102.045 122.117 107.962 115.985 116.872 110.828L124.25 106.577V57.7963L118.334 61.211C105.943 68.3888 95.5718 75.9846 87.2885 84.0683C78.7963 92.2217 72.1139 100.933 67.1718 110.062C62.0208 119.33 58.4011 129.226 56.2433 139.748C54.0854 150.062 52.9717 161.072 52.9717 172.85V234.801C52.9717 246.3 51.0227 256.753 47.055 266.091C43.0874 275.429 36.753 282.746 27.8432 287.833L27.9128 336.266Z"
                    fill="url(#paint2_linear_21_469)"
                  />
                  <path
                    opacity="0.4"
                    d="M252.399 156.822C243.559 161.978 237.155 162.118 233.187 157.24C229.219 152.431 227.27 144.278 227.27 132.78V70.8279C227.27 59.0508 226.157 49.2946 223.999 41.5593C221.841 33.5453 218.291 27.7613 213.349 24.3466C208.198 21.0017 201.515 20.0957 193.232 21.6289C184.74 23.2317 174.299 27.6219 161.908 34.7997L155.992 38.2144V86.9953L163.37 82.7444C172.21 77.5875 178.266 76.8906 181.399 80.5144C184.322 84.2775 185.854 91.8734 185.854 103.372V157.937C185.854 172.153 187.246 183.372 190.03 191.665C192.814 199.888 198.313 205.184 206.597 207.554C198.313 219.47 192.814 231.108 190.03 242.537C187.246 253.965 185.923 266.788 185.923 281.004V335.569C185.923 347.067 184.461 356.405 181.468 363.583C178.336 370.9 172.28 377.102 163.44 382.189L156.061 386.44V435.221L161.978 431.807C174.368 424.629 184.809 416.963 193.302 408.81C201.585 400.726 208.267 392.085 213.418 382.817C218.361 373.688 221.911 363.862 224.068 353.269C226.226 343.025 227.34 331.945 227.34 320.238V258.286C227.34 246.788 229.289 236.335 233.257 226.996C237.224 217.589 243.628 210.341 252.469 205.254L252.399 156.822Z"
                    fill="url(#paint3_linear_21_469)"
                  />
                  <path
                    class="kjsdhrfgkljdfs"
                    opacity="0.15"
                    d="M406.929 8.5278L287.969 77.3089L288.038 362.538L406.999 293.757L406.929 8.5278Z"
                    fill="url(#paint4_linear_21_469)"
                  />
                  <path
                    d="M429.273 52.3609L334.676 107.065V133.267L429.273 78.5632V52.3609Z"
                    fill="#F2C94C"
                  />
                  <path
                    opacity="0.15"
                    d="M392.241 166.369L301.333 218.913V259.749L392.241 207.205V166.369Z"
                    class="kjsdhrfgkljdfs"
                    fill="white"
                  />
                  <path
                    opacity="0.15"
                    d="M392.311 116.961L301.264 169.574V179.052L392.311 126.438V116.961Z"
                    fill="white"
                  />
                  <path
                    opacity="0.15"
                    d="M392.311 135.497L313.584 181.003V190.48L392.311 144.975V135.497Z"
                    class="kjsdhrfgkljdfs"
                    fill="white"
                  />
                  <path
                    opacity="0.2"
                    d="M406.929 8.5278L287.969 77.3089V115.567L406.929 46.786V8.5278Z"
                    fill="url(#paint5_linear_21_469)"
                  />
                  <path
                    opacity="0.2"
                    d="M377.206 45.0436C377.206 50.8276 380.617 53.5454 384.793 51.176C388.97 48.737 392.311 42.1167 392.311 36.3327C392.311 30.5487 388.9 27.8309 384.724 30.2002C380.547 32.6393 377.206 39.2595 377.206 45.0436Z"
                    fill="white"
                  />
                  <path
                    opacity="0.15"
                    d="M260.752 272.99L141.792 341.771L141.861 627L260.822 558.219L260.752 272.99Z"
                    fill="url(#paint6_linear_21_469)"
                  />
                  <path
                    class="kjsdhrfgkljdfs"
                    d="M215.437 355.987L120.84 410.691V436.894L215.437 382.189V355.987Z"
                    fill="#F2994A"
                  />
                  <path
                    opacity="0.15"
                    d="M246.065 383.095L155.087 435.709V476.476L246.065 423.862V383.095Z"
                    fill="white"
                  />
                  <path
                    opacity="0.15"
                    d="M246.134 441.354L155.087 493.967V503.445L246.134 450.901V441.354Z"
                    fill="white"
                  />
                  <path
                    opacity="0.15"
                    d="M246.134 458.497L167.407 504.002V513.48L246.134 467.974V458.497Z"
                    fill="white"
                  />
                  <path
                    opacity="0.2"
                    d="M260.752 272.99L141.792 341.771V380.029L260.752 311.248V272.99Z"
                    fill="url(#paint7_linear_21_469)"
                  />
                  <path
                    class="kjsdhrfgkljdfs"
                    opacity="0.2"
                    d="M231.029 309.576C231.029 315.36 234.44 318.077 238.616 315.708C242.793 313.269 246.134 306.649 246.134 300.865C246.134 295.081 242.723 292.363 238.547 294.732C234.37 297.102 231.029 303.791 231.029 309.576Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M281.286 312.502L488.44 192.78L488.37 300.865L299.524 410.064L281.286 437.173V312.502Z"
                    fill="url(#paint8_linear_21_469)"
                  />
                  <path
                    opacity="0.15"
                    d="M334.536 308.042L379.921 281.84V291.317L334.536 317.52V308.042Z"
                    fill="white"
                  />
                  <path
                    opacity="0.15"
                    d="M334.536 327.067L446.953 262.119V271.596L334.536 336.544V327.067Z"
                    fill="white"
                  />
                  <path
                    opacity="0.15"
                    d="M334.536 346.092L470.133 267.694V277.171L334.536 355.569V346.092Z"
                    fill="white"
                  />
                  <path
                    d="M323.399 324.419C323.399 333.339 318.109 343.583 311.636 347.346C305.162 351.109 299.872 346.928 299.872 338.008C299.872 329.088 305.162 318.844 311.636 315.081C318.109 311.318 323.399 315.499 323.399 324.419Z"
                    class="kjsdhrfgkljdfs"
                    fill="#F2994A"
                  />
                  <path
                    opacity="0.15"
                    d="M467.975 116.961L495.401 101.072V91.8038L467.975 107.692C465.748 109.016 462.476 111.595 459.692 115.637C456.698 119.957 454.541 125.393 454.541 131.316C454.541 137.867 456.211 141.56 459.344 142.675C462.337 143.651 465.817 141.978 467.975 140.724L479.251 134.173L479.321 134.104C480.296 133.546 481.827 132.989 483.01 133.337C483.985 133.616 485.168 134.661 485.168 138.285C485.168 141.909 484.054 144.139 483.08 145.463C481.897 147.135 480.365 148.32 479.391 148.808L479.251 148.877L444.726 168.808V178.076L479.043 158.215C481.409 156.961 484.82 154.383 487.744 150.271C490.946 145.742 493.173 140.027 493.173 133.616C493.173 127.274 490.946 123.999 487.813 123.093C484.89 122.257 481.479 123.511 479.112 124.905L467.905 131.386C466.304 132.292 465.051 132.71 464.286 132.431C463.659 132.222 462.546 131.316 462.546 126.647C462.546 123.581 463.52 121.63 464.495 120.236C465.608 118.703 467.07 117.449 467.975 116.961Z"
                    fill="white"
                  />
                  <path
                    d="M487.257 102.048C487.257 109.992 491.921 113.685 497.628 110.41C503.336 107.135 508 98.0058 508 90.0615C508 82.1171 503.336 78.4237 497.628 81.699C491.851 85.044 487.257 94.173 487.257 102.048Z"
                    class="kjsdhrfgkljdfs"
                    fill="#F2C94C"
                  />
                  <path
                    d="M432.266 178.703C432.266 186.648 436.93 190.411 442.638 187.066C448.346 183.721 453.009 174.662 453.009 166.717C453.009 158.773 448.346 155.01 442.638 158.355C436.86 161.7 432.266 170.829 432.266 178.703Z"
                    fill="#F2C94C"
                  />
                  <path
                    opacity="0.2"
                    d="M358.273 421.005C354.096 423.444 350.755 429.228 350.755 434.106V455.361L336.694 463.444C332.518 465.884 329.176 471.668 329.176 476.546C329.176 481.354 332.587 483.305 336.694 480.936L350.755 472.852V494.107C350.755 498.915 354.166 500.866 358.273 498.497C362.449 496.058 365.79 490.274 365.79 485.396V464.141L379.851 456.058C384.028 453.619 387.369 447.835 387.369 442.956C387.369 438.148 383.958 436.197 379.851 438.566L365.79 446.65V425.395C365.79 420.517 362.449 418.566 358.273 421.005Z"
                    fill="url(#paint9_linear_21_469)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_21_469"
                      x1="-43.7446"
                      y1="50.98"
                      x2="128.222"
                      y2="348.687"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_21_469"
                      x1="38.8021"
                      y1="2.00981"
                      x2="210.769"
                      y2="299.717"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_21_469"
                      x1="-15.9012"
                      y1="71.886"
                      x2="156.066"
                      y2="369.593"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_21_469"
                      x1="66.6454"
                      y1="22.9158"
                      x2="238.612"
                      y2="320.623"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_21_469"
                      x1="285.789"
                      y1="78.5306"
                      x2="399.63"
                      y2="275.537"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_21_469"
                      x1="366.092"
                      y1="9.11003"
                      x2="329.814"
                      y2="111.857"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint6_linear_21_469"
                      x1="139.618"
                      y1="343.01"
                      x2="253.459"
                      y2="540.017"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint7_linear_21_469"
                      x1="219.921"
                      y1="273.59"
                      x2="183.642"
                      y2="376.336"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint8_linear_21_469"
                      x1="326.488"
                      y1="269.249"
                      x2="433.534"
                      y2="352.968"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint9_linear_21_469"
                      x1="343.732"
                      y1="448.157"
                      x2="380.219"
                      y2="476.901"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

              </div>
            </div>
            <div className="col-lg-50 BannerItem">
              <div className="FormBanner sdfg53">
                <div className="MarginCenterProp">
                  <h3 style={{ margin: "0.5rem 0 2rem 0" }}>Xây dựng website của bạn</h3>
                  <p>
                    Với sự hỗ trợ từ Chúng tôi, Bạn sẽ tạo ra một website một cách nhanh chóng, dễ dàng và phù hợp với Doanh nghiệp của bạn.
                  </p>
                  <div style={{ display: "flex" }}>
                    <button className="ButtonContact abx">Liên hệ</button>
                    <button className="ButtonContact aby">Tìm hiểu thêm</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ABOUTWEEB MARGINSECTION">
        <div className="Container">
          <div
            className="Row"
            style={{ flexWrap: "wrap", justifyContent: "space-around" }}
          >
            <div className="col-lg-70 AboutItem01">
              <img src={ImageProject} alt="ImageTitle" />
            </div>
            <div className="col-lg-30 AboutItem02 ">
              <dic className="MarginCenterProp" style={{ padding: "1rem" }}>
                <h2>WEEB</h2>
                <p style={{ letterSpacing: '2px' }}>
                  Trải nghiệm dịch vụ tư vấn hỗ trợ chuyển đổi số hàng đầu.
                </p>
                <button className="ButtonContact" style={{ width: '100%' }}>Tìm hiểu thêm</button>
              </dic>
            </div>
          </div>
        </div>
      </div>
      <div className="SLIDER-TECH MARGINSECTION">
        <div className="Container">
            <h2 className="t34r">Công nghệ WEEB sử dụng</h2>
        </div>
        <Slider2Bar />
      </div>
      <div className="WORKWITHUS MARGINSECTION">
        <div className="Container" style={{ padding: "0 1rem" }}>
          <div className="g3tr" onMouseOut={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}  /*  class="kuh4" */>
            <h2 className="BorderHeadingBottom">Hỗ trợ từ WEEB</h2>
            <div class="ad3fd" >
              <RiArrowRightSLine className="default" />
              <a id="kuuh" className="TextSeeMore">Xem chi tiết</a>
            </div>
          </div>
          <div className="Row" >
            <div className="col-lg-50 col-lrtosm-100">
              <div className="WorkwithusContent">
                <h4>THIẾT KẾ NỔI BẬT</h4>
                <FaPlus className="jyt6" />
              </div>
              <div className="WorkwithusContent">
                <h4>TỐI ƯU HÓA WEBSITE</h4>
                <FaPlus className="jyt6" />
              </div>
              <div className="WorkwithusContent">
                <h4>THIẾT KẾ HƯỚNG NGƯỜI DÙNG</h4>
                <FaPlus className="jyt6" />
              </div>
              <div className="WorkwithusContent">
                <h4>THEO SÁT YÊU CẦU</h4>
                <FaPlus className="jyt6" />
              </div>
            </div>

            <div className="col-lg-50 WorkwithusImg">
              <SliderWWU />
            </div>
          </div>
        </div>
      </div>
      <div className="PARTNERWEEB MARGINSECTION">
        <div className="Container">
          <h2 className="t34r">Đối tác đồng hành cùng WEEB</h2>
        </div>
        <div className="SLIDERLOOP">
          <img src={svgdemo} alt="ImageTitle" className="AnimejsSliderLoop" />
        </div>
      </div>
      <div className="SERVICES MARGINSECTION">

        <div className="Container" style={{ padding: "0 1rem" }}>
          <div className="g3tr" onMouseOut={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}  /*  class="kuh4" */>
            <h2 className="BorderHeadingBottom">DỊCH VỤ</h2>
            <div class="ad3fd" >
              <RiArrowRightSLine className="default" />
              <a id="kuuh" className="TextSeeMore">Xem chi tiết</a>
            </div>

          </div>
          <div className="Row" style={{ justifyContent: "space-around" }}>
            <div className="col-lg-50 col-md-5 StyleBoxSer ">
              <div className="ItemSerHalf H6J">
                <h3>DESIGN UX/UI</h3>
                <p>
                  Viverra thithihac habitasse platea. Eu sem integer vitae justo
                  eget magna fermentum.
                </p>
              </div>
              <div className="ItemSerHalf f432 H6J">
                <h3>DESIGN LOGO</h3>
                <p>
                  Viverra thithihac habitasse platea. Eu sem integer vitae justo
                  eget magna fermentum.
                </p>
              </div>
            </div>
            <div className="col-lg-50 col-md-7 StyleBoxSer">
              <div className="ItemSerFull">
                <h3>BUILD WEBSITE</h3>
                <p>
                  Viverra thithihac habitasse pthihac habitasse platea. Eu sem
                  integer vitae justo eget magna fermenlatea. Eu sem integer
                  vitae justo eget magna fermentum.
                </p>
              </div>
            </div>
            <div className="col-lg-50 col-md-5 StyleBoxSer">
              <div className="ItemSerFull f432 H6J">
                <h3>BUILD BRAND</h3>
                <p>
                  Viverra thithihac habitasse platea. Eu sem integer vitae justo
                  eget magna ferthihac habitasse platea. Eu sem integer vitae
                  justo eget magna fermenmentum.
                </p>
              </div>
            </div>
            <div className="col-lg-50 col-md-7 StyleBoxSer">
              <div className="ItemSerFull">
                <h3>OPTIMAZE SEO</h3>
                <p>
                  Viverra thithihac habitasse platea. Eu sem integer vitae justo
                  eget magna fermentthihac habitasse platea. Eu sem integer
                  vitae justo eget magna fermenthihac habitasse platea. Eu sem
                  integer vitae justo eget magna fermenum.
                </p>
              </div>
            </div>
          </div>
          <div class="BtnContactOnMobie">
            <button className="ButtonContact aby" style={{ width: '100%' }}>Liên hệ với WEEB</button>
          </div>
        </div>
      </div>
      <div className="PROJECT MARGINSECTION">
        <div className="Container" style={{ padding: '1rem' }}>

          <div className="g3tr" onMouseOut={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}  /*  class="kuh4" */>
            <h2 className="BorderHeadingBottom">DỰ ÁN WEEB ĐÃ&nbsp;THAM GIA</h2>
            <div class="ad3fd" >
              <RiArrowRightSLine className="default" />
              <a id="kuuh" className="TextSeeMore">Xem chi tiết</a>
            </div>

          </div>
          <div className="Row">
            <div className="col-lg-50 col-lrtosm-100">
              <div className="ProjectItem f432 H6J">
                <div className="ProjectItemImg" onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                  <img className="t7y2 b34d2" src={ProjectImg} alt="Dự án khách hàng WEEB" />
                  <img className={`t7y2 yt74h ${hover}`} src={projectView} alt="Dự án khách hàng WEEB" />
                </div>
                <div className="ProjectItemContent">
                  <p>Petrolimex</p>
                  <p>
                    Sed sed risus pretium quam vulputate dignissim. Tellus orci
                    ac auctor augue mauris enim nulla aliquet.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-50 col-lrtosm-100">
              <div className="ProjectItem ">
                <div className="ProjectItemImg" onMouseEnter={hoverOn01} onMouseLeave={hoverOff01}>
                  <img className="t7y2 b34d2" src={ProjectImg} alt="Dự án khách hàng WEEB" />
                  <img className={`t7y2 yt74h ${hover01}`} src={projectView01} alt="Dự án khách hàng WEEB" />
                </div>
                <div className="ProjectItemContent">
                  <p>NamVietLaw lawfirm</p>
                  <p>
                    Sed sed risus pretium quam vulputate dignissim. Tellus orci
                    ac auctor augue mauris augue neque. Suspendisse sed nisi
                    lacus sed viverra. Varius sit amet mattis vulputate enim
                    nulla aliquet.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-50 col-lrtosm-100">
              <div className="ProjectItem f432 H6J">
                <div className="ProjectItemImg" onMouseEnter={hoverOn02} onMouseLeave={hoverOff02}>
                  <img className="t7y2 b34d2" src={ProjectImg} alt="Dự án khách hàng WEEB" />
                  <img className={`t7y2 yt74h ${hover02}`} src={projectView02} alt="Dự án khách hàng WEEB" />
                </div>
                <div className="ProjectItemContent">
                  <p>Hai Son Co. LTD</p>
                  <p>
                    Sed sed risus pretium quam vulputate dignissim. Tellus orci
                    ac auctor augue mauris{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-50 col-lrtosm-100">
              <div className="ProjectItem">
                <div className="ProjectItemImg" onMouseEnter={hoverOn03} onMouseLeave={hoverOff03}>
                  <img className="t7y2 b34d2" src={ProjectImg} alt="Dự án khách hàng WEEB" />
                  <img className={`t7y2 yt74h ${hover03}`} src={projectView03} alt="Dự án khách hàng WEEB" />
                </div>
                <div className="ProjectItemContent">
                  <p>Hoarient Co. LTD</p>
                  <p>
                    Sed sed risus pretium quam vulputate dignissim. Tellus orci
                    ac auctor augue mauris enim nulla aliquet.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="BtnContactOnMobie">
            <button className="ButtonContact aby" style={{ width: '100%' }}>Xem thêm dự án</button>
          </div>
        </div>
      </div>
      <div className="FEEDBACKCUSTOMER MARGINSECTION">
        <div className="Container" style={{ padding: "0 1rem" }}>
          <div className="g3tr" onMouseOut={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}  /*  class="kuh4" */>
            <h2 className="BorderHeadingBottom">PHẢN HỒI TỪ KHÁCH HÀNG</h2>
            <div class="ad3fd" >
              <RiArrowRightSLine className="default" />
              <a id="kuuh" className="TextSeeMore">Xem chi tiết</a>
            </div>

          </div>

          <SliderFeedback />
        </div>
      </div>
      <Footer />
    </div>
    )}
    </>
  );
}

export default Home;
