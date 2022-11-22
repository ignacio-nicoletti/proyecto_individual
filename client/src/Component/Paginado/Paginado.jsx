import React from 'react';
import style from './Paginado.module.css'

export default function Paginado({ setCurrentPage, videoxpag, postPerPage }) {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil( videoxpag / postPerPage); i++) {
    pageNumbers.push(i + 1);
  }
  return (
    <div className={style.contain} key={setCurrentPage}>
     
      {pageNumbers &&
        pageNumbers.map((number) => (
          
            <button  onClick={() => setCurrentPage(number)}>{number}</button>
         
        ))}
    </div>
  );
}