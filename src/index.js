import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import {books} from './books';
import Book from './Book';


function BookList(){
  return (
    <section className="booklist">
      <Head/>
      {books.map((book)=> {
        return <Book key={book.id} book={book} />;
      })}
    </section>
  );
}
const Head=()=>{
  return <h1 className="heading">Netflix</h1>;
};

ReactDom.render(<BookList/>, document.getElementById('root'));