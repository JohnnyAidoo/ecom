import React from 'react';
import bannerimg from '../images/banner.png'


function ProductCard(props) {
    return (  
        <div className='prductcard'>
                
            <div id='pic'>
                <img src={props.image} alt="img" />
            </div>
            <div>
                <h3>{props.name}</h3>
                <h2>${props.price}</h2>
                <i className='bi-plus-square' ></i>
            </div>
        </div>
    );
}

export default ProductCard;