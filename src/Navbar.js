import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from './utils/auth';



const Navbar = () => {
  const auth = useAuth()
  return (
    <nav>
        <ul style={{listStyleType:'none'}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>      
        </ul>
        
      </nav>
  )
}

export default Navbar