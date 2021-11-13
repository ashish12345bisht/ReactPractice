import React from 'react';
import './birthdays.css'

const Person=(props)=>{
    const {name, age, image}=props.person;
    // console.log({name});
    // console.log({age});
    // console.log({image});
    return (
        <article className="main-card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{age} Years</p>
        </article>
    );
};

export default Person;