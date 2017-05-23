import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import 'react-select/dist/react-select.css';

import MainMap from './MainMap';
import TeacherGuide from './TeacherGuide.js';
import Resources from './Resources';

class App extends Component {

  constructor(props) {
    var firstPage = 'map';
    // if() there's a hash
    super(props);
    this.selectPage = this.selectPage.bind(this);
    this.showNavigation = this.showNavigation.bind(this);
    this.state = {
      currentPage : firstPage,
      hideNavigation : false
    }
  }

  componentDidMount() {
    if(window.innerWidth<768) {
      this.setState({
        hideNavigation : true
      });
    }
  }

  selectPage(newPage) {
    this.setState({
      currentPage : newPage
    });
  }

  showNavigation() {
    const { hideNavigation } = this.state;
    if(hideNavigation) {
      this.setState({
        hideNavigation : false
      });
    } else {
      this.setState({
        hideNavigation : true
      });
    }
  }

  render() {
    const { currentPage, hideNavigation } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" onClick={this.showNavigation}>
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="https://native-land.ca">Native-Land.ca</a>
                </div>
                {hideNavigation ?
                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                      <li><a href="teachers-guide.html">Teacher Guide</a></li>
                      <li><a href="resources.html">Resources</a></li>
                      <li><a href="about.html">About</a></li>
                      <li><a href="https://www.facebook.com/nativelandnet" target="_blank"><img src="/img/facebook.png" /></a></li>
                    </ul>
                  </div>
                :
                  <div className="navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                      <li><a href="teachers-guide.html">Teacher Guide</a></li>
                      <li><a href="resources.html">Resources</a></li>
                      <li><a href="about.html">About</a></li>
                      <li><a href="https://www.facebook.com/nativelandnet" target="_blank"><img src="/img/facebook.png" /></a></li>
                    </ul>
                  </div>
                }
            </div>
          </nav>
        </div>
        <div>
          {currentPage==='map' ? <MainMap /> : false}
        </div>
      </div>
    );
  }
}

export default App;
