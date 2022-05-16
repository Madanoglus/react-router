import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="Navbar-logo">
          <h2>COUNTRİES</h2>
        </div>
        <div className="Navbar-user">
          <div className="Navbar-user-item">
            <Link className="a" to="/">
              ANASAYFA
            </Link>
            <Link className="a" to="/Bilgilendirme">
              BİLGİLENDİRME
            </Link>
            <Link className="a" to="/Dileksikayet">
              DİLEK-ŞİKAYET
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
