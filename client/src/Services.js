import React,{useState} from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import BtnSeeMore from './component/BtnSeeMore'
import Skeleton from "react-loading-skeleton";

import Page404 from './Page404'
function Services() {
    const [loading, setLoading] = useState(true);
    const [loading1, setLoading1] = useState(true);
    const [loading2, setLoading2] = useState(true);
  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    setTimeout(() => {
        setLoading1(false);
      }, 4000);
      setTimeout(() => {
        setLoading2(false);
      }, 6000);
  }

    return (
        <>
        <div>
        {loading ? (
          <Skeleton height={'10vh'} width={'10vh'} />
        ) : (
            <li>Dịch vụ thiết kế web</li>
        )}
        {loading1 ? (
          <Skeleton height={'10vh'} width={'10vh'} />
        ) : (
            <li>Dịch vụ thiết kế web</li>
        )}
        {loading2 ? (
          <Skeleton height={'10vh'} width={'10vh'} />
        ) : (
            <li>Dịch vụ thiết kế web</li>
        )}
        {loading ? (
          <Skeleton height={'10vh'} width={'10vh'} />
        ) : (
            <li>Dịch vụ thiết kế web</li>
        )}

      
      </div>

      

          <h2> PAGE SERVICES</h2>
          bao gồm 3 page:
            <ul>
                <li>Dịch vụ thiết kế web</li>
                <li>Dịch vụ thiết kế thương hiệu</li>
                <li>Dịch vụ SEO</li>
            </ul>

        <br/>
        <br/>

        <br/><br/>
            MẪU HOVER HEADING
            <BtnSeeMore/>
            <Page404 />
        </>

    );
};
export default Services;