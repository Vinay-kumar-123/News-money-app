import { useState } from "react";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";

import News from "./components/News";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact
              path="/"
              element={<News key="general" pageSize={6} country="us" category="general" />}
            />
            <Route exact
              path="/business"
              element={<News key="business" pageSize={6} country="us" category="business" />}
            />
            <Route exact
              path="/science"
              element={<News key="science" pageSize={6} country="us" category="science" />}
            />
            <Route exact
              path="/general"
              element={<News key="general" pageSize={6} country="us" category="general" />}
            />
            <Route exact
              path="/sports"
              element={<News key="sports" pageSize={6} country="us" category="sports" />}
            />
            <Route exact
              path="/technology"
              element={<News key="technology" pageSize={6} country="us" category="technology" />}
            />
            <Route exact
              path="/health"
              element={<News key="health" pageSize={6} country="us" category="health" />}
            />
            <Route exact
              path="/cricket"
              element={<News key="cricket" pageSize={6} country="us" category="cricket" />}
            />
            <Route exact
              path="/entertainment"
              element={
                <News key="entertainment" pageSize={6} country="us" category="entertainment" />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}



