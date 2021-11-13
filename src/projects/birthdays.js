import React, {useState} from 'react';
import {dates} from './dates';
import Person from './person';
import './birthdays.css';
import Tours from './tours';
const BirthDays=()=>{
    const [people,setPeople]=useState(dates);
    return (
    <React.Fragment>
        <h2 className="heading">Today Birthdays!!</h2>
        <section className="birthdayCard">
            {people.map((person)=>{
                return <Person key={person.id} person={person}/>;
            })};
        </section>
        <button className="clear" onClick={()=>setPeople([])}>CLEAR ALL</button>
        <Tours />
    </React.Fragment>);
}
export default BirthDays;