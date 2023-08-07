import React from 'react'
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
        <ul>
            <Link to="/"><li>HomePage</li></Link>
            <Link to="/characters"><li>Characters</li></Link>
            <Link to="/about-us"><li>About Us</li></Link>
            <Link to="/login"><li>Login</li></Link>
        </ul>
    </nav>
  )
}

export default NavBar