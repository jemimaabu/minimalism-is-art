import * as React from 'react';

export interface ParallaxEffectProps {
    parallaxBackgroundImage?: string;
    parallaxText?: string;
    parallaxTextBackground?: string;
}

const handleParallaxTextScroll = () => {
    var x = window.scrollY;
    var parallaxText = document.getElementById("parallax-text");
    parallaxText ? parallaxText.style.backgroundPosition = ('100% ' + -x / 1 + 'px' + ', 0%  0%, center top') : "";
}

window.onscroll = () => handleParallaxTextScroll();

export class ParallaxEffect extends React.Component<ParallaxEffectProps, {}> {
    render() {
        return(
            <div className="parallax-effect-container">
                {
                    this.props.parallaxBackgroundImage &&
                    <div className="parallax-image" style={{backgroundImage: "url(" + this.props.parallaxBackgroundImage + ")"}}>
                    </div>
                }
                {
                    this.props.parallaxText && 
                    <div className="parallax-text-container">
                        <span className="parallax-text" id="parallax-text" style={{backgroundImage: "url(" + this.props.parallaxTextBackground + ")"}}>
                            {this.props.parallaxText}
                        </span>
                    </div>
                }
            </div>
        )
    }
}