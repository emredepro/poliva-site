// POLIVESSENSE VERSION 2.9.0 - TOTAL LAYER & ELEMENT RECOVERY
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
            <img src="/simbolo-inicio.png" alt="Ø" className="pulse" style={{ width: '80px', marginBottom: '20px' }} />
            <div className="bar-bg"><div className="bar-fill" style={{ width: `${progress}%` }}></div></div>
            <span className="bar-pct">{progress}%</span>
          </div>
        </div>
      )}

      {/* VÍDEO DE FUNDO */}
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
            <h1 className="hero-title anim-ready">Música que desperta, <br/><span style={{ color: '#a855f7' }}>Show que vira portal</span></h1>
            <div className="citation responsiva anim-ready">
              <p>"A música não é apenas entretenimento; ela é portal. Não é só sobre tocar música, é sobre atravessá-la..."</p>
              <span className="author" style={{ marginTop: '5px', letterSpacing: '0.05em', display: 'block' }}>— Poliva Soham</span>
            </div>
          </section>

          <section className="section-block spacer-lg">
            <div className="brutal-header anim-ready">
              <h2>pølivessense, o show:</h2>
              <p className="bold-sub">assista abaixo na íntegra</p>
            </div>
            <div className="video-player-box">
               <iframe src="https://www.youtube.com/embed/4PbdupC3wrg?vq=hd1080&rel=0" frameBorder="0" allowFullScreen></iframe>
            </div>
          </section>

          <section className="section-block spacer-lg" style={{ marginBottom: '250px' }}>
             <div className="brutal-header anim-ready">
                <h3>playlists para as melhores ocasiões:</h3>
                <p className="bold-sub">o que o seu momento pede?</p>
             </div>
             <div className="carousel-main">
                <button className="car-btn" onClick={prevTrack}>‹</button>
                <div className="car-viewport">
                  <div className="car-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {playlists.map((item, index) => (
                      <div key={index} className="car-item">
                        <img src={item.img} alt={item.title} className="playlist-img" />
                        <button className="ouca-btn" onClick={() => window.open(item.link, '_blank')}>ouça aqui</button>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="car-btn" onClick={nextTrack}>›</button>
             </div>
          </section>
        </main>

        {/* WHATSAPP COM Z-INDEX MÁXIMO */}
        <a href="https://wa.me/message/L5OXQTU6PDIFF1" target="_blank" className="wa-float-btn">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
        </a>

        <footer className="footer-black">
          <div className="footer-content anim-ready">
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

        {/* RADIO BAR TOTALMENTE REESTRUTURADA */}
        <div className="radio-bar-fixed">
          <div className="radio-content-wrapper">
            <div className="radio-controls-group">
              <button onClick={prevTrack} className="radio-btn">
                <span>«</span><small>voltar</small>
              </button>
              <div className="play-btn-main" onClick={togglePlay}>
                <img src="/simbolo-poliva.png" alt="Play" style={{ opacity: isPlaying ? 1 : 0.6 }} />
                <span className="play-status-label">{isPlaying ? 'pausar' : 'dê o play'}</span>
              </div>
              <button onClick={nextTrack} className="radio-btn">
                <span>»</span><small>avançar</small>
              </button>
            </div>
            
            <div className="radio-info-display">
              <div className="marquee-container">
                <p className={`marquee-txt ${isPlaying ? 'running' : 'paused'}`}>
                  {tracks[currentTrack].name}
                </p>
              </div>
              <span className="listening-label">você está ouvindo</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .preloader { position: fixed; inset: 0; background: black; z-index: 9999; display: flex; align-items: center; justify-content: center; }
        .loader-box { text-align: center; }
        .bar-bg { width: 200px; height: 2px; background: #111; margin: 20px 0; }
        .bar-fill { height: 100%; background: #a855f7; }
        
        .navbar { position: fixed; top: 0; width: 100%; background: rgba(0,0,0,0.95); padding: 20px 40px; z-index: 5000; border-bottom: 1px solid #111; }
        .nav-container { max-width: 1400px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
        .nav-logo { width: 100px; }
        .nav-links { display: flex; gap: 30px; font-size: 11px; text-transform: uppercase; font-weight: bold; }
        .nav-item:hover { color: #a855f7; }

        .main-scroll { padding-top: 200px; text-align: center; max-width: 1200px; margin: 0 auto; }
        
        .video-player-box { width: 100%; max-width: 700px; margin: 50px auto; aspect-ratio: 16/9; position: relative; z-index: 100; background: #000; }
        .video-player-box iframe { width: 100%; height: 100%; border: none; }

        /* WHATSAPP FLOATING */
        .wa-float-btn { position: fixed; bottom: 120px; right: 30px; width: 50px; z-index: 8000; transition: transform 0.3s; }
        .wa-float-btn:hover { transform: scale(1.1); }

        /* RADIO BAR - DESIGN HORIZONTAL */
        .radio-bar-fixed { position: fixed; bottom: 0; width: 100%; background: #080808; padding: 15px 40px; border-top: 1px solid #a855f733; z-index: 9000; }
        .radio-content-wrapper { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 40px; }
        
        .radio-controls-group { display: flex; align-items: center; gap: 20px; }
        .radio-btn { background: none; border: none; color: #a855f7; cursor: pointer; display: flex; flex-direction: column; align-items: center; }
        .radio-btn span { font-size: 18px; }
        .radio-btn small { font-size: 8px; text-transform: uppercase; margin-top: 2px; }
        
        .play-btn-main { cursor: pointer; display: flex; flex-direction: column; align-items: center; min-width: 70px; }
        .play-btn-main img { width: 30px; }
        .play-status-label { font-size: 8px; color: #a855f7; font-weight: bold; margin-top: 5px; text-transform: uppercase; }

        .radio-info-display { flex: 1; display: flex; flex-direction: column; align-items: flex-start; overflow: hidden; }
        .marquee-container { width: 100%; overflow: hidden; border-bottom: 1px solid #ffffff11; padding-bottom: 5px; margin-bottom: 5px; }
        .marquee-txt { display: inline-block; white-space: nowrap; font-size: 13px; font-weight: bold; padding-left: 10%; }
        .marquee-txt.running { animation: marquee 15s linear infinite; }
        .listening-label { font-size: 9px; color: #666; text-transform: lowercase; }

        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }

        .footer-black { background: black; padding: 80px 20px 180px; border-top: 1px solid #111; }
        
        .anim-ready { opacity: 0; transform: translateY(20px); animation: fadeInReady 0.8s ease forwards; }
        @keyframes fadeInReady { to { opacity: 1; transform: translateY(0); } }
        
        .pulse { animation: pulse 2s infinite ease-in-out; }
        @keyframes pulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
      `}</style>
    </div>
  );
}