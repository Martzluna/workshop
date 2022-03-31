import React from 'react'
import logo from '../images/nvidia-logo.PNG'

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="" width="auto" height="auto" class="d-inline-block align-text-top" />
          </a>
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                EN
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
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="" width="auto" height="auto" class="d-inline-block align-text-top" />
          </a>
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                EN
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="" width="auto" height="auto" class="d-inline-block align-text-top" />
          </a>
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                EN
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar