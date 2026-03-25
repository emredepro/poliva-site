import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function MapaCultural() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filtroAtivo, setFiltroAtivo] = useState('Todos');
  const [data, setData] = useState({ diamond: [], gold: [], silver: [] });

  // 1. BASE DE DADOS DOS PARCEIROS
  const parceirosIniciais = {
    diamond: [
      { id: 1, nome: "EXEMPLO DIAMOND", nicho: "Noite", img: "/ao-vivo-show.jpg", link: "https://wa.me/22988023803?text=Vim+pelo+Mapa+e+quero+meu+VIP+Diamond", bio: "Onde o Rock encontra o sabor em Cabo Frio.", bairro: "Passagem", status: "disponivel" }
    ],
    gold: [
      { id: 2, nome: "CAFÉ DO ROCK", nicho: "Cafeterias", img: "/quadrado-show.png", link: "https://wa.me/22988023803?text=Quero+meu+Cupom+Gold+Cafe", bairro: "Centro", beneficio: "Shot de Café Grátis", status: "disponivel" },
      { id: 3, nome: "LOJA VIBE", nicho: "Lifestyle", img: "/patterns_poliva_simbolos-07.jpg", link: "https://wa.me/22988023803?text=Quero+meu+Cupom+Gold+Vibe", bairro: "Vila Nova", beneficio: "15% OFF", status: "esgotado" }
    ],
    silver: [
      { id: 4, nome: "Bistrô da Vila", nicho: "Gastronomia", bairro: "Braga", beneficio: "Sobremesa Cortesia" },
      { id: 5, nome: "Surf Shop CF", nicho: "Lifestyle", bairro: "Peró", beneficio: "Sorteio Mensal" }
    ]
  };

  // 2. RITO DO SHUFFLE (Embaralhamento Automático)
  useEffect(() => {
    const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);
    setData({
      diamond: shuffle(parceirosIniciais.diamond),
      gold: shuffle(parceirosIniciais.gold),
      silver: shuffle(parceirosIniciais.silver)
    });
  }, []);

  const nichos = ["Todos", "Cafeterias", "Gastronomia", "Noite", "Experiências", "Lifestyle"];

  const filtrar = (lista) => {
    if (filtroAtivo === 'Todos') return lista;
    return lista.filter(p => p.nicho === filtroAtivo);
  };

  return (
    <div className="mapa-page">
      <Head>
        <title>mapa cultural | pøliva cf</title>
      </Head>

      <main className="mapa-container">
        <header className="mapa-header anim-fade-in">
          <div className="voltar-btn"><a href="/">← vøltar</a></div>
          <h1 className="title-glitch">MAPA CULTURAL PØLIVA</h1>
          <p className="subtitle">CABO FRIO: O EPICENTRO DO NOVO ROCK AUTORAL</p>
          
          {/* 3. MENU DE FILTROS (STICKY) */}
          <nav className="filter-nav">
            {nichos.map(n => (
              <button 
                key={n} 
                className={filtroAtivo === n ? 'active' : ''} 
                onClick={() => setFiltroAtivo(n)}
              >
                {n}
              </button>
            ))}
          </nav>
        </header>

        {/* 4. SEÇÃO DIAMOND */}
        {filtrar(data.diamond).length > 0 && (
          <section className="section-tier anim-fade-up">
            <h3 className="label-tier diamond-text">✦ EMBAIXADORES DIAMOND ✦</h3>
            {filtrar(data.diamond).map(p => (
              <div key={p.id} className="diamond-card-brutal">
                <div className="img-wrapper">
                  <img src={p.img} alt={p.nome} />
                  <div className="badge-bairro">{p.bairro}</div>
                </div>
                <div className="content-card">
                  <div className={`status-tag ${p.status}`}>{p.status === 'disponivel' ? '● DISPONÍVEL' : '● ESGOTADO HOJE'}</div>
                  <h2>{p.nome}</h2>
                  <p className="bio-diamond">{p.bio}</p>
                  <a href={p.link} className={`btn-resgate-diamond ${p.status}`}>
                    {p.status === 'disponivel' ? 'RESGATAR BENEFÍCIO VIP' : 'PORTAL FECHADO'}
                  </a>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* 5. SEÇÃO GOLD */}
        {filtrar(data.gold).length > 0 && (
          <section className="section-tier anim-fade-up">
            <h3 className="label-tier gold-text">✧ PARCEIROS GOLD ✧</h3>
            <div className="gold-grid">
              {filtrar(data.gold).map(p => (
                <div key={p.id} className={`gold-card-brutal ${p.status}`}>
                  <div className="gold-img-box">
                      <img src={p.img} alt={p.nome} />
                      <div className="gold-benefit">{p.beneficio}</div>
                  </div>
                  <h4>{p.nome}</h4>
                  <p>{p.bairro}</p>
                  <a href={p.link} className="btn-gold-link">
                    {p.status === 'disponivel' ? 'PEGAR CUPOM' : 'ESGOTADO'}
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6. SEÇÃO SILVER */}
        {filtrar(data.silver).length > 0 && (
          <section className="section-tier anim-fade-up">
            <h3 className="label-tier silver-text">⬦ ROTA SILVER ⬦</h3>
            <div className="silver-list">
              {filtrar(data.silver).map(p => (
                <div key={p.id} className="silver-item">
                  <span className="silver-nome">{p.nome}</span>
                  <span className="silver-divider"></span>
                  <span className="silver-bairro">{p.bairro}</span>
                  <span className="silver-tag">{p.beneficio}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <style jsx>{`
        .mapa-page { background: #000; min-height: 100vh; color: #fff; padding-bottom: 100px; }
        .mapa-container { max-width: 1100px; margin: 0 auto; padding: 20px; }
        
        .voltar-btn a { color: #a855f7; text-decoration: none; font-size: 11px; letter-spacing: 2px; }
        .mapa-header { text-align: center; padding-top: 60px; margin-bottom: 80px; }
        .title-glitch { font-size: clamp(32px, 8vw, 60px); font-weight: 900; letter-spacing: -2px; line-height: 0.9; }
        .subtitle { font-size: 11px; letter-spacing: 4px; opacity: 0.5; margin-top: 20px; }

        .filter-nav { display: flex; justify-content: center; gap: 10px; margin-top: 40px; flex-wrap: wrap; position: sticky; top: 100px; z-index: 100; }
        .filter-nav button { background: none; border: 1px solid #222; color: #666; padding: 10px 20px; cursor: pointer; transition: 0.4s; font-size: 12px; text-transform: uppercase; }
        .filter-nav button.active { border-color: #a855f7; color: #fff; background: rgba(168, 85, 247, 0.1); }

        .section-tier { margin-bottom: 100px; }
        .label-tier { text-align: center; font-size: 10px; letter-spacing: 5px; margin-bottom: 40px; opacity: 0.7; }
        
        .diamond-card-brutal { display: grid; grid-template-columns: 1.2fr 1fr; border: 1px solid #333; background: #080808; }
        .img-wrapper { position: relative; height: 450px; }
        .img-wrapper img { width: 100%; height: 100%; object-fit: cover; }
        .content-card { padding: 50px; display: flex; flex-direction: column; justify-content: center; }
        
        .status-tag { font-size: 10px; margin-bottom: 15px; font-weight: bold; }
        .status-tag.disponivel { color: #22c55e; }
        .status-tag.esgotado { color: #ef4444; }

        .btn-resgate-diamond { padding: 20px; text-align: center; font-weight: 900; text-decoration: none; transition: 0.4s; }
        .btn-resgate-diamond.disponivel { background: #a855f7; color: #000; }
        .btn-resgate-diamond.esgotado { background: #222; color: #444; pointer-events: none; }

        .gold-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
        .gold-card-brutal { border: 1px solid #222; padding: 20px; background: #050505; }
        .gold-card-brutal.esgotado { opacity: 0.5; filter: grayscale(1); }
        .gold-img-box { position: relative; height: 200px; margin-bottom: 15px; }
        .gold-img-box img { width: 100%; height: 100%; object-fit: cover; }
        .gold-benefit { position: absolute; top: 10px; right: 10px; background: #d4af37; color: #000; padding: 5px 10px; font-size: 10px; font-weight: 900; }
        .btn-gold-link { color: #d4af37; text-decoration: none; font-weight: bold; font-size: 12px; }

        .silver-item { display: flex; align-items: center; padding: 20px 0; border-bottom: 1px solid #111; }
        .silver-nome { font-size: 18px; font-weight: bold; }
        .silver-divider { flex-grow: 1; border-bottom: 1px dotted #222; margin: 0 20px; }
        .silver-tag { color: #a855f7; font-size: 12px; }

        @media (max-width: 900px) {
          .diamond-card-brutal { grid-template-columns: 1fr; }
          .img-wrapper { height: 250px; }
          .content-card { padding: 30px; }
        }

        .anim-fade-up { opacity: 0; transform: translateY(20px); animation: revealUp 0.6s forwards; }
        @keyframes revealUp { to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}