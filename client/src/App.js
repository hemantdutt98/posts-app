import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react'
function App() {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((res) => {  
    setPostsList(res.data);
    })
  }, [])
  return (
    <div className="App">
      <h1>hello</h1>
      <div>
        {postsList.map( (post) => {
          return (<div key={post.id} className="post">
            <div className="title">{post.title}</div>
            <div className="body">{post.posts}</div>
            <div className="footer">{post.username}</div>
          </div>);
        })}
      </div>
    </div>
  );
}

export default App;
