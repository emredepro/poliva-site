import React, { useState } from 'react';
import Head from 'next/head';

export default function Shows() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // LISTA DE DEPOIMENTOS (2 COLUNAS)
  const depoimentos = [
    "feed41", "feed31", "feed39", "feed37", "feed33", 
    "feed30", "feed16", "feed13", "feed5", "feed8", 
    "feed1", "feed24", "feed18", "feed9", "feed43"
  ];

  // LISTA DE REGISTROS (CENTRALIZADOS)
  const registros = ["foto-show2", "foto-show3", "foto-show4", "foto-show5", "foto-show6", "foto-show7"];

  // IDS DOS REELS (INSTAGRAM)
  const reels = [
    "CY_l2MMhx9P", "DKkDoO8sfjU", "DBJY4baPXLA", 
    "DPXAq6cABg1", "DPCKeVEjfkQ", "CpvOR-CAAO5"
  ];

  return (
    <div className="shows-page">
      <Head>
        <title>shøws aø vivø | pølivessense</title>
      </Head>

      {/* NAVBAR PADRÃO v2.5.5 - SINCRONIZADA */}
      <nav className="navbar">
        <div className="nav-container">
          <img src="/logo-poliva.png" alt="Logo" className="nav-logo" />
          
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span><span></span><span></span>
          </div>

          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="/" className="nav-item">iníciø</a>
            <a href="/sobre" className="nav-item">søbre pøliva</a>
            <a href="/shows" className="nav-item active-link">shøws aø vivø</a>
            <a href="#" className="nav-item">singles & álbuns</a>
            <a href="#" className="nav-item">agenda</a>
            <a href="#" className="nav-item">cøntatø</a>
          </div>
        </div>
      </nav>

      {/* WHATSAPP GLOBAL */}
      <a href="https://wa.me/message/L5OXQTU6PDIFF1" target="_blank" rel="noopener noreferrer" className="wa-global interactive-zoom">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>

      {/* CAPA - MESMA MEDIDA DA PÁGINA SOBRE (65vh / 60%) */}
      <header className="shows-capa anim-fade-in">
        <img src="/foto-show1.jpg" alt="Pøliva Show Capa" className="img-full" />
      </header>

      <main className="content-wrapper">
        <section className="section-text anim-fade-up">
          <p className="desc-destaque">
            O SHOW: COM ATÉ 2 HORAS DE VOLTAGEM MÁXIMA, é desenhado em experiência contínua e explosiva em um fluxo energético implacável, onde o ritmo dita a regra e o envolvimento do público não tem trégua. É intensidade do primeiro ao último acorde.
          </p>
          <p className="desc-normal">
            Como uma legítima sommelier de hits que eletrizam o palco, pøliva entrega um show energético, festivo, intenso e explosivo, focado no impacto emocional e na conexão direta com o público. No palco, não existe barreira; existe verdade, presença real e uma entrega que beira o impossível.
          </p>
          <p className="desc-normal">
            Um projeto flexível, adaptável a qualquer espaço que suporte a pressão. No formato principal, chega com o time completo: voz, violão, guitarras cortantes, baixo pulsante e bateria de alto impacto.
          </p>
          <p className="desc-normal">
            Do público jovem ao adulto que carrega o rock na veia, a música da pøliva é refúgio e explosão. Reunindo em seu repertório influências marcantes de artistas como Pitty, Pearl Jam, AC/DC, Paralamas do Sucesso, Kings Of Leon, Paramore, Rita Lee, Amy Winehouse, Beatles, Raul Seixas, Evanescense, Foo Fighters, Charlie Brown Jr., Deep Purple, Bon Jovi e muito mais! Transformando clássicos em confissões gritadas a plenos pulmões. É a trilha sonora perfeita para quem busca experiências intensas e não apenas entretenimento raso.
          </p>
          <p className="desc-normal">
            O público não vai para o evento para ser espectador. Eles vão para sentir, vibrar, gritar e silenciar. Eles atravessam emoções e saem do show diferentes de como entraram. São pessoas que farejam verdade à distância e valorizam a entrega de quem deixa a alma no palco.
          </p>
          <p className="desc-normal">
            De festivais a ambientes de motociclistas, de palcos urbanos a refúgios culturais. Onde houver necessidade de força, expressão e transformação através da música, a pøliva cria o encontro.
          </p>
        </section>

        {/* BOTÕES MÍDIA KIT E RIDER */}
        <section className="cta-buttons anim-fade-up">
          <a href="https://drive.google.com/file/d/1lau05jJhOkS1DZowV_WpxpHfmMGvd6hR/view" target="_blank" className="btn-shows interactive-zoom">
            <span className="icon">📄</span> mídia kit
          </a>
          <a href="https://drive.google.com/file/d/1fB7OxqwNKQCFMq9IBzKWVoc6dhfK1jds/view" target="_blank" className="btn-shows interactive-zoom">
            <span className="icon">🎸</span> rider técnico
          </a>
        </section>

        {/* FEEDBACK DOS FÃS - 2 COLUNAS */}
        <section className="section-block anim-fade-up">
          <div className="brutal-header spacer-void">
            <h2>cømø øs fãs reagem:</h2>
          </div>
          <div className="feed-grid">
            {depoimentos.map((img, index) => (
              <img key={index} src={`/${img}.jpg`} alt="Feedback Fã" className="feed-img interactive-zoom" />
            ))}
          </div>
        </section>

        {/* VÍDEOS AO VIVO - REELS GRADE 2x3 */}
        <section className="section-block anim-fade-up">
          <div className="brutal-header spacer-void">
            <h2>vídeøs aø vivø:</h2>
          </div>
          <div className="reels-grid">
            {reels.map((id, index) => (
              <div key={index} className="reel-box interactive-zoom">
                <iframe src={`https://www.instagram.com/reel/${id}/embed`} frameBorder="0" scrolling="no" allowTransparency="true"></iframe>
              </div>
            ))}
          </div>
        </section>

        {/* PRINCIPAIS REGISTROS - LISTA CENTRALIZADA */}
        <section className="section-block anim-fade-up" style={{ paddingBottom: '220px' }}>
          <div className="brutal-header spacer-void">
            <h2>principais registrøs:</h2>
          </div>
          <div className="registros-list">
            {registros.map((img, index) => (
              <img key={index} src={`/${img}.jpg`} alt="Registro Show" className="registro-img interactive-zoom" />
            ))}
          </div>
        </section>
      </main>

      <style jsx>{`
        .shows-page { background: black; min-height: 100vh; color: white; overflow-x: hidden; font-family: -apple-system, system-ui, sans-serif; }
        
        .navbar { position: fixed; top: 0; width: 100%; background: rgba(0,0,0,0.95); padding: 25px 40px; z-index: 4000; border-bottom: 1px solid #111; }
        .nav-container { max-width: 1400px; margin: 0 auto; display: flex; justify-content: center; align-items: center; position: relative; min-height: 50px; }
        .nav-logo { width: 110px; position: absolute; left: 0; }
        .nav-links { display: flex; gap: 40px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: bold; }
        .nav-item { color: white; text-decoration: none; transition: 0.3s ease; }
        .nav-item:hover, .active-link { color: #a855f7 !important; }

        .wa-global { position: fixed; bottom: 120px; right: 30px; z-index: 5000; width: 50px; }

        .shows-capa { width: 100%; height: 65vh; overflow: hidden; margin-top: 80px; margin-bottom: 50px; }
        .img-full { width: 100%; height: 100%; object-fit: cover; object-position: center 60%; filter: grayscale(20%); }

        .content-wrapper { max-width: 1000px; margin: 0 auto; padding: 0 20px; text-align: center; }
        
        .desc-destaque { font-size: 18px; font-weight: bold; line-height: 1.6; margin-bottom: 30px; color: white; text-transform: uppercase; }
        .desc-normal { font-size: 18px; line-height: 1.6; margin-bottom: 30px; font-weight: 300; color: #ccc; }

        .cta-buttons { display: flex; justify-content: center; gap: 30px; margin: 50px 0; }
        .btn-shows { background: none; border: 1px solid #a855f7; color: white; padding: 15px 30px; text-decoration: none; text-transform: lowercase; font-weight: bold; font-size: 16px; transition: 0.3s; display: flex; align-items: center; gap: 10px; }
        .btn-shows:hover { background: #a855f7; color: black; }

        .brutal-header h2 { font-size: 25.5px; font-weight: bold; text-transform: lowercase; color: white; }
        .spacer-void { margin-top: 80px; margin-bottom: 40px; }

        /* GRID DEPOIMENTOS - 3px altura / 5px largura */
        .feed-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3px 5px; max-width: 800px; margin: 0 auto; }
        .feed-img { width: 100%; height: auto; border: 1px solid #111; }

        /* GRID REELS */
        .reels-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; max-width: 850px; margin: 0 auto; }
        .reel-box { width: 100%; aspect-ratio: 9/16; background: #050505; border: 1px solid #111; overflow: hidden; }
        .reel-box iframe { width: 100%; height: 100%; }

        /* REGISTROS CENTRALIZADOS */
        .registros-list { display: flex; flex-direction: column; align-items: center; gap: 40px; }
        .registro-img { width: 100%; max-width: 800px; height: auto; border: 1px solid #111; }

        .hamburger { display: none; cursor: pointer; z-index: 4000; position: absolute; right: 0; }
        .hamburger span { display: block; width: 25px; height: 2px; background: white; margin: 5px 0; transition: 0.4s; }

        @media (max-width: 1024px) {
          .hamburger { display: block; }
          .nav-logo { width: 110px; }
          .nav-links { position: fixed; top: 0; right: -100%; width: 100%; height: 100vh; background: black; flex-direction: column; align-items: center; justify-content: center; transition: 0.5s; }
          .nav-links.active { right: 0; }
          .feed-grid, .reels-grid { grid-template-columns: 1fr; }
          .cta-buttons { flex-direction: column; align-items: center; }
          .shows-capa { height: 50vh; margin-top: 70px; }
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