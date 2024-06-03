import React from 'react';
import './Home&living.css'; // Assuming you have a CSS file for styles


const HomeLiving = () => {


  return (
    <div className='l-container'>
      <div className='l-A-container'>
       <img className='hl-img' src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/6/8/eff01060-f706-468d-b97c-95cdf43174f91528443826867-Desktop-Home-Banner.jpg"/>
      </div>
      <div className="text-banner-container">
        <h4 className="text-banner-title">NICE TO SEE YOU, COME ON IN!</h4>
        <h4 className="text-banner-subtitle"></h4>
        </div>
      
    <div className="l-B-container">
     
            <img className="product-image"
              src="https://assets.myntassets.com/w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563660020-bed.jpg"
               
            />
            <img className="product-image" src="https://assets.myntassets.com/w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563782565-furnishings.jpg"/>

            <img className="product-image" src="https://assets.myntassets.com/w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563810789-art-n-decor.jpg" alt="" />

            <img className="product-image" src="https://assets.myntassets.com/w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563866590-lamps.jpg" alt="" />
          

      
    </div>
    
    </div>
  );
};

export default HomeLiving;
