import React, { useState, useEffect } from 'react';
import Footer from "./component/Footer.js";
import "./styles/Project.css";
import Masonry from '@mui/lab/Masonry';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';





function Project() {
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      height: '730',
    },
    {
      img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
      title: 'Snacks',
      height: '430',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      height: '330',
    },
    {
      img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
      title: 'Tower',
      height: '530',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      height: '230',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      height: '530',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      height: '430',
    },
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      height: '730',
    },
    {
      img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
      title: 'Tree',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',
      title: 'Camping Car',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',
      title: 'Mountain',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // activate loading state when component mounts
    setIsLoading(true);
    const timer = setTimeout(() => {

      // disable loading after 5 seconds
      setIsLoading(false);
    }, 1000);
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
             <div className="Container">
              <h2>CÁC DỰ ÁN ĐÃ THỰC HIỆN</h2>
              <Masonry columns={2} spacing={5}>
              {itemData.map((item, index) => (
                <Card key={index} style={{ height: `${item.height}` }}  >
                  <CardActionArea key={index} style={{ height: `${item.height}` }} >
                    <CardMedia >
                      <div key={index}>
                        <img
                          src={`${item.img}?w=462&auto=format`}
                          srcSet={`${item.img}?w=462&auto=format&dpr=2 2x`}
                          alt="Pic-demo-map-from consatdata"
                          loading="lazy"
                          style={{

                            display: 'block',
                            width: '100%',
                            height: '100%'
                          }}
                        />
                      </div>
                    </CardMedia>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">Item Demo</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
           
        
              </Masonry>
            </div>
          )}
      <Footer />

    </>

  );
};

export default Project;