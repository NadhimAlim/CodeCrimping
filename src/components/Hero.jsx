import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="display-4 fw-bold">
          Selamat Datang di Komunitas Code Crimping
        </h1>
        <p className="lead mt-3 mb-4">
          Berkolaborasi dalam Proyek Impian, Membangun Jaringan, dan
          Mengembangkan Diri Bersama.
        </p>
        <a href="#join" className="btn btn-success btn-lg">
          Mari Bergabung Sekarang <i className="fas fa-arrow-right ms-2"></i>
        </a>
      </div>
    </section>
  );
}
