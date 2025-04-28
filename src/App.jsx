import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import JoinKuy from './components/Joinkuy'
import Projects from './components/Project'
import HangoutSeries from './HangoutSeries'
import Footer from './Footer'
import './hero.css'



function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <a className="navbar-brand heading-brand" href="#">Code Crimping</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav me-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Beranda</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Proyek</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#join">Bergabung</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#kontak">Kontak</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Hero />
      <JoinKuy/>
      <Projects/>
      <HangoutSeries/>
      <Footer/>
    </>
  );
}

export default App;


