import React from 'react';
import style from './SingleCategory.module.css'

const SingleCategory = ({data}) => {
    const {img,category_name,available_job} = data
    // console.log(data)
  return (
    <div className={style.card}>
        <div>
            <img src={img} alt="image" />
            <h4>{category_name}</h4>
            <p>{available_job} Jobs Available</p>
        </div>
    </div>
  )
}

export default SingleCategory