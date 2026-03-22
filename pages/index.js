import React, { useState } from 'react';

export default function Inicio() {
  const playlists = [
    { title: "4 horas de música para despertar o fim de semana", img: "/capa-playlist-1.jpg" },
    { title: "Curtindo a estrada com rocks inesquecíveis", img: "/capa-playlist-2.jpg" },
    { title: "Rock matinal para começar bem o dia", img: "/capa-playlist-3.jpg" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="portal-root">
      
      {/* 1. CAMADA DE FUNDO FIXA (PORTAL) */}
      <div className="video-background">
        <video autoPlay muted loop playsInline>
          <source src="/video-home-loop.mp4" type="video/mp4" />
        </video>
        <div className="overlay-sombrio"></div>
      </div>

      {/* 2. MENU COM AS 6 ABAS CORRETAS E LOGO 20% AO CENTRO */}
      <nav className="nav-container">
        <div className="nav-logo-wrapper">
          <img src="/logo-poliva.png" alt="Logo Pøliva" className="logo-img" />
        </div>
        <div className="nav-links">
          <a href="#" className="nav-link active">iníciø</a>
          <a href="#" className="nav-link">søbre pøliva</a>
          <a href="#" className="nav-link">shøws aø vivø</a>
          <a href="#" className="nav-link">singles & álbuns</a>
          <a href="#" className="nav-link">agenda</a>
          <a href="#" className="nav-link">cøntatø</a>
        </div>
      </nav>

      {/* 3. CONTEÚDO FLUTUANTE (SCROLL) */}
      <main className="content-wrapper">
        
        {/* HERO */}
        <section className="hero-section">
          <h1 className="hero-title">
            Música que desperta, <br/>
            <span className="purple-text">Show que vira portal</span>
          </h1>

          <div className="citation-box">
            <p>&quot;A música não é apenas entretenimento; ela é portal. Não é só sobre tocar música, é sobre atravessá-la. Eu faço músicas e também canto músicas que transformam a mim e a outras pessoas&quot;</p>
            <span className="citation-author">— Poliva Soham</span>
          </div>
        </section>

        {/* SHOW BOX */}
        <section className="show-container">
          <div className="glass-show-box">
            <h2 className="show-title">pølivessense, o show:</h2>
            <p className="show-subtitle">assista abaixo na íntegra</p>
          </div>

          <div className="youtube-player-wrapper">
             <iframe src="https://www.youtube.com/embed/ID_DO_VIDEO" frameBorder="0" allowFullScreen></iframe>
          </div>
        </section>

        {/* PLAYLISTS - REDUZIDAS 35% E FULL WIDTH */}
        <section className="playlist-section">
          <div className="playlist-header">
            <h3 className="playlist-title">playlists para as melhores ocasiões:</h3>
            <p className="playlist-tagline">o que o seu momento pede?</p>
          </div>

          <div className="dots-container">
            {playlists.map((_, i) => (
              <button key={i} onClick={() => setCurrentIndex(i)} className={`dot-btn ${currentIndex === i ? 'active' : ''}`} />
            ))}
          </div>

          <div className="slider-overflow">
            <div className="slider-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {playlists.map((item, index) => (
                <div key={index} className="playlist-slide">
                  <div className="card-playlist">
                    <img src={item.img} alt={item.title} className="playlist-img" />
                    <button className="btn-play">OUÇA AQUI</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RODAPÉ PRETO/BRANCO COMPACTO */}
        <footer className="footer-dark">
          <h4 className="footer-heading">cøntatø</h4>
          <div className="footer-details">
            <p>para shøws e parcerias</p>
            <p>e-mail: contato@polivaoficial.com.br</p>
            <p>redes sociais: @polivaoficial</p>
            <p className="phone-bold">telefone: 22 98802-3803</p>
          </div>
          <p className="copyright-text">pøliva© 2026. Todos os direitos reservados.</p>
        </footer>
      </main>

      {/* PLAYER FIXO BASE */}
      <div className="fixed-player-bar">
        <div className="player-content">
          <div className="player-left">
            <img src="/simbolo-poliva.png" alt="Ø" />
            <div className="player-text">
              <span className="player-song">depressa</span>
              <span className="player-info">pøliva • 16 de abril</span>
            </div>
          </div>
          <div className="player-right">
             <span className="freq-text">432hz</span>
             <div className="purple-symbol">ø</div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .portal-root { background: black; color: white; min-height: 100vh; overflow-x: hidden; }
        
        /* EFEITO PROFUNDIDADE */
        .video-background { position: fixed; inset: 0; z-index: 0; }
        .video-background video { width: 100%; height: 100%; object-fit: cover; opacity: 0.3; }
        .overlay-sombrio { position: absolute; inset: 0; background: rgba(0,0,0,0.5); }

        /* NAV */
        .nav-container { position: fixed; top: 0; width: 100%; height: 80px; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.85); backdrop-filter: blur(15px); border-bottom: 1px solid rgba(255,255,255,0.05); z-index: 100; }
        .nav-logo-wrapper { position: absolute; left: 20%; transform: translateX(-50%); }
        .logo-img { width: 110px; }
        .nav-links { display: flex; gap: 30px; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 600; }
        .nav-link { color: white; text-decoration: none; transition: 0.3s; padding-bottom: 5px; border-bottom: 1px solid transparent; }
        .nav-link:hover, .nav-link.active { color: #a855f7; border-bottom: 1px solid #a855f7; }

        /* MAIN */
        .content-wrapper { position: relative; z-index: 10; padding-top: 180px; }
        .hero-section { margin-bottom: 120px; text-align: center; }
        .hero-title { font-size: clamp(2.5rem, 8vw, 4.5rem); font-weight: bold; line-height: 1.1; margin-bottom: 40px; }
        .purple-text { color: rgba(168, 85, 247, 0.8); }
        .citation-box { max-width: 650px; margin: 0 auto; text-align: left; border-left: 2px solid #a855f7; padding-left: 30px; font-style: italic; color: #a1a1aa; font-size: 16px; line-height: 1.6; }
        .citation-author { display: block; font-style: normal; color: #a855f7; font-weight: bold; margin-top: 15px; letter-spacing: 0.3em; font-size: 11px; }

        /* SHOW BOX */
        .show-container { margin-bottom: 150px; text-align: center; padding: 0 20px; }
        .glass-show-box { max-width: 800px; margin: 0 auto 30px; padding: 40px; background: rgba(255,255,255,0.03); border: 1px solid rgba(168, 85, 247, 0.3); border-radius: 8px; backdrop-filter: blur(5px); transition: 0.4s; cursor: pointer; }
        .glass-show-box:hover { transform: translateY(-5px); border-color: #a855f7; box-shadow: 0 10px 40px rgba(168, 85, 247, 0.2); }
        .show-title { fontSize: 26px; font-weight: bold; margin-bottom: 10px; }
        .show-subtitle { fontSize: 14px; text-transform: uppercase; color: #a855f7; letter-spacing: 0.3em; }
        .youtube-player-wrapper { max-width: 612px; margin: 0 auto; aspect-ratio: 16/9; box-shadow: 0 0 50px rgba(0,0,0,1); }
        .youtube-player-wrapper iframe { width: 100%; height: 100%; border-radius: 4px; }

        /* PLAYLISTS */
        .playlist-section { width: 100vw; margin-bottom: 150px; overflow: hidden; }
        .playlist-header { margin-bottom: 40px; text-align: center; }
        .playlist-title { font-size: 18px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.2em; }
        .playlist-tagline { font-size: 16px; color: #a855f7; margin-top: 10px; }
        .dots-container { display: flex; justify-content: center; gap: 15px; margin-bottom: 30px; }
        .dot-btn { width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.2); border: none; cursor: pointer; transition: 0.3s; }
        .dot-btn.active { background: #a855f7; box-shadow: 0 0 10px #a855f7; }
        .slider-overflow { width: 100%; overflow: hidden; }
        .slider-inner { display: flex; transition: 0.8s cubic-bezier(0.23, 1, 0.32, 1); }
        .playlist-slide { min-width: 100%; display: flex; justify-content: center; }
        .card-playlist { width: 182px; text-align: center; }
        .playlist-img { width: 100%; aspect-ratio: 1/1; object-fit: cover; border-radius: 2px; border: 1px solid rgba(255,255,255,0.1); margin-bottom: 20px; transition: 0.4s; }
        .card-playlist:hover .playlist-img { transform: scale(1.03); border-color: #a855f7; }
        .btn-play { background: transparent; border: 1px solid #a855f7; color: #a855f7; font-size: 10px; padding: 10px 20px; cursor: pointer; letter-spacing: 0.2em; transition: 0.3s; }
        .btn-play:hover { background: #a855f7; color: white; }

        /* FOOTER */
        .footer-dark { background: black; border-top: 1px solid rgba(255,255,255,0.05); padding: 50px 20px 140px; text-align: center; }
        .footer-heading { fontSize: 20px; fontWeight: bold; text-transform: uppercase; margin-bottom: 20px; }
        .footer-details { font-size: 14px; line-height: 1.8; color: #eee; }
        .phone-bold { font-weight: bold; margin-top: 10px; }
        .copyright-text { margin-top: 50px; font-size: 10px; color: rgba(255,255,255,0.3); }

        /* PLAYER BAR */
        .fixed-player-bar { position: fixed; bottom: 0; width: 100%; background: rgba(0,0,0,0.95); backdrop-filter: blur(20px); border-top: 1px solid rgba(255,255,255,0.05); padding: 15px 40px; z-index: 100; }
        .player-content { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
        .player-left { display: flex; align-items: center; gap: 20px; }
        .player-left img { width: 35px; height: 35px; }
        .player-song { font-size: 11px; font-weight: bold; display: block; }
        .player-info { font-size: 10px; color: #71717a; }
        .player-right { display: flex; align-items: center; gap: 25px; }
        .freq-text { font-size: 10px; letter-spacing: 0.3em; color: #52525b; }
        .purple-symbol { font-size: 22px; color: #a855f7; font-weight: bold; }
      `}</style>
    </div>
  );
}