import React from 'react';
import './header.css';


export const Header=()=>{
    return (
        <>
            <section className="slider">
                <div>
                    <h1>Do You Read Books</h1>
                    <marquee direction="left" behaviour="alternate">Reading is to mind what exercise is to body.</marquee>
                </div>
            </section>
        </>
    );
}

export default Header;