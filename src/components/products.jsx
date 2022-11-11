import React from 'react';
import ProductCard from './productCard';
import image1 from '../images/blue/IMG-20221015-WA0004.jpg'
import image2 from '../images/orange/IMG-20221015-WA0005.jpg'
import image3 from '../images/orange/IMG-20221015-WA0009.jpg'
import image4 from '../images/orange/IMG-20221015-WA0027.jpg'
import image5 from '../images/others/IMG-20221015-WA0006.jpg'
import image6 from '../images/others/IMG-20221015-WA0010.jpg'
import image7 from '../images/orange/IMG-20221015-WA0029.jpg'
import image8 from '../images/blue/IMG-20221015-WA0004.jpg'
import image9 from '../images/blue/IMG-20221015-WA0004.jpg'
import image10 from '../images/blue/IMG-20221015-WA0004.jpg'
import image11 from '../images/blue/IMG-20221015-WA0004.jpg'
import image12 from '../images/blue/IMG-20221015-WA0004.jpg'
import image13 from '../images/blue/IMG-20221015-WA0004.jpg'


function Products() {
    return ( 
        <div className='productsBG'>
                <h1 id='h1'>Top Picks</h1>
            <div className='products'>
                <ProductCard image={image1} name='desiner cloth 1' price='200'  />
                <ProductCard image={image2} name='desiner cloth 1' price='200'  />
                <ProductCard image={image3} name='desiner cloth 1' price='200'  />
                <ProductCard image={image4} name='desiner cloth 1' price='200'  />
                <ProductCard image={image5} name='desiner cloth 1' price='200'  />
                <ProductCard image={image6} name='desiner cloth 1' price='200'  />
                <ProductCard image={image7} name='desiner cloth 1' price='200'  />
                <ProductCard image={image8} name='desiner cloth 1' price='200'  />
                <ProductCard image={image9} name='desiner cloth 1' price='200'  />
                <ProductCard image={image10} name='desiner cloth 1' price='200'  />
                <ProductCard image={image11} name='desiner cloth 1' price='200'  />
                <ProductCard image={image12} name='desiner cloth 1' price='200'  />


            </div>
        </div>
     );
}

export default Products;