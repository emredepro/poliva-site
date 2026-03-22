// POLIVESSENSE VERSION 3.2.0 - FULL ARCHITECTURE RESTORE
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

export default function Inicio() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
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
      audioRef.current.play().catch(err => console.log("Audio play blocked", err));
    }
  }, [currentTrack]);

  const togglePlay = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', overflowX: 'hidden', fontFamily: "'Avant Garde', sans-serif" }}>
      <Head>
        <title>pøliva | pølivessense</title>
        <link rel="icon" href={`/favicon.ico?v=${new Date().getTime()}`} />
      </Head>

      <audio ref={audioRef} src={tracks[currentTrack].file} onEnded={() => setCurrentTrack(prev => (prev + 1) % 4)} />

      {loading && (
        <div className="preloader">
          <div className="loader-box">
            <img src="/simbolo-inicio.png" alt="Ø" className="pulse" style={{ width: '80px', marginBottom: '20px' }} />
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
            <h1 className="hero-title anim-fade-up">
              Música que desperta, <br/>
              <span style={{ color: '#a855f7' }}>Show que vira portal</span>
            </h1>
            <div className="citation responsiva anim-fade-up">
              <p>"A música não é apenas entretenimento; ela é portal. Não é só sobre tocar música, é sobre atravessá-la..."</p>
              <span className="author">— Poliva Soham</span>
            </div>
          </section>

          <section className="section-block spacer-lg">
            <div className="brutal-header anim-fade-up">
              <h2>pølivessense, o show:</h2>
              <p className="bold-sub">assista abaixo na íntegra</p>
            </div>
            <div className="video-player-shield interactive-zoom">
               <iframe 
                src="https://www.youtube.com/embed/4PbdupC3wrg?vq=hd1080&rel=0&modestbranding=1" 
                frameBorder="0" 
                allowFullScreen>
               </iframe>
            </div>
          </section>

          <section className="section-block spacer-lg" style={{ marginBottom: '250px' }}>
             <div className="brutal-header anim-fade-up">
                <h3>playlists para as melhores ocasiões:</h3>
                <p className="bold-sub">o que o seu momento pede?</p>
             </div>
             <div className="carousel-main">
                <button className="car-btn" onClick={() => setCurrentTrack(prev => (prev === 0 ? 3 : prev - 1))}>‹</button>
                <div className="car-viewport">
                  <div className="car-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {playlists.map((item, index) => (
                      <div key={index} className="car-item">
                        <img src={item.img} alt={item.title} className="playlist-img" />
                        <button className="ouca-btn interactive-zoom" onClick={() => window.open(item.link, '_blank')}>ouça aqui</button>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="car-btn" onClick={() => setCurrentTrack((prev) => (prev + 1) % 4)}>›</button>
             </div>
          </section>
        </main>

        <a href="https://wa.me/message/L5OXQTU6PDIFF1" target="_blank" className="wa-btn-fixed">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" />
        </a>

        <footer className="footer-black">
          <div className="footer-content anim-fade-up">
            <h4 className="footer-heading">cøntatø</h4>
            <div className="footer-details">
              <p>e-mail: contato@polivaoficial.com.br</p>
              <p className="phone-line">telefone: 22 98802-3803</p>
            </div>
            <p className="copyright-line">pøliva© 2026. todos os direitos reservados.</p>
          </div>
        </footer>

        <div className="radio-bar-vfinal">
          <div className="radio-container-inner">
            <div className="radio-controls-set">
              <button onClick={() => setCurrentTrack(prev => (prev === 0 ? 3 : prev - 1))} className="radio-nav-btn interactive-zoom">
                <span>«</span><small>voltar</small>
              </button>
              <div className="play-trigger interactive-zoom" onClick={togglePlay}>
                <img src="/simbolo-poliva.png" alt="Play" style={{ opacity: isPlaying ? 1 : 0.6 }} />
                <span className="play-label-txt">{isPlaying ? 'pausar' : 'dê o play'}</span>
              </div>
              <button onClick={() => setCurrentTrack((prev) => (prev + 1) % 4)} className="radio-nav-btn interactive-zoom">
                <span>»</span><small>avançar</small>
              </button>
            </div>
            <div className="radio-display-meta">
              <div className="marquee-vfinal">
                <p className={`marquee-content ${isPlaying ? 'running' : 'paused'}`}>{tracks[currentTrack].name}</p>
              </div>
              <span className="listening-label-fix">você está ouvindo</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .preloader { position: fixed; inset: 0; background: black; z-index: 10000; display: flex; align-items: center; justify-content: center; flex-direction: column; }
        .navbar { position: fixed; top: 0; width: 100%; background: rgba(0,0,0,0.95); padding: 25px 40px; z-index: 5000; border-bottom: 1px solid #111; }
        .nav-container { max-width: 1400px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
        .nav-logo { width: 110px; }
        .nav-links { display: flex; gap: 40px; font-size: 11px; text-transform: uppercase; font-weight: bold; }
        
        .nav-item { color: white; text-decoration: none; transition: 0.3s; cursor: pointer; }
        .nav-item:hover { color: #a855f7 !important; }
        .nav-item:active { color: white !important; transform: scale(0.95); }

        .main-scroll { padding-top: 250px; text-align: center; max-width: 1200px; margin: 0 auto; position: relative; }
        .hero-title { font-size: clamp(2.2rem, 8vw, 4.5rem); font-weight: bold; line-height: 1.1; margin-bottom: 80px; }
        .citation.responsiva { max-width: 600px; margin: 0 auto; border-left: 2px solid #a855f7; padding-left: 40px; text-align: left; font-style: italic; color: #a1a1aa; font-size: 18px; line-height: 1.7; }

        .video-player-shield { width: 100%; max-width: 540px; margin: 60px auto; aspect-ratio: 16/9; background: #000; z-index: 500; position: relative; box-shadow: 0 40px 80px rgba(0,0,0,0.9); }
        .video-player-shield iframe { width: 100%; height: 100%; border: none; }

        .wa-btn-fixed { position: fixed; bottom: 120px; right: 30px; width: 50px; z-index: 8000; }

        .radio-bar-vfinal { position: fixed; bottom: 0; width: 100%; background: #080808; padding: 15px 40px; border-top: 1px solid #a855f733; z-index: 9000; }
        .radio-container-inner { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 40px; }
        .radio-controls-set { display: flex; align-items: center; gap: 20px; }
        .play-label-txt { font-size: 8px; color: #a855f7; font-weight: bold; margin-top: 5px; text-transform: uppercase; }
        .listening-label-fix { font-size: 9px !important; color: white; text-transform: lowercase; }

        .marquee-vfinal { width: 100%; overflow: hidden; border-bottom: 1px solid #333; padding-bottom: 5px; margin-bottom: 5px; }
        .marquee-content { display: inline-block; white-space: nowrap; font-size: 14px; font-weight: bold; padding-left: 10%; }
        .marquee-content.running { animation: marquee 15s linear infinite; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }

        .footer-black { background: black; padding: 100px 20px 220px; border-top: 1px solid #111; position: relative; }

        .anim-fade-up {
          opacity: 0; transform: translateY(30px);
          animation: revealStay 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
          animation-play-state: paused;
        }
        section:hover .anim-fade-up, .hero-section .anim-fade-up, footer:hover .anim-fade-up { animation-play-state: running; }
        @keyframes revealStay { to { opacity: 1; transform: translateY(0); } }
        .interactive-zoom:hover { transform: scale(1.08); }
        .pulse { animation: pulse 2s infinite; }
      `}</style>
    </div>
  );
}