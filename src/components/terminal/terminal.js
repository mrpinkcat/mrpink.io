import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import './animations.scss';
import './terminal.scss';

import Home from './../home/home';

export default class Terminal extends Component {
  render() {
    return (
      <div className="Terminal">
        <div className="screen">
          <div className="layer">
            <div className="output">
              <Router>
                <Switch>
                  <Route path="/test">
                    <div className="Test">
                      <h2>Test</h2>
                      <p>This is a test</p>
                      <div className="links">
                        <Link to="/">Back</Link>
                      </div>
                    </div>
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </Router>
            </div>
          </div>
          <div className="overlay"></div>
        </div>

        <div className="ledText">
          <span>POWER</span>
        </div>

        <div className="led"></div>
      </div>
    );
  }
}