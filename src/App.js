import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Profile from './Profile'
import Blog from './Blog'
import Home from './Home'
import { AuthProvider } from './utils/auth';
import Login from './Login';
import { RequireAuth } from './utils/RequireAuth';
import NoMatch from './NoMatch';

function App() {
  return (
    <AuthProvider> 
    <div className="App">
      <header className="App-header">
        <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<RequireAuth><Profile/></RequireAuth>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<NoMatch/>} />
      </Routes>
      </Router>
      
      </header>
    </div>
    </AuthProvider>
  );
}

export default App;
