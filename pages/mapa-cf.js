import React, { useState } from 'react';
import Head from 'next/head';

export default function MapaCultural() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Simulando a "Base de Dados" dos parceiros para fácil gestão
  const parceiros = {
    diamond: [
      { id: 1, nome: "Nome da Marca Diamond", img: "/diamond-exemplo.jpg", link: "#", bio: "Onde o Rock encontra o sabor em Cabo Frio." }
    ],
    gold: [
      { id: 2, nome: "Loja Gold 01", img: "/gold-thumb.jpg", link: "#", bairro: "Passagem" }
    ],
    silver: [
      { id: 3, nome: "Café Silver", bairro: "Centro", benefício: "10% OFF" }
    ]
  };

  return (
    <div className="mapa-page">
      <Head>
        <title>mapa cultural | pøliva cf</title>
      </Head>

      {/* NAVBAR (A mesma das outras páginas) */}
      <nav className="navbar">
        <div className="nav-container">
          <img src="/logo-poliva.png" alt="Logo" className="nav-logo" />
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
             {/* Links aqui... */}
          </div>
        </div>
      </nav>

      <main className="mapa-content">
        <header className="mapa-header anim-fade-in">
          <h1 className="glitch-text">MAPA CULTURAL PØLIVA</h1>
          <p className="subtitle">CABO FRIO: O EPICENTRO DO NOVO ROCK</p>
        </header>

        {/* ÁREA DO MAPA INTERATIVO (Futuro Iframe do Google Maps Custom) */}
        <section className="map-display anim-fade-up">
           <div className="map-placeholder">
             <p>[ MAPA INTERATIVO DARK MODE ]</p>
             <span>Os portais de Cabo Frio estão sendo mapeados...</span>
           </div>
        </section>

        {/* VITRINE DE PARCEIROS POR COTAS */}
        <section className="vitrine-container">
          
          {/* DIAMOND: Banner de Topo com Luxo */}
          <div className="diamond-zone anim-fade-up">
            <h3 className="tier-label">✦ DIAMOND ✦</h3>
            {parceiros.diamond.map(p => (
              <div key={p.id} className="diamond-card interactive-zoom">
                <img src={p.img} alt={p.nome} />
                <div className="card-info">
                  <h4>{p.nome}</h4>
                  <p>{p.bio}</p>
                  <a href={p.link} className="btn-portal">RESGATAR BENEFÍCIO VIP</a>
                </div>
              </div>
            ))}
          </div>

          {/* GOLD: Cards Dinâmicos */}
          <div className="gold-zone anim-fade-up">
            <h3 className="tier-label">✧ GOLD ✧</h3>
            <div className="gold-grid">
               {parceiros.gold.map(p => (
                 <div key={p.id} className="gold-card">
                   <img src={p.img} alt={p.nome} />
                   <h5>{p.nome}</h5>
                   <span>{p.bairro}</span>
                 </div>
               ))}
            </div>
          </div>

        </section>
      </main>

      <style jsx>{`
        .mapa-page { background: #050505; min-height: 100vh; color: white; }
        
        .mapa-header { padding: 150px 20px 50px; text-align: center; }
        .glitch-text { font-size: 45px; letter-spacing: 5px; color: #a855f7; text-shadow: 0 0 15px rgba(168, 85, 247, 0.5); }
        .subtitle { opacity: 0.6; font-size: 14px; margin-top: 10px; }

        .map-display { width: 90%; max-width: 1200px; margin: 0 auto; height: 450px; background: #111; border: 1px solid #222; position: relative; }
        .map-placeholder { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: #444; }

        .tier-label { text-align: center; margin: 80px 0 40px; font-size: 12px; letter-spacing: 4px; color: #a855f7; }

        .diamond-card { background: #111; border: 1px solid #a855f7; display: flex; overflow: hidden; max-width: 900px; margin: 0 auto; }
        .diamond-card img { width: 50%; object-fit: cover; }
        .card-info { padding: 40px; display: flex; flex-direction: column; justify-content: center; }
        
        .btn-portal { border: 1px solid #a855f7; color: #a855f7; padding: 15px; text-align: center; text-decoration: none; margin-top: 20px; font-weight: bold; transition: 0.4s; }
        .btn-portal:hover { background: #a855f7; color: black; box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); }

        .gold-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; max-width: 1000px; margin: 0 auto; }
        .gold-card { background: #111; padding: 15px; border: 1px solid #222; text-align: center; transition: 0.3s; }
        .gold-card:hover { border-color: #a855f7; transform: translateY(-5px); }
        .gold-card img { width: 100%; border-radius: 5px; margin-bottom: 15px; }

        @media (max-width: 768px) {
          .diamond-card { flex-direction: column; }
          .diamond-card img { width: 100%; height: 250px; }
        }
      `}</style>
    </div>
  );
}