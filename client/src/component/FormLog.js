import React, { useState,useEffect } from 'react';
import axios from 'axios';

import '../styles/FormLog.css';



function FormLog() {
    const [usernameReg, setusenameReg] = useState("");
    const [passwordReg, setpasswordReg] = useState("");
    const [tokenclient, settokenclient] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [LoadingMain, setLoadingMain] = useState(true);

    const LOGIN = async (e) => {
        e.preventDefault();
     
        const AUTHINFO = await axios.post('/api/login', {
            username: usernameReg,
            password: passwordReg
        })
        .then(res => {
            console.log(`${res.data}`);
            const TOKEN = res.data;
            return TOKEN
        })
        .catch(error => { console.log(error) })
        // console.log(`Đây là token nè : ${AUTHINFO}`);
        if (AUTHINFO == 'sd234r2r') {
        axios.get('/api/member')
        .then(res => {
        // console.log(`Đây là nội dung trả về từ axios 2 : bên dưới vvv`);
        console.log(res.data)
        setLoadingMain(false);
        const timer01 = setTimeout(() => {setLoadingMain(false);}, 700);
      

        setIsLoading(true);
        const timer = setTimeout(() => {setIsLoading(false);}, 700);
        return () => clearTimeout(timer,timer01);

        })
        .catch(error => console.log(error));
        }
    }
    const RESETMAIN = () => {
        console.log('sdjfhg');
        window.location.reload();
    }
    return (
        <div >
            <div className="login-root">
            {LoadingMain &&
                <div className="box-root flex-flex flex-direction--column" style={{ margin: 'auto'}}>

                    <div className="box-root padding-top--24 flex-flex flex-direction--column">
                        <div className="box-root padding-bottom--24 flex-flex flex-justifyContent--center">
                            <h1>Trang đăng nhập</h1>

                        </div>
                        <div>{tokenclient}</div>
                        <div className="formbg-outer">
                            <div className="formbg">
                                <div className="formbg-inner padding-horizontal--48">

                                    <form id="stripe-login">
                                        <div className="field padding-bottom--24">
                                            <label>Tên đăng nhập</label>
                                            <input
                                                type="text"
                                                onClick={() => settokenclient("")}
                                                onChange={(e) => {
                                                    setusenameReg(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="field padding-bottom--24">
                                            <div className="grid--50-50">
                                                <label>Mật khẩu</label>

                                            </div>
                                            <input
                                                type="text"
                                                onClick={() => settokenclient("")}
                                                onChange={(e) => {
                                                    setpasswordReg(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                                            <label>
                                                <input type="checkbox" name="checkbox" />
                                                Nhận thông báo từ WeeB
                                            </label>
                                        </div>
                                        <div className="field padding-bottom--24">
                                            <button
                                                onClick={LOGIN}
                                            >Đăng nhập</button>
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <a className="ssolink">Đăng nhập bằng GOogle</a>
                                            <a className="ssolink">Đăng nhập bằng Zalo</a>
                                            <a className="ssolink">Đăng nhập bằng FaceBook</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="footer-link padding-top--24">
                                <span>Bạn chưa có tài khoản ?  <a href="">Tạo tài khoản ngay!</a></span>
                                <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                                    <span><a href="#">© WeeBCompany</a></span>
                                    <span><a href="#">Liên hệ</a></span>
                                    <span><a href="#">Chính sách & Quyền riêng tư</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {!LoadingMain && (
                <>
                {isLoading &&
                <div className="LoadingPageFC">
                 <div className="wheel-and-hamster" role="img" aria-label="Orange and tan hamster running in a metal wheel">
                   <div className="wheel"></div>
                   <div className="hamster">
                     <div className="hamster__body">
                       <div className="hamster__head">
                         <div className="hamster__ear"></div>
                         <div className="hamster__eye"></div>
                         <div className="hamster__nose"></div>
                       </div>
                       <div className="hamster__limb hamster__limb--fr"></div>
                       <div className="hamster__limb hamster__limb--fl"></div>
                       <div className="hamster__limb hamster__limb--br"></div>
                       <div className="hamster__limb hamster__limb--bl"></div>
                       <div className="hamster__tail"></div>
                     </div>
                   </div>
                   <div className="spoke"></div>
                 </div>
                </div>
                }
                {!isLoading && (
                    <>
                    <h1>HGeloo cus</h1>
                    <button onClick={RESETMAIN} style={{height:'50px', width:'100px',marginLeft:' 123px' }}>LOG OUT !!</button>
                    </>
                )}
                </>
            )}
            
            </div>
           
        </div>
    );
}

export default FormLog;
