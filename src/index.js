import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './components/About';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


  class AppRouer extends React.Component {
    render() {
      return (
        <Router>
          <div className="app">
            <nav className="main-nav" > 
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </nav>
            <Switch>
              <Route path="/" exact component={App} />
              <Route path="/about" exact component={About} />
              {/* <Route path="/login" exact component={Login} /> */}
              {/* <Route path="/register" exact component={Register} /> */}
            </Switch>
          </div>
        </Router>

      );
    }
  }

  ReactDOM.render(<AppRouer />, document.getElementById('root'));


