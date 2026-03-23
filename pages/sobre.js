import React, { useState } from 'react';
import Head from 'next/head';

export default function Sobre() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const marcos = [
    { text: "Destaque em festivais como o **ITAfest, eventos de motociclistas, cervejeiros, independentes e no Mercado Municipal de Niterói**;" },
    { text: "**Finalista do Festival Nacional de Composição** com a canção Há Mar;" },
    { text: "Participação no **Festival Brasil-Japão**;" },
    { text: "Contemplada pelo edital Cultura nas Redes com o projeto **360 graus com pøliva**;" },
    { text: "Participação em homenagem a **Elza Soares com cantoras de rock de todo o Brasil** pelo Pedrada TV;" },
    { text: "**Apresentações ao vivo** por diversas regiões do Brasil;" },
    { text: "Mais de **22.000 plays no YouTube** com singles autorais;" },
    { text: "Banda de **abertura do show do músico** Esteban Tavares;" }
  ];

  const renderText = (txt) => {
    const parts = txt.split('**');
    return parts.map((part, i) => i % 2 === 1 ? <strong key={i} style={{ color: '#a855f7' }}>{part}</strong> : part);
  };

  return (
    <div className="sobre-page">
      <Head>
        <title>søbre | pølivessense</title>
      </Head>

      <nav className="navbar">
        <div className="nav-container">
          <a href="/"><img src="/logo-poliva.png" alt="Logo" className="nav-logo" /></a>
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span><span></span><span></span>
          </div>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="/" className="nav-item">iníciø</a>
            <a href="/sobre" className="nav-item active-link">søbre pøliva</a>
            <a href="#" className="nav-item">shøws aø vivø</a>
            <a href="#" className="nav-item">singles & álbuns</a>
            <a href="#" className="nav-item">agenda</a>
            <a href="#" className="nav-item">cøntatø</a>
          </div>
        </div>
      </nav>

      {/* WHATSAPP GLOBAL - FIXO NO CANTO */}
      <a href="https://wa.me/SEUNUMEROAQUI" target="_blank" rel="noopener noreferrer" className="whatsapp-global">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>

      {/* CAPA AJUSTADA - center 60% */}
      <header className="sobre-capa anim-fade-in">
        <img src="/foto-sobre.jpg" alt="Pøliva Capa" className="img-full" />
      </header>

      <main className="content-wrapper">
        <section className="section-block section-text anim-fade-up">
          <p className="desc-unificada">
            pøliva é a experiência sensorial em forma de música, unindo a distorção do rock com marcações tribais na frequência musical. Entre o autoral e os clássicos que todo mundo canta junto, o show vira ritual.
          </p>
          <p className="citacao-it-unificada">
            “é intensidade, presença e catarse. é música para sentir e vibrar, não para passar batido.”
          </p>
          <p className="desc-unificada">
            com influências do rock, pop, soul e MPB, pøliva leva para suas apresentações ao vivo um setlist com a força de sua identidade autoral, dialogando com grandes hinos de refrões inesquecíveis e conduzindo o público da emoção ao épico em ondas crescentes até a catarse. Suas performances misturam intensidade, entrega e uma energia pulsante que conecta diretamente com a plateia. O resultado é uma experiência que equilibra profundidade, força e momentos coletivos de explosão e canto.
          </p>
        </section>

        <section className="section-block section-marcos anim-fade-up">
          <div className="brutal-header spacer-títulos">
            <h2>principais marcøs na carreira:</h2>
          </div>
          <p className="citacao-it-branca">"Tudo começa pela intensão do desejo. E então se cocria com o primeiro passo!"</p>
          
          <div className="sub-capa-container interactive-zoom">
            <img src="/foto-sobre2.jpg" alt="Pøliva Marcøs" className="img-sub-capa" />
          </div>

          <ul className="lista-dinamica">
            {marcos.map((marco, index) => (
              <li key={index} className="marco-item interactive-zoom">
                <span className="bullet">Ø</span>
                <p>{renderText(marco.text)}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section-block section-live anim-fade-up" style={{ paddingBottom: '220px' }}>
          <div className="brutal-header spacer-títulos">
            <h2>live sessiøn:</h2>
          </div>
          <p className="citacao-it-branca">suas músicas já alcançaram milhares de pessoas na internet</p>
          
          <div className="players-grid">
            <div className="player-box side-left interactive-zoom">
              <iframe src="https://www.youtube.com/embed/qu4wbU7hji4" frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="player-box side-right interactive-zoom">
              <iframe src="https://www.youtube.com/embed/b3tHfwI1R2k" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .sobre-page { background: black; min-height: 100vh; color: white; overflow-x: hidden; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
        
        .navbar { position: fixed; top: 0; width: 100%; background: rgba(0,0,0,0.95); padding: 25px 40px; z-index: 3000; border-bottom: 1px solid #111; }
        .nav-container { max-width: 1400px; margin: 0 auto; display: flex; justify-content: center; align-items: center; position: relative; }
        .nav-logo { width: 110px; position: absolute; left: 0; }
        .nav-links { display: flex; gap: 40px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: bold; }
        .nav-item { color: white; text-decoration: none; transition: 0.3s; }
        .nav-item:hover, .active-link { color: #a855f7 !important; }

        /* WHATSAPP */
        .whatsapp-global { position: fixed; bottom: 100px; right: 30px; z-index: 5000; transition: 0.3s; width: 50px; }
        .whatsapp-global:hover { transform: scale(1.1); filter: brightness(1.2); }

        /* CAPA center 60% */
        .sobre-capa { width: 100%; height: 65vh; overflow: hidden; margin-top: 80px; }
        .img-full { width: 100%; height: 100%; object-fit: cover; object-position: center 60%; filter: grayscale(30%); }

        .content-wrapper { max-width: 1100px; margin: 0 auto; padding: 0 20px; text-align: center; }
        .desc-unificada { font-size: 18px; line-height: 1.6; margin-bottom: 30px; font-weight: 300; color: #ccc; }
        .citacao-it-unificada { font-size: 18px; font-style: italic; color: #a855f7; margin-bottom: 30px; }
        .citacao-it-branca { font-size: 16px; font-style: italic; color: white; opacity: 0.8; margin-bottom: 60px; text-align: center; display: block; text-transform: lowercase; }

        .brutal-header h2 { font-size: 25.5px; font-weight: bold; text-transform: lowercase; color: white; }
        .spacer-títulos { margin-top: 150px; margin-bottom: 15px; }

        .sub-capa-container { width: 100%; max-width: 800px; margin: 0 auto 80px; border: 1px solid #222; overflow: hidden; }
        .img-sub-capa { width: 100%; display: block; }

        .lista-dinamica { list-style: none; max-width: 800px; margin: 0 auto 100px; text-align: left; }
        .marco-item { display: flex; gap: 20px; margin-bottom: 25px; align-items: flex-start; transition: 0.4s ease; padding: 10px; }
        .bullet { color: #a855f7; font-weight: bold; font-size: 20px; }
        .marco-item p { font-size: 17px; line-height: 1.5; color: #ccc; font-weight: 300; }
        .marco-item p strong { font-weight: 900; }

        /* PLAYERS VIDEO */
        .players-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-top: 40px; }
        .player-box { width: 100%; aspect-ratio: 16/9; background: #0a0a0a; border: 1px solid #111; overflow: hidden; transition: 0.4s ease; }
        .player-box iframe { width: 100%; height: 100%; }

        /* ANIMAÇÃO DE HOVER (IGUAL À HOME) */
        .interactive-zoom:hover { transform: scale(1.03); filter: brightness(1.2); box-shadow: 0 0 20px rgba(168, 85, 247, 0.2); }

        .hamburger { display: none; cursor: pointer; position: absolute; right: 0; }
        .hamburger span { display: block; width: 25px; height: 2px; background: white; margin: 5px 0; transition: 0.4s; }

        @media (max-width: 1024px) {
          .hamburger { display: block; }
          .nav-links { position: fixed; top: 0; right: -100%; width: 100%; height: 100vh; background: black; flex-direction: column; align-items: center; justify-content: center; transition: 0.5s; gap: 30px; }
          .nav-links.active { right: 0; }
          .players-grid { grid-template-columns: 1fr; }
          .whatsapp-global { bottom: 120px; }
        }

        .anim-fade-up { opacity: 0; transform: translateY(40px); animation: revealUp 0.8s forwards; }
        .anim-fade-in { opacity: 0; animation: fadeIn 1.5s forwards; }
        @keyframes revealUp { to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { to { opacity: 1; } }
      `}</style>
    </div>
  );
}