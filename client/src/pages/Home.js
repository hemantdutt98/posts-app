import React from 'react'
import '../stylesheets/Home.css';
import axios from 'axios';
import {useEffect, useState} from 'react';

const Home = () => {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((res) => {  
    setPostsList(res.data);
    })
  }, [])
  return (
    <div>
        {postsList.map( (post) => {
          return (<div key={post.id} className="post">
            <div className="title">{post.title}</div>
            <div className="body">{post.posts}</div>
            <div className="footer">{post.username}</div>
          </div>);
        })}
    </div>
  )
}

export default Home