import React, { useState } from 'react';

export default function Inicio() {
  const playlists = [
    { title: "4 horas de música para despertar o fim de semana", img: "/capa-playlist-1.jpg" },
    { title: "Curtindo a estrada com rocks inesquecíveis", img: "/capa-playlist-2.jpg" },
    { title: "Rock matinal para começar bem o dia", img: "/capa-playlist-3.jpg" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="firewatch-wrapper">
      
      {/* CAMADA 0: O CÉU/FUNDO (INFINITO) */}
      <div className="parallax-layer layer-back">
        <video autoPlay muted loop playsInline className="video-bg">
          <source src="/video-home-loop.mp4" type="video/mp4" />
        </video>
        <div className="vignette-overlay"></div>
      </div>

      {/* CAMADA 1: O CONTEÚDO (FLUTUANTE NO MEIO) */}
      <div className="parallax-layer layer-base">
        
        {/* MENU COM 6 ABAS CORRETAS - ESTILO EDITORIAL */}
        <nav className="nav-portal">
          <div className="nav-logo">
            <img src="/logo-poliva.png" alt="Logo" />
          </div>
          <div className="nav-links">
            <a href="#" className="nav-item active">iníciø</a>
            <a href="#" className="nav-item">søbre pøliva</a>
            <a href="#" className="nav-item">shøws aø vivø</a>
            <a href="#" className="nav-item">singles & álbuns</a>
            <a href="#" className="nav-item">agenda</a>
            <a href="#" className="nav-item">cøntatø</a>
          </div>
        </nav>

        <main className="main-portal">
          
          <section className="hero">
            <h1 className="title-3d">
              Música que desperta, <br/>
              <span className="purple-glow">Show que vira portal</span>
            </h1>

            <div className="quote-portal">
              <p>&quot;A música não é apenas entretenimento; ela é portal. Não é só sobre tocar música, é sobre atravessá-la. Eu faço músicas e também canto músicas que transformam a mim e a outras pessoas&quot;</p>
              <span className="author">— Poliva Soham</span>
            </div>
          </section>

          <section className="showcase">
            <div className="glass-box-portal">
              <h2 className="box-title">pølivessense, o show:</h2>
              <p className="box-subtitle">assista abaixo na íntegra</p>
            </div>
            <div className="player-3d">
               <iframe src="https://www.youtube.com/embed/ID_DO_VIDEO" frameBorder="0" allowFullScreen></iframe>
            </div>
          </section>

          <section className="playlists-portal">
            <div className="playlist-text">
               <h3>playlists para as melhores ocasiões:</h3>
               <p className="accent">o que o seu momento pede?</p>
            </div>

            <div className="dots-nav">
              {playlists.map((_, i) => (
                <button key={i} onClick={() => setCurrentIndex(i)} className={currentIndex === i ? 'dot active' : 'dot'} />
              ))}
            </div>

            <div className="slider-portal" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {playlists.map((item, index) => (
                <div key={index} className="slide-unit">
                  <div className="card-mini">
                    <img src={item.img} alt={item.title} />
                    <button className="btn-portal">OUÇA AQUI</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <footer className="footer-portal">
             <h4 className="footer-header">cøntatø</h4>
             <div className="footer-body">
                <p>para shøws e parcerias</p>
                <p>e-mail: contato@polivaoficial.com.br</p>
                <p>redes sociais: @polivaoficial</p>
                <p className="phone">telefone: 22 98802-3803</p>
             </div>
             <p className="rights">pøliva© 2026. Todos os direitos reservados.</p>
          </footer>
        </main>

        {/* PLAYER FIXO */}
        <div className="player-bar-fixed">
          <div className="p-inner">
            <div className="p-song">
              <img src="/simbolo-poliva.png" alt="Ø" />
              <div>
                <strong>depressa</strong>
                <small>pøliva • 16 de abril</small>
              </div>
            </div>
            <div className="p-meta">
               <span>432hz</span>
               <div className="p-icon">ø</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* O MOTOR 3D ESTILO FIREWATCH */
        .firewatch-wrapper {
          height: 100vh;
          overflow-x: hidden;
          overflow-y: auto;
          perspective: 10px; /* Profundidade do Portal */
          background: #000;
        }

        .parallax-layer {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
        }

        /* Camada do Fundo (Vídeo) - Fica longe e escala */
        .layer-back {
          transform: translateZ(-10px) scale(2.1);
          z-index: 1;
        }

        /* Camada Base (Conteúdo) - Fica no plano frontal */
        .layer-base {
          transform: translateZ(0);
          z-index: 2;
          display: flex;
          flex-direction: column;
        }

        .video-bg { width: 100%; height: 100%; object-fit: cover; opacity: 0.3; }
        .vignette-overlay { position: absolute; inset: 0; background: radial-gradient(circle, transparent 20%, black 100%); }

        /* NAV EDITORIAL */
        .nav-portal { position: fixed; top: 0; width: 100%; height: 100px; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.8); backdrop-filter: blur(20px); z-index: 1000; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .nav-logo { position: absolute; left: 20%; transform: translateX(-50%); }
        .nav-logo img { width: 110px; }
        .nav-links { display: flex; gap: 40px; font-size: 11px; letter-spacing: 0.25em; text-transform: uppercase; font-weight: 700; }
        .nav-item { color: #fff; text-decoration: none; transition: 0.4s; padding-bottom: 8px; border-bottom: 2px solid transparent; }
        .nav-item:hover, .nav-item.active { color: #a855f7; border-bottom-color: #a855f7; }

        /* MAIN */
        .main-portal { padding-top: 250px; text-align: center; }
        .hero { margin-bottom: 150px; padding: 0 20px; }
        .title-3d { font-size: clamp(3rem, 10vw, 5.5rem); font-weight: 900; line-height: 1; letter-spacing: -0.05em; margin-bottom: 50px; }
        .purple-glow { color: #a855f7; text-shadow: 0 0 30px rgba(168,85,247,0.3); }
        .quote-portal { max-width: 700px; margin: 0 auto; text-align: left; border-left: 3px solid #a855f7; padding-left: 40px; font-style: italic; color: #ccc; font-size: 18px; line-height: 1.8; }
        .author { display: block; font-style: normal; color: #a855f7; font-weight: bold; margin-top: 20px; letter-spacing: 0.4em; font-size: 12px; }

        /* SHOWCASE BOX */
        .showcase { margin-bottom: 200px; padding: 0 20px; }
        .glass-box-portal { max-width: 850px; margin: 0 auto 40px; padding: 60px; background: rgba(255,255,255,0.02); border: 1px solid rgba(168,85,247,0.2); border-radius: 4px; backdrop-filter: blur(10px); transition: 0.5s cubic-bezier(0.2, 1, 0.3, 1); }
        .glass-box-portal:hover { transform: translateY(-10px) scale(1.02); border-color: #a855f7; background: rgba(168,85,247,0.05); }
        .box-title { font-size: 28px; font-weight: bold; margin-bottom: 15px; }
        .box-subtitle { font-size: 14px; text-transform: uppercase; color: #a855f7; letter-spacing: 0.5em; }
        .player-3d { max-width: 612px; margin: 0 auto; aspect-ratio: 16/9; box-shadow: 0 50px 100px -20px rgba(0,0,0,1); }
        .player-3d iframe { width: 100%; height: 100%; border-radius: 2px; }

        /* PLAYLISTS SLIDER */
        .playlists-portal { width: 100%; overflow: hidden; margin-bottom: 200px; }
        .playlist-text { margin-bottom: 60px; }
        .playlist-text h3 { font-size: 22px; text-transform: uppercase; letter-spacing: 0.2em; font-weight: 800; }
        .accent { font-size: 20px; color: #a855f7; margin-top: 10px; }
        .dots-nav { display: flex; justify-content: center; gap: 20px; margin-bottom: 50px; }
        .dot { width: 12px; height: 12px; border-radius: 50%; background: #333; border: none; cursor: pointer; transition: 0.4s; }
        .dot.active { background: #a855f7; transform: scale(1.3); box-shadow: 0 0 15px #a855f7; }
        .slider-portal { display: flex; transition: 1s cubic-bezier(0.2, 1, 0.2, 1); }
        .slide-unit { min-width: 100%; display: flex; justify-content: center; }
        .card-mini { width: 182px; text-align: center; }
        .card-mini img { width: 100%; aspect-ratio: 1/1; object-fit: cover; border: 1px solid rgba(255,255,255,0.1); margin-bottom: 30px; transition: 0.6s; }
        .card-mini:hover img { transform: rotate(-2deg) scale(1.05); border-color: #a855f7; }
        .btn-portal { background: none; border: 1px solid #a855f7; color: #a855f7; font-size: 11px; padding: 12px 25px; cursor: pointer; letter-spacing: 0.3em; font-weight: 700; transition: 0.3s; }
        .btn-portal:hover { background: #a855f7; color: #fff; }

        /* FOOTER */
        .footer-portal { background: #000; border-top: 1px solid rgba(255,255,255,0.05); padding: 100px 20px 180px; }
        .footer-header { font-size: 24px; font-weight: 900; text-transform: uppercase; margin-bottom: 30px; letter-spacing: 0.1em; }
        .footer-body { font-size: 15px; color: #999; line-height: 2; }
        .phone { color: #fff; font-weight: 800; margin-top: 20px; font-size: 18px; }
        .rights { margin-top: 80px; font-size: 11px; color: #444; letter-spacing: 0.1em; }

        /* PLAYER FIXO */
        .player-bar-fixed { position: fixed; bottom: 0; width: 100%; height: 85px; background: rgba(0,0,0,0.95); backdrop-filter: blur(30px); border-top: 1px solid rgba(255,255,255,0.05); z-index: 2000; display: flex; align-items: center; padding: 0 50px; }
        .p-inner { width: 100%; max-width: 1400px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
        .p-song { display: flex; align-items: center; gap: 20px; }
        .p-song img { width: 45px; height: 45px; }
        .p-song strong { display: block; font-size: 13px; text-transform: lowercase; }
        .p-song small { color: #666; font-size: 11px; }
        .p-meta { display: flex; align-items: center; gap: 30px; }
        .p-meta span { font-size: 11px; color: #444; letter-spacing: 0.2em; }
        .p-icon { font-size: 26px; color: #a855f7; font-weight: 900; }
      `}</style>
    </div>
  );
}