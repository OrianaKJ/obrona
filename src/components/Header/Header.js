import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => (
    <div className="header-info">
        <Link className="header-image" to='/'>
            <img className="header-image" src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" alt="tmdb logo" />
        </Link>
        <Link className="header-link" to='/'>
            <h1 className="header-title">Premium Cinema - the best movies in one place</h1>
        </Link>
        <Link className="login" to='/signin'>
            <p className="login-link" >Zaloguj się</p>
        </Link>
    </div>
)
