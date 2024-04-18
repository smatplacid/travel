import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';

class App extends Component {



  // *********************************** callAPI() 
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Content />

        <p>API Response: {this.state.apiResponse}</p>
      </div>
    );
  }
}


export default App;