import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <div className='container mx-auto'>
            <nav className='flex justify-between items-center border-b-2 p-4 mx-4 mt-4 text-4xl font-sans font-bold'>
                <div>Knowledge Cafe</div>
                <div><img src={profile} alt="" /></div>
            </nav>
        </div>
    );
};

export default Header;