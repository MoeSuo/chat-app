import React from 'react';
import './App.css';
import Logo from './Logo.svg';
import Chatbox from './components/Chatbox';

class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        term: '',
        items: []
      };
    }

    onChange = (event) => {
      this.setState({term: event.target.value});
    }

    onSubmit = (event) => {
      event.preventDefault()
      this.setState({
        term: '',
        items: [...this.state.items, this.state.term]
      });
    }

    render(){
  return (
    <div className="App">
      <img src={Logo} />
      <h1> Let's chat</h1>
      <Chatbox items={this.state.items} />
      <form className="message-form" onSubmit={this.onSubmit}>
        <textarea value={this.state.term} onChange={this.onChange} />
        <button>Send</button>
      </form>
    </div>
  );
}
}

export default App;
