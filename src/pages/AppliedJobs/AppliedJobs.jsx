import React, { useEffect, useState } from 'react';
import style from './AppliedJobs.module.css';
import DynamicHeader from './../../Components/DynamicHeader/DynamicHeader';
import SingleAppliedJob from '../../Components/SingleAppliedJob/SingleAppliedJob';

const AppliedJobs = () => {
  const [transfer,setTransfer] = useState([])
  const [data,setData] = useState([]);
  const [remoteData,setRemoteData] = useState([]);

  useEffect(() => {

    let getData = JSON.parse(localStorage.getItem('jobs'));
    setTransfer(getData);
    setData(getData);
  },[])


  const handleFilter = (e) => {
    const val = e.target.value;
    if(val === "filter"){
      setTransfer(data);
    }else{
      const ll = data.filter((single) => single.isRemote == val);
      setTransfer(ll);
      
    }
    

  }


  return (
    <div>
      <DynamicHeader title="Applied Jobs"></DynamicHeader>
      <div className="container">
        <div className={style.filter}>
          <select name="" id="" onChange={handleFilter}>
            <option value="filter">Filter By</option>
            <option value="remote">Remote</option>
            <option value="onsite">Onsite</option>
          </select>
        </div>
        <div className={style.margin}>
          {
            transfer.map((item) => <SingleAppliedJob data={item} key={item.id}></SingleAppliedJob>)
          }
        </div>
      </div>
    </div>
  )
}

export default AppliedJobs