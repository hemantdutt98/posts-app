import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../stylesheets/CreatePost.css";

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className="text-area" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const CreatePost = () => {
  let navigate = useNavigate();
  const intitialValues = {
    title: "",
    posts: "",
    username: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("*Title is a required field"),
    posts: Yup.string().required("*Post is a required field"),
    username: Yup.string()
      .min(3, "*atleast 3 characters")
      .max(15, "*atmost 15 characters")
      .required("*Username is required"),
  });

  const onSubmit = async (data) => {
    await axios.post("http://localhost:3001/posts", data);
    navigate("/");
  };

  return (
    <div className="createPostPage">
      <Formik
        initialValues={intitialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Title: </label>
          <ErrorMessage name="title" component="span" />
          <Field
            id="inputCreatePost"
            name="title"
            placeholder="enter title of the post here"
          />
          <label>Post: </label>
          <ErrorMessage name="posts" component="span" />
          <MyTextArea
            id="inputCreatePost"
            name="posts"
            placeholder="enter title of the post here"
            style={{ minHeight: "100px", maxWidth: "500px" }}
          />
          <label>UserName: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            id="inputCreatePost"
            name="username"
            placeholder="enter title of the post here"
          />
          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreatePost;