import React from 'react';
import style from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={style.header}>
        <div className="container">
            <nav className={style.nav}>
                <a className={style.logo} href="#">JobPlace</a>
                <ul className={style.menu}>
                    <NavLink to='/' className={({isActive}) => isActive ? `${style.active}` : ""}>Home</NavLink>
                    <NavLink to='/statistics' className={({isActive}) => isActive ? `${style.active}` : ""}>Statistics</NavLink>
                    <NavLink to='/appliedJobs' className={({isActive}) => isActive ? `${style.active}` : ""}>Applied Jobs</NavLink>
                    <NavLink to='/Blog' className={({isActive}) => isActive ? `${style.active}` : ""}>Blog</NavLink>
                </ul>
                <button className={`btn ${style.startBtn}`}>Start Applying</button>
            </nav>
        </div>
    </header>
  )
}

export default Header