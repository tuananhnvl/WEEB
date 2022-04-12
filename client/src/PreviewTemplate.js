import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import "./styles/PreviewTemplate.css"
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
function PreviewTemplate() {
    const location = useLocation();

    console.log('hahaha');
    console.log(location.state.infopreview);
    return (
        <>
        <div className='Row'>
            <div className="col-lg-25">
                <h1 >PREVIEW TEMPLATE</h1>
                <h3>Mã số : {location.state.infopreview.id}</h3>
                <p>Tên : {location.state.infopreview.title}</p>
                <p>Nguồn : {location.state.infopreview.src}</p>
                <p>Giá : {location.state.infopreview.price}</p>
                <Link to="/KhoGiaoDien">
                    <Button>Back</Button>
                </Link>
            </div>
            <div className='col-lg-75 dfg2kp7'>
                <iframe src={location.state.infopreview.src} id="iframe" name="Viewforclient" allowfullscreen/>
            </div>
        </div>
           
           
        </>

    )
}
export default PreviewTemplate;