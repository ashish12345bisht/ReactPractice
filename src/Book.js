import React from 'react'

const Book=(props)=>{
  // attribute, eventHandler 
  const clickHandler=(title)=>{
    alert("hello world!! "+title);
  };
  const { img, title, author } = props.book;
  return <article className="book" onMouseOver={()=>{
    console.log(title);
  }}>
    <img src={img} alt=""/>
    <h1 onClick={()=>console.log(title)}>{title}</h1>
    <p>{author}</p>
    <button type="button" onClick={()=>clickHandler(title)}>Example</button>
  </article>
};

export default Book
