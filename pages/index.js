import React, { useState, useEffect } from 'react';

export default function Inicio() {
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const playlists = [
    { title: "4 horas de música para despertar o fim de semana", img: "/capa-playlist-1.jpg", link: "SEU_LINK_AQUI" },
    { title: "curtindo a estrada com rocks inesquecíveis", img: "/capa-playlist-2.jpg", link: "SEU_LINK_AQUI" },
    { title: "rock matinal para começar bem o dia", img: "/capa-playlist-3.jpg", link: "SEU_LINK_AQUI" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % playlists.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [playlists.length]);

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', overflowX: 'hidden', fontFamily: "'Avant Garde', sans-serif" }}>
      
      {loading && (
        <div className="preloader">
          <div className="pulse-symbol">ø</div>
        </div>
      )}

      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }}>
          <source src="/video-home-loop.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, transparent 20%, black 120%)' }}></div>
      </div>

      <div style={{ position: 'relative', zIndex: 10, opacity: loading ? 0 : 1, transition: 'opacity 1s ease-in-out' }}>
        
        <nav style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(15px)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '20px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
          <div style={{ position: 'absolute', left: '20%', transform: 'translateX(-50%)' }}>
            <img src="/logo-poliva.png" alt="Logo" style={{ width: '110px' }} />
          </div>
          <div className="nav-links">
            <a href="#">iníciø</a>
            <a href="#">søbre pøliva</a>
            <a href="#">shøws aø vivø</a>
            <a href="#">singles & álbuns</a>
            <a href="#">agenda</a>
            <a href="#">cøntatø</a>
          </div>
        </nav>

        <main style={{ paddingTop: '220px', textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          
          <section style={{ marginBottom: '100px', padding: '0 20px' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 'bold', lineHeight: '1.1', marginBottom: '40px', letterSpacing: '-0.02em' }}>
              música que desperta, <br/>
              <span style={{ color: '#a855f7' }}>show que vira portal</span>
            </h1>
            <div className="quote-box">
              <p>&quot;a música não é apenas entretenimento; ela é portal. não é só sobre tocar música, é sobre atravessá-la. eu faço músicas e também canto músicas que transformam a mim e a outras pessoas&quot;</p>
              <span className="quote-author">— poliva soham</span>
            </div>
          </section>

          {/* CAIXA DO SHOW - ENCAIXADA E COMPACTA */}
          <section style={{ marginBottom: '100px', padding: '0 20px' }}>
            <div className="portal-card">
              <h2 className="title-low">pølivessense, o show:</h2>
              <p className="subtitle-bold">assista abaixo na íntegra</p>
            </div>
            {/* VÍDEO REDUZIDO EM 40% (maxWidth 380px) */}
            <div className="video-wrapper">
               <iframe src="https://www.youtube.com/embed/ID_DO_VIDEO" frameBorder="0" allowFullScreen></iframe>
            </div>
          </section>

          {/* CARROSSEL PLAYLISTS - ENCAIXADA E COMPACTA */}
          <section style={{ marginBottom: '150px' }}>
             <div className="portal-card" style={{ marginBottom: '40px' }}>
                <h3 className="title-low">playlists para as melhores ocasiões:</h3>
                <p className="subtitle-bold">o que o seu momento pede?</p>
             </div>

             <div className="slider-container">
                <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                  {playlists.map((item, index) => (
                    <div key={index} className="slide-item">
                      <div className="playlist-card">
                         <img src={item.img} alt={item.title} />
                         {/* BOTÃO +15% MAIOR */}
                         <button className="btn-ouca" onClick={() => window.open(item.link, '_blank')}>ouça aqui</button>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </section>
        </main>

        {/* RODAPÉ PRETO ABSOLUTO E COMPACTO */}
        <footer className="footer">
          <h4 className="footer-title">cøntatø</h4>
          <p>para shøws e parcerias</p>
          <p>e-mail: contato@polivaoficial.com.br</p>
          <p>redes sociais: @polivaoficial</p>
          <p className="phone">telefone: 22 98802-3803</p>
          <p className="copyright">pøliva© 2026. todos os direitos reservados.</p>
        </footer>

        <div className="fixed-player">
          <div className="player-inner">
            <div className="song-data">
              <img src="/simbolo-poliva.png" alt="Ø" />
              <div>
                <strong>depressa</strong>
                <small>pøliva • 16 de abril</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .preloader { position: fixed; inset: 0; background: black; z-index: 1000; display: flex; align-items: center; justify-content: center; }
        .pulse-symbol { font-size: 80px; color: #a855f7; font-weight: bold; animation: pulse 1.5s infinite ease-in-out; }
        @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 0.5; } 50% { transform: scale(1.2); opacity: 1; } }

        .portal-card { 
          display: inline-block; /* Faz o quadrado se ajustar ao texto */
          padding: 12px 25px; 
          background: rgba(255,255,255,0.03); border: 1px solid rgba(168, 85, 247, 0.3); 
          border-radius: 4px; backdrop-filter: blur(10px); 
          margin-bottom: 25px;
        }
        .title-low { font-size: 24px; text-transform: lowercase; font-weight: 300; margin: 0; line-height: 1.1; }
        .subtitle-bold { font-size: 18px; text-transform: lowercase; font-weight: bold; margin: 2px 0 0; color: #a855f7; line-height: 1.1; }

        .video-wrapper { width: 100%; maxWidth: 380px; margin: 0 auto; aspect-ratio: 16/9; box-shadow: 0 30px 60px rgba(0,0,0,0.8); }
        .video-wrapper iframe { width: 100%; height: 100%; border-radius: 2px; }

        .slider-container { width: 100%; overflow: hidden; }
        .slider-track { display: flex; transition: 0.8s cubic-bezier(0.23, 1, 0.32, 1); }
        .slide-item { min-width: 100%; display: flex; justify-content: center; }
        .playlist-card { width: 320px; text-align: center; }
        .playlist-card img { width: 100%; aspect-ratio: 1/1; object-fit: cover; border-radius: 4px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05); }

        .nav-links { display: flex; gap: 30px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; font-weight: 600; }
        .nav-links a { color: white; text-decoration: none; transition: 0.3s; }
        .nav-links a:hover { color: #a855f7; }

        .quote-box { maxWidth: 650px; margin: 0 auto; text-align: left; border-left: 2px solid #a855f7; padding-left: 30px; font-style: italic; color: #a1a1aa; font-size: 17px; line-height: 1.7; }
        .quote-author { display: block; font-style: normal; color: #a855f7; font-weight: bold; margin-top: 20px; letter-spacing: 0.4em; font-size: 11px; text-transform: uppercase; }

        /* BOTÃO +15% E AJUSTADO */
        .btn-ouca { background: none; border: 1px solid #a855f7; color: #a855f7; font-size: 13px; padding: 14px 28px; cursor: pointer; letter-spacing: 0.2em; font-weight: bold; text-transform: lowercase; transition: 0.3s; }
        .btn-ouca:hover { background: #a855f7; color: white; }
        
        /* RODAPÉ PRETO E COMPACTO */
        .footer { background: black; padding: 40px 20px 100px; text-align: center; border-top: 1px solid rgba(255,255,255,0.05); position: relative; z-index: 10; }
        .footer-title { font-size: 18px; font-weight: bold; text-transform: uppercase; margin-bottom: 10px; }
        .phone { font-weight: bold; margin-top: 10px; font-size: 15px; }
        .copyright { font-size: 10px; color: rgba(255,255,255,0.3); margin-top: 40px; }

        .fixed-player { position: fixed; bottom: 0; width: 100%; z-index: 100; background: rgba(0,0,0,0.98); backdrop-filter: blur(20px); border-top: 1px solid rgba(255,255,255,0.05); padding: 12px 40px; }
        .player-inner { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; }
        .song-data { display: flex; align-items: center; gap: 20px; }
        .song-data img { width: 35px; height: 35px; }
        .song-data strong { font-size: 12px; display: block; text-transform: lowercase; }
        .song-data small { font-size: 10px; color: #71717a; }
      `}</style>
    </div>
  );
}