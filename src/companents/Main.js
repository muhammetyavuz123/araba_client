import React, { Component } from "react";
import "../css/main.css";
import { Link } from "react-router-dom";

class Main extends Component {
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
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#portfolio-navbar"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <a
                style={{ marginLeft: "80px", marginTop: "18px", fontSize:"40px" }}
                className="navbar-brand"
                href="#"
              >
                Ajna
              </a>
            </div>

            <div
              className="collapse navbar-collapse"
              id="portfolio-navbar"
              style={{ opacity: "0.8" }}
            >
              <ul
                style={{ marginRight: "80px", marginTop: "18px" }}
                className="nav navbar-nav navbar-right"
              >
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <Link to="/register">
                    Kayıt Ol
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="jumbotron">
          <div className="overlay"></div>
          <div className="container hero-container">
            <h1 className="text-center hero-title">
              Ajna Meditasyon <br></br>Öğretiyor
            </h1>
            <br></br>

            <ul className="list-inline text-center center-block social-links">
              <li>
                <a
                  href="https://twitter.com"
                  title="Follow me on twitter"
                  // target="_blank"
                >
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  title="Follow me on facebook"
                  // target="_blank"
                >
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram" title="instagram"
                //  target="_blank"
                 >
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram" title="youtube"
                //  target="_blank"
                 >
                  <i className="fa fa-youtube" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="about" className="about-section section">
          <div className="container">
            <div className="row">
              <article className="col-sm-6 about-article">
                <h2 className="page-heade">About me</h2>
                <p>
                  Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı
                  bilinen bir gerçektir.
                </p>
                <p>
                  Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı
                  bilinen bir gerçektir.
                </p>
                <p>
                  Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı
                  bilinen bir gerçektir.
                </p>
              </article>
              <article className="col-sm-6">
                <h2 className="page-heade">Yapabildikleriniz</h2> Meditasyon
                öğret
                <div></div>
                <br></br>
                Meditasyon öğret
                <br></br>
                <br></br>
                Meditasyon öğret
                <br></br>
                <br></br>
                Meditasyon öğret
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
