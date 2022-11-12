import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import MovieForm from '../components/MovieForm';
import { simplePost } from "../services/simplePost";

const Create = () => {


  const [errors, setErrors] = useState([]);
  const navigate = useNavigate()

  const crearMovie = async(values) =>{
    try {
        const response = await simplePost('http://localhost:8080/api/movies', values);
        console.log(response.data)
        if (response.data.message === "") {
            navigate("/")
        } else {
            console.log("ERRORES", response.data);
            const errorResponse = response.data.error;
            console.log("Object keys", Object.keys(errorResponse));
            const errorArr = [];
            for (const llave of Object.keys(errorResponse)) {
                console.log(errorResponse[llave]);
                errorArr.push(errorResponse[llave].message);

            }
            setErrors(errorArr);

        }
    } catch (err) {
        console.log(err)
    }
}

  /* {
    console.log("VALORES DESDE FORMIK, EN VISTA", values);
    const response = await simplePost("http://localhost:8080/api/movies", values)
    console.log(response.data)
    setMovie(response.data)
  } */
  return (
    <div>
      {errors?.map((error, index)=> <p key={index} >{error}</p>  )}
      <MovieForm
      title=""
      year=""
      time=""
      description=""
      director=""
      rating=""
      content=""
      creatorName=""
      onSubmitProp={crearMovie}
      >
      </MovieForm>
    </div>
  );
}

export default Create;
