import React, { Component } from 'react';
import './styles/App.css';
import { GridDisplay } from './components/GridDisplay/GridDisplay';
import { ParallaxEffect } from './components/ParallaxEffect/ParallaxEffect'

class App extends Component {
  render() {
    return (
      <div className="page-content">
        <header>
          <h1>Minimalism<br/>Is Art</h1>
        </header>
        <GridDisplay
          gridItems = {
            ["http://blog.visme.co/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-02.jpg", 
            "Minimalism", 
            "http://blog.visme.co/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-03.jpg", 
            "minimalismisartminimalismisartminimalismisartminimalismisartminimalismisartminimalismisart", 
            "http://blog.visme.co/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-04.jpg",
            "minimalismisartminimalismisartminimalismisartminimalismisartminimalismisartminimalismisart",
            "http://blog.visme.co/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-05.jpg",
            "Is",
            "http://blog.visme.co/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-06.jpg",
            "minimalismisartminimalismisartminimalismisartminimalismisartminimalismisartminimalismisart", 
            "http://blog.visme.co/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-07.jpg",
            "minimalismisartminimalismisartminimalismisartminimalismisartminimalismisartminimalismisart",
            "http://blog.visme.co/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-08.jpg",
            "Art",
            "http://blog.visme.co/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-010.jpg",
            ]} />
          <ParallaxEffect
            parallaxBackgroundImage = "http://blog.visme.co/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-015.jpg"
            parallaxText = "Minimalism Is Art"
            parallaxTextBackground = "http://blog.visme.co/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-011.jpg" />
      </div>
    );
  }
}

export default App;
