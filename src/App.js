import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {loading: false, msg: null};
  }

  handleClick = (e) => {
    e.preventDefault();

    this.setState({loading: true});
    fetch('/.netlify/functions/hello')
      .then(response => response.json())
      .then(json => this.setState({loading: false, msg: json.msg}));
  }

  render() {
    const {loading, msg} = this.state;

    return <p>
      <button onClick={this.handleClick}>{loading ? 'Carregando...' : 'Chame Lambda'}</button><br/>
      <span>{msg}</span>
    </p>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bemvindo ao React</h1>
        </header>
        <p className="App-intro">
          Para iniciar-se edite <code>src/App.js</code> e guarde para recarregar.
        </p>
        <LambdaDemo/>
      </div>
    );
  }
}

export default App;
