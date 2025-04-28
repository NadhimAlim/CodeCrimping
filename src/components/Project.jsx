import React from 'react';
import './Projects.css'; // nanti buat file CSS-nya

export default function Projects() {
  return (
    <section id="projects" className="projects py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3 position-relative d-inline-block">
            <span className="position-absolute top-0 start-0 translate-middle-y ps-2 opacity-25">✨</span>
            Proyek Unggulan Komunitas
            <span className="position-absolute top-0 end-0 translate-middle-y pe-2 opacity-25">✨</span>
          </h2>
          <p className="lead text-muted mb-4 mx-auto" style={{ maxWidth: '700px' }}>
            Intip beberapa karya kolaboratif terbaik dari anggota komunitas Code Crimping!<br/>
            Setiap proyek dibuat dengan dedikasi dan semangat berbagi pengetahuan.
          </p>
          <div className="divider mx-auto"></div>
        </div>

        <div className="row g-4">
          {/* Project 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 shadow-sm border-0 overflow-hidden project-card">
              <div className="card-body p-4 d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 text-primary p-2 rounded me-3">
                    <i className="fas fa-tasks fs-4"></i>
                  </div>
                  <h5 className="card-title fw-bold mb-0">Aplikasi Daftar Tugas Interaktif</h5>
                </div>
                <p className="card-text text-muted flex-grow-1">
                  Organisir harimu dengan aplikasi daftar tugas yang interaktif dan mudah digunakan. Dilengkapi fitur prioritas dan pengingat.
                </p>
                <div className="mb-3">
                  <span className="badge bg-info bg-opacity-10 text-info me-2">Web Development</span>
                  <span className="badge bg-primary bg-opacity-10 text-primary">ReactJS</span>
                </div>
                <div className="mt-auto">
                  <a href="#" className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-between">
                    <span>Pelajari Lebih Lanjut</span>
                    <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 shadow-sm border-0 overflow-hidden project-card">
              <div className="card-body p-4 d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 text-primary p-2 rounded me-3">
                    <i className="fas fa-tasks fs-4"></i>
                  </div>
                  <h5 className="card-title fw-bold mb-0">Aplikasi Daftar Tugas Interaktif</h5>
                </div>
                <p className="card-text text-muted flex-grow-1">
                  Organisir harimu dengan aplikasi daftar tugas yang interaktif dan mudah digunakan. Dilengkapi fitur prioritas dan pengingat.
                </p>
                <div className="mb-3">
                  <span className="badge bg-info bg-opacity-10 text-info me-2">Web Development</span>
                  <span className="badge bg-primary bg-opacity-10 text-primary">ReactJS</span>
                </div>
                <div className="mt-auto">
                  <a href="#" className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-between">
                    <span>Pelajari Lebih Lanjut</span>
                    <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 shadow-sm border-0 overflow-hidden project-card">
              <div className="card-body p-4 d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 text-primary p-2 rounded me-3">
                    <i className="fas fa-tasks fs-4"></i>
                  </div>
                  <h5 className="card-title fw-bold mb-0">Aplikasi Daftar Tugas Interaktif</h5>
                </div>
                <p className="card-text text-muted flex-grow-1">
                  Organisir harimu dengan aplikasi daftar tugas yang interaktif dan mudah digunakan. Dilengkapi fitur prioritas dan pengingat.
                </p>
                <div className="mb-3">
                  <span className="badge bg-info bg-opacity-10 text-info me-2">Web Development</span>
                  <span className="badge bg-primary bg-opacity-10 text-primary">ReactJS</span>
                </div>
                <div className="mt-auto">
                  <a href="#" className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-between">
                    <span>Pelajari Lebih Lanjut</span>
                    <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 shadow-sm border-0 overflow-hidden project-card">
              <div className="card-body p-4 d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 text-primary p-2 rounded me-3">
                    <i className="fas fa-tasks fs-4"></i>
                  </div>
                  <h5 className="card-title fw-bold mb-0">Aplikasi Daftar Tugas Interaktif</h5>
                </div>
                <p className="card-text text-muted flex-grow-1">
                  Organisir harimu dengan aplikasi daftar tugas yang interaktif dan mudah digunakan. Dilengkapi fitur prioritas dan pengingat.
                </p>
                <div className="mb-3">
                  <span className="badge bg-info bg-opacity-10 text-info me-2">Web Development</span>
                  <span className="badge bg-primary bg-opacity-10 text-primary">ReactJS</span>
                </div>
                <div className="mt-auto">
                  <a href="#" className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-between">
                    <span>Pelajari Lebih Lanjut</span>
                    <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 shadow-sm border-0 overflow-hidden project-card">
              <div className="card-body p-4 d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 text-primary p-2 rounded me-3">
                    <i className="fas fa-tasks fs-4"></i>
                  </div>
                  <h5 className="card-title fw-bold mb-0">Aplikasi Daftar Tugas Interaktif</h5>
                </div>
                <p className="card-text text-muted flex-grow-1">
                  Organisir harimu dengan aplikasi daftar tugas yang interaktif dan mudah digunakan. Dilengkapi fitur prioritas dan pengingat.
                </p>
                <div className="mb-3">
                  <span className="badge bg-info bg-opacity-10 text-info me-2">Web Development</span>
                  <span className="badge bg-primary bg-opacity-10 text-primary">ReactJS</span>
                </div>
                <div className="mt-auto">
                  <a href="#" className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-between">
                    <span>Pelajari Lebih Lanjut</span>
                    <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 shadow-sm border-0 overflow-hidden project-card">
              <div className="card-body p-4 d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 text-primary p-2 rounded me-3">
                    <i className="fas fa-tasks fs-4"></i>
                  </div>
                  <h5 className="card-title fw-bold mb-0">Aplikasi Daftar Tugas Interaktif</h5>
                </div>
                <p className="card-text text-muted flex-grow-1">
                  Organisir harimu dengan aplikasi daftar tugas yang interaktif dan mudah digunakan. Dilengkapi fitur prioritas dan pengingat.
                </p>
                <div className="mb-3">
                  <span className="badge bg-info bg-opacity-10 text-info me-2">Web Development</span>
                  <span className="badge bg-primary bg-opacity-10 text-primary">ReactJS</span>
                </div>
                <div className="mt-auto">
                  <a href="#" className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-between">
                    <span>Pelajari Lebih Lanjut</span>
                    <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* ... copy paste untuk Project 2 s.d. 6 ... */}
        </div>

        <div className="text-center mt-5 pt-3">
          <a href="#" className="btn btn-primary btn-lg px-5 py-3 fw-bold" style={{ minWidth: '250px' }}>
            <i className="fas fa-code me-2"></i> Lihat Semua Proyek
          </a>
        </div>
      </div>
    </section>
  );
}
