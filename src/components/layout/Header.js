import React from 'react';
import '../../assets/scss/main.scss';

function Header(props) {

  const { themeDark, bgColor } = props

  return (
    <div className="header d-flex align-items-center w-100" style={
      {
        backgroundColor: bgColor.background2,
        color: bgColor.color
      }
    }>
      <div className="container d-flex justify-content-between align-items-center">
        <h5>Where in the world ?</h5>
        <h6 onClick={props.darkMode.bind(this, !themeDark ? true : false)}><i className="fas fa-moon mr-2"></i> Dark Mode</h6>
      </div>
    </div>
  )
}

export default Header;
