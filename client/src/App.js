import './App.css';
import Home  from './pages/Home';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='navbar'>
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/createpost" exact>Create Post</NavLink>
        <NavLink to="/login" exact>Login</NavLink>
        <NavLink to="/register" exact>Sign up</NavLink>
        </div>
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/createpost" exact element={<CreatePost />}/>
          <Route path="/post/:id" exact element={<Post />}/>
          <Route path="/login" exact element={<Login />}/>
          <Route path="/register" exact element={<SignUp />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
