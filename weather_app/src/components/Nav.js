import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './search/search';
import './Nav.css';

function Nav({ setSearch }) {
    const handleOnSearchChange = (searchData) => {
        setSearch(searchData);
    };

    return (
        <>
            <nav id="nav-container" className='nav-container navbar p-2 shadow-sm p-3 mb-5'>
                <a href="#" id="nav-title" className="nav-title navbar-brand fw-bold">Weather App</a>
                <div className="d-flex">
                    <Search onSearchChange={handleOnSearchChange} />
                </div>
            </nav>
        </>
    );
}
export default Nav