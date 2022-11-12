import React, { useState } from 'react';
import ReviewForm from '../components/ReviewForm';
import { useNavigate, useParams } from 'react-router';
import { simplePost } from "../services/simplePost";

const CreateReview = () => {

  const {id} =useParams()
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate()

  const crearReview = async(values) =>{
    values = {...values, idMovie:id}
    try {
        const response = await simplePost('http://localhost:8080/api/reviews/new', values);
        console.log(response.data)
        if (response.data.message === "") {
            navigate("/")
        } else {
            console.log("ERRORES", response.data);
            const errorResponse = response.data.errors;
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



  return (
    <div>
       {errors?.map((error, index)=> <p key={index} >{error}</p>  )}
      <ReviewForm
      rating=""
      content=""
      creatorName=""
      onSubmitProp={crearReview}
      >

      </ReviewForm>
    </div>
  );
}

export default CreateReview;
