import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function MapaCultural() {
  const [filtroAtivo, setFiltroAtivo] = useState('Todos');
  const [data, setData] = useState({ diamond: [], gold: [], silver: [] });

  useEffect(() => {
    const gerarParceiros = () => {
      // MAPEAMENTO FOCO TOTAL: PASSAGEM, PRAIA DO FORTE, CENTRO E PERÓ
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
          if (rand <= acumulado) {
            return {
              bairro: z.bairro,
              nicho: z.nichos[Math.floor(Math.random() * z.nichos.length)]
            };
          }
        }
        return { bairro: "Passagem", nicho: "Cafeterias" };
      };

      // GERAÇÃO DIAMOND (30)
      const d = Array.from({ length: 30 }, (_, i) => {
        const geo = getGeoloc();
        return {
          id: `d${i}`,
          nome: `Diamond ${String(i + 1).padStart(2, '0')}`,
          nicho: geo.nicho,
          bairro: geo.bairro,
          status: Math.random() > 0.2 ? 'disponivel' : 'esgotado',
          img: "/ao-vivo-show.jpg",
          bio: `O portal oficial da ${geo.nicho} na ${geo.bairro}. Experiência curada por pøliva.`
        };
      });

      // GERAÇÃO GOLD (50)
      const g = Array.from({ length: 50 }, (_, i) => {
        const geo = i % 2 === 0 ? getGeoloc() : { bairro: "Passagem", nicho: "Cafeterias" };
        return {
          id: `g${i}`,
          nome: `Gold ${String(i + 1).padStart(2, '0')}`,
          nicho: geo.nicho,
          bairro: geo.bairro,
          status: Math.random() > 0.3 ? 'disponivel' : 'esgotado',
          img: "/quadrado-show.png",
          beneficio: geo.nicho === "Cafeterias" ? "Shot de Café" : "15% de Desconto"
        };
      });

      // GERAÇÃO SILVER (100)
      const s = Array.from({ length: 100 }, (_, i) => {
        const geo = getGeoloc();
        return {
          id: `s${i}`,
          nome: `Silver ${String(i + 1).padStart(2, '0')}`,
          nicho: geo.nicho,
          bairro: geo.bairro,
          beneficio: "Ponto Cultural Oficial"
        };
      });

      return { diamond: d, gold: g, silver: s };
    };

    const iniciais = gerarParceiros();
    const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
    setData({
      diamond: shuffle(iniciais.diamond),
      gold: shuffle(iniciais.gold),
      silver: shuffle(iniciais.silver)
    });
  }, []);

  const nichosMenu = ["Todos", "Cafeterias", "Gastronomia", "Noite", "Experiências", "Lifestyle"];

  const filtrar = (lista) => {
    if (filtroAtivo === 'Todos') return lista;
    return lista.filter(p => p.nicho === filtroAtivo);
  };

  return (
    <div className="mapa-page">
      <Head>
        <title>O que fazer em Cabo Frio | Mapa Cultural Pøliva</title>
        <meta name="description" content="Guia autoral de Cabo Frio: Passagem, Praia do Forte e Peró. Resgate benefícios exclusivos no portal pølivessense." />
      </Head>

      <section className="map-section">
        <div className="map-overlay">
           <div className="map-ui">
             <span className="pulse-dot"></span>
             <p>Visualizando 180 portais ativos em Cabo Frio</p>
           </div>
        </div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14713.84711854581!2d-42.025211!3d-22.885141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x971ad483f987ad%3A0x28974f07a16f272a!2sCabo%20Frio%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr" 
          width="100%" height="450" style={{border:0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8)'}} allowFullScreen="" loading="lazy">
        </iframe>
      </section>

      <main className="mapa-container">
        <header className="mapa-header">
          <div className="voltar-btn"><a href="/">← vøltar ao portal</a></div>
          <h1 className="title-glitch">MAPA CULTURAL PØLIVA</h1>
          
          <nav className="filter-nav sticky">
            {nichosMenu.map(n => (
              <button key={n} className={filtroAtivo === n ? 'active' : ''} onClick={() => setFiltroAtivo(n)}>
                {n}
              </button>
            ))}
          </nav>
        </header>

        <section className="section-tier">
          <h3 className="label-tier diamond-text">✦ EMBAIXADORES DIAMOND (PORTAL VIP) ✦</h3>
          <div className="diamond-list">
            {filtrar(data.diamond).map(p => (
              <div key={p.id} className="diamond-card-brutal anim-fade-up">
                <div className="img-wrapper">
                  <img src={p.img} alt={p.nome} />
                  <div className="badge-bairro">{p.bairro}</div>
                </div>
                <div className="content-card">
                  <div className={`status-tag ${p.status}`}>{p.status === 'disponivel' ? '● DISPONÍVEL' : '● ESGOTADO HOJE'}</div>
                  <h2>{p.nome}</h2>
                  <p className="bio-diamond">{p.bio}</p>
                  <a href={`https://wa.me/22988023803?text=Quero+VIP+${p.nome}`} className={`btn-resgate-diamond ${p.status}`}>
                    {p.status === 'disponivel' ? 'RESGATAR PORTAL VIP' : 'PORTAL FECHADO'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-tier">
          <h3 className="label-tier gold-text">✧ PARCEIROS GOLD (VANTAGENS) ✧</h3>
          <div className="gold-grid">
            {filtrar(data.gold).map(p => (
              <div key={p.id} className={`gold-card-brutal ${p.status} anim-fade-up`}>
                <div className="gold-img-box">
                    <img src={p.img} alt={p.nome} />
                    <div className="gold-benefit">{p.beneficio}</div>
                </div>
                <h4>{p.nome}</h4>
                <p>{p.bairro} • {p.nicho}</p>
                <a href="#" className="btn-gold-link">{p.status === 'disponivel' ? 'PEGAR CUPOM' : 'ESGOTADO'}</a>
              </div>
            ))}
          </div>
        </section>

        <section className="section-tier">
          <h3 className="label-tier silver-text">⬦ ROTA SILVER (PONTOS OFICIAIS) ⬦</h3>
          <div className="silver-list">
            {filtrar(data.silver).map(p => (
              <div key={p.id} className="silver-item anim-fade-up">
                <span className="silver-nome">{p.nome}</span>
                <span className="silver-divider"></span>
                <span className="silver-bairro">{p.bairro}</span>
                <span className="silver-tag">{p.beneficio}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <style jsx>{`
        .mapa-page { background: #000; min-height: 100vh; color: #fff; padding-bottom: 100px; font-family: inherit; }
        .map-section { position: relative; border-bottom: 1px solid #222; }
        .map-overlay { position: absolute; top: 20px; left: 20px; z-index: 10; pointer-events: none; }
        .map-ui { background: rgba(0,0,0,0.8); padding: 10px 20px; border: 1px solid #a855f7; border-radius: 40px; display: flex; align-items: center; gap: 10px; }
        .pulse-dot { width: 8px; height: 8px; background: #a855f7; border-radius: 50%; animation: pulse 1.5s infinite; }
        @keyframes pulse { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(3); opacity: 0; } }

        .mapa-container { max-width: 1200px; margin: 0 auto; padding: 20px; }
        .voltar-btn { margin: 40px 0; }
        .voltar-btn a { color: #a855f7; text-decoration: none; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; }
        
        .title-glitch { font-size: clamp(30px, 10vw, 70px); font-weight: 900; text-align: center; margin-bottom: 60px; }
        
        .filter-nav { display: flex; justify-content: center; gap: 8px; flex-wrap: wrap; margin-bottom: 80px; padding: 20px; background: black; border-radius: 10px; transition: 0.3s; }
        .filter-nav.sticky { position: sticky; top: 10px; z-index: 100; box-shadow: 0 10px 40px rgba(0,0,0,0.9); border: 1px solid #111; }
        .filter-nav button { background: #080808; border: 1px solid #222; color: #555; padding: 12px 24px; cursor: pointer; transition: 0.4s; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: bold; }
        .filter-nav button.active { border-color: #a855f7; color: #fff; background: #a855f722; box-shadow: 0 0 15px #a855f722; }

        .section-tier { margin-bottom: 120px; }
        .label-tier { text-align: center; font-size: 11px; letter-spacing: 4px; margin-bottom: 50px; opacity: 0.6; }
        
        .diamond-list { display: flex; flex-direction: column; gap: 60px; }
        .diamond-card-brutal { display: grid; grid-template-columns: 1.3fr 1fr; border: 1px solid #222; background: #050505; min-height: 450px; transition: 0.4s; }
        .img-wrapper { position: relative; overflow: hidden; }
        .img-wrapper img { width: 100%; height: 100%; object-fit: cover; opacity: 0.7; transition: 0.8s; }
        .diamond-card-brutal:hover img { opacity: 1; transform: scale(1.05); }
        .badge-bairro { position: absolute; bottom: 30px; left: 30px; background: #a855f7; color: #000; padding: 6px 15px; font-weight: 900; font-size: 12px; }

        .content-card { padding: 60px; display: flex; flex-direction: column; justify-content: center; }
        .status-tag { font-size: 10px; font-weight: 900; margin-bottom: 20px; letter-spacing: 1px; }
        .status-tag.disponivel { color: #22c55e; }
        .status-tag.esgotado { color: #ef4444; }

        .btn-resgate-diamond { padding: 22px; text-align: center; font-weight: 900; text-decoration: none; transition: 0.4s; letter-spacing: 2px; }
        .btn-resgate-diamond.disponivel { background: #a855f7; color: #000; }
        .btn-resgate-diamond.esgotado { background: #111; color: #333; pointer-events: none; }

        .gold-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 40px; }
        .gold-card-brutal { background: #080808; border: 1px solid #222; padding: 20px; transition: 0.4s; }
        .gold-card-brutal.esgotado { opacity: 0.4; filter: grayscale(1); }
        .gold-img-box { position: relative; height: 220px; margin-bottom: 20px; }
        .gold-img-box img { width: 100%; height: 100%; object-fit: cover; }
        .gold-benefit { position: absolute; top: 10px; right: 10px; background: #d4af37; color: #000; padding: 5px 12px; font-size: 10px; font-weight: 900; }
        .btn-gold-link { color: #d4af37; text-decoration: none; font-weight: bold; font-size: 12px; border-bottom: 1px solid transparent; transition: 0.3s; }
        .btn-gold-link:hover { border-bottom-color: #d4af37; }

        .silver-item { display: flex; align-items: center; padding: 25px 0; border-bottom: 1px solid #111; transition: 0.3s; }
        .silver-item:hover { background: #050505; padding-left: 15px; }
        .silver-nome { font-size: 18px; font-weight: bold; min-width: 180px; }
        .silver-divider { flex-grow: 1; border-bottom: 1px dotted #222; margin: 0 20px; }
        .silver-tag { color: #a855f7; font-size: 11px; font-weight: bold; text-transform: uppercase; }

        @media (max-width: 1024px) {
          .diamond-card-brutal { grid-template-columns: 1fr; }
          .img-wrapper { height: 300px; }
          .content-card { padding: 30px; }
        }

        .anim-fade-up { opacity: 0; transform: translateY(20px); animation: revealUp 0.6s forwards; }
        @keyframes revealUp { to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}