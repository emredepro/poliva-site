import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function MapaCultural() {
  const [filtroAtivo, setFiltroAtivo] = useState('Todos');
  const [data, setData] = useState({ diamond: [], gold: [], silver: [] });
  const [slideDiamond, setSlideDiamond] = useState(0);
  const [slideGold, setSlideGold] = useState(0);

  useEffect(() => {
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

  // Autoslide para Diamond e Gold
  useEffect(() => {
    const timerD = setInterval(() => setSlideDiamond(prev => (prev + 1) % 10), 5000);
    const timerG = setInterval(() => setSlideGold(prev => (prev + 1) % 10), 4000);
    return () => { clearInterval(timerD); clearInterval(timerG); };
  }, []);

  const nichosMenu = ["Todos", "Cafeterias", "Gastronomia", "Noite", "Experiências", "Lifestyle"];
  const filtrar = (lista) => filtroAtivo === 'Todos' ? lista : lista.filter(p => p.nicho === filtroAtivo);

  return (
    <div className="mapa-page">
      <Head>
        <title>mapa cultural | pølivessense</title>
      </Head>

      <main className="mapa-container">
        <header className="mapa-header anim-fade-in">
          <div className="voltar-btn"><a href="/">← vøltar</a></div>
          <h1 className="title-brutal">MAPA CULTURAL PØLIVA</h1>
          <p className="subtitle">CABO FRIO: O RITO DA ECONOMIA CRIATIVA</p>
        </header>

        {/* MAPA MÍSTICO */}
        <section className="map-wrapper anim-fade-in">
          <div className="map-frame">
            <div className="map-overlay">
              <div className="pin-aura" style={{top: '40%', left: '50%'}}>Ø</div>
              <div className="pin-aura" style={{top: '60%', left: '30%'}}>Ø</div>
              <div className="pin-aura" style={{top: '20%', left: '70%'}}>Ø</div>
            </div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14717.1!2d-42.02!3d-22.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1" 
              width="100%" height="450" style={{border:0, filter: 'invert(100%) contrast(110%) brightness(0.7) hue-rotate(240deg)'}} allowFullScreen="">
            </iframe>
          </div>
        </section>

        <nav className="filter-nav sticky">
          {nichosMenu.map(n => (
            <button key={n} className={filtroAtivo === n ? 'active' : ''} onClick={() => {setFiltroAtivo(n); setSlideDiamond(0); setSlideGold(0);}}>
              {n}
            </button>
          ))}
        </nav>

        {/* DIAMOND SLIDER */}
        <section className="section-tier">
          <div className="tier-header">
            <h3 className="label-tier diamond-text">✦ EMBAIXADORES DIAMOND ✦</h3>
            <a href="/contato" className="ver-mais">ver mais</a>
          </div>
          <div className="slider-container">
            {filtrar(data.diamond).slice(slideDiamond, slideDiamond + 1).map(p => (
              <div key={p.id} className="diamond-card-full anim-slide-in">
                <div className="img-box"><img src={p.img} /><div className="badge">{p.bairro}</div></div>
                <div className="info-box">
                  <div className={`status ${p.status}`}>{p.status.toUpperCase()}</div>
                  <h2>{p.nome}</h2>
                  <p>{p.bio}</p>
                  <a href="#" className="btn-resgate">RESGATAR PORTAL VIP</a>
                </div>
              </div>
            ))}
            <div className="dots">
              {[...Array(10)].map((_, i) => <span key={i} className={slideDiamond === i ? 'active' : ''} onClick={() => setSlideDiamond(i)}></span>)}
            </div>
          </div>
        </section>

        {/* GOLD SLIDER */}
        <section className="section-tier">
          <div className="tier-header">
            <h3 className="label-tier gold-text">✧ PARCEIROS GOLD ✧</h3>
            <a href="/contato" className="ver-mais">ver mais</a>
          </div>
          <div className="slider-container">
            {filtrar(data.gold).slice(slideGold, slideGold + 1).map(p => (
              <div key={p.id} className="gold-card-horizontal anim-slide-in">
                <img src={p.img} />
                <div className="gold-info">
                   <h4>{p.nome}</h4>
                   <p>{p.bairro} • {p.beneficio}</p>
                   <a href="#" className="btn-gold">PEGAR CUPOM</a>
                </div>
              </div>
            ))}
            <div className="dots">
              {[...Array(10)].map((_, i) => <span key={i} className={slideGold === i ? 'active' : ''} onClick={() => setSlideGold(i)}></span>)}
            </div>
          </div>
        </section>

        {/* SILVER LIST */}
        <section className="section-tier">
          <div className="tier-header">
            <h3 className="label-tier silver-text">⬦ ROTA SILVER ⬦</h3>
            <a href="/contato" className="ver-mais">ver mais</a>
          </div>
          <div className="silver-compact">
            {filtrar(data.silver).slice(0, 10).map(p => (
              <div key={p.id} className="silver-row">
                <span className="name">{p.nome}</span>
                <span className="dot"></span>
                <span className="loc">{p.bairro}</span>
                <span className="gift">{p.beneficio}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <style jsx>{`
        .mapa-page { background: #000; min-height: 100vh; color: #fff; padding-bottom: 100px; }
        .mapa-container { max-width: 1000px; margin: 0 auto; padding: 20px; }
        .title-brutal { font-size: clamp(30px, 8vw, 60px); text-align: center; font-weight: 900; margin-bottom: 10px; }
        .subtitle { text-align: center; font-size: 11px; letter-spacing: 4px; opacity: 0.5; margin-bottom: 50px; }

        .map-wrapper { margin-bottom: 60px; border: 1px solid #222; position: relative; }
        .map-overlay { position: absolute; width: 100%; height: 100%; z-index: 5; pointer-events: none; }
        .pin-aura { position: absolute; color: #a855f7; font-weight: 900; text-shadow: 0 0 15px #a855f7; font-size: 24px; animation: pulse 2s infinite; }
        @keyframes pulse { 0% { opacity: 0.5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.2); } 100% { opacity: 0.5; transform: scale(1); } }

        .filter-nav { display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; padding: 20px; background: black; top: 10px; z-index: 100; margin-bottom: 60px; }
        .filter-nav button { background: #111; border: 1px solid #333; color: #666; padding: 8px 15px; font-size: 10px; cursor: pointer; text-transform: uppercase; }
        .filter-nav button.active { border-color: #a855f7; color: #fff; background: #a855f722; }

        .section-tier { margin-bottom: 80px; }
        .tier-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; border-bottom: 1px solid #111; padding-bottom: 10px; }
        .label-tier { font-size: 11px; letter-spacing: 3px; }
        .ver-mais { font-size: 10px; color: #a855f7; text-transform: uppercase; text-decoration: none; border: 1px solid #a855f7; padding: 5px 10px; }

        /* DIAMOND SLIDE */
        .diamond-card-full { display: grid; grid-template-columns: 1fr 1fr; background: #080808; border: 1px solid #222; }
        .img-box { height: 350px; position: relative; }
        .img-box img { width: 100%; height: 100%; object-fit: cover; }
        .badge { position: absolute; bottom: 20px; left: 20px; background: #a855f7; color: #000; padding: 5px 10px; font-weight: 900; font-size: 10px; }
        .info-box { padding: 40px; display: flex; flex-direction: column; justify-content: center; }
        .status.disponivel { color: #22c55e; font-size: 10px; font-weight: 900; margin-bottom: 10px; }
        .btn-resgate { background: #a855f7; color: #000; text-align: center; padding: 15px; text-decoration: none; font-weight: 900; margin-top: 20px; }

        /* GOLD SLIDE */
        .gold-card-horizontal { display: flex; background: #050505; border: 1px solid #222; align-items: center; }
        .gold-card-horizontal img { width: 150px; height: 150px; object-fit: cover; }
        .gold-info { padding: 20px; }
        .btn-gold { color: #d4af37; border: 1px solid #d4af37; padding: 5px 10px; text-decoration: none; font-size: 11px; margin-top: 10px; display: inline-block; }

        /* SILVER LIST */
        .silver-compact { background: #050505; }
        .silver-row { display: flex; align-items: center; padding: 15px; border-bottom: 1px solid #111; font-size: 13px; }
        .silver-divider { flex-grow: 1; border-bottom: 1px dotted #222; margin: 0 15px; }
        .silver-tag { color: #a855f7; font-weight: bold; margin-left: auto; }

        .dots { display: flex; justify-content: center; gap: 8px; margin-top: 20px; }
        .dots span { width: 6px; height: 6px; background: #333; border-radius: 50%; cursor: pointer; }
        .dots span.active { background: #a855f7; box-shadow: 0 0 10px #a855f7; }

        .anim-slide-in { animation: slideIn 0.5s ease-out; }
        @keyframes slideIn { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }

        @media (max-width: 768px) {
          .diamond-card-full { grid-template-columns: 1fr; }
          .img-box { height: 200px; }
          .gold-card-horizontal img { width: 100px; height: 100px; }
        }
      `}</style>
    </div>
  );
}