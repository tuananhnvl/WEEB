import React,{useState} from 'react';

import {RiArrowRightSLine} from 'react-icons/ri';
import "../styles/BtnSeeMore.css";
function BtnSeeMore() {
    const [hover, setHover] = useState("default");
    const hoverOn = () => setHover("move");
    const hoverOff = () => setHover("default");

    return (
        <>
        <div style={{display:'flex',width:'fit-content'}}>
            <h2 style={{margin:'0'}} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>Dịch vụ</h2>
            <a  id='anime' style={{position:'relative',width:'100px',height:'auto'}}>
                <RiArrowRightSLine className={hover}/>
                <p className="TextSeeMore">Xem chi tiết</p>
            </a>
        </div>
        </>
    )
}
export default BtnSeeMore;