import React, { useState,useEffect } from 'react';
import axios from 'axios';

import '../styles/FormLog.css';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function FormLog() {
    const [usernameReg, setusenameReg] = useState("");
    const [passwordReg, setpasswordReg] = useState("");
    const [tokenclient, settokenclient] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [LoadingMain, setLoadingMain] = useState(true);
    const [Items, setItems] = useState([]);
    const [UserDasboard, setUserDasboard] = useState("");
    
    const LOGIN = async(e) => {
        e.preventDefault();
     
        const AUTHINFO = await axios.post('/api/login', {
            username: usernameReg,
            password: passwordReg
        })
        .then(res => {
            //console.log(`${res.data}`);
            console.log('Đã nhận TOKEN');
            const TOKEN = res.data;
            setUserDasboard(usernameReg);
            return TOKEN
        })
        .catch(error => { console.log(error) })
        // console.log(`Đây là token nè : ${AUTHINFO}`);
        if (AUTHINFO == 'sd234r2r') {
        const DATAINFO = await axios.get('/api/member')
        .then(res => {
        // console.log(`Đây là nội dung trả về từ axios 2 : bên dưới vvv`);
        const items = res.data;
        const hsder5 = items.items;
        setLoadingMain(false);
        setTimeout(() => {setLoadingMain(false);}, 700);
        setIsLoading(true);
        setTimeout(() => {setIsLoading(false);}, 700); 

        return hsder5

        })
        .catch(error => console.log(error));
      
        console.log('Get data form server ....')
        setItems(DATAINFO);
        const itemData = JSON.stringify(DATAINFO);
        console.log(itemData);
        return itemData
        }
      
        
    }
    const RESETMAIN = () => {
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
                                            <div className="ssolink">Đăng nhập bằng GOogle</div>
                                            <div className="ssolink">Đăng nhập bằng Zalo</div>
                                            <div className="ssolink">Đăng nhập bằng FaceBook</div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="footer-link padding-top--24">
                                <span>Bạn chưa có tài khoản ?  <a href="">Tạo tài khoản ngay!</a></span>
                                <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                                    <span><div>© WeeBCompany</div></span>
                                    <span><div>Liên hệ</div></span>
                                    <span><div>Chính sách & Quyền riêng tư</div></span>
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
                    <div style={{display:'flex',width:'800px',margin:'0 auto'}}>
                    <p style={{fontSize:'1.7rem'}}>Data của Username : <strong>{UserDasboard}</strong></p>
                    <Button variant="outlined"  onClick={RESETMAIN} style={{height:'50px', width:'fit-content',margin:' auto' }}>LOG OUT !!</Button>
                    </div>
                    
                 
                 
                    <div style={{maxWidth:'1200px',margin:'0 auto'}}>
                       <TableContainer component={Paper} >
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                            <TableRow>
                                <TableCell align="left">ID</TableCell>
                                <TableCell align="left">Danh sách phim</TableCell>
                                <TableCell align="left">Danh sách bạn bè</TableCell>
                                <TableCell align="left">Thông tin thêm</TableCell>
                                <TableCell align="left">Tuỳ chỉnh</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {Items.map(item => (
                                <TableRow>
                                <TableCell align="left">{item.id}</TableCell>
                                <TableCell align="left">{item.flimlist}</TableCell>
                                <TableCell align="left">{item.listfriends}</TableCell>
                                <TableCell align="left">{item.moreinfo}</TableCell>
                                <TableCell align="left">
                                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                        <Button variant="outlined" >Chỉnh sửa</Button>
                                        <Button >Xoá</Button>
                                    </ButtonGroup>
                                </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                    </div>
                    
          
                   
                    </>
                )}
                </>
            )}
            
            </div>
           
        </div>
    );
}

export default FormLog;
