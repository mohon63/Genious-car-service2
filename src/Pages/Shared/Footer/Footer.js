import React from 'react';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className='text-center mt-5 text-white bg-primary'>
            <p className='m-0 py-3'><small>copyright &#xA9; {year}</small></p>
        </footer>
    );
};

export default Footer;