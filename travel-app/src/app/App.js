import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import ProgressBar from './components/ProgressBar';
import withSplashScreen from './components/withSplashScreen';

import Translate from './components/Translate'; // Roman
import Translater from './components/Translater'; // Sarah

// just adding a line
class App extends Component {

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

        <Router>
          <Fragment>
            <Routes>
              <Route exact path='/' element={<ProgressBar />} />
              <Route exact path='/translate' element={<Translate />} />
            </Routes>
          </Fragment>
        </Router>

        <Header />
        <Content />
        {/* <Translater />  */}

        <p>API Response: {this.state.apiResponse}</p>


      </div>
    );
  }
}


export default App;
