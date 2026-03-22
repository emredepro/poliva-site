import React, { useState, useEffect } from 'react';

export default function Inicio() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const playlists = [
    { title: "4 horas de música para despertar o fim de semana", img: "/capa-playlist-1.jpg", link: "https://open.spotify.com/playlist/1gnK5FmRkt5nZpKBcRwoP3?si=78bb4a57403d4c21" },
    { title: "curtindo a estrada com rocks inesquecíveis", img: "/capa-playlist-2.jpg", link: "https://open.spotify.com/playlist/76gpuL3vDA2Sxbbi8g5VYc?si=599247e4e2b74e7d" },
    { title: "rock matinal para começar bem o dia", img: "/capa-playlist-3.jpg", link: "https://open.spotify.com/playlist/6LUj7CsEjuncERS7NDaXHx?si=7fef215cd7a344b8" }
  ];

  // Preloader com Barra de Progresso (Até 100%)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500); // Revela o site
          return 100;
        }
        return prev + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // Carrossel Automático (5 segundos)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % playlists.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [playlists.length]);

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', overflowX: 'hidden', fontFamily: "'Avant Garde', sans-serif" }}>
      
      {/* 1. PRELOADER ESTILO RESN (IMAGEM E BARRA CENTRALIZADAS) */}
      {loading && (
        <div className="preloader">
          <div className="loader-center-block">
            <img src="/simbolo-inicio.png" alt="Ø" className="loader-symbol" />
            <div className="progress-container">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="progress-text">{progress}%</span>
          </div>
        </div>
      )}

      {/* 2. VÍDEO DE FUNDO FIXO */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }}>
          <source src="/video-home-loop.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, transparent 20%, black 120%)' }}></div>
      </div>

      {/* 3. CONTEÚDO PRINCIPAL (REVELADO APÓS LOADING) */}
      <div style={{ position: 'relative', zIndex: 10, opacity: loading ? 0 : 1, transition: 'opacity 1s ease' }}>
        
        {/* NAV RESPONSIVA (MOBILE FRIENDLY) */}
        <nav className="navbar">
          <div className="nav-wrapper">
            <img src="/logo-poliva.png" alt="Logo" className="nav-logo" />
            <div className="nav-links">
              <a href="#">iníciø</a>
              <a href="#">søbre pøliva</a>
              <a href="#">shøws aø vivø</a>
              <a href="#">singles & álbuns</a>
              <a href="#">agenda</a>
              <a href="#">cøntatø</a>
            </div>
          </div>
        </nav>

        <main style={{ paddingTop: '200px', textAlign: 'center', paddingBottom: '150px' }}>
          
          {/* HERO */}
          <section className="hero-section">
            <h1 className="hero-title">
              Música que desperta, <br/>
              <span className="purple-text">Show que vira portal</span>
            </h1>
            <div className="quote-box">
              <p>&quot;a música não é apenas entretenimento; ela é portal. não é só sobre tocar música, é sobre atravessá-la. eu faço músicas e também canto músicas que transformam a mim e a outras people&quot;</p>
              <span className="quote-author">— poliva soham</span>
            </div>
          </section>

          {/* SEÇÃO SHOW (BRUTALISTA, SEM CAIXA) */}
          <section className="portal-section">
            <div className="brutal-header">
              <h2 className="title-low">pølivessense, o show:</h2>
              <p className="subtitle-bold">assista abaixo na íntegra</p>
            </div>
            
            {/* VÍDEO DO YOUTUBE (TAMANHO DISCRETO: max 480px) */}
            <div className="youtube-player-wrapper">
               <iframe src="https://www.youtube.com/embed/ID_DO_VIDEO" frameBorder="0" allowFullScreen></iframe>
            </div>
          </section>

          {/* SEÇÃO PLAYLISTS (BRUTALISTA, AUTOMÁTICA) */}
          <section className="portal-section">
             <div className="brutal-header">
                <h3 className="title-low" style={{ letterSpacing: '0.02em' }}>playlists para as melhores ocasiões:</h3>
                <p className="subtitle-bold">o que o seu momento pede?</p>
             </div>

             <div className="slider-overflow-container">
                <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                  {playlists.map((item, index) => (
                    <div key={index} className="slide-item">
                      <div className="playlist-card">
                         <img src={item.img} alt={item.title} />
                         <button className="btn-play-grande" onClick={() => window.open(item.link, '_blank')}>ouça aqui</button>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </section>
        </main>

        {/* RODAPÉ PRETO ABSOLUTO */}
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

        {/* PLAYER FIXO COM "DÊ O PLAY" */}
        <div className="fixed-player-bar">
          <div className="player-inner">
            <div className="player-controls">
              <div className="play-trigger" onClick={() => window.open("https://open.spotify.com/intl-pt/artist/169GxAoBcwtHLUGAYzgo00?si=aetfgOWfQOiiGBi1jiJ_fA", "_blank")}>
                <img src="/simbolo-poliva.png" alt="Ø" />
                <span>dê o play</span>
              </div>
              <div className="song-info">
                <strong>depressa</strong>
                <small>pøliva • 16 de abril</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* 1. PRELOADER ESTILO RESN (PERFEITAMENTE CENTRALIZADO) */
        .preloader { position: fixed; inset: 0; background: black; z-index: 1000; display: flex; align-items: center; justify-content: center; }
        .loader-center-block { display: flex; flex-direction: column; align-items: center; text-align: center; width: 200px; }
        .loader-symbol { width: 70px; margin-bottom: 25px; animation: pulse 2s infinite ease-in-out; }
        .progress-container { width: 100%; height: 2px; background: rgba(255,255,255,0.1); margin-bottom: 10px; }
        .progress-bar { height: 100%; background: #a855f7; transition: width 0.1s; }
        .progress-text { font-size: 10px; letter-spacing: 0.2em; color: #a855f7; font-weight: bold; }
        @keyframes pulse { 0% { opacity: 0.6; } 50% { opacity: 1; } 100% { opacity: 0.6; } }

        /* 2. NAVBAR RESPONSIVA (MOBILE READY) */
        .navbar { position: fixed; top: 0; width: 100%; background: rgba(0,0,0,0.9); backdrop-filter: blur(15px); padding: 15px; z-index: 100; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .nav-wrapper { display: flex; flex-direction: column; align-items: center; max-width: 1400px; margin: 0 auto; }
        .nav-logo { width: 110px; }
        .nav-links { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; margin-top: 10px; font-size: 9px; letter-spacing: 0.1em; }
        
        @media (min-width: 768px) {
          .navbar { padding: 25px 50px; }
          .nav-wrapper { flex-direction: row; justify-content: flex-start; }
          .nav-logo { margin-right: 50px; }
          .nav-links { margin-top: 0; gap: 30px; font-size: 11px; letter-spacing: 0.2em; }
        }

        .nav-links a { color: white; text-decoration: none; text-transform: uppercase; font-weight: 600; transition: 0.3s; }
        .nav-links a:hover { color: #a855f7; }

        /* 3. TIPOGRAFIA BRUTALISTA E RESPONSIVA (3X MAIOR, BOLD) */
        .hero-section { padding: 0 20px; margin-bottom: 100px; }
        .hero-title { font-size: clamp(2.2rem, 8vw, 4.5rem); font-weight: bold; line-height: 1.1; margin-bottom: 40px; letter-spacing: -0.02em; }
        .purple-text { color: rgba(168, 85, 247, 0.8); }
        .quote-box { max-width: 650px; margin: 0 auto; text-align: left; border-left: 2px solid #a855f7; padding-left: 30px; font-style: italic; color: #a1a1aa; font-size: 17px; line-height: 1.7; }
        .quote-author { display: block; font-style: normal; color: #a855f7; font-weight: bold; margin-top: 20px; letter-spacing: 0.4em; font-size: 11px; text-transform: uppercase; }

        .portal-section { padding: 0 20px; margin-bottom: 150px; text-align: center; }
        .brutal-header { margin-bottom: 50px; }
        .title-low { font-size: clamp(1.6rem, 5vw, 3.2rem); text-transform: lowercase; font-weight: bold; margin: 0; color: white; line-height: 1; }
        .subtitle-bold { font-size: clamp(1.4rem, 4.5vw, 2.8rem); text-transform: lowercase; font-weight: bold; margin: 10px 0 0; color: #a855f7; line-height: 1; }

        /* 4. VÍDEO E SLIDER (RESPONSIVOS) */
        .youtube-player-wrapper { width: 100%; maxWidth: 480px; margin: 0 auto; aspect-ratio: 16/9; box-shadow: 0 30px 60px rgba(0,0,0,0.8); }
        .youtube-player-wrapper iframe { width: 100%; height: 100%; border-radius: 4px; }

        .slider-overflow-container { width: 100%; overflow: hidden; }
        .slider-track { display: flex; transition: 0.8s cubic-bezier(0.23, 1, 0.32, 1); }
        .slide-item { min-width: 100%; display: flex; justify-content: center; }
        .playlist-card { width: 280px; text-align: center; }
        .playlist-card img { width: 100%; aspect-ratio: 1/1; object-fit: cover; border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); margin-bottom: 25px; transition: 0.5s; }
        .playlist-card:hover img { transform: scale(1.03); border-color: #a855f7; }
        .btn-play-grande { background: none; border: 1px solid #a855f7; color: #a855f7; font-size: 12px; padding: 14px 28px; cursor: pointer; letter-spacing: 0.2em; font-weight: bold; text-transform: lowercase; transition: 0.3s; }
        .btn-play-grande:hover { background: #a855f7; color: white; }

        /* 5. RODAPÉ PRETO ABSOLUTO */
        .footer-black { background: black; border-top: 1px solid rgba(255,255,255,0.05); padding: 80px 20px 140px; text-align: center; position: relative; z-index: 10; }
        .footer-content { max-width: 1100px; margin: 0 auto; }
        .footer-heading { fontSize: 20px; fontWeight: bold; text-transform: uppercase; margin-bottom: 25px; }
        .footer-details { font-size: 14px; line-height: 1.8; color: #ccc; }
        .phone-line { font-weight: bold; margin-top: 15px; color: white; font-size: 16px; }
        .copyright-line { margin-top: 60px; font-size: 10px; color: rgba(255,255,255,0.3); }

        /* 6. PLAYER FIXO COM "DÊ O PLAY" */
        .fixed-player-bar { position: fixed; bottom: 0; width: 100%; z-index: 100; background: rgba(0,0,0,0.98); backdrop-filter: blur(20px); border-top: 1px solid rgba(255,255,255,0.05); padding: 15px 40px; }
        .player-inner { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
        .player-controls { display: flex; align-items: center; gap: 20px; }
        .play-trigger { display: flex; flex-direction: column; align-items: center; gap: 5px; cursor: pointer; }
        .play-trigger img { width: 32px; height: 32px; }
        .play-trigger span { font-size: 8px; text-transform: uppercase; color: #a855f7; font-weight: bold; letter-spacing: 0.1em; }
        .song-info { text-align: left; }
        .song-info strong { font-size: 12px; display: block; text-transform: lowercase; }
        .song-info small { font-size: 10px; color: #71717a; }
      `}</style>
    </div>
  );
}