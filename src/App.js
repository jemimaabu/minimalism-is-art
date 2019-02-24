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
            ["https://photo-cdn.icons8.com/assets/previews/557/93cd3e01-c826-4a06-8673-31a3dabf76401x.jpg", 
            "Minimalism", 
            "https://photo-cdn.icons8.com/assets/previews/563/31493392-04d4-4c91-95fd-f39eff64684c1x.jpg", 
            "", 
            "https://photo-cdn.icons8.com/assets/previews/720/b1808ecc-fdfa-496e-b1f3-4ecdda06b04f1x.jpg",
            "",
            "https://photo-cdn.icons8.com/assets/previews/557/93cd3e01-c826-4a06-8673-31a3dabf76401x.jpg",
            "Is",
            "https://photo-cdn.icons8.com/assets/previews/436/b2364fd7-310e-48d7-9bd9-0d34a7af5c881x.jpg",
            "", 
            "https://photo-cdn.icons8.com/assets/previews/647/c14e5cc6-d5fd-40d0-8276-c3d355160c641x.jpg",
            "",
            "https://photo-cdn.icons8.com/assets/previews/778/1ceb48b8-5fe4-4e4f-80ac-815b63b1f79c1x.jpg",
            "Art",
            "https://photo-cdn.icons8.com/assets/previews/361/03a57587-e0d2-4c8f-a363-1b46ba2a7ca41x.jpg",
            ]} />
        <ParallaxEffect
          parallaxBackgroundImage = "https://66.media.tumblr.com/6d884fe09d90b1bac096df349d7b7b38/tumblr_orxj4oc6AH1uu9fqho1_500.gif"
          parallaxText = "Minimalism Is Art"
          parallaxTextBackground = "https://66.media.tumblr.com/6d884fe09d90b1bac096df349d7b7b38/tumblr_orxj4oc6AH1uu9fqho1_500.gif" />
        <footer>
          © <a href="http://www.jemimaabu.com" target="_blank">Jemima Abu</a>
        </footer>
      </div>
    );
  }
}

export default App;
