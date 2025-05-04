import React, { useState, useMemo } from 'react';
import './css/HangoutSeries.css';

// Category configuration with icons and colors
const categories = {
  'Web Development': {
    icon: 'bi-laptop',
    color: 'info',
    textColor: 'white'
  },
  'Mobile': {
    icon: 'bi-phone',
    color: 'success',
    textColor: 'white'
  },
  'Game Dev': {
    icon: 'bi-controller',
    color: 'danger',
    textColor: 'white'
  },
  'IoT': {
    icon: 'bi-cpu',
    color: 'warning',
    textColor: 'dark'
  },
  'AI': {
    icon: 'bi-robot',
    color: 'purple',
    textColor: 'white'
  },
  'Blockchain': {
    icon: 'bi-currency-bitcoin',
    color: 'primary',
    textColor: 'white'
  },
  'Open Source': {
    icon: 'bi-github',
    color: 'dark',
    textColor: 'white'
  }
};

const initialEvents = [
  {
    id: 1,
    category: 'Web Development',
    title: 'Sesi #1: Web Apps Kekinian',
    date: '2025-05-10',
    time: '19:00 WIB',
    location: 'Kopi Kenangan Senja',
    description: 'Ngobrolin ide-ide aplikasi web modern dengan React dan Node.js.',
    capacity: 30,
    registered: 15,
  },
  {
    id: 2,
    category: 'Mobile',
    title: 'Sesi #2: Aplikasi Mobile Cross-Platform',
    date: '2025-05-17',
    time: '19:00 WIB',
    location: 'Kopi Kenangan Senja',
    description: 'Diskusi pengembangan aplikasi mobile dengan Flutter dan React Native.',
    capacity: 25,
    registered: 18,
  },
  {
    id: 3,
    category: 'Game Dev',
    title: 'Sesi #3: Dunia Game Development',
    date: '2025-05-24',
    time: '19:00 WIB',
    location: 'Kopi Kenangan Senja',
    description: 'Membahas engine game populer seperti Unity dan Unreal Engine.',
    capacity: 20,
    registered: 12,
  },
  {
    id: 4,
    category: 'IoT',
    title: 'Sesi #4: Internet of Things',
    date: '2025-05-31',
    time: '19:00 WIB',
    location: 'Kopi Kenangan Senja',
    description: 'Eksplorasi proyek IoT dengan Arduino dan Raspberry Pi.',
    capacity: 15,
    registered: 10,
  },
  {
    id: 5,
    category: 'AI',
    title: 'Sesi #5: Kecerdasan Buatan',
    date: '2025-06-07',
    time: '19:00 WIB',
    location: 'Kopi Kenangan Senja',
    description: 'Pengenalan machine learning dan neural networks.',
    capacity: 25,
    registered: 20,
  },
  {
    id: 6,
    category: 'Blockchain',
    title: 'Sesi #6: Teknologi Blockchain',
    date: '2025-06-14',
    time: '19:00 WIB',
    location: 'Kopi Kenangan Senja',
    description: 'Memahami dasar-dasar blockchain dan smart contracts.',
    capacity: 20,
    registered: 15,
  },
  {
    id: 7,
    category: 'Open Source',
    title: 'Sesi #7: Kontribusi Open Source',
    date: '2025-06-21',
    time: '19:00 WIB',
    location: 'Kopi Kenangan Senja',
    description: 'Bagaimana memulai kontribusi ke proyek open source.',
    capacity: 30,
    registered: 22,
  },
  {
    id: 8,
    category: 'Web Development',
    title: 'Sesi #8: Web Performance Optimization',
    date: '2025-06-28',
    time: '19:00 WIB',
    location: 'Kopi Kenangan Senja',
    description: 'Teknik optimasi performa website modern.',
    capacity: 25,
    registered: 18,
  }
];

