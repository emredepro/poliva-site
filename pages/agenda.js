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

      {/* CAPA COM ENQUADRAMENTO EM 45% */}
      <header className="agenda-capa anim-fade-in">
        <img src="/publico-show.JPG" alt="Público Pøliva" className="img-full" />
      </header>

      <main className="content-wrapper">
        <section className="section-block anim-fade-up">
          <div className="brutal-header center spacer-void">
            <h2>Atualizando</h2>
          </div>
          
          {/* MAPA INTERATIVO COM CAMADAS SEPARADAS */}
          <div className="mapa-sudeste-stack">
            <img src="/sp.png" alt="São Paulo" className="estado-item" />
            <img src="/rj.png" alt="Rio de Janeiro" className="estado-item" />
            <img src="/mg.png" alt="Minas Gerais" className="estado-item" />
            <img src="/es.png" alt="Espírito Santo" className="estado-item" />
          </div>
          
          <p className="citacao-it-branca" style={{ marginTop: '80px' }}>
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
        .nav-item { color: white; text-decoration: none; transition: 0.3s ease; cursor: pointer; }
        .nav-item:hover, .active-link { color: #a855f7 !important; }

        /* CAPA AJUSTADA PARA 45% */
        .agenda-capa { width: 100%; height: 65vh; overflow: hidden; margin-top: 80px; }
        .img-full { width: 100%; height: 100%; object-fit: cover; object-position: center 45%; filter: grayscale(20%); }

        .content-wrapper { max-width: 1000px; margin: 0 auto; padding: 0 20px; }
        .brutal-header h2 { font-size: 25.5px; font-weight: bold; text-transform: lowercase; color: white; text-align: center; }
        .spacer-void { margin-top: 100px; margin-bottom: 80px; }

        /* ESTRUTURA DO MAPA EM CAMADAS */
        .mapa-sudeste-stack {
          position: relative;
          width: 100%;
          max-width: 500px; /* Ajuste conforme o tamanho das suas imagens */
          margin: 0 auto;
          aspect-ratio: 1 / 1; /* Mantém o container quadrado para as camadas */
        }

        .estado-item {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: auto;
          filter: grayscale(100%) brightness(0.5);
          transition: 0.5s ease;
          cursor: pointer;
          -webkit-user-drag: none;
        }

        /* EFEITO INDIVIDUAL: O ESTADO SOB O MOUSE ACENDE */
        .estado-item:hover {
          filter: grayscale(0%) brightness(1.2) drop-shadow(0 0 15px rgba(168, 85, 247, 0.8));
          z-index: 10;
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
          
          /* No mobile, o hover é menos comum, então deixamos um brilho leve padrão ou via toque */
          .estado-item { filter: grayscale(30%) brightness(0.8); }
        }

        .anim-fade-up { opacity: 0; transform: translateY(30px); animation: revealUp 0.6s forwards; }
        .anim-fade-in { opacity: 0; animation: fadeIn 1.2s forwards; }
        @keyframes revealUp { to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { to { opacity: 1; } }
      `}</style>
    </div>
  );
}