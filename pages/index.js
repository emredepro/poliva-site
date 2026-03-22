import React, { useState, useEffect } from 'react';

export default function Inicio() {
  const playlists = [
    { title: "4 horas de música para despertar o fim de semana", img: "/capa-playlist-1.jpg" },
    { title: "Curtindo a estrada com rocks inesquecíveis", img: "/capa-playlist-2.jpg" },
    { title: "Rock matinal para começar bem o dia", img: "/capa-playlist-3.jpg" },
    { title: "Sessão portal para transcender a rotina", img: "/capa-playlist-4.jpg" } // Exemplo extra para fluidez
  ];

  // Estado para Carrossel Auto-Play
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % playlists.length);
    }, 5000); // Muda a cada 5 segundos
    return () => clearInterval(timer);
  }, [playlists.length]);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'black', color: 'white', overflowX: 'hidden', fontFamily: "'Avant Garde', sans-serif" }}>
      
      {/* 1. SISTEMA PORTAL: VÍDEO COM MOVIMENTO PARALLAX INVERSO (MANTIDO -10%) */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, backgroundColor: 'black', overflow: 'hidden' }}>
        <video autoPlay muted loop playsInline style={{ position: 'absolute', width: '100%', height: '140%', top: '-10%', left: 0, objectFit: 'cover', opacity: 0.35 }}>
          <source src="/video-home-loop.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, transparent 20%, black 120%)' }}></div>
      </div>

      {/* 2. CONTEÚDO COM MOVIMENTO PROGRESSIVO DE REVELAÇÃO (ATIVAÇÃO) */}
      <div style={{ position: 'relative', zIndex: 10, animation: 'contentReveal 1.2s ease-out forwards' }}>
        
        {/* MENU COM LOGO DESLOCADA 20% PARA O CENTRO E INTERATIVIDADE */}
        <nav style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(15px)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '15px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
          <div style={{ position: 'absolute', left: '20%', transform: 'translateX(-50%)' }}>
            <img src="/logo-poliva.png" alt="Pøliva Logo" style={{ width: '110px' }} />
          </div>
          <div style={{ display: 'flex', gap: '30px', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
            <a href="#" className="nav-item">iníciø</a>
            <a href="#" className="nav-item">søbre pøliva</a>
            <a href="#" className="nav-item">shøws aø vivø</a>
            <a href="#" className="nav-item">singles & álbuns</a>
            <a href="#" className="nav-item">agenda</a>
            <a href="#" className="nav-item">cøntatø</a>
          </div>
        </nav>

        <main style={{ paddingTop: '220px', textAlign: 'center', maxWidth: '1200px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
          
          {/* TÍTULO E CITAÇÃO */}
          <section style={{ marginBottom: '140px' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 'bold', lineHeight: '1.1', marginBottom: '40px', letterSpacing: '-0.02em' }}>
              Música que desperta, <br/>
              <span style={{ color: 'rgba(168, 85, 247, 0.8)' }}>Show que vira portal</span>
            </h1>

            <div style={{ maxWidth: '650px', margin: '0 auto', textAlign: 'left', borderLeft: '2px solid rgba(126, 34, 206, 0.5)', paddingLeft: '30px', color: '#a1a1aa', fontSize: '17px', lineHeight: '1.7', fontStyle: 'italic' }}>
              <p>&quot;A música não é apenas entretenimento; ela é portal. Não é só sobre tocar música, é sobre atravessá-la. Eu faço músicas e também canto músicas que transformam a mim e a outras pessoas&quot;</p>
              <span style={{ display: 'block', fontStyle: 'normal', color: '#a855f7', fontWeight: 'bold', marginTop: '20px', letterSpacing: '0.4em', fontSize: '11px', textTransform: 'uppercase' }}>— Poliva Soham</span>
            </div>
          </section>

          {/* CAIXA DO SHOW - DESIGN "GLASS" COMPACTO (RENTE ÀS LETRAS) E HOVER */}
          <section style={{ marginBottom: '160px' }}>
            <div className="compact-glass-box" style={{ 
              maxWidth: '800px', margin: '0 auto 30px', 
              padding: '20px 40px', // Reduzido drasticamente para moldar as letras
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(168, 85, 247, 0.3)', 
              borderRadius: '4px', backdropFilter: 'blur(5px)', transition: 'all 0.4s ease', cursor: 'pointer'
            }}>
              <h2 style={{ fontSize: '24px', letterSpacing: '0.1em', fontWeight: 'bold', color: 'white' }}>pølivessense, o show:</h2>
              <p style={{ fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#a855f7', marginTop: '5px' }}>assista abaixo na íntegra</p>
            </div>

            {/* PLAYER YOUTUBE (-15%) */}
            <div style={{ width: '100%', maxWidth: '720px', aspectRatio: '16/9', margin: '0 auto 150px', boxShadow: '0 0 50px rgba(0,0,0,1)' }}>
               <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ID_DO_VIDEO" frameBorder="0" allowFullScreen style={{ borderRadius: '4px' }}></iframe>
            </div>
          </section>

          {/* CARROSSEL PONTA A PONTA (AUTO-PLAY & MAIOR) */}
          <section style={{ marginBottom: '180px', width: '100vw', marginLeft: '50%', transform: 'translateX(-50%)' }}>
            {/* TÍTULO PLAYLISTS - PADRÃO ALINHADO */}
            <div className="compact-glass-box" style={{ 
              maxWidth: '800px', margin: '0 auto 50px', 
              padding: '20px 40px',
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(168, 85, 247, 0.3)', 
              borderRadius: '4px', backdropFilter: 'blur(5px)'
            }}>
               <h3 style={{ fontSize: '20px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'white', fontWeight: 'bold' }}>playlists para as melhores ocasiões:</h3>
               <p style={{ fontSize: '18px', color: '#a855f7', marginTop: '10px' }}>o que o seu momento pede?</p>
            </div>

            {/* DOTS DE NAVEGAÇÃO NO ALTO */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '30px' }}>
              {playlists.map((_, i) => (
                <div key={i} onClick={() => setCurrentIndex(i)} style={{ 
                  width: '10px', height: '10px', borderRadius: '50%', cursor: 'pointer',
                  backgroundColor: currentIndex === i ? '#a855f7' : 'rgba(255,255,255,0.2)',
                  transition: '0.3s'
                }} />
              ))}
            </div>
            
            <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
              <div style={{ display: 'flex', transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)', transform: `translateX(-${currentIndex * 100}%)` }}>
                {/* Loop para garantir carrossel infinito */}
                {[...playlists, ...playlists].map((item, index) => (
                  <div key={index} style={{ minWidth: '100%', display: 'flex', justifyContent: 'center', padding: '0 10%' }}>
                    <div className="playlist-card" style={{ width: '100%', maxWidth: '360px', textAlign: 'center' }}> {/* Aumentado em 30% */}
                      <img src={item.img} style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '4px', marginBottom: '25px', border: '1px solid rgba(255,255,255,0.1)' }} />
                      <button className="btn-ouca">OUÇA AQUI</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* RODAPÉ PRETO/BRANCO COMPACTO RENDE À BASE */}
        <footer style={{ backgroundColor: 'black', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '60px 20px 120px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center', color: 'white' }}>
            <h4 style={{ fontSize: '20px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '20px' }}>cøntatø</h4>
            <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
              <p>para shøws e parcerias</p>
              <p>e-mail: contato@polivaoficial.com.br</p>
              <p>redes sociais: @polivaoficial</p>
              <p style={{ marginTop: '10px' }}>telefone: 22 98802-3803</p>
            </div>
            <div style={{ marginTop: '50px', fontSize: '10px', color: 'rgba(255,255,255,0.3)' }}>
              <p>pøliva© 2026. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>

        {/* PLAYER FIXO BASE (LIMPO) */}
        <div style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 100, backgroundColor: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '15px 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <img src="/simbolo-poliva.png" alt="Ø" style={{ width: '35px', height: '35px' }} />
              <div>
                <h4 style={{ fontSize: '11px', fontWeight: 'bold', textTransform: 'lowercase', margin: 0 }}>depressa</h4>
                <p style={{ fontSize: '10px', color: '#71717a', margin: 0 }}>pøliva • 16 de abril</p>
              </div>
            </div>
            {/* REMOVIDO Ø SOLITÁRIO E 432HZ DO CANTO INFERIOR DIREITO */}
          </div>
        </div>

      </div>

      <style jsx global>{`
        /* ANIMAÇÃO DE REVELAÇÃO PROGRESSIVA NO CARREGAMENTO */
        @keyframes contentReveal {
          0% { opacity: 0; transform: translateY(20px); filter: blur(5px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        .nav-item { color: white; transition: 0.3s; text-decoration: none; border-bottom: 1px solid transparent; padding-bottom: 5px; }
        .nav-item:hover { 
          color: #a855f7; 
          border-bottom-color: #a855f7;
          transform: translateY(-2px); /* Levitação sutil */
        }
        
        .compact-glass-box:hover { 
          transform: translateY(-5px); 
          background-color: rgba(168, 85, 247, 0.08);
          border-color: #a855f7;
          box-shadow: 0 10px 40px rgba(168, 85, 247, 0.2);
        }

        .playlist-card img { transition: 0.5s ease; }
        .playlist-card:hover img { 
          transform: scale(1.03); 
          border-color: #a855f7;
        }

        .btn-ouca { 
          background: transparent; 
          border: 1px solid #a855f7; 
          color: #a855f7; 
          fontSize: 11px; 
          padding: 12px 24px; 
          cursor: pointer; 
          letterSpacing: 0.2em;
          textTransform: uppercase;
          transition: 0.3s;
          border-radius: 2px;
        }
        .btn-ouca:hover { 
          background: #a855f7; 
          color: white; 
          transform: translateY(-3px); /* Levitação sutil */
          box-shadow: 0 5px 15px rgba(168, 85, 247, 0.4);
        }
      `}</style>
    </div>
  );
}