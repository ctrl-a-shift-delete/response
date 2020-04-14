import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/rootReducer'

const Header: React.FC = () => {
  const postsCount = useSelector(({ posts }: RootState) => posts.all.length)
  return (
    <section className="hero is-info">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Ruptela React Test</h1>
          <h2 className="subtitle">You can do it!</h2>
          <h2 className="post-count">Total posts: {postsCount}</h2>
        </div>
      </div>
    </section>
  )
}

export default Header
