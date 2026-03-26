import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const PORTAL_DADOS = {
  diamond: [], 
  gold: [],    
  silver: [
    { id: "s1", nome: "5/5 Bar e Petiscaria", nicho: "Noite", bairro: "Palmeiras" },
    { id: "s2", nome: "AaRON Boats", nicho: "Passeios", bairro: "Ogiva" },
    { id: "s3", nome: "AC Aluguel De Lancha", nicho: "Passeios", bairro: "Gamboa" },
    { id: "s4", nome: "Acqua World", nicho: "Passeios", bairro: "Gamboa" },
    { id: "s5", nome: "AcquaRelax Passeios", nicho: "Passeios", bairro: "Ogiva" },
    { id: "s6", nome: "Adega Galiotto", nicho: "Noite", bairro: "Centro" },
    { id: "s7", nome: "Agência João na Região", nicho: "Passeios", bairro: "Gamboa" },
    { id: "s8", nome: "Aloha suítes", nicho: "Hospedagem", bairro: "Braga" },
    { id: "s9", nome: "Aloha Tur", nicho: "Passeios", bairro: "Centro" },
    { id: "s10", nome: "Alpha Dive", nicho: "Passeios", bairro: "Ilha da Draga" },
    { id: "s11", nome: "Altas Horas Bar", nicho: "Noite", bairro: "Jardim Caiçara" },
    { id: "s12", nome: "aMar Vip Boat", nicho: "Passeios", bairro: "Ogiva" },
    { id: "s13", nome: "Apart Hotel Porto Príncipe", nicho: "Hospedagem", bairro: "Algodoal" },
    { id: "s14", nome: "Armazém da Passagem", nicho: "Gastronomia", bairro: "Passagem" },
    { id: "s15", nome: "Bairro da Passagem", nicho: "Gastronomia", bairro: "Passagem" },
    { id: "s16", nome: "Bamba", nicho: "Noite", bairro: "Passagem" },
    { id: "s17", nome: "Banana do Heman", nicho: "Passeios", bairro: "Passagem" },
    { id: "s18", nome: "Bar Central", nicho: "Noite", bairro: "São Cristóvão" },
    { id: "s19", nome: "Bar da Bossa", nicho: "Noite", bairro: "Palmeiras" },
    { id: "s20", nome: "Bar do Forte", nicho: "Noite", bairro: "Algodoal" },
    { id: "s21", nome: "Bar e Karaokê Óia o Trem", nicho: "Noite", bairro: "Centro" },
    { id: "s22", nome: "Barracuda Cabo Frio", nicho: "Passeios", bairro: "Gamboa" },
    { id: "s23", nome: "Blest'Tur Turismo", nicho: "Passeios", bairro: "Vila Nova" },
    { id: "s24", nome: "Boat & cia passeios", nicho: "Passeios", bairro: "Geral" },
    { id: "s25", nome: "Boteco Seu Osmar", nicho: "Noite", bairro: "Palmeiras" },
    { id: "s26", nome: "Boulevard Canal", nicho: "Gastronomia", bairro: "Centro" },
    { id: "s27", nome: "Bravo Pousada Design", nicho: "Hospedagem", bairro: "Passagem" },
    { id: "s28", nome: "Buda Beach Cabo Frio", nicho: "Gastronomia", bairro: "Centro" },
    { id: "s29", nome: "Buda Lounge", nicho: "Noite", bairro: "São Bento" },
    { id: "s30", nome: "Canal Itajuru", nicho: "Passeios", bairro: "Passagem" },
    { id: "s31", nome: "Canoa Havaiana CF", nicho: "Passeios", bairro: "Passagem" },
    { id: "s32", nome: "Catamarã Black Diamond", nicho: "Passeios", bairro: "Centro" },
    { id: "s33", nome: "CIZZEDO", nicho: "Gastronomia", bairro: "Jardim Excelcior" },
    { id: "s34", nome: "Dados Drinks e Games", nicho: "Noite", bairro: "Palmeiras" },
    { id: "s35", nome: "Espaço Café", nicho: "Cafeterias", bairro: "Ville Blanche" },
    { id: "s36", nome: "Espetinho da Passagem", nicho: "Noite", bairro: "Passagem" },
    { id: "s37", nome: "Faella Bistrô", nicho: "Gastronomia", bairro: "Palmeiras" },
    { id: "s38", nome: "Forte São Mateus", nicho: "Passeios", bairro: "Praia do Forte" },
    { id: "s39", nome: "Hotel Solar do Arco", nicho: "Hospedagem", bairro: "Passagem" },
    { id: "s40", nome: "Ilha do Japonês", nicho: "Passeios", bairro: "Caminho do Peró" },
    { id: "s41", nome: "JeffBarbershop", nicho: "Moda", bairro: "Jardim Caiçara" },
    { id: "s42", nome: "Maria Bonita Bistrô", nicho: "Cafeterias", bairro: "Palmeiras" },
    { id: "s43", nome: "Office Café Braga", nicho: "Cafeterias", bairro: "Braga" },
    { id: "s44", nome: "Paiol São Benedito", nicho: "Noite", bairro: "Passagem" },
    { id: "s45", nome: "Rua dos Biquínis", nicho: "Moda", bairro: "Gamboa" },
    { id: "s46", nome: "Roma Café", nicho: "Cafeterias", bairro: "Vila Nova" },
    { id: "s47", nome: "The Duck Rock Pub", nicho: "Noite", bairro: "Passagem" },
    { id: "s48", nome: "Tróia Bar Lounge", nicho: "Noite", bairro: "São Bento" },
    { id: "s49", nome: "Roots Gastrobar", nicho: "Gastronomia", bairro: "Passagem" },
    { id: "s50", nome: "Yellow Box Choperia", nicho: "Noite", bairro: "Palmeiras" },
    // AQUI O LEADER COLOCOU OS SEUS OUTROS 150 DADOS SIMPLIFICADOS
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

  const nichos = ["Todos", "Cafeterias", "Gastronomia", "Noite", "Passeios", "Hospedagem", "Moda"];

  const filtrar = (lista) => {
    if (filtroNicho === 'Todos') return lista;
    return lista.filter(p => p.nicho === filtroNicho);
  };

  return (
    <div className="mapa-page">
      <Head><title>O que fazer em Cabo Frio | Pølivessense</title></Head>

      <main className="mapa-container">
        <header className="hero-seo">
          <div className="voltar-btn"><a href="/">← vøltar ao portal</a></div>
          <h1 className="title-glitch">CABO FRIO <br/><span>EXPERIENCE</span></h1>
          <p className="subtitle">GUIA DE CURADORIA AUTORAL</p>
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
          <h3 className="label-tier silver-text">⬦ ROTA CULTURAL SILVER ⬦</h3>
          <div className="silver-list">
            {filtrar(data.silver).slice(0, showAll ? undefined : 20).map(p => (
              <div key={p.id} className="silver-row">
                <span className="name">{p.nome}</span>
                <span className="dot"></span>
                <span className="bairro">{p.bairro}</span>
                <span className="tag">{p.nicho}</span>
              </div>
            ))}
          </div>
          <button className="btn-ver-mais" onClick={() => setShowAll(!showAll)}>
            {showAll ? "VER MENOS" : "VER ROTA COMPLETA"}
          </button>
        </section>

        <footer className="footer-pitch">
          <p>Dados reais para parceiros reais. <span>Seja um parceiro Diamond.</span></p>
          <a href="https://wa.me/22988023803" className="btn-pitch">QUERO MEU DESTAQUE</a>
        </footer>
      </main>

      <style jsx>{`
        .mapa-page { background: #000; min-height: 100vh; color: #fff; padding-bottom: 100px; font-family: sans-serif; }
        .mapa-container { max-width: 800px; margin: 0 auto; padding: 20px; }
        .hero-seo { text-align: center; padding: 60px 0; }
        .voltar-btn a { color: #a855f7; text-decoration: none; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; }
        .title-glitch { font-size: clamp(40px, 8vw, 60px); font-weight: 900; line-height: 0.9; }
        .title-glitch span { color: #a855f7; text-shadow: 0 0 20px #a855f755; }
        .subtitle { font-size: 9px; letter-spacing: 5px; opacity: 0.4; margin-top: 15px; }
        .filter-nav { background: #000; padding: 20px 0; z-index: 100; position: sticky; top: 0; border-bottom: 1px solid #111; }
        .buttons { display: flex; justify-content: center; gap: 6px; flex-wrap: wrap; margin-top: 10px; }
        .buttons button { background: none; border: 1px solid #222; color: #555; padding: 8px 12px; font-size: 9px; cursor: pointer; text-transform: uppercase; font-weight: bold; }
        .buttons button.active { border-color: #a855f7; color: #fff; background: #a855f711; }
        .silver-list { background: #050505; border: 1px solid #111; }
        .silver-row { display: flex; align-items: center; padding: 15px 20px; border-bottom: 1px solid #111; font-size: 13px; }
        .dot { flex-grow: 1; border-bottom: 1px dotted #222; margin: 0 15px; }
        .bairro { color: #444; font-size: 10px; text-transform: uppercase; }
        .tag { color: #a855f7; font-size: 10px; font-weight: bold; margin-left: 15px; }
        .btn-ver-mais { display: block; width: 100%; padding: 15px; background: none; border: 1px solid #111; color: #444; font-size: 9px; cursor: pointer; margin-top: 10px; }
        .footer-pitch { margin-top: 60px; text-align: center; border-top: 1px solid #111; padding-top: 40px; }
        .btn-pitch { display: inline-block; padding: 15px 30px; background: #a855f7; color: #000; text-decoration: none; font-weight: 900; font-size: 11px; margin-top: 20px; }
      `}</style>
    </div>
  );
}