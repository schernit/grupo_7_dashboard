import React, { useState, useEffect, useRef } from 'react';
import SmallCard from './SmallCard'; 
import noPoster from '../assets/images/no-poster.jpg';
import { Script } from 'vm';

function ProductCount(){
	const [productos, setProductos] = useState([]);
	const [keyword, setKeyword] = useState('comedy');

	const inputTag = useRef();

	// Credenciales de API
	const apiKey = 'e24ea09d';
	
	useEffect(() => {
		// Petición Asincrónica al montarse el componente
		//const endpoint = `https://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`;
		const endpoint = "http:///localhost:3000/api/productos";

		if (apiKey !== '') {
			fetch(endpoint)
				.then(response => response.json())
				.then(data => {
					if (!data.Error) {
						console.log (data);
						setProductos(data.total);
						/*console.log ("vacio");
						let movies= [];
						let movie = {Title:"pepe",Poster:"poster",Year:"2023"}
						movies.push	(movie);
						movie = {Title:"pepe2",Poster:"poster2",Year:"2024"}
						movies.push	(movie);
						setMovies(movies);*/

					} else {
						console.log ("vacio");
						let productos= [];
						let producto = {Title:"pepe",Poster:"poster",Year:"2023"}
						productos.push	(producto);
						producto = {Title:"pepe2",Poster:"poster2",Year:"2024"}
						productos.push	(producto);
						setProductos(productos);
					}
				})
				.catch(error => {
					console.log(error);
					let productos= [];
					let producto = {Title:error.message,Poster:"poster",Year:"2023"}
					productos.push	(producto);
					producto = {Title:"error2",Poster:"poster2",Year:"2024"}
					productos.push	(producto);
					setProductos(productos);
					}
					)
		}
	}, [keyword])

    /* let moviesInDB = {
        title: 'Productos en la base de datos',
        color: 'primary', 
        cuantity: productos.total,
        icon: 'fa-clipboard-list'
    }

    let actorsQuantity = {
        title:'Usuarios registrados' ,
        color:'warning',
        cuantity:'49',
        icon:'fa-user-check'
    } */

    return (
    
        <div className="total">
            
			{/*{productos.total=10}*/}
			<div> HOLA MUNDO</div>

			<div> {productos} </div>

			{/* //ProductCount() }  */}
            
            {/*return <SmallCard {...productos}/> */}
            
                
        </div>
    )
}


export default ProductCount;
