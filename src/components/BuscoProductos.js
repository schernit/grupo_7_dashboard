import React, { useState, useEffect, useRef } from 'react';

import noPoster from '../assets/images/no-poster.jpg';

function SearchProductos(){
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
						setProductos(data.data);
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

	const searchProducto = async e => {
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
							<form method="GET" onSubmit={searchProducto}>
								<div className="form-group">
									<label htmlFor="">Buscar por producto:</label>
									<input /* onInput={searchMovie} */ ref={inputTag} type="text" className="form-control" />
								</div>
								<button className="btn btn-info">Buscar</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2 className='titulobuscador'>Productos: </h2>
						</div>
						{/* Listado de películas */}
						{
							productos.length > 0 && productos.map((producto, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{producto.id + " " + producto.nombre}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={producto.nombreImagen !== 'N/A' ? "http://localhost:3000/img/" + producto.nombreImagen : noPoster}
														alt={producto.nombre} 
														style={{ width: '200%', height: '200px', objectFit: 'cover' }} 
													/>
												</div>
												<p className='precioproducto'>{"$ " + producto.precio}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ productos.length === 0 && <div className="alert alert-warning text-center">No se encontraron productos</div>}

		</div>
	)
}

export default SearchProductos;