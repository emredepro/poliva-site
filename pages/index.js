import React, { useState, useEffect, useRef } from 'react';

export default function Inicio() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null); // Referência para o áudio interno

  const playlists = [
    { title: "4 horas de música para despertar o fim de semana", img: "/capa-playlist-1.jpg", link: "https://open.spotify.com/playlist/1gnK5FmRkt5nZpKBcRwoP3?si=78bb4a57403d4c21" },
    { title: "curtindo a estrada com rocks inesquecíveis", img: "/capa-playlist-2.jpg", link: "https://open.spotify.com/playlist/76gpuL3vDA2Sxbbi8g5VYc?si=599247e4e2b74e7d" },
    { title: "rock matinal para começar bem o dia", img: "/capa-playlist-3.jpg", link: "https://open.spotify.com/playlist/6LUj7CsEjuncERS7NDaXHx?si=7fef215cd7a344b8" }
  ];

  // Lógica do Player Interno
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

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
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Navegação do Carrossel
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % playlists.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? playlists.length - 1 : prev - 1));

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', overflowX: 'hidden', fontFamily: "'Avant Garde', sans-serif" }}>
      
      {/* AUDIO ENGINE (Coloque o arquivo depressa.mp3 na pasta public) */}
      <audio ref={audioRef} src="/depressa.mp3" loop />

      {/* 1. PRELOADER CENTRALIZADO */}
      {loading && (
        <div className="preloader">
          <div className="loader-center">
            <img src="/simbolo-inicio.png" alt="Ø" className="loader-symbol" />
            <div className="progress-bg"><div className="progress-fill" style={{ width: `${progress}%` }}></div></div>
            <span className="progress-val">{progress}%</span>
          </div>
        </div>
      )}

      {/* 2. FUNDO FIXO */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }}>
          <source src="/video-home-loop.mp4" type="video/mp4" />
        </video>
      </div>

      <div style={{ position: 'relative', zIndex: 10, opacity: loading ? 0 : 1, transition: 'opacity 1s ease' }}>
        
        {/* NAV RESPONSIVA */}
        <nav className="navbar">
          <img src="/logo-poliva.png" alt="Logo" className="nav-logo" />
          <div className="nav-links">
            <a href="#">iníciø</a>
            <a href="#">søbre pøliva</a>
            <a href="#">shøws aø vivø</a>
            <a href="#">singles & álbuns</a>
            <a href="#">agenda</a>
            <a href="#">cøntatø</a>
          </div>
        </nav>

        <main style={{ paddingTop: '180px', textAlign: 'center', paddingBottom: '150px' }}>
          
          {/* HERO */}
          <section style={{ marginBottom: '100px', padding: '0 20px' }}>
            <h1 className="hero-title">Música que desperta, <br/><span style={{ color: '#a855f7' }}>Show que vira portal</span></h1>
          </section>

          {/* SHOW - REDUÇÃO DE 20% NA FONTE E 70% NO VÍDEO */}
          <section className="portal-section">
            <div className="brutal-header">
              <h2 className="title-medium">pølivessense, o show:</h2>
              <p className="subtitle-medium-bold">assista abaixo na íntegra</p>
            </div>
            <div className="video-mini">
               <iframe src="https://www.youtube.com/embed/ID_DO_VIDEO" frameBorder="0" allowFullScreen></iframe>
            </div>
          </section>

          {/* PLAYLISTS COM SETAS */}
          <section className="portal-section">
             <div className="brutal-header">
                <h3 className="title-medium">playlists para as melhores ocasiões:</h3>
                <p className="subtitle-medium-bold">o que o seu momento pede?</p>
             </div>

             <div className="carousel-wrapper">
                <button className="nav-btn prev" onClick={prevSlide}>‹</button>
                <div className="slider-box">
                  <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {playlists.map((item, index) => (
                      <div key={index} className="slide-unit">
                        <div className="card-playlist">
                           <img src={item.img} alt={item.title} />
                           <button className="btn-play-link" onClick={() => window.open(item.link, '_blank')}>ouça aqui</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="nav-btn next" onClick={nextSlide}>›</button>
             </div>
          </section>
        </main>

        {/* BOTÃO WHATSAPP FIXO */}
        <a href="https://wa.me/5522988023803" target="_blank" className="whatsapp-float">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
        </a>

        {/* PLAYER FIXO INTERNO */}
        <div className="fixed-player">
          <div className="player-inner">
            <div className="player-controls">
              <div className="play-trigger" onClick={togglePlay}>
                <img src="/simbolo-poliva.png" alt="Play" style={{ opacity: isPlaying ? 1 : 0.5 }} />
                <span>{isPlaying ? 'pausar' : 'dê o play'}</span>
              </div>
              <div className="song-info">
                <strong>depressa</strong>
                <small>{isPlaying ? 'tocando agora...' : 'rádio pølivessense'}</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .preloader { position: fixed; inset: 0; background: black; z-index: 1000; display: flex; align-items: center; justify-content: center; }
        .loader-center { display: flex; flex-direction: column; align-items: center; width: 180px; }
        .loader-symbol { width: 60px; margin-bottom: 20px; }
        .progress-bg { width: 100%; height: 2px; background: #222; margin-bottom: 8px; }
        .progress-fill { height: 100%; background: #a855f7; transition: width 0.1s; }
        .progress-val { font-size: 10px; color: #a855f7; font-weight: bold; }

        .navbar { position: fixed; top: 0; width: 100%; background: rgba(0,0,0,0.9); padding: 20px; z-index: 100; text-align: center; }
        .nav-logo { width: 90px; margin-bottom: 15px; }
        .nav-links { display: flex; gap: 20px; justify-content: center; font-size: 10px; letter-spacing: 0.15em; font-weight: 600; text-transform: uppercase; }
        .nav-links a { color: white; text-decoration: none; }

        .hero-title { font-size: clamp(2rem, 6vw, 3.8rem); font-weight: bold; line-height: 1.1; }
        
        /* FONTES REDUZIDAS 20% */
        .title-medium { font-size: clamp(1.4rem, 4vw, 2.5rem); font-weight: bold; margin: 0; }
        .subtitle-medium-bold { font-size: clamp(1.2rem, 3.5vw, 2.2rem); font-weight: bold; color: #a855f7; margin: 5px 0 0; }

        /* VÍDEO REDUZIDO 70% */
        .video-mini { width: 100%; max-width: 250px; margin: 0 auto; aspect-ratio: 16/9; box-shadow: 0 20px 40px rgba(0,0,0,0.8); }
        .video-mini iframe { width: 100%; height: 100%; }

        /* CARROSSEL COM SETAS */
        .carousel-wrapper { display: flex; align-items: center; justify-content: center; gap: 20px; padding: 0 20px; }
        .nav-btn { background: none; border: none; color: white; font-size: 40px; cursor: pointer; opacity: 0.5; transition: 0.3s; }
        .nav-btn:hover { opacity: 1; color: #a855f7; }
        .slider-box { width: 100%; max-width: 280px; overflow: hidden; }
        .slider-track { display: flex; transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1); }
        .slide-unit { min-width: 100%; }
        .playlist-card img { width: 100%; aspect-ratio: 1/1; border-radius: 4px; border: 1px solid #222; margin-bottom: 15px; }

        .whatsapp-float { position: fixed; bottom: 100px; right: 20px; width: 50px; height: 50px; z-index: 200; transition: 0.3s; }
        .whatsapp-float:hover { transform: scale(1.1); }

        .fixed-player { position: fixed; bottom: 0; width: 100%; background: #080808; padding: 15px 30px; border-top: 1px solid #1a1a1a; z-index: 300; }
        .player-controls { display: flex; align-items: center; gap: 20px; }
        .play-trigger { display: flex; flex-direction: column; align-items: center; cursor: pointer; }
        .play-trigger img { width: 28px; transition: 0.3s; }
        .play-trigger span { font-size: 8px; text-transform: uppercase; color: #a855f7; font-weight: bold; margin-top: 4px; }
      `}</style>
    </div>
  );
}