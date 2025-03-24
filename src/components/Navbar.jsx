import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginButton from "../components/LoginButton";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">News</Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" 
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {["Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology", "About"].map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link className="nav-link" to={`/${item.toLowerCase()}`}>{item}</Link>
                </li>
              ))}
            </ul>
            <LoginButton />
          </div>
        </div>
      </nav>
    );
  }
}
