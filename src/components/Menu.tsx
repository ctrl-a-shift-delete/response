import React from 'react'
import { Link } from 'react-router-dom'

const Menu: React.FC = () => {
  return (
    <aside className="menu">
      <p className="menu-label">Menu</p>
      <ul className="menu-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/add-post">Add Post</Link>
        </li>
      </ul>
    </aside>
  )
}

export default Menu
