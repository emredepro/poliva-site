import React, { useState } from 'react';
import Head from 'next/head';

export default function MapaCultural() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // BASE DE DADOS DOS PARCEIROS (Exemplo para teste)
  const parceiros = {
    diamond: [
      { id: 1, nome: "EXEMPLO DIAMOND", img: "/publico-show.jpg", link: "https://wa.me/seunumerogrupo", bio: "O ponto de encontro oficial da cena autoral. Use o cupom POLIVA no balcão.", bairro: "Passagem" }
    ],
    gold: [
      { id: 2, nome: "CAFÉ DO ROCK", img: "/quadrado-show.png", link: "#", bairro: "Centro", benefício: "Shot de Café Grátis" },
      { id: 3, nome: "LOJA VIBE", img: "/patterns_poliva_simbolos-07.jpg", link: "#", bairro: "Vila Nova", benefício: "15% OFF" }
    ],
    silver: [
      { id: 4, nome: "Bistrô da Vila", bairro: "Braga", benefício: "Sobremesa Cortesia" },
      { id: 5, nome: "Surf Shop CF", bairro: "Peró", benefício: "Sorteio Mensal" }
    ]
  };

  return (
    <div className="mapa-page">
      <Head>
        <title>mapa cultural | pølivessense</title>
      </Head>

      <main className="mapa-container">
        {/* HEADER BRUTALISTA */}
        <header className="mapa-header anim-fade-in">
          <div className="voltar-btn"><a href="/">← vøltar</a></div>
          <h1 className="title-glitch">MAPA CULTURAL PØLIVA</h1>
          <p className="subtitle">CABO FRIO: O EPICENTRO DO NOVO ROCK AUTORAL</p>
          <div className="divider-neon"></div>
        </header>

        {/* SEÇÃO DIAMOND - O TOPO DA CADEIA */}
        <section className="section-tier diamond-section anim-fade-up">
          <h3 className="label-tier diamond-text">✦ EMBAIXADOR DIAMOND ✦</h3>
          {parceiros.diamond.map(p => (
            <div key={p.id} className="diamond-card-brutal">
              <div className="img-wrapper">
                <img src={p.img} alt={p.nome} />
                <div className="badge-bairro">{p.bairro}</div>
              </div>
              <div className="content-card">
                <h2>{p.nome}</h2>
                <p className="bio-diamond">{p.bio}</p>
                <a href={p.link} className="btn-resgate-diamond">RESGATAR BENEFÍCIO NO WHATSAPP</a>
              </div>
            </div>
          ))}
        </section>

        {/* SEÇÃO GOLD - CARDS ESTILO LINE-UP */}
        <section className="section-tier gold-section anim-fade-up">
          <h3 className="label-tier gold-text">✧ PARCEIROS GOLD ✧</h3>
          <div className="gold-grid">
            {parceiros.gold.map(p => (
              <div key={p.id} className="gold-card-brutal">
                <div className="gold-img-box">
                    <img src={p.img} alt={p.nome} />
                    <div className="gold-benefit">{p.benefício}</div>
                </div>
                <h4>{p.nome}</h4>
                <p>{p.bairro}</p>
                <a href={p.link} className="btn-gold-link">VER PORTAL</a>
              </div>
            ))}
          </div>
        </section>

        {/* SEÇÃO SILVER - LISTA TIPO FLYER DE SHOW */}
        <section className="section-tier silver-section anim-fade-up">
          <h3 className="label-tier silver-text">⬦ ROTA SILVER ⬦</h3>
          <div className="silver-list">
            {parceiros.silver.map(p => (
              <div key={p.id} className="silver-item">
                <span className="silver-nome">{p.nome}</span>
                <span className="silver-divider"></span>
                <span className="silver-bairro">{p.bairro}</span>
                <span className="silver-tag">{p.benefício}</span>
              </div>
            ))}
          </div>
        </section>

        <footer className="mapa-footer">
            <p>QUER SER UM PONTO OFICIAL? <a href="/contato">FALE COM O PORTAL</a></p>
        </footer>
      </main>

      <style jsx>{`
        .mapa-page { background: #000; min-height: 100vh; color: #fff; font-family: inherit; padding-bottom: 100px; }
        .mapa-container { max-width: 1100px; margin: 0 auto; padding: 20px; }
        
        .voltar-btn { margin-bottom: 40px; }
        .voltar-btn a { color: #a855f7; text-decoration: none; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; }

        .mapa-header { text-align: center; padding-top: 60px; margin-bottom: 80px; }
        .title-glitch { font-size: clamp(32px, 8vw, 60px); font-weight: 900; letter-spacing: -2px; line-height: 0.9; margin-bottom: 15px; }
        .subtitle { font-size: 12px; letter-spacing: 4px; opacity: 0.6; text-transform: uppercase; }
        .divider-neon { width: 60px; height: 4px; background: #a855f7; margin: 30px auto; box-shadow: 0 0 15px #a855f7; }

        .section-tier { margin-bottom: 120px; }
        .label-tier { text-align: center; font-size: 11px; letter-spacing: 5px; margin-bottom: 40px; text-transform: uppercase; }
        .diamond-text { color: #a855f7; }
        .gold-text { color: #d4af37; }
        .silver-text { color: #aaa; }

        /* DIAMOND CARD BRUTAL */
        .diamond-card-brutal { display: grid; grid-template-columns: 1.2fr 1fr; border: 1px solid #a855f7; background: #080808; position: relative; box-shadow: 0 0 40px rgba(168, 85, 247, 0.1); }
        .img-wrapper { position: relative; height: 450px; overflow: hidden; }
        .img-wrapper img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(40%); transition: 0.6s; }
        .diamond-card-brutal:hover .img-wrapper img { filter: grayscale(0%); transform: scale(1.05); }
        .badge-bairro { position: absolute; bottom: 20px; left: 20px; background: #a855f7; color: #000; padding: 5px 15px; font-weight: 900; font-size: 12px; text-transform: uppercase; }
        .content-card { padding: 50px; display: flex; flex-direction: column; justify-content: center; }
        .content-card h2 { font-size: 40px; margin-bottom: 20px; letter-spacing: -1px; }
        .bio-diamond { color: #ccc; line-height: 1.6; margin-bottom: 30px; font-size: 18px; }
        .btn-resgate-diamond { background: #a855f7; color: #000; padding: 20px; text-align: center; font-weight: 900; text-decoration: none; transition: 0.4s; }
        .btn-resgate-diamond:hover { background: #fff; transform: translateY(-3px); box-shadow: 0 10px 30px rgba(168, 85, 247, 0.4); }

        /* GOLD GRID */
        .gold-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; }
        .gold-card-brutal { border: 1px solid #333; padding: 20px; background: #050505; transition: 0.4s; }
        .gold-card-brutal:hover { border-color: #d4af37; background: #080808; }
        .gold-img-box { position: relative; height: 250px; margin-bottom: 20px; overflow: hidden; }
        .gold-img-box img { width: 100%; height: 100%; object-fit: cover; }
        .gold-benefit { position: absolute; top: 10px; right: 10px; background: #d4af37; color: #000; padding: 5px 10px; font-size: 10px; font-weight: 900; }
        .gold-card-brutal h4 { font-size: 22px; margin-bottom: 5px; }
        .gold-card-brutal p { font-size: 12px; color: #666; margin-bottom: 20px; text-transform: uppercase; }
        .btn-gold-link { color: #d4af37; text-decoration: none; font-weight: bold; font-size: 12px; border-bottom: 1px solid #d4af37; padding-bottom: 5px; }

        /* SILVER LIST */
        .silver-list { border-top: 1px solid #222; }
        .silver-item { display: flex; align-items: center; padding: 25px 0; border-bottom: 1px solid #222; }
        .silver-nome { font-size: 20px; font-weight: bold; min-width: 200px; }
        .silver-divider { flex-grow: 1; border-bottom: 1px dotted #333; margin: 0 20px; }
        .silver-bairro { font-size: 12px; color: #666; text-transform: uppercase; margin-right: 20px; }
        .silver-tag { font-size: 12px; color: #a855f7; font-weight: bold; }

        .mapa-footer { text-align: center; padding-top: 50px; border-top: 1px solid #222; }
        .mapa-footer a { color: #a855f7; font-weight: bold; }

        @media (max-width: 900px) {
          .diamond-card-brutal { grid-template-columns: 1fr; }
          .img-wrapper { height: 300px; }
          .content-card { padding: 30px; }
          .silver-item { flex-direction: column; align-items: flex-start; gap: 10px; }
          .silver-divider { display: none; }
        }

        .anim-fade-up { opacity: 0; transform: translateY(30px); animation: revealUp 0.6s forwards; }
        .anim-fade-in { opacity: 0; animation: fadeIn 1.2s forwards; }
        @keyframes revealUp { to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { to { opacity: 1; } }
      `}</style>
    </div>
  );
}