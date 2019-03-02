import * as React from 'react';

export class Contact extends React.Component<{}, {}> {
    render() {
        return (
            <div className="contact-page-container">
                <div className="form-message">
                <p className="fade-out fade-in">This form doesn't actually work, it's just here for the aesthetic :)</p>
                <p className="fade-out fade-in" style={{ animationDelay: "0.755s" }}>If you actually want to contact me, feel free to send an <a href="mailto:jemimaabu@gmail.com" rel="noopener noreferrer">email</a>.</p>
                </div>
                <form className="contact-form">
                    <div className="input-container fade-out fade-in" style={{ animationDelay: "1.5s" }}>
                        <input type="text" id="Name" className="input" placeholder="Name"/>
                    </div>
                    <div className="input-container fade-out fade-in" style={{ animationDelay: "2.25s" }}>
                        <input type="email" id="Email" className="input" placeholder="Email"/>
                    </div>
                    <div className="input-container fade-out fade-in" style={{ animationDelay: "3s" }}>
                        <textarea className="input" placeholder="Message"/>
                    </div>
                    <button type="button" className="button fade-out fade-in" style={{ animationDelay: "3.75s" }}>Submit</button>
                </form>
            </div>
        )
    }
}