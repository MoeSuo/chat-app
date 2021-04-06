import React from 'react';
// import './Chatbox.css';
import './About.css';
class About extends React.Component {

    render(){

        return (
            <div id="aboutUs">
                <h1>About </h1>
                <h4>This is my first React app</h4>
                <p className="testBreakLine">"Programming isn't about what you  know; it's about what you can figure out.”{"\n"} <em> Chris Pine</em></p>
            </div>
        )
        
    }
}

export default About;