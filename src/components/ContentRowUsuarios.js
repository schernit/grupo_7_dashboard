import React, { useState, useEffect, useRef } from 'react';
import SmallCard from './SmallCard'; 
import noPoster from '../assets/images/no-poster.jpg';
import { Script } from 'vm';

function UsuariosCount(){
	const [usuariosCantidad, setUsuarios] = useState([]);
	const [keyword, setKeyword] = useState('comedy');

	const inputTag = useRef();

	// Credenciales de API
	const apiKey = 'e24ea09d';
	
	useEffect(() => {
		// Petición Asincrónica al montarse el componente
		//const endpoint = `https://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`;
		const endpoint = "http:///localhost:3000/api/users";

		if (apiKey !== '') {
			fetch(endpoint)
				.then(response => response.json())
				.then(data => {
					if (!data.Error) {
						console.log (data);
						setUsuarios(data.total);
						/*console.log ("vacio");
						let movies= [];
						let movie = {Title:"pepe",Poster:"poster",Year:"2023"}
						movies.push	(movie);
						movie = {Title:"pepe2",Poster:"poster2",Year:"2024"}
						movies.push	(movie);
						setMovies(movies);*/

					} else {
						console.log ("vacio");
						let usuarios= [];
						let usuario = {Title:"pepe",Poster:"poster",Year:"2023"}
						usuarios.push	(usuario);
						usuario = {Title:"pepe2",Poster:"poster2",Year:"2024"}
						usuarios.push	(usuario);
						setUsuarios(usuarios);
					}
				})
				.catch(error => {
					console.log(error);
					let usuarios= [];
					let usuario = {Title:error.message,Poster:"poster",Year:"2023"}
					usuarios.push	(usuario);
					usuario = {Title:"error2",Poster:"poster2",Year:"2024"}
					usuarios.push	(usuario);
					setUsuarios(usuarios);
					}
					)
		}
	}, [keyword])

    let cartProps = {
        title:'Usuarios registrados' ,
        color:'primary',
        cuantity:usuariosCantidad,
        icon:'fa-user-check',
    }

    return (
    
        <div className="total">
            
			<SmallCard {...cartProps}/> 
                            
        </div>
    )
}


export default UsuariosCount;
