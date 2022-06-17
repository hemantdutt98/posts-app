import React from 'react'
import '../stylesheets/Home.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';


const Home = () => {
  const [postsList, setPostsList] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((res) => {  
    setPostsList(res.data);
    })
  }, [])

  return (
    <div>
        {postsList.map( (post) => {
          return (<div key={post.id} className="post" onClick={() => navigate(`/post/${post.id}`)}>
            <div className="title">{post.title}</div>
            <div className="body">{post.posts}</div>
            <div className="footer">{post.username}</div>
          </div>);
        })}
    </div>
  )
}

export default Home