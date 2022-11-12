import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { simpleGet } from '../services/simpleGet';
import { simpleDelete } from '../services/simpleDelete';

const Main = () => {

  const [movie, setMovie] = useState();

  const getMovie = async ()=>{
      try {
        const response = await simpleGet('http://localhost:8080/api/movies');
        console.log(response.data.movies)
        setMovie(response.data.movies)
    } catch (err) {
        console.log(err);
    }
  }

  const eliminarMovie = async(id) =>{
    const response = await simpleDelete("http://localhost:8080/api/movies/"+id)
    setMovie(movie.filter((movie)=>movie._id!==id))
    console.log(response)
  }

  useEffect(() => {
    getMovie()
  }, []);


  return (
    <div>
      <table className="table">
        <thead>
            <tr>
                <th scope="row">nombre</th>
                <th>director</th>
                <th>año</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
          {movie?.map((movie)=>
            <tr  key= {movie._id}>
                <td>{movie.title}</td>
                <td>{movie.director}</td>
                <td>{movie.year}</td>
                <td>
                  <Link className='btn btn-sm btn-primary' to={`/create-review/${movie._id}`} >Crear Reseña</Link>
                  <Link className='btn btn-sm btn-primary'to={`/show-reviews/${movie._id}`} >Ver reseñas </Link>
                  <Link className='btn btn-sm btn-danger' onClick={()=>eliminarMovie(movie._id)} >Borrar</Link>
                </td>
            </tr>
          )}
        </tbody>
    </table>
    </div>
  );
}

export default Main;

