import React from 'react';
import "./styles/KhoGiaoDien.css"
import Footer from "./component/Footer.js";
import { Link} from "react-router-dom";
import Masonry from '@mui/lab/Masonry';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function KhoGiaoDien() {
    const itemData = [
        {
          id: '2342',
          src: 'https://evo-tools.mysapo.net/',
          img: 'https://bizwebtheme.dktcdn.net/themes/3648/themestores/22d3f07606761a223ca0b74e80fd0b87.jpg?1648777383070',
          title: 'Evo Tolls',
          price: '1.500.000 đ',
        },
        {
          id: '7345',
          src: 'https://template-minimart.mysapo.net/',
          img:'https://bizwebtheme.dktcdn.net/themes/3665/themestores/71022deafd6e4e010f9769db5f9496b3.jpg?1649385371967',
          title: 'MiniMart',
          price: '2.000.000 đ',
        },
        {
          id: '1273',
          src: 'https://nd-shoes.mysapo.net/',
          img:'https://bizwebtheme.dktcdn.net/themes/2434/themestores/65bc36222b6f59039ada0c7f90a9c2ef.jpg?1641778879537',
          title: 'ND-Shoes',
          price: '7.500.000 đ',
        },
        {
          id: '4312',
            src: 'https://template-lamy-house.mysapo.net/',
            img:'https://bizwebtheme.dktcdn.net/themes/3649/themestores/5efc9430454be956539f2ff25247f092.png?1646302078717',
            title: 'Lamy House',
            price: '3.240.000 đ',
        },
        {
          id: '1258',
            src: 'https://template-claten.mysapo.net/',
            img:'https://bizwebtheme.dktcdn.net/themes/3667/themestores/c586c5792e44d55cd01625cc5b877e16.jpg?1646302555020',
            title: 'Claten Watch',
            price: '3.500.000 đ',
        },
        {
            id: '5423',
            src: 'https://ega-cake.mysapo.net/',
            img:'https://bizwebtheme.dktcdn.net/themes/3680/themestores/d735df87d455bae41b6eaca6d5d6f537.png?1648780933730',
            title: 'EGA Cake',
            price: '8.500.000 đ',
        },
      ];

    return (
        <>

            <div className="Container dfgth6">
                <h2 style={{margin:'auto'}}>Khám phá các mẫu giao diện tại Weeb</h2>
            </div>
 
        <div className="Container ">
            <Masonry columns={3} spacing={5} className="j7k65">
              {itemData.map((item, index) => (
                <Card key={index}>
                  <CardActionArea key={index}>
                    <CardMedia className='dgbt35'>
                      <div key={index}>
                        <img
                        
                          src={`${item.img}?w=462&auto=format`}
                          srcSet={`${item.img}?w=462&auto=format&dpr=2 2x`}
                          alt="Thư vi65n template tại WEEB"
                          loading="lazy"
                          style={{
                            display: 'block',
                            maxWidth: '100%',
                            height: 'auto'
                          }}
                        />
                      </div>
                    </CardMedia>
                    <CardContent class="gsuik7">
                      <Typography gutterBottom variant="h5" component="div">{item.title}</Typography>
                      <div style={{display:'flex', justifyContent:'space-between'}}>
                      <Typography variant="body2" color="text.secondary">
                        {item.price}
                      </Typography>
                      <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Link
                          
                            to="/PreviewTemplate" state={{ infopreview: item }}
                        >
                            <Button>Trải nghiệm</Button>
                        </Link>
                      
  
                        <Button>Đặt !</Button>
                      </ButtonGroup>
                      </div>
                      
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}


            </Masonry>
        </div>
        <Footer/>
        </>
        
    )
}
 export default KhoGiaoDien;