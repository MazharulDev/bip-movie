import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className='text-4xl text-center font-extrabold py-3 px-8 h-16 bg-gradient-to-r from-cyan-500 to-blue-500'>
                <h2 className='text-white'>Bip-Movie</h2>
            </div>
            <div className='flex justify-start items-center gap-4 bg-gradient-to-r from-blue-500 to-cyan-500 py-2 px-5'>
                <button className='border-r-2 pr-3'>2021</button>
                <button>2022</button>
            </div>
        </>
    );
};

export default Navbar;