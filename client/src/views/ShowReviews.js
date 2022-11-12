import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { simpleGet } from '../services/simpleGet';

const ShowReviews = () => {

  const {id} = useParams()
  const [movie, setMovie] = useState();

  const getReviews = async () =>{
    try {
      const response = await simpleGet(
        `http://localhost:8080/api/reviews/${id}`
      );
      console.log(response.data);
      setMovie(response.data.reviews);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getReviews()
  }, []);

  return (
    <div>

      {movie?.map((movie)=>
         <div className="card text-center mb-5" key={movie._id}>
         <div className="card-header">{movie.rating}</div>
         <div className="card-body">
           <p className="card-text">
             {movie.content}
           </p>
         </div>
         <div className="card-footer text-muted">{movie.creatorName}</div>
       </div>

      )}


    </div>
  );
}

export default ShowReviews;
