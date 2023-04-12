import React, { useEffect, useState } from 'react';
import style from './JobCategory.module.css';
import SingleCategory from '../SingleCategory/SingleCategory';

const JobCategory = () => {
    const [category,setCategory] = useState([]);

    useEffect(() => {
        fetch('Category.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])
  return (
    <section>
        <div className="container">
            <h2 className={style.categoryHeader}>Job Category List</h2>
            <p className={style.categoryDesc}>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className={style.categoryGrid}>
                {
                    category.map((item) => <SingleCategory data={item} key={item.id}></SingleCategory>)
                }
            </div>
        </div>
    </section>
  )
}

export default JobCategory