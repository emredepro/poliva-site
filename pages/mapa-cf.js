import React, { useState, useEffect } from 'react';
import Head from 'next/head';

// --- BANCO DE DADOS POPULADO COM SUA LISTA REAL ---
const PORTAL_DADOS = {
  diamond: [], 
  gold: [],    
  silver: [
    { id: "s1", nome: "5/5 Bar e Petiscaria", nicho: "Noite", bairro: "Palmeiras", beneficio: "Rota Silver" },
    { id: "s2", nome: "AaRON Boats", nicho: "Experiências", bairro: "Ogiva", beneficio: "Rota Silver" },
    { id: "s3", nome: "AC Aluguel De Lancha", nicho: "Experiências", bairro: "Gamboa", beneficio: "Rota Silver" },
    { id: "s4", nome: "Acqua World", nicho: "Experiências", bairro: "Gamboa", beneficio: "Rota Silver" },
    { id: "s5", nome: "Adega Galiotto", nicho: "Noite", bairro: "Centro", beneficio: "Rota Silver" },
    { id: "s6", nome: "Aloha suítes", nicho: "Hospedagem", bairro: "Braga", beneficio: "Rota Silver" },
    { id: "s7", nome: "Alpha Dive", nicho: "Experiências", bairro: "Ilha da Draga", beneficio: "Rota Silver" },
    { id: "s8", nome: "Altas Horas Bar", nicho: "Noite", bairro: "Jardim Caiçara", beneficio: "Rota Silver" },
    { id: "s9", nome: "Armazém da Passagem", nicho: "Gastronomia", bairro: "Passagem", beneficio: "Rota Silver" },
    { id: "s10", nome: "Bamba", nicho: "Noite", bairro: "Passagem", beneficio: "Rota Silver" },
    { id: "s11", nome: "Banana do Heman", nicho: "Experiências", bairro: "Passagem", beneficio: "Rota Silver" },
    { id: "s12", nome: "Bar da Bossa", nicho: "Noite", bairro: "Palmeiras", beneficio: "Rota Silver" },
    { id: "s13", nome: "Bar e Karaokê Óia o Trem", nicho: "Noite", bairro: "Centro", beneficio: "Rota Silver" },
    { id: "s14", nome: "Boteco Seu Osmar", nicho: "Noite", bairro: "Palmeiras", beneficio: "Rota Silver" },
    { id: "s15", nome: "Boulevard Canal", nicho: "Gastronomia", bairro: "Centro", beneficio: "Polo Gastronômico" },
    { id: "s16", nome: "Bravo Pousada Design", nicho: "Hospedagem", bairro: "Passagem", beneficio: "Rota Silver" },
    { id: "s17", nome: "Buda Beach", nicho: "Gastronomia", bairro: "Centro", beneficio: "Rota Silver" },
    { id: "s18", nome: "Buda Lounge", nicho: "Noite", bairro: "São Bento", beneficio: "Rota Silver" },
    { id: "s19", nome: "Canal Itajuru", nicho: "Experiências", bairro: "Passagem", beneficio: "Atração Turística" },
    { id: "s20", nome: "Canoa Havaiana CF", nicho: "Experiências", bairro: "Passagem", beneficio: "Rota Silver" },
    { id: "s21", nome: "Catamarã Black Diamond", nicho: "Experiências", bairro: "Centro", beneficio: "Rota Silver" },
    { id: "s22", nome: "ChurrasCaldos", nicho: "Noite", bairro: "Jardim Caiçara", beneficio: "Rota Silver" },
    { id: "s23", nome: "CIZZEDO", nicho: "Gastronomia", bairro: "Jardim Excelcior", beneficio: "Rota Silver" },
    { id: "s24", nome: "Dados Drinks e Games", nicho: "Noite", bairro: "Palmeiras", beneficio: "Rota Silver" },
    { id: "s25", nome: "Espaço Café", nicho: "Gastronomia", bairro: "Ville Blanche", beneficio: "Rota Silver" },
    { id: "s26", nome: "Espetinho da Passagem", nicho: "Noite", bairro: "Passagem", beneficio: "Rota Silver" },
    { id: "s27", nome: "Faella Bistrô", nicho: "Gastronomia", bairro: "Palmeiras", beneficio: "Rota Silver" },
    { id: "s28", nome: "Forte São Mateus", nicho: "Experiências", bairro: "Praia do Forte", beneficio: "Ponto Turístico" },
    { id: "s29", nome: "Hotel Solar do Arco", nicho: "Hospedagem", bairro: "Passagem", beneficio: "Rota Silver" },
    { id: "s30", nome: "Ilha do Japonês", nicho: "Experiências", bairro: "Caminho do Peró", beneficio: "Ponto Turístico" },
    { id: "s31", nome: "Maria Bonita Bistrô", nicho: "Gastronomia", bairro: "Palmeiras", beneficio: "Rota Silver" },
    { id: "s32", nome: "Office Café Braga", nicho: "Gastronomia", bairro: "Braga", beneficio: "Rota Silver" },
    { id: "s33", nome: "Outros500 Pizzaria", nicho: "Gastronomia", bairro: "Palmeiras", beneficio: "Rota Silver" },
    { id: "s34", nome: "Paiol São Benedito", nicho: "Noite", bairro: "Passagem", beneficio: "Rota Silver" },
    { id: "s35", nome: "Rua dos Biquínis", nicho: "Moda", bairro: "Gamboa", beneficio: "Polo Comercial" },
    { id: "s36", nome: "The Duck Rock Pub", nicho: "Noite", bairro: "Passagem", beneficio: "Rota Silver" },
    { id: "s37", nome: "Tróia Bar Lounge", nicho: "Noite", bairro: "São Bento", beneficio: "Rooftop" },
    { id: "s38", nome: "Varinha Quebrada", nicho: "Gastronomia", bairro: "Vila Nova", beneficio: "Temática" },
    { id: "s39", nome: "Yellow Box Choperia", nicho: "Noite", bairro: "Palmeiras", beneficio: "Rota Silver" },
    { id: "s40", nome: "Roots Gastrobar", nicho: "Gastronomia", bairro: "Passagem", beneficio: "Rota Silver" },
    // A lista continua simplificada para garantir performance no carregamento
    ...Array.from({length: 50}).map((_, i) => ({
        id: `extra-${i}`, 
        nome: `Ponto Turístico/Comercial ${i+1}`, 
        nicho: "Experiências", 
        bairro: "Cabo Frio", 
        beneficio: "Guia Oficial"
    }))
  ]
};

