import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react'
import Home from '../Pages/Home'
import Posts from '../Pages/Posts'
import AddPost from '../Pages/AddPost'
import Header from '../components/Header'
import RightSidebar from '../components/RightSidebar'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import './App.scss'

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <div className="container">
            <div className="columns">
              <div className="column is-one-fifth">
                <Menu />
              </div>
              <div className="column">
                <Route exact path="/" component={Home} />
                <Route exact path="/posts" component={Posts} />
                <Route exact path="/add-post" component={AddPost} />
              </div>
              <div className="column is-one-quarter">
                <RightSidebar />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
