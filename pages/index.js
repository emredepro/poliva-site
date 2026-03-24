// POLIVESSENSE VERSION 2.5.8 - REPARO DE LAYOUT + NAV SYNC
import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Inicio({ nextTrack, prevTrack }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false); 

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

  return (
    <div className="home-main-container">
      <Head>
        <title>pøliva | pølivessense</title>
        <link rel="icon" href={`/favicon.ico?v=${new Date().getTime()}`} />
      </Head>

      {loading && (
        <div className="preloader">
          <div className="loader-box">
            <img src="/simbolo-inicio.png" alt="Ø" className="pulse" style={{ width: '80px', marginBottom: '20px' }} />
            <div className="bar-bg"><div className="bar-fill" style={{ width: `${progress}%` }}></div></div>
            <span className="bar-pct">{progress}%</span>
          </div>
        </div>
      )}

      {/* VÍDEO DE FUNDO - CAMADA ZERO */}
      <div className="video-bg-wrapper">
        <video autoPlay muted loop playsInline className="video-element">
          <source src="/video-home-loop.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={`page-content ${loading ? 'hidden' : 'visible'}`}>
        <nav className="navbar">
          <div className="nav-container">
            <img src="/logo-poliva.png" alt="Logo" className="nav-logo" />
            
            <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span></span><span></span><span></span>
            </div>

            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <a href="/" className="nav-item">iníciø</a>
              <a href="/sobre" className="nav-item">søbre pøliva</a>
              <a href="/shows" className="nav-item">shøws aø vivø</a>
              <a href="/singles" className="nav-item">singles & álbuns</a>
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
              <p>
                "A música não é apenas entretenimento; ela é portal. Não é só sobre tocar música, é sobre atravessá-la.
                Eu faço músicas e também canto músicas que transformam a mim e a outras pessoas"
              </p>
              <span className="author">— Poliva Soham</span>
            </div>
          </section>

          <section className="section-block spacer-lg">
            <div className="brutal-header anim-fade-up">
              <h2>pølivessense, o show:</h2>
              <p className="bold-sub">assista abaixo na íntegra</p>
            </div>
            
            <div className="video-player interactive-zoom">
               {!showVideo ? (
                 <div className="video-cover" onClick={() => setShowVideo(true)}>
                   <img src="https://img.youtube.com/vi/4PbdupC3wrg/maxresdefault.jpg" alt="Preview" className="yt-thumb-hd" />
                   <div className="play-overlay"><div className="play-triangle"></div></div>
                 </div>
               ) : (
                 <iframe src="https://www.youtube.com/embed/4PbdupC3wrg?autoplay=1&vq=hd1080&rel=0&modestbranding=1" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
               )}
            </div>
          </section>

          <section className="section-block spacer-lg" style={{ marginBottom: '100px' }}>
             <div className="brutal-header anim-fade-up">
               <h3>playlists para as melhores ocasiões:</h3>
                <p className="bold-sub">o que o seu momento pede?</p>
             </div>
             <div className="carousel-main">
                <button className="car-btn" onClick={prevTrack}>‹</button>
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
                <button className="car-btn" onClick={nextTrack}>›</button>
             </div>
          </section>
        </main>

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

        <a href="https://wa.me/message/L5OXQTU6PDIFF1" target="_blank" className="wa-btn interactive-zoom">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
        </a>
      </div>

      <style jsx global>{`
        .home-main-container { background: black; min-height: 100vh; color: white; overflow-x: hidden; font-family: sans-serif; position: relative; }
        
        /* TEXTURA SUTIL 0.05 PARA NÃO MATAR O VÍDEO */
        .home-main-container::before {
          content: ""; position: fixed; inset: 0;
          background-image: url('/patterns_poliva_simbolos-07.jpg');
          background-size: cover; background-position: center;
          opacity: 0.05; z-index: 1; pointer-events: none;
        }

        .video-bg-wrapper { position: fixed; inset: 0; z-index: 0; overflow: hidden; }
        .video-element { width: 100%; height: 100%; object-fit: cover; opacity: 0.35; }

        .preloader { position: fixed; inset: 0; background: black; z-index: 9999; display: flex; align-items: center; justify-content: center; }
        .loader-box { width: 220px; text-align: center; }
        .bar-bg { width: 100%; height: 2px; background: #111; margin: 15px 0; }
        .bar-fill { height: 100%; background: #a855f7; transition: width 0.1s; }
        .bar-pct { font-size: 10px; color: #a855f7; font-weight: bold; }
        .pulse { animation: pulse 2s infinite ease-in-out; }
        @keyframes pulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }

        .page-content { position: relative; z-index: 10; transition: opacity 1.5s ease; }
        .page-content.hidden { opacity: 0; }

        .navbar { position: fixed; top: 0; width: 100%; background: rgba(0,0,0,0.9); padding: 20px 40px; z-index: 5000; border-bottom: 1px solid #111; }
        .nav-container { max-width: 1400px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
        .nav-logo { width: 110px; }
        .nav-links { display: flex; gap: 40px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: bold; }
        .nav-item { color: white; text-decoration: none; transition: 0.3s; }
        .nav-item:hover { color: #a855f7; }

        .main-scroll { padding-top: 200px; text-align: center; max-width: 1200px; margin: 0 auto; }
        .hero-title { font-size: clamp(2rem, 7vw, 4rem); font-weight: bold; margin-bottom: 60px; line-height: 1.1; }
        .citation { max-width: 600px; margin: 0 auto; border-left: 2px solid #a855f7; padding-left: 30px; text-align: left; font-style: italic; color: #ccc; }
        .author { display: block; margin-top: 10px; color: #a855f7; font-weight: bold; font-style: normal; }

        .spacer-lg { margin-top: 150px; }
        .brutal-header h2 { font-size: clamp(1.5rem, 4vw, 2.5rem); text-transform: lowercase; }
        .bold-sub { color: #a855f7; font-weight: bold; margin-top: 10px; }

        .video-player { width: 100%; max-width: 700px; margin: 50px auto; aspect-ratio: 16/9; background: black; position: relative; cursor: pointer; }
        .video-player iframe { width: 100%; height: 100%; }
        .yt-thumb-hd { width: 100%; height: 100%; object-fit: cover; }
        .play-overlay { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.3); }
        .play-triangle { width: 0; height: 0; border-style: solid; border-width: 20px 0 20px 35px; border-color: transparent transparent transparent white; }

        .carousel-main { display: flex; align-items: center; justify-content: center; gap: 30px; margin-top: 50px; }
        .car-viewport { width: 300px; overflow: hidden; }
        .car-track { display: flex; transition: 0.6s ease-in-out; }
        .car-item { min-width: 100%; }
        .playlist-img { width: 100%; aspect-ratio: 1/1; border-radius: 4px; margin-bottom: 20px; }
        .ouca-btn { background: none; border: 1px solid #a855f7; color: #a855f7; padding: 10px 25px; cursor: pointer; font-weight: bold; }
        .car-btn { background: none; border: none; color: white; font-size: 40px; cursor: pointer; opacity: 0.5; }

        .footer-black { background: black; padding: 60px 20px; text-align: center; margin-top: 100px; border-top: 1px solid #111; }
        .copyright-line { font-size: 10px; color: #444; margin-top: 20px; }
        .wa-btn { position: fixed; bottom: 30px; right: 30px; width: 50px; z-index: 6000; }

        .hamburger { display: none; cursor: pointer; }
        .hamburger span { display: block; width: 25px; height: 2px; background: white; margin: 5px 0; }

        @media (max-width: 1024px) {
          .hamburger { display: block; }
          .nav-links { position: fixed; top: 0; right: -100%; width: 100%; height: 100vh; background: black; flex-direction: column; align-items: center; justify-content: center; transition: 0.5s; }
          .nav-links.active { right: 0; }
        }

        .anim-fade-up { opacity: 0; transform: translateY(20px); animation: reveal 0.6s forwards; }
        @keyframes reveal { to { opacity: 1; transform: translateY(0); } }
        .interactive-zoom:hover { transform: scale(1.05); transition: 0.3s; }
      `}</style>
    </div>
  );
}