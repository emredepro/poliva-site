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
          <img src="/logo-poliva.png" alt="Logo" className="nav-logo" />
          
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span><span></span><span></span>
          </div>

          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="/" className="nav-item">iníciø</a>
            <a href="/sobre" className="nav-item active-link">søbre pøliva</a>
            <a href="/shows" className="nav-item">shøws aø vivø</a>
            {/* ATUALIZADO: LINK PARA /singles */}
            <a href="/singles" className="nav-item">singles & álbuns</a>
            <a href="#" className="nav-item">agenda</a>
            <a href="#" className="nav-item">cøntatø</a>
          </div>
        </div>
      </nav>

      <a href="https://wa.me/message/L5OXQTU6PDIFF1" target="_blank" rel="noopener noreferrer" className="wa-global interactive-zoom">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>

      <header className="sobre-capa anim-fade-in">
        <img src="/foto-sobre.jpg" alt="Pøliva Capa" className="img-full" />
      </header>

      <main className="content-wrapper">
        <section className="section-text anim-fade-up">
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

        <section className="section-block anim-fade-up">
          <div className="brutal-header spacer-vøid">
            <h2>principais marcøs na carreira:</h2>
          </div>
          <p className="citacao-it-branca">"tudo começa pela intensão do desejo. e então se cocria com o primeiro passo!"</p>
          
          <div className="sub-capa-container interactive-zoom">
            <img src="/foto-sobre2.jpg" alt="Sub Capa" className="img-sub-capa" />
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

        <section className="section-block anim-fade-up" style={{ paddingBottom: '200px' }}>
          <div className="brutal-header spacer-vøid">
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
        .sobre-page { 
          background: black; 
          min-height: 100vh; 
          color: white; 
          overflow-x: hidden; 
          position: relative;
          z-index: 1;
        }

        /* TEXTURA DE FUNDØ 0.1 */
        .sobre-page::before {
          content: "";
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          background-image: url('/patterns_poliva_simbolos-07.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          opacity: 0.1;
          z-index: -1;
          filter: grayscale(100%);
        }

        .navbar { position: fixed; top: 0; width: 100%; background: rgba(0,0,0,0.95); padding: 25px 40px; z-index: 3000; border-bottom: 1px solid #111; }
        .nav-container { max-width: 1400px; margin: 0 auto; display: flex; justify-content: center; align-items: center; position: relative; min-height: 50px; }
        .nav-logo { width: 110px; position: absolute; left: 0; }
        .nav-links { display: flex; gap: 40px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: bold; }
        .nav-item { color: white; text-decoration: none; transition: 0.3s ease; cursor: pointer; }
        .nav-item:hover, .active-link { color: #a855f7 !important; }

        .wa-global { position: fixed; bottom: 120px; right: 30px; z-index: 5000; width: 50px; }

        .sobre-capa { width: 100%; height: 65vh; overflow: hidden; margin-top: 80px; margin-bottom: 50px; }
        .img-full { width: 100%; height: 100%; object-fit: cover; object-position: center 60%; filter: grayscale(20%); }

        .content-wrapper { max-width: 1000px; margin: 0 auto; padding: 0 20px; position: relative; z-index: 10; }
        
        /* TEXTO JUSTIFICADO */
        .desc-unificada { 
          font-size: 18px; 
          line-height: 1.6; 
          margin-bottom: 30px; 
          font-weight: 300; 
          color: #ccc; 
          text-align: justify; 
          hyphens: auto;
        }

        .citacao-it-unificada { font-size: 18px; font-style: italic; color: #a855f7; margin-bottom: 30px; text-align: center; }
        .citacao-it-branca { font-size: 15px; font-style: italic; color: white; opacity: 0.7; margin-bottom: 50px; text-align: center; display: block; }

        .brutal-header h2 { font-size: 25.5px; font-weight: bold; text-transform: lowercase; color: white; text-align: center; }
        .spacer-vøid { margin-top: 80px; margin-bottom: 15px; }

        .sub-capa-container { width: 100%; max-width: 800px; margin: 0 auto 60px; border: 1px solid #222; overflow: hidden; }
        .img-sub-capa { width: 100%; display: block; }

        .lista-dinamica { list-style: none; max-width: 800px; margin: 0 auto 100px; }
        .marco-item { display: flex; gap: 15px; margin-bottom: 20px; align-items: flex-start; transition: 0.3s; padding: 5px; }
        .bullet { color: #a855f7; font-weight: bold; font-size: 18px; }
        
        /* MARCOS JUSTIFICADOS */
        .marco-item p { 
          font-size: 16px; 
          line-height: 1.5; 
          color: #ccc; 
          text-align: justify; 
          hyphens: auto; 
        }

        .players-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .player-box { width: 100%; aspect-ratio: 16/9; background: #050505; border: 1px solid #111; }
        .player-box iframe { width: 100%; height: 100%; }

        .hamburger { display: none; cursor: pointer; z-index: 4000; position: absolute; right: 0; }
        .hamburger span { display: block; width: 25px; height: 2px; background: white; margin: 5px 0; transition: 0.4s; }

        @media (max-width: 1024px) {
          .hamburger { display: block; }
          .nav-links { 
            position: fixed; top: 0; right: -100%; width: 100%; height: 100vh; 
            background: black; flex-direction: column; align-items: center; 
            justify-content: center; transition: 0.5s; 
          }
          .nav-links.active { right: 0; }
          .players-grid { grid-template-columns: 1fr; }
          .spacer-vøid { margin-top: 60px; }
          .sobre-capa { height: 50vh; margin-top: 70px; }
          .desc-unificada, .marco-item p { text-align: left; }
        }

        .interactive-zoom:hover { transform: scale(1.02); filter: brightness(1.1); transition: 0.3s ease; }
        .anim-fade-up { opacity: 0; transform: translateY(30px); animation: revealUp 0.6s forwards; }
        .anim-fade-in { opacity: 0; animation: fadeIn 1.2s forwards; }
        @keyframes revealUp { to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { to { opacity: 1; } }
      `}</style>
    </div>
  );
}