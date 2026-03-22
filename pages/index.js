import React, { useState, useEffect, useRef } from 'react';

export default function Inicio() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const audioRef = useRef(null);
  const tracks = ["/ha-mar.mp3", "/OTT.mp3", "/TOQES.mp3", "/Depressa.mp3"];
  const trackNames = ["ha-mar", "OTT", "TOQES", "Depressa"];

  const playlists = [
    { title: "4 horas de música para despertar o fim de semana", img: "/capa-playlist-1.jpg", link: "https://open.spotify.com/playlist/1gnK5FmRkt5nZpKBcRwoP3?si=78bb4a57403d4c21" },
    { title: "curtindo a estrada com rocks inesquecíveis", img: "/capa-playlist-2.jpg", link: "https://open.spotify.com/playlist/76gpuL3vDA2Sxbbi8g5VYc?si=599247e4e2b74e7d" },
    { title: "rock matinal para começar bem o dia", img: "/capa-playlist-3.jpg", link: "https://open.spotify.com/playlist/6LUj7CsEjuncERS7NDaXHx?si=7fef215cd7a344b8" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(interval); setTimeout(() => setLoading(false), 800); return 100; }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const togglePlay = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    const next = (currentTrack + 1) % tracks.length;
    setCurrentTrack(next);
    setIsPlaying(true);
  };

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', overflowX: 'hidden', fontFamily: "'Avant Garde', sans-serif" }}>
      <audio ref={audioRef} src={tracks[currentTrack]} onEnded={nextTrack} />

      {loading && (
        <div className="preloader">
          <div className="loader-box">
            <img src="/simbolo-inicio.png" alt="Ø" style={{ width: '80px', marginBottom: '20px' }} />
            <div className="bar-bg"><div className="bar-fill" style={{ width: `${progress}%` }}></div></div>
            <span className="bar-pct">{progress}%</span>
          </div>
        </div>
      )}

      {/* FUNDO FIXO */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }}>
          <source src="/video-home-loop.mp4" type="video/mp4" />
        </video>
      </div>

      <div style={{ position: 'relative', zIndex: 10, opacity: loading ? 0 : 1, transition: 'opacity 1s' }}>
        
        {/* NAV COM MENU HAMBÚRGUER MOBILE */}
        <nav className="navbar">
          <div className="nav-content">
            <img src="/logo-poliva.png" alt="Logo" className="nav-logo" />
            <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span></span><span></span><span></span>
            </button>
            <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
              <a href="#">iníciø</a>
              <a href="#">søbre pøliva</a>
              <a href="#">shøws aø vivø</a>
              <a href="#">singles & álbuns</a>
              <a href="#">agenda</a>
              <a href="#">cøntatø</a>
            </div>
          </div>
        </nav>

        <main className="main-scroll">
          <section className="hero">
            <h1 className="hero-title">Música que desperta, <br/><span style={{ color: '#a855f7' }}>Show que vira portal</span></h1>
            <div className="citation">
              <p>"A música não é apenas entretenimento; ela é portal. Não é só sobre tocar música, é sobre atravessá-la. Eu faço músicas e também canto músicas que transformam a mim e a outras pessoas"</p>
              <span className="author">— POLIVA SOHAM</span>
            </div>
          </section>

          <section className="section-block">
            <div className="brutal-header">
              <h2>pølivessense, o show:</h2>
              <p className="bold-sub">assista abaixo na íntegra</p>
            </div>
            <div className="video-player">
               <iframe src="https://www.youtube.com/embed/ID_DO_VIDEO" frameBorder="0" allowFullScreen></iframe>
            </div>
          </section>

          <section className="section-block">
             <div className="brutal-header">
                <h3>playlists para as melhores ocasiões:</h3>
                <p className="bold-sub">o que o seu momento pede?</p>
             </div>
             <div className="carousel">
                <button className="car-btn" onClick={() => setCurrentIndex(prev => (prev === 0 ? 2 : prev - 1))}>‹</button>
                <div className="car-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                  {playlists.map((item, index) => (
                    <div key={index} className="car-item">
                      <div className="card">
                         <img src={item.img} alt={item.title} />
                         <button className="ouca-btn" onClick={() => window.open(item.link, '_blank')}>ouça aqui</button>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="car-btn" onClick={() => setCurrentIndex(prev => (prev + 1) % 3)}>›</button>
             </div>
          </section>
        </main>

        <a href="https://wa.me/message/L5OXQTU6PDIFF1" target="_blank" className="wa-btn">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
        </a>

        {/* PLAYER RÁDIO MULTI-FAIXA */}
        <div className="radio-bar">
          <div className="radio-inner">
            <div className="radio-play" onClick={togglePlay}>
              <img src="/simbolo-poliva.png" alt="Play" style={{ opacity: isPlaying ? 1 : 0.6 }} />
              <span className="play-hint">{isPlaying ? 'pausar' : 'dê o play'}</span>
            </div>
            <div className="radio-info">
              <strong className="track-name">{trackNames[currentTrack]}</strong>
              <span className="radio-status">{isPlaying ? 'sintonizado na pølivessense' : 'rádio offline'}</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .preloader { position: fixed; inset: 0; background: black; z-index: 1000; display: flex; align-items: center; justify-content: center; }
        .loader-box { width: 200px; text-align: center; }
        .bar-bg { width: 100%; height: 2px; background: #111; margin: 10px 0; }
        .bar-fill { height: 100%; background: #a855f7; transition: width 0.1s; }
        .bar-pct { font-size: 10px; color: #a855f7; font-weight: bold; }

        .navbar { position: fixed; top: 0; width: 100%; background: rgba(0,0,0,0.9); padding: 20px 40px; z-index: 500; border-bottom: 1px solid #111; }
        .nav-content { max-width: 1400px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
        .nav-logo { width: 100px; }
        .nav-links { display: flex; gap: 30px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: bold; }
        .nav-links a { color: white; text-decoration: none; transition: 0.3s; }
        .nav-links a:hover { color: #a855f7; }

        .menu-toggle { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; }
        .menu-toggle span { width: 25px; height: 2px; background: white; }

        @media (max-width: 768px) {
          .menu-toggle { display: flex; }
          .nav-links { position: fixed; top: 80px; left: 0; width: 100%; background: black; flex-direction: column; align-items: center; padding: 40px 0; gap: 20px; transform: translateY(-150%); transition: 0.5s; }
          .nav-links.open { transform: translateY(0); }
        }

        .main-scroll { padding-top: 200px; text-align: center; max-width: 1200px; margin: 0 auto; }
        .hero-title { font-size: clamp(2.5rem, 8vw, 4.5rem); font-weight: bold; line-height: 1.1; margin-bottom: 40px; }
        .citation { max-width: 600px; margin: 0 auto 100px; border-left: 2px solid #a855f7; padding-left: 30px; text-align: left; font-style: italic; color: #a1a1aa; font-size: 17px; line-height: 1.6; }
        .author { display: block; font-style: normal; color: #a855f7; font-weight: bold; margin-top: 15px; font-size: 11px; letter-spacing: 0.3em; }

        .section-block { margin-bottom: 120px; padding: 0 20px; }
        .brutal-header h2, .brutal-header h3 { font-size: clamp(1.4rem, 4vw, 2.5rem); font-weight: bold; margin: 0; line-height: 1; }
        .bold-sub { font-size: clamp(1.2rem, 3.5vw, 2.1rem); font-weight: bold; color: #a855f7; margin: 2px 0 0; line-height: 1; }

        .video-player { width: 100%; max-width: 312px; margin: 40px auto; aspect-ratio: 16/9; box-shadow: 0 40px 80px rgba(0,0,0,0.8); }
        .video-player iframe { width: 100%; height: 100%; }

        .carousel { display: flex; align-items: center; justify-content: center; gap: 20px; margin-top: 40px; }
        .car-track { display: flex; width: 220px; overflow: hidden; }
        .car-item { min-width: 100%; transition: 0.5s; }
        .card img { width: 100%; aspect-ratio: 1/1; border-radius: 4px; margin-bottom: 20px; }
        .ouca-btn { background: none; border: 1px solid #a855f7; color: #a855f7; font-size: 11px; padding: 12px 24px; cursor: pointer; font-weight: bold; text-transform: lowercase; }
        .car-btn { background: none; border: none; color: white; font-size: 30px; cursor: pointer; }

        .wa-btn { position: fixed; bottom: 100px; right: 20px; width: 50px; height: 50px; z-index: 200; }
        .radio-bar { position: fixed; bottom: 0; width: 100%; background: rgba(5,5,5,0.98); padding: 15px 40px; border-top: 1px solid #111; z-index: 400; }
        .radio-inner { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; gap: 25px; }
        .radio-play { cursor: pointer; display: flex; flex-direction: column; align-items: center; }
        .radio-play img { width: 35px; }
        .play-hint { font-size: 8px; text-transform: uppercase; color: #a855f7; margin-top: 4px; font-weight: bold; }
        .track-name { display: block; font-size: 12px; text-transform: lowercase; }
        .radio-status { font-size: 10px; color: #555; }
      `}</style>
    </div>
  );
}