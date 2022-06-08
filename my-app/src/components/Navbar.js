import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.about}</a>
        </li>
        
          </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </div>
  )
}
// aapne title ko string ki form me hi bhejna hai agar aapne App.js file se title me kuch {3} aisa
// bhej diya to error aa jaayegi

// isRequired ye batata hai ki props chahiye tha component but aapne diya nahi 


Navbar.propTypes = {title: PropTypes.string.isRequired,

about: PropTypes.string.isRequired
}

// Agar props me koi bhi value nahi hai to by default value set kar sakete hai for the time being
// agar props paas nahi kiya jaaye to 

Navbar.defaultProps = {

    title:'set Title here',
    about:'set About section here'
}