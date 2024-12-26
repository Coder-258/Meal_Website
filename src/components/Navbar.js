import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
      <div>
       <nav  className="navbar navbar-expand-lg bg-dark" >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src="logo.png" class="rounded-circle" style={{height:'75px'}}alt="Logo" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/about">About Us</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success text-white" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </div>
    )
  }
}
