import React from 'react';
import style from './SingleAppliedJob.module.css';
import { Link } from 'react-router-dom';

const SingleAppliedJob = ({data}) => {
    const {id,logo,jobTitle,company,salary,location,isRemote} = data;

  return (
    <div className={style.item}>
        <div className={style.content}>

            <div className={style.left}>
                <div className={style.div}>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <h4 className={style.title}>{jobTitle}</h4>
                    <h5 className={style.company}>{company}</h5>
                    <div>
                        <button className={style.btnMy}>Remote</button>
                        <button className={style.btnMy}>Full Time</button>
                    </div>
                    <div className={style.text}>
                        <p>{location}</p>
                        <p>{salary}</p>
                    </div>
                </div>
            </div>
            <div>
                <Link to={`/job_details/${id}`} className='btn'>View Details</Link>
            </div>
        </div>
    </div>
  )
}

export default SingleAppliedJob