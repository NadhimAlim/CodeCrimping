import React from 'react';
import './css/Footer.css';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row g-4">
          {/* Contact Column */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-logo mb-3">
              <h3 className="text-primary fw-bold">Code Crimping</h3>
              <p className="text-muted">Innovative solutions for the digital world</p>
            </div>
            <div className="contact-info">
              <h5 className="text-white mb-3 border-bottom pb-2">Contact Us</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="mailto:support@codecrimping.com" className="text-white-50 hover-white text-decoration-none">
                    <i className="fas fa-envelope me-2 text-primary"></i>
                    support@codecrimping.com
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noopener" className="text-white-50 hover-white text-decoration-none">
                    <i className="fab fa-whatsapp me-2 text-primary"></i> +62 812-3456-7890
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" target="_blank" rel="noopener" className="text-white-50 hover-white text-decoration-none">
                    <i className="fab fa-instagram me-2 text-primary"></i>@codecrimping_id
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener" className="text-white-50 hover-white text-decoration-none">
                    <i className="fab fa-github me-2 text-primary"></i>CodeCrimping
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="col-lg-2 col-md-6">
            <h5 className="text-white mb-3 border-bottom pb-2">Navigation</h5>
            <ul className="list-unstyled">
              {['Home','#projects','Join Us','#kontak'].map((label, i) => (
                <li key={i} className="mb-2">
                  <a href={ label.startsWith('#') ? label : '#' } className="text-white-50 hover-white text-decoration-none">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="col-lg-2 col-md-6">
            <h5 className="text-white mb-3 border-bottom pb-2">Legal</h5>
            <ul className="list-unstyled">
              {['Privacy Policy','Terms & Conditions','Cookie Policy'].map((item, i) => (
                <li key={i} className="mb-2">
                  <a href="#" className="text-white-50 hover-white text-decoration-none">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-3 border-bottom pb-2">Newsletter</h5>
            <p className="text-white-50">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="d-flex gap-2">  {/* Ubah ke flex dengan gap */}
    <input
      type="email"
      className="form-control bg-secondary border-0 flex-grow-1"
      placeholder="Your email"
      aria-label="Your email"
    />
    <button className="btn btn-primary px-3" type="submit">
      Subscribe
    </button>
  </form>
            <div className="social-icons">
              <h5 className="text-white mb-3 border-bottom pb-2">Follow Us</h5>
              <div className="d-flex gap-3">
                {['facebook-f','twitter','instagram','linkedin-in','github'].map((icon, i) => (
                  <a key={i} href="#" className="text-white-50 hover-primary fs-4">
                    <i className={`fab fa-${icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <hr className="my-4 bg-secondary" />

        {/* Copyright */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-white-50 small">
              &copy; 2025 Code Crimping. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0 text-white-50 small">
              Crafted with <i className="fas fa-heart text-danger"></i> in Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
