import React from 'react';
import style from './DynamicHeader.module.css';

const DynamicHeader = ({title}) => {
  return (
    <div className={style.dynamicHeader}>
        <h3>{title}</h3>
    </div>
  )
}

export default DynamicHeader