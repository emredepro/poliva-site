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
            <a href="/" className="nav-item">iníciø</a>
            <a href="/sobre" className="nav-item">søbre pøliva</a>
            <a href="/shows-ao-vivo" className="nav-item">shøws aø vivø</a>
            <a href="/singles" className="nav-item">singles & álbuns</a>
            <a href="/agenda" className="nav-item active-link">agenda</a>
            <a href="#" className="nav-item">cøntatø</a>
          </div>
        </div>
      </nav>

      {/* CAPA PADRONIZADA 65VH / CROP 60% */}
      <header className="agenda-capa anim-fade-in">
        <img src="/publico-show.JPG" alt="Público Pøliva" className="img-full" />
      </header>

      <main className="content-wrapper">
        <section className="section-block anim-fade-up">
          <div className="brutal-header center spacer-void">
            <h2>Atualizando</h2>
          </div>
          
          {/* MAPA INTERATIVO SUDESTE */}
          <div className="mapa-container interactive-zoom">
            <img 
              src="/mapa-sudeste.png" 
              alt="Mapa Brasil Sudeste" 
              className="mapa-imagem" 
            />
            <div className="mapa-overlay"></div>
          </div>
          
          <p className="citacao-it-branca" style={{ marginTop: '40px' }}>
            novos portais se abrindo em breve.
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
        .nav-item { color: white; text-decoration: none; transition: 0.3s ease; }
        .nav-item:hover, .active-link { color: #a855f7 !important; }

        .agenda-capa { width: 100%; height: 65vh; overflow: hidden; margin-top: 80px; }
        .img-full { width: 100%; height: 100%; object-fit: cover; object-position: center 60%; filter: grayscale(20%); }

        .content-wrapper { max-width: 1000px; margin: 0 auto; padding: 0 20px; }
        .brutal-header h2 { font-size: 25.5px; font-weight: bold; text-transform: lowercase; color: white; text-align: center; }
        .spacer-void { margin-top: 80px; margin-bottom: 60px; }

        /* LOGICA DO MAPA */
        .mapa-container { 
          width: 100%; max-width: 700px; margin: 0 auto; 
          position: relative; cursor: pointer;
          transition: 0.5s ease;
        }
        .mapa-imagem { 
          width: 100%; height: auto; 
          filter: grayscale(100%) opacity(0.5); 
          transition: 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mapa-container:hover .mapa-imagem { 
          filter: grayscale(0%) opacity(1) drop-shadow(0 0 15px rgba(168, 85, 247, 0.4)); 
          transform: scale(1.02);
        }

        .citacao-it-branca { font-size: 15px; font-style: italic; color: white; opacity: 0.7; text-align: center; display: block; }

        .hamburger { display: none; cursor: pointer; z-index: 6000; position: absolute; right: 0; width: 30px; height: 25px; }
        .hamburger span { display: block; width: 100%; height: 2px; background: white; margin: 6px 0; transition: 0.4s; }

        @media (max-width: 1024px) {
          .hamburger { display: block; }
          .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 6px); }
          .hamburger.open span:nth-child(2) { opacity: 0; }
          .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -6px); }
          .nav-links { 
            position: fixed; top: 0; right: -100%; width: 100%; height: 100vh; 
            background: black; flex-direction: column; align-items: center; 
            justify-content: center; transition: 0.5s; z-index: 5500;
          }
          .nav-links.active { right: 0; }
          .agenda-capa { height: 50vh; }
        }

        .anim-fade-up { opacity: 0; transform: translateY(30px); animation: revealUp 0.6s forwards; }
        .anim-fade-in { opacity: 0; animation: fadeIn 1.2s forwards; }
        @keyframes revealUp { to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { to { opacity: 1; } }
      `}</style>
    </div>
  );
}