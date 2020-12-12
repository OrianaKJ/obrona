import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils'

export const Header = ({currentUser}) => (
    <div className="header-info">
        <Link className="header-image" to='/'>
            <img className="header-image" src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" alt="tmdb logo" />
        </Link>
        <Link className="header-link" to='/'>
            <h1 className="header-title">Znajdź film, który chcesz obejrzeć</h1>
        </Link>
        <Link className="header-link" to='/user'>Moje konto</Link>
        {currentUser ? (
            <div className='login-link' onClick={() => auth.signOut()}>
                Wyloguj się
            </div>
            ) : (
            <Link className='login-link' to='/signin'>
                Zaloguj się
            </Link>
        )}
    </div>
)
