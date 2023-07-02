import React, { useState, useEffect, useRef } from 'react';

import noPoster from '../assets/images/no-poster.jpg';

function SearchUsuarios(){
	const [usuarios, setUsuarios] = useState([]);
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
						setUsuarios(data.data);
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

	const searchUsuario = async e => {
		e.preventDefault();
		const inputValue = inputTag.current.value;
		setKeyword(inputValue);
		/* inputTag.current.value = ''; */
	}

	return(
		<div className="container-fluid">

					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET" onSubmit={searchUsuario}>
								<div className="form-group">
									<label htmlFor="">Buscar usuario:</label>
									<input /* onInput={searchMovie} */ ref={inputTag} type="text" className="form-control" />
								</div>
								<button className="btn btn-info">Buscar</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Usuarios: {keyword}</h2>
						</div>
						{/* Listado de películas */}
						{
							usuarios.length > 0 && usuarios.map((usuario, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{usuario.id}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
                                                { <h2> {usuario.nombre} </h2>}
													{/* {<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={usuario.nombreImagen !== 'N/A' ? "http://localhost:3000/img/" + usuario.nombreImagen : noPoster} 
														alt={usuario.nombre} 
														style={{ width: '200%', height: '200px', objectFit: 'cover' }} 
													/>} */}
												</div>
											{/* 	{ <p>{usuario.nombre}</p> } */}
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ usuarios.length === 0 && <div className="alert alert-warning text-center">No se encontraron usuarios</div>}

		</div>
	)
}

export default SearchUsuarios;