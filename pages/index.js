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
    { title: "4 horas de música para despertar o fim de semana", img: "/capa-playlist-1.jpg", link: "http://spotify.com" },
    { title: "curtindo a estrada com rocks inesquecíveis", img: "/capa-playlist-2.jpg", link: "http://spotify.com" },
    { title: "rock matinal para começar bem o dia", img: "/capa-playlist-3.jpg", link: "http://spotify.com" }
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
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', overflowX: 'hidden', fontFamily: "'Avant Garde', sans-serif" }}>
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

      <div className="bg-video-fixed">
        <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }}>
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
            <h1 className="hero-title anim-fade-up">Música que desperta, <br/><span style={{ color: '#a855f7' }}>Show que vira portal</span></h1>
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
               <iframe src="https://www.youtube.com/embed/4PbdupC3wrg?vq=hd1080&rel=0" frameBorder="0" allowFullScreen></iframe>
            </div>
          </section>

          <section className="section-block spacer-lg" style={{ marginBottom: '200px' }}>
             <div className="carousel-main anim-fade-up">
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
             </div>
          </section>
        </main>

        <a href="https://wa.me/message/L5OXQTU6PDIFF1" target="_blank" className="wa-btn interactive-zoom">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" />
        </a>

        <footer className="footer-black">
            <div className="footer-content anim-fade-up">
                <h4 className="footer-heading">cøntatø</h4>
                <p>contato@polivaoficial.com.br | @polivaoficial</p>
                <p className="phone-line">22 98802-3803</p>
            </div>
        </footer>

        <div className="radio-bar">
          <div className="radio-inner">
            <div className="radio-controls">
              <button onClick={() => setCurrentTrack(prev => (prev === 0 ? 3 : prev - 1))} className="radio-nav-btn"><span>«</span></button>
              <div className="play-circle interactive-zoom" onClick={togglePlay}>
                <img src="/simbolo-poliva.png" alt="Play" style={{ opacity: isPlaying ? 1 : 0.6 }} />
                <span className="play-label">{isPlaying ? 'pausar' : 'dê o play'}</span>
              </div>
              <button onClick={() => setCurrentTrack(prev => (prev + 1) % 4)} className="radio-nav-btn"><span>»</span></button>
            </div>
            <div className="radio-display">
              <div className="marquee-box"><p className={isPlaying ? 'running' : ''}>{tracks[currentTrack].name}</p></div>
              <span className="status-label">você está ouvindo</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .preloader { position: fixed; inset: 0; background: black; z-index: 9999; display: flex; flex-direction: column; align-items: center; justify-content: center; }
        .bar-bg { width: 200px; height: 2px; background: #111; margin-top: 20px; }
        .bar-fill { height: 100%; background: #a855f7; }

        .navbar { position: fixed; top: 0; width: 100%; background: rgba(0,0,0,0.95); padding: 25px 40px; z-index: 5000; border-bottom: 1px solid #111; }
        .nav-container { max-width: 1400px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
        .nav-logo { width: 110px; }
        .nav-item { color: white; text-decoration: none; transition: 0.3s; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em; }
        .nav-item:hover { color: #a855f7 !important; }
        .nav-item:active { color: white !important; transform: scale(0.9); }

        .bg-video-fixed { position: fixed; inset: 0; z-index: 0; }
        .main-scroll { padding-top: 250px; text-align: center; max-width: 1200px; margin: 0 auto; position: relative; z-index: 10; }
        
        .video-player-shield { width: 100%; max-width: 600px; margin: 60px auto; aspect-ratio: 16/9; background: #000; box-shadow: 0 40px 80px rgba(0,0,0,0.9); z-index: 100; position: relative; }
        .video-player-shield iframe { width: 100%; height: 100%; border: none; }

        .radio-bar { position: fixed; bottom: 0; width: 100%; background: #080808; padding: 15px 40px; border-top: 1px solid #a855f733; z-index: 9000; }
        .radio-inner { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 40px; }
        .radio-controls { display: flex; align-items: center; gap: 20px; }
        .radio-nav-btn { background: none; border: none; color: #a855f7; font-size: 20px; cursor: pointer; }
        .play-circle { cursor: pointer; text-align: center; }
        .play-circle img { width: 30px; }
        .play-label { font-size: 8px; color: #a855f7; display: block; margin-top: 5px; text-transform: uppercase; }
        .status-label { font-size: 9px !important; color: white; text-transform: lowercase; }

        .marquee-box { width: 100%; overflow: hidden; border-bottom: 1px solid #333; padding-bottom: 5px; }
        .marquee-content { display: inline-block; white-space: nowrap; font-size: 14px; font-weight: bold; padding-left: 10%; }
        .running { animation: marquee 15s linear infinite; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }

        .footer-black { background: black; padding: 100px 20px 220px; border-top: 1px solid #111; }
        .wa-btn { position: fixed; bottom: 120px; right: 30px; width: 50px; z-index: 8000; }

        .anim-fade-up { opacity: 0; transform: translateY(30px); animation: reveal 0.5s ease forwards; }
        @keyframes reveal { to { opacity: 1; transform: translateY(0); } }
        .interactive-zoom:hover { transform: scale(1.05); transition: 0.3s; }
        .pulse { animation: pulse 2s infinite; }
      `}</style>
    </div>
  );
}