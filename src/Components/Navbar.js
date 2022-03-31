import React from 'react'
import logo from '../images/nvidia-logo.PNG'
import gtc from '../images/gtc.png'
import mundo from '../images/logo-mundo.png'
import sign from '../images/sign-in.png'

const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;

function Navbar() {
  return (
    <div>
      {/* nav 1 */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="" width="auto" height="auto" class="d-inline-block align-text-top" />
          </a>
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={mundo} alt="" width="auto" height="auto" class="d-inline-block align-text-top" />
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                
                <li><a class="dropdown-item" href="#">ES</a></li>
                <li><a class="dropdown-item" href="#">EN</a></li>
                <li><a class="dropdown-item" href="#">PT</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      {/* nav 2 */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={gtc} alt="" width="auto" height="auto" class="d-inline-block align-text-top" />
            {tab} CONFERENCE & TRAINING 
            {tab} MARCH 31 - 24, 2022
            {tab}KEYNOTE MARCH 22
          </a>
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <a> 
              <img src={sign} alt="" width="auto" height="auto" class="d-inline-block align-text-top" />
              </a>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* nav 3 */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
          Keynote  {tab} 
          <a>Session Catalog</a>{tab} 
          <a> For You</a>{tab} 
          <a>Workshops & Training</a>{tab} 
          <a>Special Programs</a>{tab} 
          <a>Sponsors</a>{tab} 
          <a>More</a>
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar