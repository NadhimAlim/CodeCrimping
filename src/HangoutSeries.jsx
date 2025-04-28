import React, { useState, useMemo } from 'react';
import './css/HangoutSeries.css';


const initialEvents = [
  {
    id: 1,
    category: 'Web Development',
    title: 'Sesi #1: Web Apps Kekinian',
    date: '2025-05-10',
    time: '19:00 WIB',
    location: 'Kopi Kenangan Senja',
    description: 'Ngobrolin ide-ide aplikasi web modern dengan React dan Node.js.',
    image: '/assets/kampusuad.jpg',
    capacity: 30,
    registered: 15,
    
  },{
    id: 1,
    category: 'Web Development',
    title: 'Sesi #1: Web Apps Kekinian',
    date: '2025-05-10',
    time: '19:00 WIB',
    location: 'Kopi Kenangan Senja',
    description: 'Ngobrolin ide-ide aplikasi web modern dengan React dan Node.js.',
    image: '/assets/kampusuad.jpg',
    capacity: 30,
    registered: 15,
  },{
    id: 1,
    category: 'Web Development',
    title: 'Sesi #1: Web Apps Kekinian',
    date: '2025-05-10',
    time: '19:00 WIB',
    location: 'Kopi Kenangan Senja',
    description: 'Ngobrolin ide-ide aplikasi web modern dengan React dan Node.js.',
    image: '/assets/kampusuad.jpg',
    capacity: 30,
    registered: 15,
  },{
    id: 1,
    category: 'Web Development',
    title: 'Sesi #1: Web Apps Kekinian',
    date: '2025-05-10',
    time: '19:00 WIB',
    location: 'Kopi Kenangan Senja',
    description: 'Ngobrolin ide-ide aplikasi web modern dengan React dan Node.js.',
    image: '/assets/kampusuad.jpg',
    capacity: 30,
    registered: 15,
  },{
    id: 1,
    category: 'Web Development',
    title: 'Sesi #1: Web Apps Kekinian',
    date: '2025-05-10',
    time: '19:00 WIB',
    location: 'Kopi Kenangan Senja',
    description: 'Ngobrolin ide-ide aplikasi web modern dengan React dan Node.js.',
    image: '/assets/kampusuad.jpg',
    capacity: 30,
    registered: 15,
  },{
    id: 1,
    category: 'Web Development',
    title: 'Sesi #1: Web Apps Kekinian',
    date: '2025-05-10',
    time: '19:00 WIB',
    location: 'Kopi Kenangan Senja',
    description: 'Ngobrolin ide-ide aplikasi web modern dengan React dan Node.js.',
    image: '/assets/kampusuad.jpg',
    capacity: 30,
    registered: 15,
  }
  // … ulangi untuk semua sesi 2–8, sesuaikan id, category, title, date, dll.
];

export default function HangoutSeries() {
  const [sortNewest, setSortNewest] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Sort & filter dengan useMemo untuk performa
  const displayed = useMemo(() => {
    let list = [...initialEvents];
    if (!sortNewest) list.reverse();
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      list = list.filter(e =>
        `${e.title} ${e.description} ${e.category}`.toLowerCase().includes(term)
      );
    }
    return list;
  }, [sortNewest, searchTerm]);

  return (
    <section id="nongkrong-proyek-series" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Nongkrong Santai & Brainstorming Proyek Selanjutnya</h2>
          <p className="lead text-muted">
            Yuk, ikutan seri nongkrong santai kita sambil bahas ide-ide proyek keren!
          </p>
        </div>

        {/* Filter */}
        <div className="row justify-content-between mb-4">
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="d-flex align-items-center">
              <span className="me-2 text-muted">Urutkan:</span>
              <div className="btn-group">
                <button
                  className={`btn btn-outline-secondary btn-sm ${sortNewest ? 'active' : ''}`}
                  onClick={() => setSortNewest(true)}
                >
                  Terbaru
                </button>
                <button
                  className={`btn btn-outline-secondary btn-sm ${!sortNewest ? 'active' : ''}`}
                  onClick={() => setSortNewest(false)}
                >
                  Terlama
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-group">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Cari event..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-outline-secondary btn-sm" type="button">
                <i className="bi bi-search"></i> Cari
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="row g-4" id="event-container">
          {displayed.map(evt => (
            <div key={evt.id} className="col-xl-3 col-lg-4 col-md-6">
              <div className="card shadow-sm border-0 h-100">
                <img
                  src={evt.image}
                  className="card-img-top"
                  alt={evt.category}
                />
                <div className="card-body p-4 d-flex flex-column">
                  <span className={`badge mb-2 ${
                    evt.category === 'IoT' ? 'bg-warning text-dark' :
                    evt.category === 'Mobile' ? 'bg-success text-dark' :
                    evt.category === 'Game Dev' ? 'bg-danger text-white' :
                    evt.category === 'Open Source' ? 'bg-secondary text-white' :
                    evt.category === 'AI' ? 'bg-purple text-white' :
                    evt.category === 'Blockchain' ? 'bg-dark text-white' :
                    'bg-info text-dark'
                  }`}>
                    {evt.category}
                  </span>
                  <h5 className="fw-bold mb-3">{evt.title}</h5>
                  <p className="text-muted mb-2">
                    <i className="bi bi-calendar me-2"></i>
                    {new Date(evt.date).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                  <p className="text-muted mb-3">
                    <i className="bi bi-clock me-2"></i>{evt.time}
                  </p>
                  <p className="text-muted mb-3">
                    <i className="bi bi-geo-alt me-2"></i>{evt.location}
                  </p>
                  <p className="card-text">{evt.description}</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="badge bg-light text-dark">
                      <i className="bi bi-people me-1"></i>
                      {evt.registered}/{evt.capacity}
                    </span>
                    <a href="#" className="btn btn-outline-primary btn-sm">Daftar</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination (statis) */}
        <nav className="mt-5">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#">Previous</a>
            </li>
            <li className="page-item active"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