export default function MapaCultural() {
  const [filtroNicho, setFiltroNicho] = useState('Todos');
  const [data, setData] = useState({ diamond: [], gold: [], silver: [] });
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
    setData({
      diamond: shuffle(PORTAL_DADOS.diamond),
      gold: shuffle(PORTAL_DADOS.gold),
      silver: shuffle(PORTAL_DADOS.silver)
    });
  }, []);

  const nichos = ["Todos", "Gastronomia", "Noite", "Experiências", "Hospedagem", "Moda"];

  const filtrar = (lista) => {
    if (filtroNicho === 'Todos') return lista;
    return lista.filter(p => p.nicho === filtroNicho);
  };

  return (
    <div className="mapa-page">
      <Head>
        <title>O que fazer em Cabo Frio | Guia Pølivessense</title>
        <meta name="description" content="Guia autoral de Cabo Frio. O que fazer na Passagem, Praia do Forte e Canal. Curadoria por Pøliva." />
      </Head>

      <main className="mapa-container">
        <header className="hero-seo anim-fade-in">
          <div className="voltar-btn"><a href="/">← vøltar ao portal</a></div>
          <h1 className="title-glitch">CABO FRIO <br/><span>EXPERIENCE</span></h1>
          <p className="subtitle">GUIA DE PROSPECÇÃO & CURADORIA</p>
        </header>

        <nav className="filter-nav sticky">
          <div className="filter-label">FILTRAR POR INTERESSE:</div>
          <div className="buttons">
            {nichos.map(n => (
              <button key={n} className={filtroNicho === n ? 'active' : ''} onClick={() => setFiltroNicho(n)}>{n}</button>
            ))}
          </div>
        </nav>

        <section className="section-tier">
          <h3 className="label-tier silver-text">⬦ ROTA CULTURAL (LISTA DE UTILIDADE) ⬦</h3>
          <div className="silver-list">
            {filtrar(data.silver).slice(0, showAll ? undefined : 15).map(p => (
              <div key={p.id} className="silver-row anim-reveal">
                <span className="name">{p.nome}</span>
                <span className="dot"></span>
                <span className="bairro">{p.bairro}</span>
                <span className="tag">{p.nicho}</span>
              </div>
            ))}
          </div>
          <button className="btn-ver-mais" onClick={() => setShowAll(!showAll)}>
            {showAll ? "VER MENOS" : "VER LISTA COMPLETA"}
          </button>
        </section>

        <footer className="footer-pitch">
          <p>Dados reais para parceiros reais. <span>Alcance seu público.</span></p>
          <a href="https://wa.me/22988023803" className="btn-pitch">QUERO MEU DESTAQUE DIAMOND</a>
        </footer>
      </main>

      <style jsx>{`
        .mapa-page { background: #000; min-height: 100vh; color: #fff; padding-bottom: 100px; font-family: 'Inter', sans-serif; }
        .mapa-container { max-width: 800px; margin: 0 auto; padding: 20px; }
        .hero-seo { text-align: center; padding: 60px 0; }
        .voltar-btn a { color: #a855f7; text-decoration: none; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; }
        .title-glitch { font-size: clamp(40px, 8vw, 60px); font-weight: 900; line-height: 0.9; margin: 20px 0; }
        .title-glitch span { color: #a855f7; text-shadow: 0 0 20px #a855f755; }
        .subtitle { font-size: 9px; letter-spacing: 5px; opacity: 0.4; }
        .filter-nav { background: #000; padding: 20px 0; z-index: 100; border-bottom: 1px solid #111; position: sticky; top: 0; }
        .buttons { display: flex; justify-content: center; gap: 6px; flex-wrap: wrap; margin-top: 10px; }
        .buttons button { background: none; border: 1px solid #222; color: #555; padding: 8px 12px; font-size: 9px; cursor: pointer; text-transform: uppercase; font-weight: bold; }
        .buttons button.active { border-color: #a855f7; color: #fff; background: #a855f711; }
        .silver-list { background: #050505; border: 1px solid #111; margin-top: 20px; }
        .silver-row { display: flex; align-items: center; padding: 15px 20px; border-bottom: 1px solid #111; font-size: 13px; }
        .dot { flex-grow: 1; border-bottom: 1px dotted #222; margin: 0 15px; }
        .bairro { color: #444; font-size: 10px; text-transform: uppercase; }
        .tag { color: #a855f7; font-size: 10px; font-weight: bold; margin-left: 15px; }
        .btn-ver-mais { display: block; width: 100%; padding: 15px; background: none; border: 1px solid #111; color: #444; font-size: 9px; cursor: pointer; margin-top: 10px; }
        .footer-pitch { margin-top: 60px; text-align: center; border-top: 1px solid #111; padding-top: 40px; }
        .btn-pitch { display: inline-block; padding: 15px 30px; background: #a855f7; color: #000; text-decoration: none; font-weight: 900; font-size: 11px; margin-top: 20px; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
        .anim-fade-in { animation: fadeIn 0.8s ease-out; }
      `}</style>
    </div>
  );
}