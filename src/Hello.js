import React from 'react';

class Hello extends React.Component {

    render(){
        return (
            <div>
            <p>Hello I'm {this.props.name}</p>
            <p>I'm a {this.props.age} years old.</p>
            </div>
        )
    }
}

export default Hello;