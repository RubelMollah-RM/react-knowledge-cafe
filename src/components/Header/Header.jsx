import React from 'react';


const Header = () => {
    return (
        <div>
            <nav className='flex justify-between mx-auto container mt-4 text-4xl'>
                <div>Knowledge Cafe</div>
                <div><img src={profile.png} alt="" /></div>
            </nav>
        </div>
    );
};

export default Header;