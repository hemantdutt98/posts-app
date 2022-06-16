import './App.css';
import Home  from './pages/Home';
import CreatePost from './pages/CreatePost';
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavLink to="/createpost" exact>Create Post</NavLink>
        <NavLink to="/" exact>Home</NavLink>
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/createpost" exact element={<CreatePost />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
