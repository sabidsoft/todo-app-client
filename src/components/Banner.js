import React from 'react';
import banner from '../assets/images/banner.png'
import './Banner.css'

const Banner = () => {
    return (
        <section className='banner_section'
            style={{
                backgroundImage: `url(${banner})`,
                // paddingTop: '200px',
                // paddingBottom: '200px',
                height: '740px',
                display: 'flex',
                justifyContent: 'center',
                backgroundPosition: 'center',
                backgroundSize: 'cover'

            }}
        >
            <h1 className='banner_title'>Welcome to Todo App</h1>
        </section>
    );
};

export default Banner;