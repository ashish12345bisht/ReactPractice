import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const books=[
{
  id:1,
  img:"https://images-eu.ssl-images-amazon.com/images/I/81cpDaCJJCL._AC_UL200_SR200,200_.jpg",
  title:"The Psychology of Money",
  author:"Morgan Housel"
},
{
  id:2,
  img:"https://images-eu.ssl-images-amazon.com/images/I/81tSFxicufL._AC_UL200_SR200,200_.jpg",
  title:"400 Days",
  author:"Chetan Bhagat"
}];

function BookList(){
  return (
    <section className="booklist">
      {books.map((book)=> {
        return <Book key={book.id} book={book} />;
      })}
    </section>
  );
}

const Book=(props)=>{
  const { img, title, author } = props.book;
  return <article className="book">
    <img src={img} alt=""/>
    <h1>{title}</h1>
    <p>{author}</p>
    
  </article>
};



ReactDom.render(<BookList/>, document.getElementById('root'));