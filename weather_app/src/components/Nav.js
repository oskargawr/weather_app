import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './search/search';

function Nav() {

    const handleOnSearchChange = (searchData) => {
        console.log(searchData)
    }
    
    return (
        <>
            <nav className='navbar bg-body-tertiary p-2'>
                <a href="#" className="navbar-brand fw-semibold">WEATHER APP</a>
                <div className="d-flex">
                    <Search onSearchChange={handleOnSearchChange}/>
                </div>
            </nav>
        </>
    )
}
export default Nav