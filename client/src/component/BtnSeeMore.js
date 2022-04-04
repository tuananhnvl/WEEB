import React,{useState} from 'react';

import {RiArrowRightSLine} from 'react-icons/ri';
import "../styles/BtnSeeMore.css";
function BtnSeeMore() {
    const [Ehg54, setEhg54] = useState("");
    const [Hd23, setHd23] = useState("");
    const hoverOn = () => {
        setEhg54("moveicon");
        setHd23("movetext");
    }
    const hoverOff = () => {
        setEhg54("");
        setHd23("");
    }

    return (
        <>
        <div style={{display:'flex',width:'100%'}} onMouseEnter={hoverOn} onMouseLeave={hoverOff}/*  className="kuh4" */>
            <h2 style={{margin:'0.5rem',width:'fit-content'}} >Dịch vụ</h2>
            <div  className="ad3fd">
                <RiArrowRightSLine className={`default ${Ehg54}`}/>
                <a className={`TextSeeMore ${Hd23}`}>Xem chi tiết</a>
            </div>
        </div>
        </>
    )
}
export default BtnSeeMore;