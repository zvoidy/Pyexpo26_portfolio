import React from 'react'

const InstaCard = ({ instaLogo, instaName, mainImg,likes, desc, date}) => {
  return (
    <div className='instaCard-container'>
        <div className="instaCard-header">
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <img src={instaLogo} alt="Image" className='instaCard-icon'/>
            <span className='instaCard-name'>{instaName}</span>
            </div>
            <span className='instaCard-date'>...</span>
        </div>
        <div className="instaCard-image">
            <img src={mainImg} alt="Image" />
        </div>
        <div className="instaCard-content">
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <span className='instaCard-likes'>❤️ {likes} likes</span>
            </div>
            <p className='instaCard-desc'>{desc}</p>
            <span className='instaCard-date'>{date}</span>
        </div>
    </div>
  )
}

export default InstaCard