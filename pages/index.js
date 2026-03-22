// POLIVESSENSE VERSION 2.7.0 - UNBLOCK VIDEO INTERACTION & HD FIX
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

export default function Inicio() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const audioRef = useRef(null);

  const tracks = [
    { file: "/ha-mar.mp3", name: "Há Mar - pøliva ft. bruno morpheo ft. bruno perrone ft. lucão freitas" },
    { file: "/Depressa.mp3", name: "Depressa - pøliva" },
    { file: "/OTT.mp3", name: "OTT - pøliva ft. bruno morpheo ft. daniel filgueiras" },
    { file: "/TOQES.mp3", name: "TOQES - pøliva ft. morpheo ft. daniel filgueiras" }
  ];

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % playlists.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [playlists.length]);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(err => console.log("Autoplay blocked", err));
    }
  }, [currentTrack]);

  const togglePlay = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
    setIsPlaying(true);
  };

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', overflowX: 'hidden', fontFamily: "'Avant Garde', sans-serif" }}>
      <Head>
        <title>pøliva | pølivessense</title>
        <link rel="icon" href={`/favicon.ico?v=${new Date().getTime()}`} />
      </Head>

      <audio ref={audioRef} src={tracks[currentTrack].file} onEnded={nextTrack} />

      {loading && (
        <div className="preloader">
          <div className="loader-box">
            <div className="symbol-container">
              <img src="/simbolo-inicio.png" alt="Ø" className="pulse" style={{ width: '80px' }} />
            </div>
            <div className="bar-bg"><div className="bar-fill" style={{ width: `${progress}%` }}></div></div>
            <span className="bar-pct">{progress}%</span>
          </div>
        </div>
      )}

      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }}>
          <source src="/video-home-loop.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={`page-content ${loading ? 'hidden' : 'visible'}`}>
        <nav className="navbar">
          <div className="nav-container">
            <img src="/logo-poliva.png" alt="Logo" className="nav-logo" />
            <div className="nav-links">
              <a href="#" className="nav-item">iníciø</a>
              <a href="#" className="nav-item">søbre pøliva</a>
              <a href="#" className="nav-item">shøws aø vivø</a>
              <a href="#" className="nav-item">singles & álbuns</a>
              <a href="#" className="nav-item">agenda</a>
              <a href="#" className="nav-item">cøntatø</a>
            </div>
          </div>
        </nav>

        <main className="main-scroll">
          <section className="hero-section">
            <h1 className="hero-title anim-fade-up" style={{ marginBottom: '80px' }}>
              Música que desperta, <br/>
              <span style={{ color: '#a855f7' }}>Show que vira portal</span>
            </h1>
            <div className="citation responsiva anim-fade-up">
              <p>
                "A música não é apenas entretenimento; ela é portal. Não é só sobre tocar música, é sobre atravessá-la. 
                Eu faço músicas e também canto músicas que transformam a mim e a outras pessoas"
              </p>
              <span className="author" style={{ marginTop: '5px', letterSpacing: '0.05em', display: 'block' }}>— Poliva Soham</span>
            </div>
          </section>

          <section className="section-block spacer-lg">
            <div className="brutal-header mobile-boost anim-fade-up">
              <h2>pølivessense, o show:</h2>
              <p className="bold-sub">assista abaixo na íntegra</p>
            </div>
            {/* DESTRAVE DE CLIQUE APLICADO AQUI */}
            <div className="video-player interactive-zoom video-unblock">
               <iframe 
                src="https://www.youtube.com/embed/4PbdupC3wrg?vq=hd1080&rel=0&modestbranding=1&autoplay=0" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
               </iframe>
            </div>
          </section>

          <section className="section-block spacer-lg" style={{ marginBottom: '200px' }}>
             <div className="brutal-header mobile-boost anim-fade-up">
                <h3>playlists para as melhores ocasiões:</h3>
                <p className="bold-sub">o que o seu momento pede?</p>
             </div>
             <div className="carousel-main">
                <button className="car-btn interactive-zoom" onClick={prevTrack}>‹</button>
                <div className="car-viewport">
                  <div className="car-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {playlists.map((item, index) => (
                      <div key={index} className="car-item">
                        <div className="playlist-card-content">
                           <img src={item.img} alt={item.title} className="playlist-img" />
                           <button className="ouca-btn interactive-zoom" onClick={() => window.open(item.link, '_blank')}>ouça aqui</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="car-btn interactive-zoom" onClick={nextTrack}>›</button>
             </div>
          </section>
        </main>

        <a href="https://wa.me/message/L5OXQTU6PDIFF1" target="_blank" className="wa-btn interactive-zoom">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
        </a>

        <footer className="footer-black">
          <div className="footer-content anim-fade-up">
            <h4 className="footer-heading">cøntatø</h4>
            <div className="footer-details">
              <p>para shøws e parcerias</p>
              <p>e-mail: contato@polivaoficial.com.br</p>
              <p>redes sociais: @polivaoficial</p>
              <p className="phone-line">telefone: 22 98802-3803</p>
            </div>
            <p className="copyright-line">pøliva© 2026. todos os direitos reservados.</p>
          </div>
        </footer>

        <div className="radio-bar">
          <div className="radio-inner">
            <div className="radio-controls">
              <button onClick={prevTrack} className="radio-nav-btn interactive-zoom">
                <span>«</span><small>voltar</small>
              </button>
              <div className="play-circle interactive-zoom" onClick={togglePlay}>
                <img src="/simbolo-poliva.png" alt="Play" style={{ opacity: isPlaying ? 1 : 0.6 }} />
                <span className="play-label">{isPlaying ? 'pausar' : 'dê o play'}</span>
              </div>
              <button onClick={nextTrack} className="radio-nav-btn interactive-zoom">
                <span>»</span><small>avançar</small>
              </button>
            </div>
            
            <div className="radio-display">
              <div className="marquee-box">
                <p className={`marquee-content ${isPlaying ? 'running' : 'paused'}`}>
                  {tracks[currentTrack].name}
                </p>
              </div>
              <span className="status-label" style={{ color: 'white', fontSize: '9px' }}>você está ouvindo</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* [MANTENDO OS ESTILOS ANTERIORES E ADICIONANDO A DESTRAVE] */
        .preloader { position: fixed; inset: 0; background: black; z-index: 2000; display: flex; align-items: center; justify-content: center; }
        .loader-box { width: 220px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; }
        .symbol-container { width: 80px; height: 80px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
        .bar-bg { width: 100%; height: 2px; background: #111; margin: 15px 0; }
        .bar-fill { height: 100%; background: #a855f7; }
        .bar-pct { font-size: 10px; color: #a855f7; font-weight: bold; }

        .navbar { position: fixed; top: 0; width: 100%; background: rgba(0,0,0,0.95); padding: 25px 40px; z-index: 1000; border-bottom: 1px solid #111; }
        .nav-container { max-width: 1400px; margin: 0 auto; display: flex; justify-content: center; align-items: center; position: relative; min-height: 50px; }
        .nav-logo { width: 110px; position: absolute; left: 0; }
        .nav-links { display: flex; gap: 40px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: bold; }
        .nav-item { color: white; text-decoration: none; transition: 0.3s ease; cursor: pointer; }
        .nav-item:hover { color: #a855f7; }

        .video-player { width: 100%; max-width: 540px; margin: 60px auto; aspect-ratio: 16/9; box-shadow: 0 50px 100px rgba(0,0,0,0.9); transition: 0.4s ease; position: relative; }
        /* DESTRAVE DE CLIQUE */
        .video-unblock { z-index: 50; pointer-events: auto !important; }
        .video-player iframe { width: 100%; height: 100%; border-radius: 4px; position: relative; z-index: 60; }

        .carousel-main { display: flex; align-items: center; justify-content: center; gap: 40px; margin-top: 60px; }
        .car-viewport { width: 350px; overflow: hidden; }
        .car-track { display: flex; transition: 0.8s ease; }
        .car-item { min-width: 100%; }
        .ouca-btn { background: none; border: 1px solid #a855f7; color: #a855f7; font-size: 16px; padding: 15px 35px; cursor: pointer; font-weight: bold; text-transform: lowercase; transition: 0.3s ease; }

        .footer-black { background: black; border-top: 1px solid #111; padding: 100px 20px 200px; text-align: center; margin-top: 150px; position: relative; z-index: 5; }
        .radio-bar { position: fixed; bottom: 0; width: 100%; background: #050505; padding: 15px 40px; border-top: 1px solid #111; z-index: 1100; }

        .anim-fade-up {
          opacity: 0;
          transform: translateY(25px);
          animation: revealStay 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
          animation-play-state: paused;
          pointer-events: none; /* Evita que o bloco invisível bloqueie cliques */
        }

        section:hover .anim-fade-up, .hero-section .anim-fade-up {
          animation-play-state: running;
          pointer-events: auto; /* Devolve o clique quando o texto aparece */
        }

        @keyframes revealStay { to { opacity: 1; transform: translateY(0); } }
        .interactive-zoom:hover { transform: scale(1.08); filter: brightness(1.2); }
        .video-player.interactive-zoom:hover { transform: scale(1.03); }
        .pulse { animation: pulse 2s infinite ease-in-out; }
      `}</style>
    </div>
  );
}