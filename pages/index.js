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
        return prev + 5;
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
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', overflowX: 'hidden', fontFamily: 'sans-serif' }}>
      <Head>
        <title>pøliva | pølivessense</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <audio ref={audioRef} src={tracks[currentTrack].file} onEnded={() => setCurrentTrack(prev => (prev + 1) % 4)} />

      {loading && (
        <div className="preloader">
          <img src="/simbolo-inicio.png" alt="Ø" className="pulse" style={{ width: '80px', marginBottom: '20px' }} />
          <div className="bar-bg"><div className="bar-fill" style={{ width: `${progress}%` }}></div></div>
        </div>
      )}

      <div className="video-background">
        <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }}>
          <source src="/video-home-loop.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={`page-wrap ${loading ? 'hidden' : 'visible'}`}>
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
          <section className="hero">
            <h1 className="anim-auto">Música que desperta, <br/><span style={{ color: '#a855f7' }}>Show que vira portal</span></h1>
          </section>

          <section className="video-section">
            <div className="video-box anim-auto">
               <iframe src="https://www.youtube.com/embed/4PbdupC3wrg?vq=hd1080&rel=0" frameBorder="0" allowFullScreen></iframe>
            </div>
          </section>

          <section className="playlists-section">
             <div className="carousel anim-auto">
                <img src={playlists[currentIndex].img} className="playlist-img" />
                <button className="ouca-btn" onClick={() => window.open(playlists[currentIndex].link, '_blank')}>ouça aqui</button>
             </div>
          </section>
        </main>

        <a href="https://wa.me/message/L5OXQTU6PDIFF1" target="_blank" className="wa-btn">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" />
        </a>

        <footer className="footer-black">
          <div className="anim-auto">
            <h4>cøntatø</h4>
            <p>contato@polivaoficial.com.br</p>
            <p>22 98802-3803</p>
            <p style={{ marginTop: '20px', opacity: 0.3 }}>pøliva© 2026</p>
          </div>
        </footer>

        <div className="radio-bar">
          <div className="radio-inner">
            <div className="controls">
              <button onClick={() => setCurrentTrack(prev => (prev === 0 ? 3 : prev - 1))}>«</button>
              <div className="play-btn" onClick={togglePlay}>
                <img src="/simbolo-poliva.png" style={{ opacity: isPlaying ? 1 : 0.6 }} />
                <span>{isPlaying ? 'pausar' : 'dê o play'}</span>
              </div>
              <button onClick={() => setCurrentTrack(prev => (prev + 1) % 4)}>»</button>
            </div>
            <div className="info">
              <div className="marquee"><p className={isPlaying ? 'moving' : ''}>{tracks[currentTrack].name}</p></div>
              <small>você está ouvindo</small>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .preloader { position: fixed; inset: 0; background: black; z-index: 9999; display: flex; align-items: center; justify-content: center; flex-direction: column; }
        .bar-bg { width: 200px; height: 2px; background: #111; }
        .bar-fill { height: 100%; background: #a855f7; }

        .navbar { position: fixed; top: 0; width: 100%; background: rgba(0,0,0,0.9); padding: 20px; z-index: 5000; }
        .nav-container { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
        .nav-logo { width: 100px; }
        .nav-item { color: white; text-decoration: none; font-size: 11px; font-weight: bold; text-transform: uppercase; transition: 0.3s; }
        .nav-item:hover { color: #a855f7; }
        .nav-item:active { color: white; }

        .video-background { position: fixed; inset: 0; z-index: -1; }
        .main-scroll { padding: 150px 20px 200px; text-align: center; }
        
        .video-box { width: 100%; max-width: 600px; margin: 50px auto; aspect-ratio: 16/9; background: #000; box-shadow: 0 30px 60px rgba(0,0,0,0.8); }
        .video-box iframe { width: 100%; height: 100%; }

        .wa-btn { position: fixed; bottom: 120px; right: 30px; width: 50px; z-index: 8000; }

        .footer-black { background: black !important; padding: 100px 20px 200px; border-top: 1px solid #111; }

        .radio-bar { position: fixed; bottom: 0; width: 100%; background: #080808; padding: 15px 30px; border-top: 1px solid #a855f733; z-index: 9000; }
        .radio-inner { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; }
        .controls { display: flex; align-items: center; gap: 20px; }
        .controls button { background: none; border: none; color: #a855f7; font-size: 20px; }
        .play-btn { text-align: center; cursor: pointer; }
        .play-btn img { width: 30px; display: block; margin: 0 auto; }
        .play-btn span { font-size: 8px; color: #a855f7; text-transform: uppercase; font-weight: bold; }
        
        .info { flex: 1; margin-left: 30px; overflow: hidden; }
        .marquee { width: 100%; overflow: hidden; border-bottom: 1px solid #222; padding-bottom: 5px; }
        .marquee p { white-space: nowrap; font-weight: bold; font-size: 14px; }
        .moving { animation: marquee 15s linear infinite; }
        @keyframes marquee { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
        small { font-size: 9px !important; color: #666; }

        .anim-auto { opacity: 0; transform: translateY(20px); animation: reveal 0.8s ease forwards; }
        @keyframes reveal { to { opacity: 1; transform: translateY(0); } }
        
        .hidden { opacity: 0; }
        .visible { opacity: 1; transition: 1s; }
        .pulse { animation: pulse 2s infinite; }
      `}</style>
    </div>
  );
}