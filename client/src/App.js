import './App.css';
import Home  from './pages/Home';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='navbar'>
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/createpost" exact>Create Post</NavLink>
        </div>
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/createpost" exact element={<CreatePost />}/>
          <Route path="/post/:id" exact element={<Post />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
