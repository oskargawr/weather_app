import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Nav() {
    return (
        <>
            <nav className='navbar bg-body-tertiary p-2'>
                <a href="#" className="navbar-brand fw-semibold">WEATHER APP</a>
                <div className="d-flex">
                    <input type="search" className="form-control me-2" placeholder='Search' aria-label='Search'/>
                    <button className="search-btn btn btn-outline-primary" type='Submit'>Search</button>
                </div>
            </nav>
        </>
    )
}
export default Nav