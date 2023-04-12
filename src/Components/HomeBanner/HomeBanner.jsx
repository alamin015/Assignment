import React from 'react';
import style from './HomeBanner.module.css';
import bannerImg from '../../assets/Images/bannerImg.png';

const HomeBanner = () => {
  return (
    

    <div className={style.banner}>
        <div className="container">
        <div className={style.bannerContent}>
         <div className={style.bannerContentText}>
            <h2>One Step<br /> Closer To Your <br /> <span>Dream Job</span></h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button className="btn">Get Started</button>
        </div>
        <div className={style.bannerImg}>
            <img src={bannerImg} alt="" />
        </div>
    </div>
        </div>
    </div>


    
  )
}

export default HomeBanner