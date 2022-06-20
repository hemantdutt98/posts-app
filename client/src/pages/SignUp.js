import React from 'react'
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import axios from "axios";
import '../stylesheets/SignUp.css'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const intitialValues = {
        username: "",
        password: ""
      };
    
      const validationSchema = Yup.object().shape({
        username: Yup.string()
          .min(6, "*atleast 6 characters")
          .max(20, "*atmost 20 characters")
          .required("*Username is required"),
        password: Yup.string()
          .min(6, "*atleast 6 characters")
          .max(20, "*atmost 20 characters")
          .required("Please fill this field"),
      });

      let navigate = useNavigate();

      const onSubmit = async (data) => {
        await axios.post("http://localhost:3001/auth", data);
        navigate("/");
      }

  return (
    <div className="createSignUpPage">
      <Formik
        initialValues={intitialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>UserName: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            id="inputUserName"
            name="username"
            placeholder="username"
          />
          <label>Password: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            id="inputUserName"
            type="password"
            name="password"
            placeholder="password"
          />
          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </div>
  )
}

export default SignUp