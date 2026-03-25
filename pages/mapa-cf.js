import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function MapaCultural() {
  const [filtroNicho, setFiltroNicho] = useState('Todos');
  const [filtroBairro, setFiltroBairro] = useState('Todos');
  const [data, setData] = useState({ diamond: [], gold: [], silver: [] });
  const [showAll, setShowAll] = useState({ diamond: false, gold: false, silver: false });
  const [slideDiamond, setSlideDiamond] = useState(0);
  const [slideGold, setSlideGold] = useState(0);

  // 1. CARREGAR DADOS E PERSISTIR FILTRO
  useEffect(() => {
    const salvo = localStorage.getItem('pøliva_filtro_nicho');
    if (salvo) setFiltroNicho(salvo);

    const gerarParceiros = () => {
      const zonas = [
        { bairro: "Passagem", nichos: ["Cafeterias", "Gastronomia"], peso: 0.45 },
        { bairro: "Praia do Forte", nichos: ["Noite", "Lifestyle"], peso: 0.30 },
        { bairro: "Centro", nichos: ["Gastronomia", "Lifestyle", "Noite"], peso: 0.15 },
        { bairro: "Peró", nichos: ["Experiências", "Cafeterias"], peso: 0.10 }
      ];
      const getGeoloc = () => {
        const rand = Math.random();
        let acumulado = 0;
        for (let z of zonas) {
          acumulado += z.peso;
          if (rand <= acumulado) return { bairro: z.bairro, nicho: z.nichos[Math.floor(Math.random() * z.nichos.length)] };
        }
        return { bairro: "Passagem", nicho: "Cafeterias" };
      };

      const d = Array.from({ length: 30 }, (_, i) => ({ id: `d${i}`, nome: `Diamond ${i + 1}`, ...getGeoloc(), status: Math.random() > 0.2 ? 'disponivel' : 'esgotado', img: "/ao-vivo-show.jpg", bio: "Experiência Embaixador Pøliva." }));
      const g = Array.from({ length: 50 }, (_, i) => ({ id: `g${i}`, nome: `Gold ${i + 1}`, ...getGeoloc(), status: Math.random() > 0.3 ? 'disponivel' : 'esgotado', img: "/quadrado-show.png", beneficio: "Vantagem Gold" }));
      const s = Array.from({ length: 100 }, (_, i) => ({ id: `s${i}`, nome: `Silver ${i + 1}`, ...getGeoloc(), beneficio: "Ponto Oficial" }));
      return { diamond: d, gold: g, silver: s };
    };

    const iniciais = gerarParceiros();
    const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
    setData({ diamond: shuffle(iniciais.diamond), gold: shuffle(iniciais.gold), silver: shuffle(iniciais.silver) });
  }, []);

  // 2. SALVAR FILTRO NO STORAGE
  useEffect(() => {
    localStorage.setItem('pøliva_filtro_nicho', filtroNicho);
  }, [filtroNicho]);

  // 3. SHUFFLE RÁPIDO (2.5s)
  useEffect(() => {
    const timerD = setInterval(() => setSlideDiamond(prev => (prev + 1) % 10), 2500);
    const timerG = setInterval(() => setSlideGold(prev => (prev + 1) % 10), 2500);
    return () => { clearInterval(timerD); clearInterval(timerG); };
  }, []);

  const nichos = ["Todos", "Cafeterias", "Gastronomia", "Noite", "Experiências", "Lifestyle"];
  const bairros = ["Todos", "Passagem", "Praia do Forte", "Centro", "Peró"];

  const filtrar = (lista) => {
    let res = lista;
    if (filtroNicho !== 'Todos') res = res.filter(p => p.nicho === filtroNicho);
    if (filtroBairro !== 'Todos') res = res.filter(p => p.bairro === filtroBairro);
    return res;
  };

  const toggleShow = (tier) => setShowAll(prev => ({ ...prev, [tier]: !prev[tier] }));

  return (
    <div className="mapa-page">
      <Head><title>mapa cultural | pølivessense</title></Head>

      <main className="mapa-container">
        <header className="mapa-header anim-fade-in">
          <div className="voltar-btn"><a href="/">← vøltar ao portal</a></div>
          <h1 className="title-brutal">MAPA CULTURAL PØLIVA</h1>
          <p className="subtitle">CABO FRIO: O RITO DA ECONOMIA CRIATIVA</p>
        </header>

        {/* MAPA MÍSTICO */}
        <section className="map-wrapper">
          <div className="map-frame">
            <div className="map-overlay">
              <div className="pin-aura" style={{top: '45%', left: '55%'}}>Ø</div>
              <div className="pin-aura" style={{top: '30%', left: '40%'}}>Ø</div>
            </div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3679.526284643!2d-42.022!3d-22.884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x971ad48545!2sCabo%20Frio!5e0!3m2!1spt-BR!2sbr!4v1!5m2!1spt-BR!2sbr" 
              width="100%" height="450" style={{border:0, filter: 'invert(90%) contrast(120%) brightness(0.6) hue-rotate(240deg)'}}>
            </iframe>
          </div>
        </section>

        {/* CONTROLES DE FILTRO */}
        <nav className="filter-controls sticky">
          <div className="filter-group">
            <small>Filtrar Nicho:</small>
            <div className="buttons">
              {nichos.map(n => <button key={n} className={filtroNicho === n ? 'active' : ''} onClick={() => setFiltroNicho(n)}>{n}</button>)}
            </div>
          </div>
          <div className="filter-group">
            <small>Filtrar Bairro:</small>
            <div className="buttons">
              {bairros.map(b => <button key={b} className={filtroBairro === b ? 'active' : ''} onClick={() => setFiltroBairro(b)}>{b}</button>)}
            </div>
          </div>
        </nav>

        {/* DIAMOND */}
        <section className="section-tier">
          <div className="tier-header">
            <h3 className="label-tier diamond-text">✦ EMBAIXADORES DIAMOND ✦</h3>
            <button onClick={() => toggleShow('diamond')} className="ver-mais-btn">{showAll.diamond ? 'Recolher' : 'Ver Todos'}</button>
          </div>
          <div className={showAll.diamond ? "grid-full" : "slider-container"}>
            {filtrar(data.diamond).slice(showAll.diamond ? 0 : slideDiamond, showAll.diamond ? undefined : slideDiamond + 1).map(p => (
              <div key={p.id} className="diamond-card-brutal anim-fade-in">
                <div className="img-box"><img src={p.img} /><div className="badge">{p.bairro}</div></div>
                <div className="info-box">
                  <div className={`status ${p.status}`}>● {p.status.toUpperCase()}</div>
                  <h2>{p.nome}</h2>
                  <p>{p.bio}</p>
                  <a href="#" className="btn-portal">RESGATAR PORTAL VIP</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GOLD */}
        <section className="section-tier">
          <div className="tier-header">
            <h3 className="label-tier gold-text">✧ PARCEIROS GOLD ✧</h3>
            <button onClick={() => toggleShow('gold')} className="ver-mais-btn">{showAll.gold ? 'Recolher' : 'Ver Todos'}</button>
          </div>
          <div className={showAll.gold ? "gold-grid-full" : "slider-container"}>
            {filtrar(data.gold).slice(showAll.gold ? 0 : slideGold, showAll.gold ? undefined : slideGold + 1).map(p => (
              <div key={p.id} className="gold-card-horizontal anim-fade-in">
                <img src={p.img} />
                <div className="gold-info">
                  <h4>{p.nome}</h4>
                  <p>{p.bairro} • {p.beneficio}</p>
                  <a href="#" className="btn-gold">PEGAR CUPOM</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SILVER */}
        <section className="section-tier">
          <div className="tier-header">
            <h3 className="label-tier silver-text">⬦ ROTA SILVER ⬦</h3>
            <button onClick={() => toggleShow('silver')} className="ver-mais-btn">{showAll.silver ? 'Recolher' : 'Ver Todos'}</button>
          </div>
          <div className="silver-compact">
            {filtrar(data.silver).slice(0, showAll.silver ? undefined : 10).map(p => (
              <div key={p.id} className="silver-row anim-fade-in">
                <span className="name">{p.nome}</span>
                <span className="dot"></span>
                <span className="loc">{p.bairro}</span>
                <span className="tag">{p.beneficio}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <style jsx>{`
        .mapa-page { background: #000; min-height: 100vh; color: #fff; padding-bottom: 100px; }
        .mapa-container { max-width: 1100px; margin: 0 auto; padding: 20px; }
        .title-brutal { font-size: clamp(30px, 10vw, 70px); font-weight: 900; text-align: center; line-height: 1; }
        .subtitle { text-align: center; font-size: 11px; letter-spacing: 5px; opacity: 0.5; margin-bottom: 50px; }

        .map-wrapper { border: 1px solid #222; margin-bottom: 40px; position: relative; overflow: hidden; }
        .map-overlay { position: absolute; width: 100%; height: 100%; pointer-events: none; z-index: 5; }
        .pin-aura { position: absolute; color: #a855f7; font-size: 20px; font-weight: 900; text-shadow: 0 0 15px #a855f7; animation: pulse 2s infinite; }
        @keyframes pulse { 0% { transform: scale(1); opacity: 0.5; } 50% { transform: scale(1.3); opacity: 1; } 100% { transform: scale(1); opacity: 0.5; } }

        .filter-controls { background: rgba(0,0,0,0.95); padding: 20px; border-bottom: 1px solid #111; z-index: 100; margin-bottom: 80px; }
        .filter-controls.sticky { position: sticky; top: 0; }
        .filter-group { margin-bottom: 15px; }
        .filter-group small { color: #555; text-transform: uppercase; font-size: 9px; letter-spacing: 2px; display: block; margin-bottom: 10px; }
        .buttons { display: flex; gap: 8px; flex-wrap: wrap; }
        .buttons button { background: none; border: 1px solid #222; color: #666; padding: 8px 15px; font-size: 10px; cursor: pointer; text-transform: uppercase; transition: 0.3s; }
        .buttons button.active { border-color: #a855f7; color: #fff; background: #a855f722; }

        .section-tier { margin-bottom: 100px; }
        .tier-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #111; padding-bottom: 15px; margin-bottom: 30px; }
        .label-tier { font-size: 11px; letter-spacing: 3px; }
        .ver-mais-btn { background: none; border: 1px solid #a855f7; color: #a855f7; font-size: 10px; padding: 5px 12px; cursor: pointer; text-transform: uppercase; }

        .grid-full { display: grid; grid-template-columns: 1fr; gap: 40px; }
        .gold-grid-full { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

        .diamond-card-brutal { display: grid; grid-template-columns: 1fr 1fr; background: #080808; border: 1px solid #222; }
        .img-box { height: 400px; position: relative; }
        .img-box img { width: 100%; height: 100%; object-fit: cover; }
        .badge { position: absolute; bottom: 20px; left: 20px; background: #a855f7; color: #000; padding: 5px 12px; font-weight: 900; font-size: 10px; }
        .info-box { padding: 40px; display: flex; flex-direction: column; justify-content: center; }
        .status.disponivel { color: #22c55e; font-weight: 900; font-size: 10px; margin-bottom: 15px; }
        .btn-portal { background: #a855f7; color: #000; padding: 18px; text-align: center; text-decoration: none; font-weight: 900; margin-top: 25px; }

        .gold-card-horizontal { display: flex; background: #050505; border: 1px solid #222; }
        .gold-card-horizontal img { width: 180px; height: 180px; object-fit: cover; }
        .gold-info { padding: 30px; }
        .btn-gold { color: #d4af37; border: 1px solid #d4af37; text-decoration: none; padding: 8px 15px; font-size: 11px; display: inline-block; margin-top: 15px; }

        .silver-compact { background: #050505; border: 1px solid #111; }
        .silver-row { display: flex; align-items: center; padding: 20px; border-bottom: 1px solid #111; font-size: 14px; }
        .silver-divider { flex-grow: 1; border-bottom: 1px dotted #333; margin: 0 20px; }
        .tag { color: #a855f7; font-weight: bold; }

        @media (max-width: 900px) {
          .diamond-card-brutal { grid-template-columns: 1fr; }
          .gold-grid-full { grid-template-columns: 1fr; }
          .img-box { height: 250px; }
        }

        .anim-fade-in { animation: fadeIn 0.6s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}