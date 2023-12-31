import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let moviesInDB = {
    title: 'Productos en la base de datos',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

 /* <!-- Total awards --> */
/*
/* let totalAwards = {
    title:' Total awards', 
    color:'success', 
    cuantity: '79',
    icon:'fa-award'
}  

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Usuarios registrados' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

let cartProps = [moviesInDB, actorsQuantity];

function ContentRowMovies(){
    return (
    
        <div className="row cardsTable">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;