import React from 'react';



function Header() {
    return ( 
        <>
        
        <header>
            <div className='Lsidebar' >
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>

            <div className='mid' >
                <h1>RAINBOW</h1>
            </div>

            <div className='Rsidebar' >
                <i className='bi-search' ></i>
                <i className='bi-person' ></i>
                <i className='bi-cart' ></i>
            </div>
            
        </header>
            <div>
            </div>
    
        </>
     );
}

export default Header;