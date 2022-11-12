import React from 'react';
import * as Yup from "yup";
import { Field, Formik, Form} from 'formik';

const MovieForm = (props) => {

const { title, year, time, description, director, rating, content, creatorName, onSubmitProp } = props;

  return (
    <div>
      <Formik
        initialValues={{
          title: title,
          year:year,
          time: time,
          description: description,
          director: director,
          rating:rating,
          content:content,
          creatorName: creatorName,

        }}

        /* validationSchema={Yup.object().shape({
            title: Yup.string()
            .min(4,"El title es muy corto")
            .max(100,"El title es muy largo")
            .required("Por favor ingresa un title"),
            year: Yup.number()
            .required("Ingresa un año"),
            time: Yup.number()
            .required("Por favor ingresa un tiempo"),
            description: Yup.string()
            .min(4,"La descripción es muy corta")
            .max(200,"La descripción es muy larga")
            .required("Por favor ingresa una descripción"),
            director: Yup.string()
            .min(4,"El nombre del director/a es muy corto")
            .max(30,"El nombre del director/a es muy largo")
            .required("Por favor ingresa un director"),
            rating:Yup.number(),
            content:Yup.string()
            .min(10, "El contenido de la reseña es muy corto")
            .required("Por favor ingresa el contenido de la reseña"),
            creatorName: Yup.string()
            .min(4,"El creatorName es muy corto")
            .max(15,"El creatorName es muy largo")
            .required("Por favor ingresa un creatorName"),
        })} */

        onSubmit={(values,{setSubmitting})=>{
            console.log("INFO DEL FORMIK",values);
            onSubmitProp(values);
        }}

      >
        {({errors,touched,handleSubmit})=>{
            return(
                <div>
                    <h2>FORMULARIO DE MOVIES</h2>
                    <Form>
                        <label htmlFor="title" >Title</label>
                        <Field id="title" type="text" placeholder="Ingresa un title" name="title" className="form-control" />
                        {errors.title && touched.title && <p> {errors.title} </p>}

                        <label htmlFor="year" >Year</label>
                        <Field id="year" type="text" placeholder="Ingresa un year" name="year" className="form-control" />
                        {errors.year && touched.year && <p> {errors.year} </p>}

                        <label htmlFor="time" >Time</label>
                        <Field id="time" type="text" placeholder="Ingresa un time" name="time" className="form-control" />
                        {errors.time && touched.time && <p> {errors.time} </p>}

                        <label htmlFor="description" >description</label>
                        <Field id="description" type="text" placeholder="Ingresa un description" name="description" className="form-control" />
                        {errors.description && touched.description && <p> {errors.description} </p>}

                        <label htmlFor="director" >Director</label>
                        <Field id="director" type="text" placeholder="Ingresa un director" name="director" className="form-control" />
                        {errors.director && touched.director && <p> {errors.director} </p>}


                        <label htmlFor="rating" >Rating de la reseña</label>
                        <Field id="rating" type="number" as="select" className="form-select" name="rating">
                          <option value={1}>1 Estrella</option>
                          <option value={2}>2 Estrellas</option>
                          <option value={3}>3 Estrellas</option>
                          <option value={4}>4 Estrellas</option>
                          <option value={5}>5 Estrellas</option>
                        </Field>
                        {errors.rating && touched.rating && <p> {errors.rating} </p>}

                        <label htmlFor="content" >content</label>
                        <Field id="content" type="text" as="textarea" placeholder="Ingresa el contenido de la reseña" name="content" className="form-control" />
                        {errors.content && touched.content && <p> {errors.content} </p>}

                        <label htmlFor="creatorName" >Nombre del autor de la reseña</label>
                        <Field id="creatorName" type="text" placeholder="Ingresa el nombre de autor de la reseña" name="creatorName" className="form-control" />
                        {errors.creatorName && touched.creatorName && <p> {errors.creatorName} </p>}

                        <button type="submit" disabled={Object.values(errors).length>0 || Object.values(touched).length===0} >ENVIAR</button>

                    </Form>
                </div>
            )
        }}


      </Formik>

    </div>
  );
}

export default MovieForm;
