import React from 'react';
import './Kids.css'; // Assuming you have a CSS file for styles
import data from '../Kids/Kids.json';

const Kids = () => {
  const { productsKids } = data;
  console.log('data',productsKids);

  return (
    <div className="K-container">
      <div className='K-F-container'>
       <img className='K-F-img' src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/09f0df54-6f8f-4bb0-a4b9-3b374d4538561649782019495-Top-Brands-2_Desk_Banner.jpg" alt="" />
      </div>

      <div className='K-B-container'>
         <div class="text-banner-container"><h4 class="text-banner-title">FAVORITE BRANDS</h4>
         <h4 class="text-banner-subtitle"></h4>
         </div>
         <div className='K-B-img'>
           <img className='K-B-1' src="https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/ab69d015-a975-4bda-990c-49e68938f6b31604926460802-19-FavBrands-AllenSollyJuniors.jpg"/>
           <img className='K-B-1' src="https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/fee6018d-c5dd-44b7-b1d1-9b994c1ae1e21604926460545-13-FavBrands-UCB.jpg"/>
           <img className='K-B-1' src="https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/4d3f0e9d-1b7a-458e-b05b-75d1f51db0411604926460628-15-FavBrands-NautiNati.jpg"/>
           <img className='K-B-1' src="https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/a505cf6b-beab-4bea-ba8d-06d7302486761604926460589-14-FavBrands-USPA.jpg"/>
           <img className='K-B-1' src="https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/10/5843d479-8331-4c70-9e44-796b984a258e1604993081657-17-FavBrands-MiniKlub--1-.jpg"/>
           <img className='K-B-1' src="https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/20/dc3e538c-bdbe-4df6-b38d-e628f1b18e211605856135445-ShopBybrands-lilpicks.jpg"/>
           <img className='K-B-1' src="https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/0bb2a638-7a84-4e75-bbbb-152140d32fd51604926460667-16-FavBrands-Peppermint.jpg"/>
         </div>
      </div>

      <div className='K-C-container'>
      {productsKids.map(product => (
        <div key={product.id} className="product-item">
          <div className="K-first">
            <img
              src={product.thumbnail}
              alt={product.title}
              title={product.title}
              className="product-image"
            />
          </div>

          <div className="product-info">
            <h3 className="product-brand">{product.brand}</h3>
            <h4 className="product-name">{product.title}</h4>
            <h4 className="product-sizes">
              Sizes: {product.sizes.join(', ')}
            </h4>
            <div className="product-price">
              <span className="discounted-price">Rs. {product.price}</span>
              {product.originalPrice && (
                <span className="original-price">Rs. {product.originalPrice}</span>
              )}
              {product.discountPercentage && (
                <span className="discount-percentage">
                  ({product.discountPercentage}% OFF)
                </span>
              )}
              
            </div>
          </div>
        </div>
        
      ))}
     </div>
    </div>
  );
};

export default Kids;
