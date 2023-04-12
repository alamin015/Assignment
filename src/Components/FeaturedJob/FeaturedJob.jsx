import React, { useEffect, useState } from 'react';
import style from './FeaturedJob.module.css';
import SingleFeatureJob from '../SingleFeatureJob/SingleFeatureJob';

const FeaturedJob = () => {
    const [myStore,setMyStore] = useState([]);
    const [featureJob,setFeatureJob] = useState([]);
    const [isShowAll, setIsShowAll] = useState(false);



    const handleSeeAll = () => {
        setFeatureJob(myStore);
        setIsShowAll(false);
        // console.log(myStore)
    }


    useEffect(() => {
        if(featureJob.length && featureJob.length <= 4){
            setIsShowAll(true);
        }
    },[featureJob])

    useEffect(() => {
        fetch('/FeatureJob.json')
        .then(res => res.json())
        .then(data => setMyStore(data))
        if(myStore.length){
            setFeatureJob(myStore.slice(0,4))
        }
    },[])

    useEffect(() => {
        if(myStore.length){
            setFeatureJob(myStore.slice(0,4))
        }
    },[myStore])



    // console.log(featureJob)
  return (
    <section>
        <div className="container">
            <h2 className={style.featureHeader}>Featured Jobs</h2>
            <p className={style.featureDesc}>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className={style.allFeatureJob}>
                {
                    featureJob.map((item) => <SingleFeatureJob data={item} key={item.id}></SingleFeatureJob>)
                }
            </div>
            {
                isShowAll && <div className={style.seeAll}>
                <button className="btn" onClick={handleSeeAll}>See All Job</button>
            </div>
            }
        </div>
    </section>
  )
}

export default FeaturedJob