import React, { useState } from 'react';
import Head from 'next/head';

export default function Contato() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="contato-page">
      <Head>
        <title>cøntatø | pølivessense</title>
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
            <a href="/agenda" className="nav-item" onClick={() => setIsMenuOpen(false)}>agenda</a>
            <a href="/contato" className="nav-item active-link" onClick={() => setIsMenuOpen(false)}>cøntatø</a>
          </div>
        </div>
      </nav>

      {/* WHATSAPP GLOBAL */}
      <a href="https://wa.me/message/L5OXQTU6PDIFF1" target="_blank" rel="noopener noreferrer" className="wa-global interactive-zoom">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>

      {/* CAPA PADRONIZADA 65VH - BLINDAGEM DE EXTENSÃO */}
      <header className="contato-capa anim-fade-in">
        <img 
          src="/ao-vivo-show.jpg" 
          alt="Pøliva ao vivo" 
          className="img-full" 
          onError={(e) => { e.target.src = "/ao-vivo-show.JPG" }} // Fallback se falhar minúsculo
        />
      </header>

      <main className="content-wrapper">
        <section className="section-block anim-fade-up">
          <div className="brutal-header center spacer-void">
            <h2>para shøws e parcerias</h2>
          </div>

          <div className="form-container">
            {/* ID DO FORMSPREE INTEGRADO: mwvwevqp */}
            <form action="https://formspree.io/f/mwvwevqp" method="POST" className="contato-form">
              <div className="form-row">
                <input type="text" name="nome" placeholder="nome" required />
                <input type="text" name="sobrenome" placeholder="sobrenome" required />
              </div>
              
              <div className="form-row">
                <input type="email" name="_replyto" placeholder="e-mail" required />
                <input type="tel" name="telefone" placeholder="telefone" required />
              </div>

              <textarea 
                name="mensagem" 
                placeholder="sua mensagem (máx. 1000 caracteres)" 
                maxLength="1000" 
                required
              ></textarea>

              <button type="submit" className="enviar-btn">enviar portal</button>
            </form>
          </div>
        </section>
      </main>

      {/* RODAPÉ PADRÃO */}
      <footer className="footer-black">
        <div className="footer-content anim-fade-up">
          <h4 className="footer-heading">cøntatø</h4>
          <div className="footer-details">
            <p>para shøws e parcerias</p>
            <p>e-mail: contato@polivaoficial.com.br</p>
            <p>redes sociais: @polivaoficial</p>
            <p className="phone-line">telefone: 22 98802-3803</p>
          </div>
          <p className="copyright-line">pøliva© 2026. tødøs øs direitøs reservadøs.</p>
        </div>
      </footer>

      <style jsx>{`
        .contato-page { background: black; min-height: 100vh; color: white; overflow-x: hidden; position: relative; z-index: 1; }
        .contato-page::before {
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

        .contato-capa { width: 100%; height: 65vh; overflow: hidden; margin-top: 80px; border-bottom: 1px solid #111; }
        .img-full { width: 100%; height: 100%; object-fit: cover; object-position: center center; filter: grayscale(20%); }

        .content-wrapper { max-width: 1000px; margin: 0 auto; padding: 0 20px; }
        .brutal-header h2 { font-size: 25.5px; font-weight: bold; text-transform: lowercase; color: white; text-align: center; }
        .spacer-void { margin-top: 100px; margin-bottom: 60px; }

        .form-container { max-width: 800px; margin: 0 auto 120px; }
        .contato-form { display: flex; flex-direction: column; gap: 20px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        
        input, textarea {
          background: rgba(255,255,255,0.03);
          border: 1px solid #222;
          padding: 18px;
          color: white;
          font-family: inherit;
          font-size: 14px;
          transition: 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          outline: none;
        }

        input:focus, textarea:focus { border-color: #a855f7; background: rgba(168, 85, 247, 0.05); }
        textarea { height: 220px; resize: none; }

        .enviar-btn {
          background: none;
          border: 1px solid #a855f7;
          color: #a855f7;
          padding: 18px;
          font-weight: bold;
          text-transform: lowercase;
          cursor: pointer;
          transition: 0.5s;
          margin-top: 10px;
        }

        .enviar-btn:hover { background: #a855f7; color: black; box-shadow: 0 0 30px rgba(168, 85, 247, 0.5); }

        .footer-black { background: black; border-top: 1px solid #111; padding: 80px 20px 120px; text-align: center; margin-top: 50px; }
        .footer-heading { font-size: 22px; font-weight: bold; text-transform: uppercase; margin-bottom: 25px; letter-spacing: 0.2em; }
        .footer-details p { font-size: 13px; opacity: 0.7; margin: 8px 0; text-transform: lowercase; }
        .copyright-line { margin-top: 50px; font-size: 10px; color: #444; }

        .hamburger { display: none; cursor: pointer; z-index: 6000; position: absolute; right: 0; width: 30px; height: 25px; }
        .hamburger span { display: block; width: 100%; height: 2px; background: white; margin: 6px 0; transition: 0.4s; }

        @media (max-width: 1024px) {
          .hamburger { display: block; }
          .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 6px); }
          .hamburger.open span:nth-child(2) { opacity: 0; }
          .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -6px); }
          .nav-links { position: fixed; top: 0; right: -100%; width: 100%; height: 100vh; background: black; flex-direction: column; align-items: center; justify-content: center; transition: 0.5s; z-index: 5500; }
          .nav-links.active { right: 0; }
          .form-row { grid-template-columns: 1fr; }
          .contato-capa { height: 50vh; }
        }

        .anim-fade-up { opacity: 0; transform: translateY(30px); animation: revealUp 0.8s forwards; }
        .anim-fade-in { opacity: 0; animation: fadeIn 1.2s forwards; }
        @keyframes revealUp { to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { to { opacity: 1; } }
        .interactive-zoom:hover { transform: scale(1.05); filter: brightness(1.2); transition: 0.4s; }
      `}</style>
    </div>
  );
}