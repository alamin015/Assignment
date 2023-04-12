import React from 'react';
import {Link} from 'react-router-dom'
import { BeakerIcon } from '@heroicons/react/24/solid'
import style from './SingleFeatureJob.module.css';

const SingleFeatureJob = ({data}) => {
    const {id,logo,company,jobTitle,location,salary,isRemote} = data
  return (
    <div className={style.jobCard}>
        <img className={style.img} src={logo} alt="Company logo" />
        <h3 className={style.jobTitle}>{jobTitle}</h3>
        <h4 className={style.company}>{company}</h4>
        <div className={style.btnGrp}>
          <button>Remote</button>
          <button>Full Time</button>
        </div>
        <div className={style.areaSalary}>
          <p className={style.location}> <BeakerIcon className="h-6 w-6 text-blue-500" /> <span>{location}</span></p>
          <p className={style.salary}>salary: {salary}</p>
        </div>
        <Link to={`/job_details/${id}`} className={style.viewDetails}>View Details</Link>
    </div>
  )
}

export default SingleFeatureJob
