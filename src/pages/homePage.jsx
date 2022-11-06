import React from 'react';
import Header from '../components/header';
import LsideNav from '../components/LsideNav';
import VideoCard from '../components/videoCard';
import logo from '../images/YTlogo.png'
import t1 from '../images/t1.jpg'
import t2 from '../images/t2.jpg'
import t3 from '../images/t3.jpg'
import t4 from '../images/t4.jpg'
import t5 from '../images/t5.png'
import t6 from '../images/t6.jpg'
import t7 from '../images/t7.jpg'
import t8 from '../images/t8.jpg'


function Home() {
    return ( 
        <>
            <Header />
            <div className='main'>
            <LsideNav />
            <div className='videogrid'>
                <VideoCard thumbnail={t1}  Channellogo={logo}  title='Best Sport of The year ~ Latest' Channelname='SuperSport'/>
                <VideoCard thumbnail={t2} Channellogo={logo}  title='Best Sport of The year ~ Latest' Channelname='SuperSport'/>
                <VideoCard thumbnail={t3} Channellogo={logo}  title='Best Sport of The year ~ Latest' Channelname='SuperSport'/>
                <VideoCard thumbnail={t4} Channellogo={logo}  title='Best Sport of The year ~ Latest' Channelname='SuperSport'/>
                <VideoCard thumbnail={t5} Channellogo={logo}  title='Best Sport of The year ~ Latest' Channelname='SuperSport'/>
                <VideoCard thumbnail={t6} Channellogo={logo}  title='Best Sport of The year ~ Latest' Channelname='SuperSport'/>
                <VideoCard thumbnail={t7} Channellogo={logo}  title='Best Sport of The year ~ Latest' Channelname='SuperSport'/>
                <VideoCard thumbnail={t8} Channellogo={logo}  title='Best Sport of The year ~ Latest' Channelname='SuperSport'/>
                <VideoCard thumbnail={t4} Channellogo={logo}  title='Best Sport of The year ~ Latest' Channelname='SuperSport'/>
                <VideoCard thumbnail={t2} Channellogo={logo}  title='Best Sport of The year ~ Latest' Channelname='SuperSport'/>
                <VideoCard thumbnail={t1} Channellogo={logo}  title='Best Sport of The year ~ Latest' Channelname='SuperSport'/>
                <VideoCard thumbnail={t8} Channellogo={logo}  title='Best Sport of The year ~ Latest' Channelname='SuperSport'/>
                <VideoCard thumbnail={t3} Channellogo={logo}  title='Best Sport of The year ~ Latest' Channelname='SuperSport'/>
                <VideoCard thumbnail={t2} Channellogo={logo}  title='Best Sport of The year ~ Latest' Channelname='SuperSport'/>
                <VideoCard thumbnail={t7} Channellogo={logo}  title='Best Sport of The year ~ Latest' Channelname='SuperSport'/>
                <VideoCard thumbnail={t5} Channellogo={logo}  title='Best Sport of The year ~ Latest' Channelname='SuperSport'/>
            </div>    
            
            </div>
        </>
    );
}

export default Home;