import logoWhite from './../assets/logo_kasa_white.svg'
import React, { Component } from 'react'
import './../styles/Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer>
        <figure>
          <img src={logoWhite} alt="" className="" />
        </figure>
        <p>@2021 Kasa. All rights reserved</p>
      </footer>
    )
  }
}

export default Footer
