import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div><div className="card" style={{width: "18rem"}}>
      <img src={imageUrl ? imageUrl :	'https:assets.bwbx.io/images/users/iqjWHBFdfxIU/ixgNXOkYfsZE/v0/1200x800.jpg'} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title?title.slice(0, 40) + ".....":""}</h5>
        <p className="card-text">{description ? description.slice(0,80)+ "......": ""}</p>
        <a href={newsUrl} target='blank' className="btn btn-primary">Read More</a>
      </div>
    </div></div>
    )
  }
}
