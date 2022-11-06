import React from 'react';



function VideoCard(props) {
    return ( 
        <>
        <div className='VideoCard' >
            <img src={props.thumbnail} alt="image" className='thumbnail'/>
            <div className='details'>
                <div className='img'><img src={props.Channellogo} alt="channelImg" /></div>
                <h4>{props.title}</h4>
            </div>
            <div className='details2'>
                <p>{props.Channelname}<br />
                2k view ' 2 weeks ago</p></div>

        </div>
        </>
     );
}

export default VideoCard;