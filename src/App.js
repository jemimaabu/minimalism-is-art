import React, { Component } from 'react';
import './styles/App.css';
import { Gallery } from './pages/GalleryPage';
import { About } from './pages/AboutPage';
import { Contact } from './pages/ContactPage'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ParallaxEffect } from './components/ParallaxEffect/ParallaxEffect'

class App extends Component {
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2000))
  }

  componentDidMount(){
    this.authenticate().then(() => {
      const loader = document.getElementById('page-loader')
      if(loader){
        loader.classList.add('fade-out')
        setTimeout(() => {
          loader.outerHTML = ''
        }, 2000)
      }
    })
  }
  
  render() {
    return (
      <div className="page-content">
        <main>
          <header>
            <h1>Minimalism<br/>Is Art</h1>
            <hr />
          </header>
          <Router>
            <div>
              <nav className="page-navigation">
                <li>
                  <Link to="/" className={window.location.pathname==="/" ? "active" : ""}>Gallery</Link>
                </li>
                <li>
                  <Link to="/about" className={window.location.pathname==="/about" ? "active" : ""}>About</Link>
                </li>
                <li>
                  <Link to="/contact" className={window.location.pathname==="/contact" ? "active" : ""}>Contact</Link>
                </li>
              </nav>
              <div  className="page-content__body">
                <Route exact path="/" component={Gallery} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
              </div>
            </div>
          </Router>
        </main>
        <ParallaxEffect
            parallaxBackgroundImage = "https://66.media.tumblr.com/6d884fe09d90b1bac096df349d7b7b38/tumblr_orxj4oc6AH1uu9fqho1_500.gif"
            parallaxText = "Minimalism Is Art"
            parallaxTextBackground = "https://66.media.tumblr.com/6d884fe09d90b1bac096df349d7b7b38/tumblr_orxj4oc6AH1uu9fqho1_500.gif" 
        />
        <footer>
         <p> © <a href="http://www.jemimaabu.com" target="_blank" rel="noopener noreferrer">Jemima Abu</a></p>
         <p><a href="mailto:jemimaabu@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></p>
         <p><a href="https://twitter.com/jemimaabu" target="_blank" rel="noopener noreferrer">Twitter</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