export default function HangoutSeries() {
  const [sortNewest, setSortNewest] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const displayed = useMemo(() => {
    let list = [...initialEvents];
    
    // Sort by date
    list.sort((a, b) => sortNewest 
      ? new Date(b.date) - new Date(a.date) 
      : new Date(a.date) - new Date(b.date));
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      list = list.filter(e =>
        `${e.title} ${e.description} ${e.category}`.toLowerCase().includes(term)
      );
    }
    
    // Filter by category
    if (activeCategory !== 'All') {
      list = list.filter(e => e.category === activeCategory);
    }
    
    return list;
  }, [sortNewest, searchTerm, activeCategory]);

  return (
    <section id="nongkrong-proyek-series" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Nongkrong Santai & Brainstorming Proyek</h2>
          <p className="lead text-muted">
            Yuk, ikutan seri nongkrong santai kita sambil bahas ide-ide proyek keren!
          </p>
        </div>

        {/* Filters */}
        <div className="row justify-content-between mb-4">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="d-flex align-items-center">
              <span className="me-2 text-muted">Urutkan:</span>
              <div className="btn-group">
                <button
                  className={`btn btn-sm ${sortNewest ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setSortNewest(true)}
                >
                  Terbaru
                </button>
                <button
                  className={`btn btn-sm ${!sortNewest ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setSortNewest(false)}
                >
                  Terlama
                </button>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="category-filter">
              <select 
                className="form-select form-select-sm"
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
              >
                <option value="All">Semua Kategori</option>
                {Object.keys(categories).map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="col-md-4">
  <div className="search-box position-relative">
    <input
      type="text"
      className="form-control form-control-sm ps-4"
      placeholder="Cari event (judul, deskripsi, kategori)..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      aria-label="Search events"
    />
    <i className="bi bi-search position-absolute start-0 top-50 translate-middle-y ms-3 text-muted"></i>
    {searchTerm && (
      <button
        className="btn btn-sm position-absolute end-0 top-50 translate-middle-y me-2 text-muted"
        onClick={() => setSearchTerm('')}
        aria-label="Clear search"
      >
        <i className="bi bi-x"></i>
      </button>
    )}
  </div>
</div>
        </div>

        {/* Category Quick Filter */}
        <div className="category-scroll mb-4">
          <div className="d-flex flex-nowrap overflow-auto pb-2">
            <button
              className={`btn btn-sm me-2 ${activeCategory === 'All' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setActiveCategory('All')}
            >
              Semua
            </button>
            {Object.entries(categories).map(([name, config]) => (
              <button
                key={name}
                className={`btn btn-sm me-2 d-flex align-items-center ${activeCategory === name ? 'active-category' : ''}`}
                style={{
                  backgroundColor: activeCategory === name ? `var(--bs-${config.color})` : '',
                  color: activeCategory === name ? config.textColor : ''
                }}
                onClick={() => setActiveCategory(name)}
              >
                <i className={`bi ${config.icon} me-1`}></i>
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        {displayed.length > 0 ? (
          <div className="row g-4" id="event-container">
            {displayed.map(evt => {
              const categoryConfig = categories[evt.category];
              return (
                <div key={evt.id} className="col-xl-3 col-lg-4 col-md-6">
                  <div className="card shadow-sm border-0 h-100 hover-effect">
                    <div className="card-body p-4 d-flex flex-column">
                      <span 
                        className={`badge category-badge bg-${categoryConfig.color} text-${categoryConfig.textColor} mb-3`}
                      >
                        <i className={`bi ${categoryConfig.icon} me-1`}></i>
                        {evt.category}
                      </span>
                      <h5 className="fw-bold mb-3">{evt.title}</h5>
                      <div className="event-meta mb-3">
                        <p className="text-muted mb-2">
                          <i className="bi bi-calendar me-2"></i>
                          {new Date(evt.date).toLocaleDateString('id-ID', { 
                            weekday: 'long', 
                            day: 'numeric', 
                            month: 'long', 
                            year: 'numeric' 
                          })}
                        </p>
                        <p className="text-muted mb-2">
                          <i className="bi bi-clock me-2"></i>{evt.time}
                        </p>
                        <p className="text-muted">
                          <i className="bi bi-geo-alt me-2"></i>{evt.location}
                        </p>
                      </div>
                      <p className="card-text mb-4">{evt.description}</p>
                      <div className="d-flex justify-content-between align-items-center mt-auto">
                        <div className="progress w-100 me-3" style={{ height: '6px' }}>
                          <div 
                            className="progress-bar" 
                            role="progressbar" 
                            style={{ 
                              width: `${(evt.registered / evt.capacity) * 100}%`,
                              backgroundColor: `var(--bs-${categoryConfig.color})`
                            }}
                            aria-valuenow={evt.registered}
                            aria-valuemin={0}
                            aria-valuemax={evt.capacity}
                          ></div>
                        </div>
                        <span className="text-nowrap text-muted small">
                          {evt.registered}/{evt.capacity}
                        </span>
                      </div>
                      <button className="btn btn-primary btn-sm mt-3 w-100">
                        Daftar Sekarang
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-5">
            <i className="bi bi-calendar-x fs-1 text-muted mb-3"></i>
            <h5 className="text-muted">Tidak ada event yang ditemukan</h5>
            <button 
              className="btn btn-link text-primary"
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('All');
              }}
            >
              Reset filter
            </button>
          </div>
        )}

        {/* Pagination */}
        {displayed.length > 0 && (
          <nav className="mt-5">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
              </li>
              <li className="page-item active"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
}