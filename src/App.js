import React, { Component } from 'react';
import './styles/App.css';
import { Gallery } from './pages/GalleryPage';
import { About } from './pages/AboutPage';
import { Contact } from './pages/ContactPage'
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import { ParallaxEffect } from './components/ParallaxEffect/ParallaxEffect'

const NoMatch = ({ location }) => (
  <div>
    The <b>{location.pathname}</b> page doesn't exist.
  </div>
);

function handleFixedHeader() {
  const header = document.getElementById("header");
  const offsetTop = header.offsetTop;
  var scroll = window.pageYOffset;
  if (scroll >= offsetTop) {
    header.className = "sticky";
  }
};

window.onscroll = function() {
  handleFixedHeader();
};


class App extends Component {
  componentWillUnmount() {
    window.removeEventListener('scroll', handleFixedHeader, false)
  }
  render() {
    return (
      <div className="page-content">
        <main>
          <BrowserRouter>
            <div>
              <header id="header">
                <h1>Minimalism Is Art</h1>
                <hr />
                <nav className="page-navigation">
                  <li>
                    <NavLink to="/gallery">Gallery</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </nav>
              </header>
              <div id="page-body">
                <Switch>
                    <Route exact path="/" component={Gallery} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route component={NoMatch} />
                </Switch>
              </div>
            </div>
          </BrowserRouter>
        </main>
        <ParallaxEffect
            parallaxBackgroundImage = "https://66.media.tumblr.com/6d884fe09d90b1bac096df349d7b7b38/tumblr_orxj4oc6AH1uu9fqho1_500.gif"
            parallaxText = "Minimalism Is Art"
            parallaxTextBackground = "https://66.media.tumblr.com/6d884fe09d90b1bac096df349d7b7b38/tumblr_orxj4oc6AH1uu9fqho1_500.gif" 
        />
        <footer>
         <p> © <a href="http://www.jemimaabu.com" target="_blank" rel="noopener noreferrer">Jemima Abu</a></p>
         <p><a href="mailto:jemimaabu@gmail.com" rel="noopener noreferrer">Email</a></p>
         <p><a href="https://twitter.com/jemimaabu" target="_blank" rel="noopener noreferrer">Twitter</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
