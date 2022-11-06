import React from 'react';
import logo from '../images/YTlogo.png'
import Scrollers from '../components/Hscrolls';



function Header() {
    return ( 
        <>
        
        <header>
            <div className='Lsidebar' >
                <i className='bi-list'></i>
                <img  id='YTlogo' src={logo} alt="Logo" />
            </div>

            <div className='SearchBar' >
                <div>
                    <input type="search" name="search" placeholder='Search' />
                    <i className='bi-search' ></i>
                </div>
            </div>

            <div className='Rsidebar' >
                <i className='bi-camera-video' ></i>
                <i className='bi-bell' ></i>
                <div className='avatar'>

                </div>
            </div>
            
        </header>
            <div>
                <Scrollers />
            </div>
    
        </>
     );
}

export default Header;