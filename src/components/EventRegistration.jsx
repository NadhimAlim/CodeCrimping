import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EventRegistration({ events, categories }) {
  const { eventId } = useParams();
  const navigate = useNavigate();
  
  // Find event by ID
  const event = events.find(evt => evt.id === parseInt(eventId));
  const categoryConfig = categories[event?.category];

  if (!event) {
    return (
      <div className="container py-5 text-center">
        <h3>Event tidak ditemukan</h3>
        <button 
          className="btn btn-primary mt-3"
          onClick={() => navigate('/nongkrong-proyek-series')}
        >
          Kembali ke Daftar Event
        </button>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    alert(`Pendaftaran untuk "${event.title}" berhasil!`);
    navigate('/nongkrong-proyek-series');
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <button 
                  className="btn btn-sm btn-outline-secondary mb-4"
                  onClick={() => navigate('/nongkrong-proyek-series')}
                >
                  <i className="bi bi-arrow-left me-1"></i> Kembali
                </button>

                <div className="d-flex align-items-center mb-4">
                  <span 
                    className={`badge bg-${categoryConfig.color} text-${categoryConfig.textColor} me-3`}
                  >
                    <i className={`bi ${categoryConfig.icon} me-1`}></i>
                    {event.category}
                  </span>
                  <h2 className="mb-0">{event.title}</h2>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">Detail Event</h5>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            <i className="bi bi-calendar me-2"></i>
                            <strong>Tanggal:</strong> {new Date(event.date).toLocaleDateString("id-ID", {
                              weekday: "long",
                              day: "numeric",
                              month: "long",
                              year: "numeric"
                            })}
                          </li>
                          <li className="list-group-item">
                            <i className="bi bi-clock me-2"></i>
                            <strong>Waktu:</strong> {event.time}
                          </li>
                          <li className="list-group-item">
                            <i className="bi bi-geo-alt me-2"></i>
                            <strong>Lokasi:</strong> {event.location}
                          </li>
                          <li className="list-group-item">
                            <i className="bi bi-people me-2"></i>
                            <strong>Kuota:</strong> {event.registered}/{event.capacity} orang
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title mb-4">Form Pendaftaran</h5>
                        <form onSubmit={handleSubmit}>
                          <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nama Lengkap</label>
                            <input 
                              type="text" 
                              className="form-control" 
                              id="name" 
                              required 
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input 
                              type="email" 
                              className="form-control" 
                              id="email" 
                              required 
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Nomor WhatsApp</label>
                            <input 
                              type="tel" 
                              className="form-control" 
                              id="phone" 
                              required 
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="institution" className="form-label">Institusi/Perusahaan</label>
                            <input 
                              type="text" 
                              className="form-control" 
                              id="institution" 
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="experience" className="form-label">Pengalaman di bidang terkait</label>
                            <textarea 
                              className="form-control" 
                              id="experience" 
                              rows="3"
                            ></textarea>
                          </div>
                          <div className="d-grid">
                            <button 
                              type="submit" 
                              className="btn btn-primary"
                              disabled={event.registered >= event.capacity}
                            >
                              {event.registered >= event.capacity 
                                ? "Kuota Penuh" 
                                : "Daftar Sekarang"}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card mt-4">
                  <div className="card-body">
                    <h5 className="card-title">Deskripsi Event</h5>
                    <p>{event.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}