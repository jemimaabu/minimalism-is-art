import * as React from 'react';

var aboutParagraphs = [
    "Minimalism Is Art is a website created and designed by Jemima Abu.",
    "Basically, I was like \"Gosh, <a href=\"https://twitter.com/Jemimaabu/status/1078695074882555904\" target=\"_blank\">minimalist websites are so pretty</a>, I want to design something like that.\"",
    "And then I was like \"... I'm a <a href=\"https://www.jemimaabu.com\" target=\"_blank\">front end developer</a>, <i>of course</i> I can design a minimalist website.\"",
    "Thus, this website was built.",
    "I don't actually know what I'm going to do with it now it's built.",
    "Although, this wouldn't be a first time I've built a website <a href=\"https://socks-knocked-off.herokuapp.com\" target=\"_blank\">purely for aesthetic purposes</a>.",
    "Maybe I'll give it away."]

export class About extends React.Component<{}, {}> {
    render() {
        return (
            <div className="about-page-container">
                {
                    aboutParagraphs.map((p,i) => {
                        return (
                            <p 
                            key={i}
                            className="fade-out fade-in" 
                            style={{ animationDelay: (i*0.75)+"s" }} 
                            dangerouslySetInnerHTML={{__html: p}} />
                        )
                    })
                }
            </div>
        )
    }
}