import React from 'react';
import {Head} from './index.js';
import './footer.css';
import { displayBirthDays } from './index.js';

export const Footer=()=>{
    return (
        <>
        <section className="footer">
            <div>
                <Head/>
            </div>
            <div>
            <p>My name is Ashish</p>
            <a href="https://github.com/ashish12345bisht">Link to my GitHub</a>
            <button onClick={displayBirthDays}>Birthdays Page</button>
            </div>
        </section>
        </>
    );
};
export default Footer;