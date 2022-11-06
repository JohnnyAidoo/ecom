import React from 'react';

function LsideNav() {
    return ( 
        <>
        <div className='LsideNav'>
            <nav >
                <a href="#"> <span><i className='bi-house' ></i></span> Home</a>
                <a href="#"> <span><i className='bi-browser-safari' ></i></span>Explore</a>
                <a href="#"> <span><i className='bi-cone' ></i></span> Shorts</a>
                <a href="#"> <span><i className='bi-files' ></i></span> Subscription</a>
                <hr />
            </nav>
            <nav id='nav2'>
                <a href="#"> <span><i className='bi-files' ></i></span>Libary</a>
                <a href="#"> <span><i className='bi-clock-history' ></i></span>History</a>

                <hr />
            </nav>
                <div>
                </div>
                <hr />
            <nav id='nav3'>
                <p>Explore</p>
                <a href="#"> <span><i className='bi-music-note' ></i></span> Music</a>
                <a href="#"> <span><i className='bi-trophy' ></i></span> Sports</a>
                <a href="#"> <span><i className='bi-controller' ></i></span> Gaming</a>
                <a href="#"> <span><i className='bi-film' ></i></span> Movies & Shows</a>
                <a href="#"> <span><i className='bi-newspaper' ></i></span> News</a>
                <a href="#"> <span><i className='bi-circle-fill' ></i></span> Live</a>
                <a href="#"> <span><i className='bi-align-bottom' ></i></span> Fashion & Beauty</a>
                
                <hr />
            </nav>
        </div>
        </>
     );
}

export default LsideNav;