import * as React from 'react'
import {Link} from 'gatsby'
import logo from "../images/logo-presto-white.svg"
import githubWhite from "../images/icon-github-white.svg"
import twitterWhite from "../images/icon-twitter-white.svg"
import slackWhite from "../images/icon-slack-white.svg"




const Navbar = ({ pageTitle, children}) => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container-fluid navbar-inner">
      <a className="navbar-brand" href=".">
        <img src={logo} alt="PrestoDB" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="get_started.html"
            >
              Get Started
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Learn
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Tutorials
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Videos
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Community
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="docs/current/">
              Docs
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ms-2 mr-3 mb-lg-0 nav-social">
          <li className="nav-item nav-icon">
            <a href="https://github.com/prestodb/presto" target="_blank">
              <img src={githubWhite} alt="github" />
            </a>
          </li>
          <li className="nav-item nav-icon">
            <a href="https://twitter.com/prestodb" target="_blank">
              <img src={twitterWhite} alt="twitter" />
            </a>
          </li>
          <li className="nav-item nav-icon">
            <a href="https://prestodb.slack.com/" target="_blank">
              <img src={slackWhite} alt="slack" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  )
}

export default Navbar