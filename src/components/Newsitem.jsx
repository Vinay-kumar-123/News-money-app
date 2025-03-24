import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img 
          src={imageUrl || "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ixgNXOkYfsZE/v0/1200x800.jpg"} 
          className="card-img-top" 
          alt="news"
        />
        <div className="card-body">
          <h5 className="card-title">{title ? title.slice(0, 40) + "..." : "No Title Available"}</h5>
          <p className="card-text">{description ? description.slice(0, 80) + "..." : "No Description Available"}</p>
          <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    );
  }
}
