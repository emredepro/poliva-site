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
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, [currentTrack]);

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

      {/* BACKGROUND VIDEO */}
      <div className="bg-video">
        <video autoPlay muted loop playsInline>
          <source src="/video-home-loop.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={`content ${loading ? 'hidden' : 'visible'}`}>
        <nav className="navbar">
          <img src="/logo-poliva.png" alt="Logo" className="nav-logo" />
          <div className="nav-links">
            <a href="#">iníciø</a>
            <a href="#">søbre pøliva</a>
            <a href="#">agenda</a>
            <a href="#">cøntatø</a>
          </div>
        </nav>

        <main className="main-content">
          <section className="hero">
            <h1>Música que desperta, <br/><span style={{ color: '#a855f7' }}>Show que vira portal</span></h1>
          </section>

          <section className="video-section">
            <div className="video-container">
               <iframe src="https://www.youtube.com/embed/4PbdupC3wrg?vq=hd1080" frameBorder="0" allowFullScreen></iframe>
            </div>
          </section>

          <section className="playlists">
             <div className="carousel">
                {playlists.map((p, i) => (
                  <div key={i} className={`playlist-item ${currentIndex === i ? 'active' : ''}`}>
                    <img src={p.img} alt={p.title} />
                  </div>
                ))}
             </div>
          </section>
        </main>

        <a href="https://wa.me/message/L5OXQTU6PDIFF1" target="_blank" className="whatsapp-link">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" />
        </a>

        <footer className="footer">
          <p>contato@polivaoficial.com.br</p>
          <p>pøliva© 2026</p>
        </footer>

        {/* PLAYER BAR - RECONSTRUÇÃO LIMPA */}
        <div className="player-bar">
          <div className="player-inner">
            <div className="controls">
              <button onClick={() => setCurrentTrack(prev => (prev === 0 ? 3 : prev - 1))}>«</button>
              <div className="play-trigger" onClick={togglePlay}>
                <img src="/simbolo-poliva.png" style={{ opacity: isPlaying ? 1 : 0.5 }} />
              </div>
              <button onClick={() => setCurrentTrack(prev => (prev + 1) % 4)}>»</button>
            </div>
            <div className="info">
              <div className="marquee">
                <p className={isPlaying ? 'moving' : ''}>{tracks[currentTrack].name}</p>
              </div>
              <small>você está ouvindo</small>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .preloader { position: fixed; inset: 0; background: black; z-index: 10000; display: flex; flex-direction: column; align-items: center; justify-content: center; }
        .bar-bg { width: 200px; height: 2px; background: #222; }
        .bar-fill { height: 100%; background: #a855f7; }
        
        .bg-video { position: fixed; inset: 0; z-index: -1; opacity: 0.3; }
        .bg-video video { width: 100%; height: 100%; object-fit: cover; }

        .navbar { position: fixed; top: 0; width: 100%; padding: 30px; display: flex; justify-content: space-between; align-items: center; background: rgba(0,0,0,0.8); z-index: 1000; }
        .nav-logo { width: 100px; }
        .nav-links { display: flex; gap: 20px; font-size: 12px; font-weight: bold; text-transform: uppercase; }

        .main-content { padding: 150px 20px 200px; text-align: center; }
        .hero h1 { font-size: 3rem; margin-bottom: 50px; }

        .video-container { width: 100%; max-width: 800px; margin: 0 auto; aspect-ratio: 16/9; background: #000; position: relative; z-index: 500; }
        .video-container iframe { width: 100%; height: 100%; }

        .whatsapp-link { position: fixed; bottom: 120px; right: 30px; width: 50px; z-index: 9999; }

        /* PLAYER BAR */
        .player-bar { position: fixed; bottom: 0; width: 100%; background: #0a0a0a; border-top: 1px solid #a855f744; padding: 15px 30px; z-index: 9000; }
        .player-inner { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; }
        .controls { display: flex; align-items: center; gap: 20px; }
        .controls button { background: none; border: none; color: #a855f7; font-size: 24px; cursor: pointer; }
        .play-trigger { cursor: pointer; text-align: center; }
        .play-trigger img { width: 35px; }
        
        .info { flex: 1; margin-left: 40px; overflow: hidden; }
        .marquee { width: 100%; overflow: hidden; white-space: nowrap; border-bottom: 1px solid #333; }
        .marquee p { display: inline-block; padding-left: 10%; font-weight: bold; }
        .moving { animation: scroll 15s linear infinite; }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }
        small { font-size: 10px; color: #666; text-transform: lowercase; }

        .footer { padding: 100px 20px 200px; border-top: 1px solid #111; font-size: 12px; color: #444; }
        .hidden { opacity: 0; }
        .visible { opacity: 1; transition: opacity 1s; }
        .pulse { animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
      `}</style>
    </div>
  );
}