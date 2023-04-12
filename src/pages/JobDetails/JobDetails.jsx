import React, { useEffect, useState } from 'react'
import DynamicHeader from '../../Components/DynamicHeader/DynamicHeader'
import { json, useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import style from './JobDetails.module.css';
import "react-toastify/dist/ReactToastify.css";

const JobDetails = () => {
    const [store, setStore] = useState([]);
    const [singleJob, setSingleJob] = useState({});
    let { id } = useParams();
    const data = useLoaderData();
    useEffect(() => {
        const desiredData = data.find((item) => item.id == id)
        setSingleJob(desiredData)
    },[])

    useEffect(() => {
        let getItem = JSON.parse(localStorage.getItem('jobs'));
        setStore([...store,getItem]);
        // console.log(getItem?.length)
    },[])



    const handleMyApply = (item) =>{
        let arr
        let getItem = JSON.parse(localStorage.getItem('jobs'));
        
        let amr = getItem?.find((data) => data.id == item.id);
        if(!amr){

            if(!getItem) {
                arr = [item];
                
                localStorage.setItem("jobs",JSON.stringify(arr));
                toast.success('Successfully applied', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            }else {
                arr = [...getItem,item];
                localStorage.setItem("jobs",JSON.stringify(arr));
                toast.success('Successfully applied', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            }


        }else{

              toast.error('Already applied', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
        }
        


       

    }

   


  

  return (
    <div>
        <DynamicHeader title="Job Details"></DynamicHeader>
        <div className="container">
            <div className={style.mainContent}>
                <div className={style.requirements}>
                    <p className={style.desc}><span>job description:</span> {singleJob.jobDescription}</p>
                    <div className={style.list}>
                        <h4 className={style.responsibility}>Job Responsibility:</h4>
                        {
                            singleJob.jobResponsibilities?.map((text,index) => <li key={index}>{index+1}.{text}</li>)
                        }
                    </div>
                    <div className={style.extra}>
                        <h4 className={style.myHead}>Educational Requirements: </h4>
                        <p>{singleJob.educationalRequirements}</p>
                    </div>
                    <div className={style.extra}>
                        <h4 className={style.myHead}>Experiences: </h4>
                        <p>{singleJob.experiences} Years in this field</p>
                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.details}>
                        <h4 className={style.heading}>Job Details</h4>
                        <hr className={style.hr} />
                        <p className={style.common}><span>Salary:</span> {singleJob.salary}</p>
                        <p className={style.common}><span>Job Title: </span> {singleJob.jobTitle}</p>
                        <h4 className={style.heading}>Contact Information</h4>
                        <hr className={style.hr} />
                        <p className={style.common}><span>Phone: </span>{singleJob.contactPhone}</p>
                        <p className={style.common}><span>Email: </span>{singleJob.contactEmail}</p>
                        <p className={style.common}><span>Address </span>{singleJob.location}</p>
                    </div>
                    <button className={style.applyBtn} onClick={()=>handleMyApply(singleJob)}>Apply Now</button>
                </div>
            </div>
        </div>
        <ToastContainer></ToastContainer>
    </div>
  )
}

export default JobDetails