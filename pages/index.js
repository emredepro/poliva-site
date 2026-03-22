import React, { useState } from 'react';

export default function Inicio() {
  const playlists = [
    { title: "4 horas de música para despertar o fim de semana", img: "/capa-playlist-1.jpg" },
    { title: "Curtindo a estrada com rocks inesquecíveis", img: "/capa-playlist-2.jpg" },
    { title: "Rock matinal para começar bem o dia", img: "/capa-playlist-3.jpg" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="portal-container">
      
      {/* CAMADA 1: O FUNDO INFINITO (Fica lá atrás no 3D) */}
      <div className="parallax-bg">
        <video autoPlay muted loop playsInline className="video-content">
          <source src="/video-home-loop.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* CAMADA 2: O CONTEÚDO FLUTUANTE (Vem para frente) */}
      <div className="parallax-content">
        
        {/* MENU FIXO */}
        <nav className="nav-portal">
          <div className="nav-logo">
            <img src="/logo-poliva.png" alt="Pøliva Logo" />
          </div>
          <div className="nav-links">
            <a href="#" className="nav-item active">iníciø</a>
            <a href="#" className="nav-item">søbre</a>
            <a href="#" className="nav-item">shøws</a>
            <a href="#" className="nav-item">singles & álbuns</a>
            <a href="#" className="nav-item">agenda</a>
            <a href="#" className="nav-item">cøntatø</a>
          </div>
        </nav>

        <main className="main-wrapper">
          {/* HERO SECTION */}
          <section className="hero">
            <h1 className="main-title">
              Música que desperta, <br/>
              <span className="purple-gradient">Show que vira portal</span>
            </h1>

            <div className="quote-box">
              <p>&quot;A música não é apenas entretenimento; ela é portal. Não é só sobre tocar música, é sobre atravessá-la. Eu faço músicas e também canto músicas que transformam a mim e a outras pessoas&quot;</p>
              <span>— Poliva Soham</span>
            </div>
          </section>

          {/* SHOW SECTION */}
          <section className="show-section">
            <div className="glass-card">
              <h2 className="card-title">pølivessense, o show:</h2>
              <p className="card-subtitle">assista abaixo na íntegra</p>
            </div>

            <div className="video-container">
               <iframe src="https://www.youtube.com/embed/ID_DO_VIDEO" frameBorder="0" allowFullScreen></iframe>
            </div>
          </section>

          {/* PLAYLIST SECTION (PONTA A PONTA) */}
          <section className="playlist-section">
            <h3 className="section-title">playlists para as melhores ocasiões: <br/><span>o que o seu momento pede?</span></h3>
            
            <div className="dots-nav">
              {playlists.map((_, i) => (
                <div key={i} onClick={() => setCurrentIndex(i)} className={`dot ${currentIndex === i ? 'active' : ''}`} />
              ))}
            </div>

            <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}vw)` }}>
              {playlists.map((item, index) => (
                <div key={index} className="slide-item">
                  <div className="playlist-card">
                    <img src={item.img} alt={item.title} />
                    <button className="btn-ouca">OUÇA AQUI</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* RODAPÉ COMPACTO */}
          <footer className="footer-portal">
            <h4 className="footer-title">cøntatø</h4>
            <div className="footer-info">
              <p>para shøws e parcerias</p>
              <p>e-mail: contato@polivaoficial.com.br</p>
              <p>redes sociais: @polivaoficial</p>
              <p className="phone">telefone: 22 98802-3803</p>
            </div>
            <p className="copyright">pøliva© 2026. Todos os direitos reservados.</p>
          </footer>
        </main>

        {/* PLAYER FIXO */}
        <div className="fixed-player">
          <div className="player-inner">
            <div className="song-info">
              <img src="/simbolo-poliva.png" alt="Ø" />
              <div>
                <span className="song-name">depressa</span>
                <span className="release-date">pøliva • 16 de abril</span>
              </div>
            </div>
            <div className="player-meta">
               <span className="freq">432hz</span>
               <div className="symbol">ø</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* ENGENHARIA DE PROFUNDIDADE 3D */
        .portal-container {
          height: 100vh;
          overflow-x: hidden;
          overflow-y: auto;
          perspective: 2px; /* O segredo do Parallax real */
          background: black;
        }

        .parallax-bg {
          position: absolute;
          top: 0; right: 0; bottom: 0; left: 0;
          transform: translateZ(-2px) scale(2.2); /* Empurra para trás no 3D e compensa o tamanho */
          z-index: -1;
        }

        .video-content { width: 100%; height: 100%; object-fit: cover; opacity: 0.3; }
        .video-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.4); }

        .parallax-content {
          position: relative;
          z-index: 10;
          transform-style: preserve-3d;
        }

        /* ESTILO CONDÉ NAST & MINIMALISMO */
        .nav-portal {
          position: fixed; top: 0; width: 100%; height: 80px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(0,0,0,0.8); backdrop-filter: blur(15px);
          border-bottom: 1px solid rgba(255,255,255,0.05); z-index: 100;
        }
        .nav-logo { position: absolute; left: 20%; transform: translateX(-50%); }
        .nav-logo img { width: 110px; }
        .nav-links { display: flex; gap: 30px; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 600; }
        .nav-item { color: white; text-decoration: none; transition: 0.3s; border-bottom: 1px solid transparent; padding-bottom: 5px; }
        .nav-item:hover, .nav-item.active { color: #a855f7; border-bottom: 1px solid #a855f7; }

        .main-wrapper { padding-top: 150px; text-align: center; }

        .hero { margin-bottom: 120px; }
        .main-title { font-size: clamp(2.5rem, 8vw, 4.5rem); font-weight: bold; line-height: 1.1; margin-bottom: 40px; }
        .purple-gradient { color: rgba(168, 85, 247, 0.8); }
        .quote-box { 
          max-width: 650px; margin: 0 auto; text-align: left;
          font-style: italic; color: #a1a1aa; font-size: 16px; line-height: 1.6;
          border-left: 2px solid #a855f7; padding-left: 30px;
        }
        .quote-box span { display: block; font-style: normal; color: #a855f7; font-weight: bold; margin-top: 15px; letter-spacing: 0.3em; font-size: 11px; }

        .show-section { margin-bottom: 150px; padding: 0 20px; }
        .glass-card { 
          max-width: 800px; margin: 0 auto 30px; padding: 40px;
          background: rgba(255,255,255,0.03); border: 1px solid rgba(168, 85, 247, 0.2);
          border-radius: 8px; backdrop-filter: blur(5px); transition: 0.4s;
        }
        .glass-card:hover { transform: translateY(-5px); border-color: #a855f7; box-shadow: 0 15px 40px rgba(168, 85, 247, 0.1); }
        .card-title { fontSize: 26px; font-weight: bold; margin-bottom: 10px; }
        .card-subtitle { fontSize: 14px; text-transform: uppercase; color: #a855f7; letter-spacing: 0.3em; }

        .video-container { max-width: 720px; margin: 0 auto; aspect-ratio: 16/9; box-shadow: 0 0 60px rgba(0,0,0,1); }
        .video-container iframe { width: 100%; height: 100%; border-radius: 4px; }

        .playlist-section { width: 100vw; margin-bottom: 150px; overflow: hidden; }
        .section-title { font-size: 20px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 40px; }
        .section-title span { color: #a855f7; }
        
        .dots-nav { display: flex; justify-content: center; gap: 15px; margin-bottom: 30px; }
        .dot { width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.2); cursor: pointer; transition: 0.3s; }
        .dot.active { background: #a855f7; box-shadow: 0 0 10px #a855f7; }

        .slider-track { display: flex; transition: 0.8s cubic-bezier(0.23, 1, 0.32, 1); }
        .slide-item { min-width: 100vw; display: flex; justify-content: center; }
        .playlist-card { width: 280px; text-align: center; }
        .playlist-card img { width: 100%; aspect-ratio: 1/1; object-fit: cover; border-radius: 4px; border: 1px solid rgba(255,255,255,0.1); transition: 0.5s; margin-bottom: 20px; }
        .playlist-card:hover img { transform: scale(1.05); border-color: #a855f7; }
        .btn-ouca { background: transparent; border: 1px solid #a855f7; color: #a855f7; font-size: 11px; padding: 12px 24px; cursor: pointer; letter-spacing: 0.2em; transition: 0.3s; }
        .btn-ouca:hover { background: #a855f7; color: white; }

        .footer-portal { background: black; border-top: 1px solid rgba(255,255,255,0.1); padding: 80px 20px 140px; }
        .footer-title { font-size: 20px; font-weight: bold; text-transform: uppercase; margin-bottom: 20px; }
        .footer-info { line-height: 1.8; font-size: 14px; color: #a1a1aa; }
        .phone { margin-top: 15px; color: white; font-weight: bold; }
        .copyright { margin-top: 60px; font-size: 10px; color: rgba(255,255,255,0.2); }

        .fixed-player {
          position: fixed; bottom: 0; width: 100%; background: rgba(0,0,0,0.95);
          backdrop-filter: blur(20px); border-top: 1px solid rgba(255,255,255,0.05);
          padding: 15px 40px; z-index: 100;
        }
        .player-inner { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
        .song-info { display: flex; align-items: center; gap: 20px; }
        .song-info img { width: 35px; height: 35px; }
        .song-name { display: block; font-size: 11px; font-weight: bold; text-transform: lowercase; }
        .release-date { font-size: 10px; color: #71717a; }
        .player-meta { display: flex; align-items: center; gap: 25px; }
        .freq { font-size: 10px; letter-spacing: 0.3em; color: #52525b; }
        .symbol { font-size: 22px; color: #a855f7; font-weight: bold; }
      `}</style>
    </div>
  );
}