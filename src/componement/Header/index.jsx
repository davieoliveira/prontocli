import React from 'react';
import './style.css';

const Header = () => {
   return(
    <div className="header">
        <h1>ProntoCli</h1>
            <div className="profile-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
            </div>  
    </div>
   )
}  

export default Header;