// POLIVESSENSE VERSION 2.5.5 - STABLE HD + SHORT FOOTER + MOBILE HAMBURGER (HOME COMPONENT)
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
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', overflowX: 'hidden', fontFamily: "'Avant Garde', sans-serif" }}>
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

      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }}>
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
              <a href="/" className="nav-item" onClick={() => setIsMenuOpen(false)}>iníciø</a>
              <a href="/sobre" className="nav-item" onClick={() => setIsMenuOpen(false)}>søbre pøliva</a>
              <a href="/shows" className="nav-item" onClick={() => setIsMenuOpen(false)}>shøws aø vivø</a>
              {/* ATUALIZADO: LINK PARA /singles */}
              <a href="/singles" className="nav-item" onClick={() => setIsMenuOpen(false)}>singles & álbuns</a>
              <a href="#" className="nav-item" onClick={() => setIsMenuOpen(false)}>agenda</a>
              <a href="#" className="nav-item" onClick={() => setIsMenuOpen(false)}>cøntatø</a>
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
           
            <div className="video-player interactive-zoom">
               {!showVideo ? (
                 <div className="video-cover" onClick={() => setShowVideo(true)}>
                   <img src="https://img.youtube.com/vi/4PbdupC3wrg/maxresdefault.jpg" alt="Preview HD" className="yt-thumb-hd" />
                   <div className="play-overlay"><div className="play-triangle"></div></div>
                 </div>
               ) : (
                 <iframe src="https://www.youtube.com/embed/4PbdupC3wrg?autoplay=1&vq=hd1080&rel=0&modestbranding=1" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
               )}
            </div>
          </section>

          <section className="section-block spacer-lg" style={{ marginBottom: '100px' }}>
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
      </div>

      <style jsx global>{`
        .preloader { position: fixed; inset: 0; background: black; z-index: 9999; display: flex; align-items: center; justify-content: center; }
        .loader-box { width: 220px; text-align: center; display: flex; flex-direction: column; align-items: center; }
        .bar-bg { width: 100%; height: 2px; background: #111; margin: 15px 0; }
        .bar-fill { height: 100%; background: #a855f7; transition: width 0.1s; }
        .bar-pct { font-size: 10px; color: #a855f7; font-weight: bold; }
        .pulse { animation: pulse 2s infinite ease-in-out; }
        @keyframes pulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }

        .page-content { position: relative; z-index: 10; transition: opacity 1.5s ease; }
        .page-content.hidden { opacity: 0; }

        .navbar { position: fixed; top: 0; width: 100%; background: rgba(0,0,0,0.95); padding: 25px 40px; z-index: 3000; border-bottom: 1px solid #111; }
        .nav-container { max-width: 1400px; margin: 0 auto; display: flex; justify-content: center; align-items: center; position: relative; min-height: 50px; }
        .nav-logo { width: 110px; position: absolute; left: 0; }
        .nav-links { display: flex; gap: 40px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: bold; }
       
        .nav-item { color: white; text-decoration: none; transition: 0.3s ease; cursor: pointer; }
        .nav-item:hover { color: #a855f7 !important; }
        .nav-item:active { color: white !important; transform: scale(0.95); }

        .hamburger { display: none; cursor: pointer; z-index: 4000; position: absolute; right: 0; }
        .hamburger span { display: block; width: 25px; height: 2px; background: white; margin: 5px 0; transition: 0.4s; }

        @media (max-width: 1024px) {
          .hamburger { display: block; }
          .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
          .hamburger.open span:nth-child(2) { opacity: 0; }
          .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
          .nav-links {
            position: fixed; top: 0; right: -100%; width: 100%; height: 100vh;
            background: black; flex-direction: column; align-items: center; justify-content: center;
            transition: 0.5s ease-in-out;
          }
          .nav-links.active { right: 0; }
        }

        .main-scroll { padding-top: 250px; text-align: center; max-width: 1200px; margin: 0 auto; }
        .hero-title { font-size: clamp(2.2rem, 8vw, 4.5rem); font-weight: bold; line-height: 1.1; }
        .citation.responsiva { max-width: 600px; margin: 0 auto; border-left: 2px solid #a855f7; padding-left: 40px; text-align: left; font-style: italic; color: #a1a1aa; font-size: clamp(16px, 4vw, 18px); line-height: 1.7; }
        .author { font-style: normal; color: #a855f7; font-weight: bold; font-size: 11px; }

        .spacer-lg { margin-top: 180px; }
        .section-block { padding: 0 20px; }
        .brutal-header h2, .brutal-header h3 { font-size: clamp(1.1rem, 4vw, 1.8rem); font-weight: bold; text-transform: lowercase; line-height: 1; margin: 0; }
        .bold-sub { font-size: clamp(1rem, 3.3vw, 1.6rem); font-weight: bold; color: #a855f7; margin-top: 5px; text-transform: lowercase; line-height: 1; }

        .video-player { width: 100%; max-width: 540px; margin: 60px auto; aspect-ratio: 16/9; box-shadow: 0 50px 100px rgba(0,0,0,0.9); background: black; position: relative; overflow: hidden; }
        .video-player iframe { width: 100%; height: 100%; border-radius: 4px; }
        .video-cover { width: 100%; height: 100%; cursor: pointer; position: relative; }
        .yt-thumb-hd { width: 100%; height: 100%; object-fit: cover; }
        .play-overlay { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.2); transition: 0.3s; }
        .play-triangle { width: 0; height: 0; border-style: solid; border-width: 25px 0 25px 45px; border-color: transparent transparent transparent #ffffff; }

        .carousel-main { display: flex; align-items: center; justify-content: center; gap: 40px; margin-top: 60px; }
        .car-viewport { width: 350px; overflow: hidden; }
        .car-track { display: flex; transition: 0.8s ease; }
        .car-item { min-width: 100%; }
        .playlist-img { width: 100%; aspect-ratio: 1/1; border-radius: 4px; border: 1px solid #111; margin-bottom: 40px; }
        .ouca-btn { background: none; border: 1px solid #a855f7; color: #a855f7; font-size: 16px; padding: 15px 35px; cursor: pointer; font-weight: bold; text-transform: lowercase; transition: 0.3s ease; }
        .car-btn { background: none; border: none; color: white; font-size: 50px; cursor: pointer; opacity: 0.3; transition: 0.3s; }

        .footer-black { background: black; border-top: 1px solid #111; padding: 80px 20px 120px; text-align: center; margin-top: 150px; }
        .footer-heading { font-size: 22px; font-weight: bold; text-transform: uppercase; margin-bottom: 25px; }
        .copyright-line { margin-top: 40px; font-size: 10px; color: #444; }

        .wa-btn { position: fixed; bottom: 120px; right: 30px; width: 50px; z-index: 1000; transition: 0.3s ease; }
        .anim-fade-up { opacity: 0; transform: translateY(40px); animation: revealStay 0.4s ease-out forwards; }
        @keyframes revealStay { to { opacity: 1; transform: translateY(0); } }
        .interactive-zoom:hover { transform: scale(1.08); filter: brightness(1.2); }
        .video-player.interactive-zoom:hover { transform: scale(1.03); }
      `}</style>
    </div>
  );
}