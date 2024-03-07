import React from 'react';
import Profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div>
            <nav className='flex justify-between mx-auto container mt-4 text-4xl font-sans'>
                <div>Knowledge Cafe</div>
                <div><img src={Profile.png} alt="" /></div>
            </nav>
        </div>
    );
};

export default Header;