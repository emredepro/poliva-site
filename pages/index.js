// VERSÃO DO PORTAL: 2.0.1 - FORCE REBUILD LETREIRO
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
            <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
              <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
              <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
            </button>
            <div className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
              <a href="#" onClick={() => setIsMenuOpen(false)}>iníciø</a>
              <a href="#" onClick={() => setIsMenuOpen(false)}>søbre pøliva</a>
              <a href="#" onClick={() => setIsMenuOpen(false)}>shøws aø vivø</a>
              <a href="#" onClick={() => setIsMenuOpen(false)}>singles & álbuns</a>
              <a href="#" onClick={() => setIsMenuOpen(false)}>agenda</a>
              <a href="#" onClick={() => setIsMenuOpen(false)}>cøntatø</a>
            </div>
          </div>
        </nav>

        <main className="main-scroll">
          <section className="hero-section">
            <h1 className="hero-title" style={{ marginBottom: '80px' }}>
              Música que desperta, <br/>
              <span style={{ color: '#a855f7' }}>Show que vira portal</span>
            </h1>
            <div className="citation responsiva">
              <p>
                "A música não é apenas entretenimento; ela é portal. Não é só sobre tocar música, é sobre atravessá-la. 
                Eu faço músicas e também canto músicas que transformam a mim e a outras pessoas"
              </p>
              <span className="author" style={{ marginTop: '8px', letterSpacing: '0.05em', display: 'block' }}>— Poliva Soham</span>
            </div>
          </section>

          <section className="section-block spacer-lg">
            <div className="brutal-header mobile-boost">
              <h2>pølivessense, o show:</h2>
              <p className="bold-sub">assista abaixo na íntegra</p>
            </div>
            <div className="video-player">
               <iframe src="https://www.youtube.com/embed/4PbdupC3wrg" frameBorder="0" allowFullScreen></iframe>
            </div>
          </section>

          <section className="section-block spacer-lg">
             <div className="brutal-header mobile-boost">
                <h3>playlists para as melhores ocasiões:</h3>
                <p className="bold-sub">o que o seu momento pede?</p>
             </div>
             <div className="carousel-main">
                <button className="car-btn" onClick={() => setCurrentIndex(prev => (prev === 0 ? 2 : prev - 1))}>‹</button>
                <div className="car-viewport">
                  <div className="car-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {playlists.map((item, index) => (
                      <div key={index} className="car-item">
                        <div className="playlist-card-content">
                           <img src={item.img} alt={item.title} className="playlist-img" />
                           <button className="ouca-btn" onClick={() => window.open(item.link, '_blank')}>ouça aqui</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="car-btn" onClick={() => setCurrentIndex(prev => (prev + 1) % 3)}>›</button>
             </div>
          </section>
        </main>

        <a href="https://wa.me/message/L5OXQTU6PDIFF1" target="_blank" className="wa-btn">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
        </a>

        <footer className="footer-black">
          <div className="footer-content">
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
              <button onClick={() => setCurrentTrack(prev => (prev === 0 ? 3 : prev - 1))} className="radio-nav-btn">
                <span>«</span><small>voltar</small>
              </button>
              <div className="play-circle" onClick={togglePlay}>
                <img src="/simbolo-poliva.png" alt="Play" style={{ opacity: isPlaying ? 1 : 0.6 }} />
                <span className="play-label">{isPlaying ? 'pausar' : 'dê o play'}</span>
              </div>
              <button onClick={() => setCurrentTrack(prev => (prev + 1) % 4)} className="radio-nav-btn">
                <span>»</span><small>avançar</small>
              </button>
            </div>
            
            <div className="radio-display">
              <div className="marquee-box">
                <p className={`marquee-content ${isPlaying ? 'running' : 'paused'}`}>
                  {tracks[currentTrack].name}
                </p>
              </div>
              <span className="status-label" style={{ color: 'white' }}>você está ouvindo</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* [MANTENDO OS ESTILOS QUE JÁ ESTÃO FUNCIONANDO] */
        .preloader { position: fixed; inset: 0; background: black; z-index: 2000; display: flex; align-items: center; justify-content: center; }
        .loader-box { width: 220px; text-align: center; display: flex; flex-direction: column; align-items: center; }
        .bar-bg { width: 100%; height: 2px; background: #111; margin: 15px 0; }
        .bar-fill { height: 100%; background: #a855f7; transition: width 0.1s; }
        .bar-pct { font-size: 10px; color: #a855f7; font-weight: bold; }
        .pulse { animation: pulse 2s infinite ease-in-out; }
        @keyframes pulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }

        .page-content { position: relative; z-index: 10; transition: opacity 1.5s ease; }
        .page-content.hidden { opacity: 0; }

        .navbar { position: fixed; top: 0; width: 100%; background: rgba(0,0,0,0.95); padding: 25px 40px; z-index: 1000; border-bottom: 1px solid #111; }
        .nav-container { max-width: 1400px; margin: 0 auto; display: flex; justify-content: center; align-items: center; position: relative; min-height: 50px; }
        .nav-logo { width: 110px; position: absolute; left: 0; }
        .nav-links { display: flex; gap: 40px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: bold; }
        .nav-links a { color: white; text-decoration: none; transition: 0.3s; }
        .nav-links a:hover { color: #a855f7; }

        .menu-toggle { display: none; flex-direction: column; gap: 6px; background: none; border: none; cursor: pointer; position: absolute; right: 0; }
        .line { width: 25px; height: 2px; background: white; transition: 0.3s; }
        .line.open:nth-child(1) { transform: translateY(8px) rotate(45deg); }
        .line.open:nth-child(2) { opacity: 0; }
        .line.open:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

        @media (max-width: 900px) {
          .menu-toggle { display: flex; }
          .nav-links { 
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; 
            background: black; flex-direction: column; justify-content: center; align-items: center;
            transform: translateX(100%); transition: transform 0.5s ease-in-out; 
          }
          .nav-links.mobile-open { transform: translateX(0); }
          .nav-logo { position: static; }
          .nav-container { justify-content: space-between; }
        }

        .main-scroll { padding-top: 250px; text-align: center; max-width: 1200px; margin: 0 auto; }
        .hero-title { font-size: clamp(2.2rem, 8vw, 4.5rem); font-weight: bold; line-height: 1.1; }
        .citation.responsiva { max-width: 600px; margin: 0 auto; border-left: 2px solid #a855f7; padding-left: 40px; text-align: left; font-style: italic; color: #a1a1aa; font-size: clamp(16px, 4vw, 18px); line-height: 1.7; }
        .author { font-style: normal; color: #a855f7; font-weight: bold; font-size: 11px; }

        .spacer-lg { margin-top: 180px; }
        .section-block { padding: 0 20px; }
        .brutal-header h2, .brutal-header h3 { font-size: clamp(1.1rem, 4vw, 1.8rem); font-weight: bold; text-transform: lowercase; line-height: 1; margin: 0; }
        .bold-sub { font-size: clamp(1rem, 3.3vw, 1.6rem); font-weight: bold; color: #a855f7; margin-top: 5px; text-transform: lowercase; line-height: 1; }

        .video-player { width: 100%; max-width: 540px; margin: 60px auto; aspect-ratio: 16/9; box-shadow: 0 50px 100px rgba(0,0,0,0.9); }
        .video-player iframe { width: 100%; height: 100%; border-radius: 4px; }

        .carousel-main { display: flex; align-items: center; justify-content: center; gap: 40px; margin-top: 60px; }
        .car-viewport { width: 350px; overflow: hidden; }
        .car-track { display: flex; transition: 0.8s cubic-bezier(0.23, 1, 0.32, 1); }
        .car-item { min-width: 100%; }
        .playlist-card-content { display: flex; flex-direction: column; align-items: center; }
        .playlist-img { width: 100%; aspect-ratio: 1/1; border-radius: 4px; border: 1px solid #111; margin-bottom: 40px; }
        .ouca-btn { background: none; border: 1px solid #a855f7; color: #a855f7; font-size: 16px; padding: 15px 35px; cursor: pointer; font-weight: bold; text-transform: lowercase; }

        .footer-black { background: black; border-top: 1px solid #111; padding: 80px 20px 150px; text-align: center; margin-top: 150px; }
        .footer-heading { fontSize: 22px; fontWeight: bold; text-transform: uppercase; margin-bottom: 25px; }
        .copyright-line { margin-top: 60px; font-size: 10px; color: #444; }

        .radio-bar { position: fixed; bottom: 0; width: 100%; background: #050505; padding: 15px 40px; border-top: 1px solid #111; z-index: 1000; }
        .radio-inner { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; gap: 50px; }
        .radio-controls { display: flex; align-items: center; gap: 25px; }
        .radio-nav-btn { background: none; border: none; color: #a855f7; cursor: pointer; display: flex; flex-direction: column; align-items: center; }
        .radio-nav-btn small { font-size: 8px; text-transform: uppercase; opacity: 0.6; margin-top: 2px; }
        .play-circle { cursor: pointer; display: flex; flex-direction: column; align-items: center; min-width: 70px; }
        .play-circle img { width: 35px; }
        .play-label { font-size: 8px; text-transform: uppercase; color: #a855f7; font-weight: bold; margin-top: 5px; }

        .radio-display { flex: 1; text-align: left; overflow: hidden; }
        .marquee-box { width: 280px; overflow: hidden; white-space: nowrap; margin-bottom: 5px; border-bottom: 1px solid rgba(168, 85, 247, 0.1); }
        .marquee-content { display: inline-block; padding-left: 20%; font-size: 13px; font-weight: bold; letter-spacing: 0.05em; }
        /* REMOVI O ESTILO QUE FORÇAVA MINÚSCULO AQUI */
        .marquee-content.running { animation: marquee 15s linear infinite; }

        @keyframes marquee { 0% { transform: translate(0, 0); } 100% { transform: translate(-100%, 0); } }
        .wa-btn { position: fixed; bottom: 120px; right: 30px; width: 50px; z-index: 500; }
      `}</style>
    </div>
  );
}