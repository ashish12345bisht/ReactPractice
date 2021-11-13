import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import {books} from './books';
import Book from './Book';
import Header from './header';
import Footer from './footer';
import BirthDays from './projects/birthdays';

function BookList(){
  return (
    <>
    <Head/>
    <Header/>
    <section className="booklist">
      {books.map((book)=> {
        return <Book key={book.id} book={book} />;
      })}
    </section>
    <Footer/>
    </>
  );
}
export const Head=()=>{
  return (
  <>
    <h1 className="heading">Book Store</h1>
  </>
  );
};
export const displayBirthDays=()=>{
  ReactDom.render(<BirthDays/>, document.getElementById('root'));
}
ReactDom.render(<BookList/>, document.getElementById('root'));