import React from 'react';
import bannerimg from '../images/banner.png'

function Banner() {
    return ( 
        <div className='bannerContainer'>
            <div className='banner'>
                <div className='text'>
                    <h3>CHOOSE QUALITY ONLY</h3>
                    <h1>FASHION AT IT'S BEST</h1>    
                    <p>quality and affordble product only. <br />
                    made from the finess fabrics and many more.</p>
                    <button>EXPLORE MORE</button>
                </div>
                <div>
                <img src={bannerimg} alt="" />
                </div>
            </div>

        </div>
     );
}

export default Banner;