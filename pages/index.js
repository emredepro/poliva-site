import React, { useState, useEffect } from 'react';

export default function Inicio() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const playlists = [
    { title: "4 horas de música para despertar o fim de semana", img: "/capa-playlist-1.jpg", link: "https://open.spotify.com/playlist/1gnK5FmRkt5nZpKBcRwoP3?si=78bb4a57403d4c21" },
    { title: "curtindo a estrada com rocks inesquecíveis", img: "/capa-playlist-2.jpg", link: "https://open.spotify.com/playlist/76gpuL3vDA2Sxbbi8g5VYc?si=599247e4e2b74e7d" },
    { title: "rock matinal para começar bem o dia", img: "/capa-playlist-3.jpg", link: "https://open.spotify.com/playlist/6LUj7CsEjuncERS7NDaXHx?si=7fef215cd7a344b8" }
  ];

  // Preloader com Barra de Progresso e Imagem
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % playlists.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [playlists.length]);

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', overflowX: 'hidden', fontFamily: "'Avant Garde', sans-serif" }}>
      
      {/* 1. PRELOADER RESN COM BARRA E IMAGEM */}
      {loading && (
        <div className="preloader">
          <div className="loader-content">
            <img src="/simbolo-inicio.png" alt="Símbolo" className="loader-img" />
            <div className="progress-container">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="progress-text">{progress}%</span>
          </div>
        </div>
      )}

      {/* 2. FUNDO FIXO */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }}>
          <source src="/video-home-loop.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, transparent 20%, black 120%)' }}></div>
      </div>

      <div style={{ position: 'relative', zIndex: 10, opacity: loading ? 0 : 1, transition: 'opacity 1s ease' }}>
        
        {/* NAV RESPONSIVA */}
        <nav className="navbar">
          <div className="nav-logo-wrapper">
            <img src="/logo-poliva.png" alt="Logo" className="nav-logo" />
          </div>
          <div className="nav-links">
            <a href="#">iníciø</a>
            <a href="#">søbre pøliva</a>
            <a href="#">shøws aø vivø</a>
            <a href="#">singles & álbuns</a>
            <a href="#">agenda</a>
            <a href="#">cøntatø</a>
          </div>
        </nav>

        <main className="container">
          
          {/* HERO - M e S Maiúsculos */}
          <section style={{ marginBottom: '120px' }}>
            <h1 className="hero-title">
              Música que desperta, <br/>
              <span style={{ color: '#a855f7' }}>Show que vira portal</span>
            </h1>
            <div className="quote-box">
              <p>&quot;a música não é apenas entretenimento; ela é portal. não é só sobre tocar música, é sobre atravessá-la...&quot;</p>
              <span className="quote-author">— poliva soham</span>
            </div>
          </section>

          {/* SEÇÃO SHOW - SEM CAIXA, FONTE 3X, BOLD */}
          <section style={{ marginBottom: '100px' }}>
            <div className="brutal-header">
              <h2 className="massive-text">pølivessense, o show:</h2>
              <p className="massive-sub">assista abaixo na íntegra</p>
            </div>
            
            <div className="video-container">
               <iframe src="https://www.youtube.com/embed/ID_DO_VIDEO" frameBorder="0" allowFullScreen></iframe>
            </div>
          </section>

          {/* SEÇÃO PLAYLISTS - SEM CAIXA, FONTE 3X, BOLD */}
          <section style={{ marginBottom: '150px' }}>
             <div className="brutal-header">
                <h3 className="massive-text">playlists para as melhores ocasiões:</h3>
                <p className="massive-sub">o que o seu momento pede?</p>
             </div>

             <div className="slider-container">
                <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                  {playlists.map((item, index) => (
                    <div key={index} className="slide-item">
                      <div className="playlist-card">
                         <img src={item.img} alt={item.title} />
                         <button className="btn-ouca-grande" onClick={() => window.open(item.link, '_blank')}>ouça aqui</button>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </section>
        </main>

        <footer className="footer-black">
          <h4 className="footer-title">cøntatø</h4>
          <p>e-mail: contato@polivaoficial.com.br</p>
          <p className="phone">telefone: 22 98802-3803</p>
          <p className="copyright">pøliva© 2026. todos os direitos reservados.</p>
        </footer>

        {/* PLAYER COM "DÊ O PLAY" */}
        <div className="fixed-player">
          <div className="player-inner">
            <div className="player-controls">
              <div className="play-trigger" onClick={() => window.open("https://open.spotify.com/intl-pt/artist/169GxAoBcwtHLUGAYzgo00?si=aetfgOWfQOiiGBi1jiJ_fA", "_blank")}>
                <img src="/simbolo-poliva.png" alt="Play" />
                <span>dê o play</span>
              </div>
              <div className="song-info">
                <strong>depressa</strong>
                <small>pøliva • 16 de abril</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* PRELOADER */
        .preloader { position: fixed; inset: 0; background: black; z-index: 1000; display: flex; flex-direction: column; align-items: center; justify-content: center; }
        .loader-content { text-align: center; width: 200px; }
        .loader-img { width: 60px; margin-bottom: 20px; animation: pulse 2s infinite; }
        .progress-container { width: 100%; height: 2px; background: rgba(255,255,255,0.1); margin-bottom: 10px; }
        .progress-bar { height: 100%; background: #a855f7; transition: width 0.1s; }
        .progress-text { font-size: 10px; letter-spacing: 0.2em; color: #a855f7; }

        /* NAVBAR RESPONSIVA */
        .navbar { position: fixed; top: 0; width: 100%; background: rgba(0,0,0,0.9); backdrop-filter: blur(15px); padding: 20px; display: flex; flex-direction: column; align-items: center; z-index: 100; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .nav-links { display: flex; gap: 15px; flex-wrap: wrap; justify-content: center; margin-top: 15px; font-size: 9px; letter-spacing: 0.1em; }
        .nav-links a { color: white; text-decoration: none; text-transform: uppercase; }
        
        @media (min-width: 768px) {
          .navbar { flex-direction: row; justify-content: center; padding: 25px 0; }
          .nav-logo-wrapper { position: absolute; left: 10%; }
          .nav-links { margin-top: 0; gap: 30px; font-size: 11px; }
        }

        /* TIPOGRAFIA BRUTALISTA */
        .hero-title { font-size: clamp(2rem, 8vw, 4.5rem); font-weight: bold; line-height: 1.1; }
        .brutal-header { text-align: center; margin-bottom: 40px; }
        .massive-text { font-size: clamp(1.5rem, 5vw, 3.5rem); font-weight: bold; text-transform: lowercase; margin: 0; line-height: 1; }
        .massive-sub { font-size: clamp(1.2rem, 4vw, 2.8rem); font-weight: bold; text-transform: lowercase; color: #a855f7; margin: 0; line-height: 1; }

        /* VIDEO REDUZIDO */
        .video-container { width: 100%; max-width: 320px; margin: 0 auto; aspect-ratio: 16/9; box-shadow: 0 20px 50px rgba(0,0,0,0.9); }
        .video-container iframe { width: 100%; height: 100%; }

        /* PLAYER FIXO */
        .fixed-player { position: fixed; bottom: 0; width: 100%; background: black; padding: 15px; border-top: 1px solid #222; }
        .player-controls { display: flex; align-items: center; gap: 20px; max-width: 1200px; margin: 0 auto; }
        .play-trigger { cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 4px; }
        .play-trigger img { width: 30px; }
        .play-trigger span { font-size: 8px; text-transform: uppercase; color: #a855f7; font-weight: bold; }
        
        .footer-black { background: black; padding: 40px 20px 120px; text-align: center; }
        .btn-ouca-grande { background: none; border: 1px solid #a855f7; color: #a855f7; font-size: 15px; padding: 16px 32px; cursor: pointer; font-weight: bold; text-transform: lowercase; transition: 0.3s; }
        .btn-ouca-grande:hover { background: #a855f7; color: white; }

        @keyframes pulse { 0% { opacity: 0.5; } 50% { opacity: 1; } 100% { opacity: 0.5; } }
      `}</style>
    </div>
  );
}