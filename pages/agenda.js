import React, { useState } from 'react';
import Head from 'next/head';

export default function Agenda() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="agenda-page">
      <Head>
        <title>agenda | pølivessense</title>
      </Head>

      <nav className="navbar">
        <div className="nav-container">
          <img src="/logo-poliva.png" alt="Logo" className="nav-logo" />
          
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span><span></span><span></span>
          </div>

          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="/" className="nav-item" onClick={() => setIsMenuOpen(false)}>iníciø</a>
            <a href="/sobre" className="nav-item" onClick={() => setIsMenuOpen(false)}>søbre pøliva</a>
            <a href="/shows-ao-vivo" className="nav-item" onClick={() => setIsMenuOpen(false)}>shøws aø vivø</a>
            <a href="/singles" className="nav-item" onClick={() => setIsMenuOpen(false)}>singles & álbuns</a>
            <a href="/agenda" className="nav-item active-link" onClick={() => setIsMenuOpen(false)}>agenda</a>
            <a href="/contato" className="nav-item" onClick={() => setIsMenuOpen(false)}>cøntatø</a>
          </div>
        </div>
      </nav>

      {/* WHATSAPP */}
      <a href="https://wa.me/message/L5OXQTU6PDIFF1" target="_blank" rel="noopener noreferrer" className="wa-global interactive-zoom">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>

      {/* CAPA - ENQUADRAMENTO 45% */}
      <header className="agenda-capa anim-fade-in">
        <img src="/publico-show.jpg" alt="Público Pøliva" className="img-full" />
      </header>

      <main className="content-wrapper">
        <section className="section-block anim-fade-up">
          {/* TÍTULO NO PADRÃO SOBRE */}
          <div className="brutal-header center spacer-void">
            <h2>pølivessense, o show - turnê 2026</h2>
          </div>
          
          {/* IMAGEM PEQUENA ARREDONDADA */}
          <div className="show-image-container center">
            <img 
              src="/quadrado-show.png" 
              alt="Show Turnê 2026" 
              className="show-thumb interactive-zoom" 
            />
          </div>
          
          {/* PALAVRA ATUALIZANDO EM ITÁLICO - FORÇANDO VISIBILIDADE */}
          <p className="atualizando-text">
            <em>atualizando...</em>
          </p>
        </section>
      </main>

      <style jsx>{`
        .agenda-page { background: black; min-height: 100vh; color: white; overflow-x: hidden; position: relative; z-index: 1; }
        .agenda-page::before {
          content: ""; position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          background-image: url('/patterns_poliva_simbolos-07.jpg');
          background-size: cover; background-position: center; opacity: 0.1; z-index: -1;
        }

        .navbar { position: fixed; top: 0; width: 100%; background: rgba(0,0,0,0.95); padding: 25px 40px; z-index: 4000; border-bottom: 1px solid #111; }
        .nav-container { max-width: 1400px; margin: 0 auto; display: flex; justify-content: center; align-items: center; position: relative; min-height: 50px; }
        .nav-logo { width: 110px; position: absolute; left: 0; }
        .nav-links { display: flex; gap: 40px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: bold; }
        .nav-item { color: white; text-decoration: none; transition: 0.3s ease; cursor: pointer; }
        .nav-item:hover, .active-link { color: #a855f7 !important; }

        .wa-global { position: fixed; bottom: 120px; right: 30px; z-index: 5000; width: 50px; }

        .agenda-capa { width: 100%; height: 65vh; overflow: hidden; margin-top: 80px; }
        .img-full { width: 100%; height: 100%; object-fit: cover; object-position: center 45%; filter: grayscale(20%); }

        .content-wrapper { max-width: 1000px; margin: 0 auto; padding: 0 20px; }
        
        /* TÍTULO PADRÃO SOBRE */
        .brutal-header h2 { font-size: 32px; font-weight: bold; text-transform: lowercase; color: white; text-align: center; }
        .spacer-void { margin-top: 100px; margin-bottom: 40px; }

        .center { text-align: center; display: flex; flex-direction: column; align-items: center; }

        /* ESTILO DA IMAGEM PEQUENA ARREDONDADA */
        .show-image-container { width: 100%; margin-bottom: 20px; }
        .show-thumb { 
          width: 300px; 
          max-width: 85%;
          height: auto; 
          border-radius: 20px; 
          box-shadow: 0 15px 40px rgba(0,0,0,0.6);
          transition: 0.4s ease;
          display: block;
        }

        /* TEXTO ATUALIZANDO - GARANTINDO CONTRASTE */
        .atualizando-text { 
          font-size: 18px; 
          color: #ffffff; 
          opacity: 1; 
          text-align: center; 
          font-weight: normal;
          margin-top: 15px;
          letter-spacing: 0.05em;
        }

        .hamburger { display: none; cursor: pointer; z-index: 6000; position: absolute; right: 0; width: 30px; height: 25px; }
        .hamburger span { display: block; width: 100%; height: 2px; background: white; margin: 6px 0; transition: 0.4s; }

        .interactive-zoom:hover { transform: scale(1.03); filter: brightness(1.1); transition: 0.4s; }

        @media (max-width: 1024px) {
          .hamburger { display: block; }
          .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 6px); }
          .hamburger.open span:nth-child(2) { opacity: 0; }
          .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -6px); }
          .nav-links { position: fixed; top: 0; right: -100%; width: 100%; height: 100vh; background: black; flex-direction: column; align-items: center; justify-content: center; transition: 0.5s; z-index: 5500; }
          .nav-links.active { right: 0; }
          .agenda-capa { height: 50vh; }
          .show-thumb { width: 250px; }
          .brutal-header h2 { font-size: 26px; }
          .atualizando-text { font-size: 16px; }
        }

        .anim-fade-up { opacity: 0; transform: translateY(30px); animation: revealUp 0.6s forwards; }
        .anim-fade-in { opacity: 0; animation: fadeIn 1.2s forwards; }
        @keyframes revealUp { to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { to { opacity: 1; } }
      `}</style>
    </div>
  );
}