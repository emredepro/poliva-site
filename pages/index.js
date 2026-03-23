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
    { title: "4 horas de música", img: "/capa-playlist-1.jpg", link: "https://open.spotify.com/playlist/1gnK5FmRkt5nZpKBcRwoP3?si=78bb4a57403d4c21" },
    { title: "curtindo a estrada", img: "/capa-playlist-2.jpg", link: "https://open.spotify.com/playlist/76gpuL3vDA2Sxbbi8g5VYc?si=599247e4e2b74e7d" },
    { title: "rock matinal", img: "/capa-playlist-3.jpg", link: "https://open.spotify.com/playlist/6LUj7CsEjuncERS7NDaXHx?si=7fef215cd7a344b8" }
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
            <div className="nav-links">
              <a href="#" className="nav-item">iníciø</a>
              <a href="#" className="nav-item">søbre pøliva</a>
              <a href="#" className="nav-item">agenda</a>
              <a href="#" className="nav-item">cøntatø</a>
            </div>
          </div>
        </nav>

        <main className="main-scroll">
          <section className="hero-section">
            <h1 className="hero-title anim-reveal">Música que desperta, <br/><span style={{ color: '#a855f7' }}>Show que vira portal</span></h1>
            <div className="citation responsiva anim-reveal">
              <p>"A música não é apenas entretenimento; ela é portal. Não é só sobre tocar música, é sobre atravessá-la."</p>
              <span className="author">— Poliva Soham</span>
            </div>
          </section>

          <section className="section-block spacer-lg">
            <div className="brutal-header anim-reveal">
              <h2>pølivessense, o show:</h2>
              <p className="bold-sub">assista abaixo na íntegra</p>
            </div>
            <div className="video-player-container interactive-zoom">
               <iframe src="https://www.youtube.com/embed/4PbdupC3wrg?vq=hd1080&rel=0&modestbranding=1&showinfo=0" frameBorder="0" allowFullScreen></iframe>
            </div>
          </section>

          <section className="section-block spacer-lg" style={{ marginBottom: '100px' }}>
             <div className="carousel-main anim-reveal">
                <div className="car-viewport">
                  <div className="car-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {playlists.map((item, index) => (
                      <div key={index} className="car-item">
                        <img src={item.img} className="playlist-img" />
                        <button className="ouca-btn interactive-zoom" onClick={() => window.open(item.link, '_blank')}>ouça aqui</button>
                      </div>
                    ))}
                  </div>
                </div>
             </div>
          </section>
        </main>

        <a href="https://wa.me/message/L5OXQTU6PDIFF1" target="_blank" className="wa-btn-fixed">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" />
        </a>

        <footer className="footer-black">
          <div className="footer-content anim-reveal">
            <h4 className="footer-heading">cøntatø</h4>
            <p>contato@polivaoficial.com.br | 22 98802-3803</p>
            <p className="copyright-line">pøliva© 2026. todos os direitos reservados.</p>
          </div>
        </footer>

        <div className="radio-bar">
          <div className="radio-inner">
            <div className="radio-controls">
              <button onClick={() => setCurrentTrack(prev => (prev === 0 ? 3 : prev - 1))} className="radio-nav-btn">«</button>
              <div className="play-circle interactive-zoom" onClick={togglePlay}>
                <img src="/simbolo-poliva.png" style={{ opacity: isPlaying ? 1 : 0.6 }} />
                <span className="play-label">{isPlaying ? 'pausar' : 'play'}</span>
              </div>
              <button onClick={() => setCurrentTrack(prev => (prev + 1) % 4)} className="radio-nav-btn">»</button>
            </div>
            <div className="radio-display">
              <div className="marquee-box"><p className={isPlaying ? 'running' : ''}>{tracks[currentTrack].name}</p></div>
              <span className="status-label">você está ouvindo</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .preloader { position: fixed; inset: 0; background: black; z-index: 10000; display: flex; align-items: center; justify-content: center; flex-direction: column; }
        .bar-bg { width: 220px; height: 2px; background: #111; margin: 15px 0; }
        .bar-fill { height: 100%; background: #a855f7; }
        .bar-pct { font-size: 10px; color: #a855f7; }

        .navbar { position: fixed; top: 0; width: 100%; background: rgba(0,0,0,0.95); padding: 25px 40px; z-index: 5000; border-bottom: 1px solid #111; }
        .nav-container { max-width: 1400px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
        .nav-logo { width: 110px; }
        .nav-item { color: white; text-decoration: none; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.15em; transition: 0.3s; cursor: pointer; }
        .nav-item:hover { color: #a855f7 !important; }

        .main-scroll { padding-top: 250px; text-align: center; max-width: 1200px; margin: 0 auto; position: relative; z-index: 10; }
        .hero-title { font-size: clamp(2.2rem, 8vw, 4.5rem); font-weight: bold; line-height: 1.1; margin-bottom: 80px; }
        .citation.responsiva { max-width: 600px; margin: 0 auto; border-left: 2px solid #a855f7; padding-left: 40px; text-align: left; font-style: italic; color: #a1a1aa; font-size: 18px; }
        .author { display: block; margin-top: 10px; color: #a855f7; font-weight: bold; font-style: normal; font-size: 11px; }

        .spacer-lg { margin-top: 180px; }
        .brutal-header h2 { font-size: 1.8rem; text-transform: lowercase; font-weight: bold; margin: 0; }
        .bold-sub { font-size: 1.6rem; color: #a855f7; font-weight: bold; margin-top: 5px; }

        .video-player-container { width: 100%; max-width: 540px; margin: 60px auto; aspect-ratio: 16/9; background: #000; box-shadow: 0 50px 100px rgba(0,0,0,0.9); }
        .video-player-container iframe { width: 100%; height: 100%; border: none; }

        .car-viewport { width: 350px; overflow: hidden; margin: 60px auto; }
        .car-track { display: flex; transition: 0.8s cubic-bezier(0.23, 1, 0.32, 1); }
        .car-item { min-width: 100%; }
        .playlist-img { width: 100%; aspect-ratio: 1/1; border-radius: 4px; border: 1px solid #111; margin-bottom: 30px; }
        .ouca-btn { background: none; border: 1px solid #a855f7; color: #a855f7; padding: 15px 35px; font-weight: bold; text-transform: lowercase; cursor: pointer; }

        /* RODAPÉ AJUSTADO - MAIS CURTO */
        .footer-black { background: black !important; padding: 80px 20px 120px; border-top: 1px solid #111; position: relative; z-index: 5; }
        .copyright-line { margin-top: 40px; font-size: 10px; color: #444; }

        .radio-bar { position: fixed; bottom: 0; width: 100%; background: #050505; padding: 15px 40px; border-top: 1px solid #111; z-index: 9000; }
        .radio-inner { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; gap: 50px; }
        .radio-controls { display: flex; align-items: center; gap: 25px; }
        .radio-nav-btn { background: none; border: none; color: #a855f7; font-size: 24px; cursor: pointer; }
        .play-circle { cursor: pointer; text-align: center; min-width: 70px; }
        .play-circle img { width: 35px; }
        .play-label { display: block; font-size: 8px; color: #a855f7; font-weight: bold; text-transform: uppercase; margin-top: 5px; }

        .radio-display { flex: 1; text-align: left; overflow: hidden; }
        .marquee-box { width: 280px; overflow: hidden; border-bottom: 1px solid rgba(168, 85, 247, 0.1); padding-bottom: 5px; }
        .marquee-box p { white-space: nowrap; font-weight: bold; font-size: 13px; }
        .running { animation: marquee 15s linear infinite; }
        @keyframes marquee { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
        .status-label { font-size: 9px !important; color: white; display: block; margin-top: 5px; }

        .wa-btn-fixed { position: fixed; bottom: 120px; right: 30px; width: 50px; z-index: 8000; }
        .anim-reveal { opacity: 0; transform: translateY(20px); animation: reveal 0.6s ease forwards; }
        @keyframes reveal { to { opacity: 1; transform: translateY(0); } }
        .hidden { opacity: 0; }
        .visible { opacity: 1; transition: 1.5s; }
        .interactive-zoom:hover { transform: scale(1.05); transition: 0.3s; }
        .pulse { animation: pulse 2s infinite; }
      `}</style>
    </div>
  );
}