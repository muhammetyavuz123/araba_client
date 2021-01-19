import React, { Component } from "react";
import "../css/main.css";

class Navbar extends Component {
  // componentDidMount() {

  //     const navbarToggler = document.querySelector(".navbar-toggler");
  //       const navbarMenu = document.querySelector(".navbar ul");
  //       const navbarLinks = document.querySelectorAll(".navbar a");

  //       navbarToggler.addEventListener("click", navbarTogglerClick);

  //       function navbarTogglerClick() {
  //         navbarToggler.classList.toggle("open-navbar-toggler");
  //         navbarMenu.classList.toggle("open");
  //       }

  //       navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

  //       function navbarLinkClick() {
  //         if(navbarMenu.classList.contains("open")) {
  //           navbarToggler.click();
  //           }
  //          }
  //   }

  render() {
    return (
      <div>
        <nav class="navbar navbar-inverse navbar-fixed-top">
          <div class="container-fluid">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#portfolio-navbar"
                aria-expanded="false"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a
                style={{ marginLeft: "80px", marginTop: "18px" }}
                class="navbar-brand"
                href="#"
              >
                Ajna
              </a>
            </div>

            <div
              class="collapse navbar-collapse"
              id="portfolio-navbar"
              style={{ opacity: "0.8" }}
            >
              <ul
                style={{ marginRight: "80px", marginTop: "18px" }}
                class="nav navbar-nav navbar-right"
              >
                <li>
                <Link id="RouterNavLink" style={None} to="/about">About</Link>
                  {/* <a href="#about">About</a> */}
                </li>
                <li>
                <Link id="RouterNavLink" style={None} to="/portfolio">Kayıt Ol</Link>
                  {/* <a href="#portfolio">Kayıt Ol</a> */}
                </li>
                <li>
                <Link id="RouterNavLink" style={None} to="/contact">Login</Link>
                  {/* <a href="#contact">Login</a> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
