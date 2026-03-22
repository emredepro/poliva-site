import React, { useState, useEffect } from 'react';

export default function Inicio() {
  const playlists = [
    { title: "4 horas de música para despertar o fim de semana", img: "/capa-playlist-1.jpg" },
    { title: "Curtindo a estrada com rocks inesquecíveis", img: "/capa-playlist-2.jpg" },
    { title: "Rock matinal para começar bem o dia", img: "/capa-playlist-3.jpg" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'black', color: 'white', overflowX: 'hidden', fontFamily: "'Avant Garde', sans-serif" }}>
      
      {/* 1. CAMADA DE FUNDO FIXA (VÍDEO PORTAL) */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, backgroundColor: 'black', overflow: 'hidden' }}>
        <video autoPlay muted loop playsInline style={{ position: 'absolute', width: '100%', height: '140%', top: '-10%', left: 0, objectFit: 'cover', opacity: 0.3 }}>
          <source src="/video-home-loop.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', pointerEvents: 'none' }}></div>
      </div>

      {/* 2. MENU FIXO (ESTILO CONDÉ NAST) */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(15px)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '20px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
        <div style={{ position: 'absolute', left: '20%', transform: 'translateX(-50%)' }}>
          <img src="/logo-poliva.png" alt="Pøliva Logo" style={{ width: '110px' }} />
        </div>
        <div className="menu-links" style={{ display: 'flex', gap: '30px', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
          <a href="#" className="nav-item active">iníciø</a>
          <a href="#" className="nav-item">søbre</a>
          <a href="#" className="nav-item">shøws</a>
          <a href="#" className="nav-item">singles & álbuns</a>
          <a href="#" className="nav-item">agenda</a>
          <a href="#" className="nav-item">cøntatø</a>
        </div>
      </nav>

      {/* 3. CAMADAS DE PROFUNDIDADE (PARALLAX ELEMENTS) */}
      {/* Símbolo Ø flutuando (Move-se Devagar) */}
      <div style={{ position: 'absolute', top: '150px', left: '10%', fontSize: '10rem', color: 'rgba(168, 85, 247, 0.05)', zIndex: 5, willChange: 'transform' }} className="depth-slow">ø</div>
      
      {/* Partícula de Luz (Move-se Rápido) */}
      <div style={{ position: 'absolute', top: '400px', right: '15%', width: '150px', height: '150px', backgroundColor: 'rgba(126, 34, 206, 0.1)', borderRadius: '50%', filter: 'blur(50px)', zIndex: 15, willChange: 'transform' }} className="depth-fast"></div>

      {/* 4. CONTEÚDO PRINCIPAL (MOVIMENTO PADRÃO DE SCROLL) */}
      <div style={{ position: 'relative', zIndex: 10, paddingTop: '200px' }}>
        
        <main style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '150px' }}>
          
          {/* TÍTULO E CITAÇÃO */}
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 'bold', marginBottom: '40px', lineHeight: '1.1' }}>
            Música que desperta, <br/>
            <span style={{ color: 'rgba(168, 85, 247, 0.8)' }}>Show que vira portal</span>
          </h1>

          <div style={{ maxWidth: '650px', margin: '0 auto 80px', fontStyle: 'italic', color: '#a1a1aa', fontSize: '16px', lineHeight: '1.6', borderLeft: '2px solid #a855f7', paddingLeft: '30px', textAlign: 'left' }}>
            &quot;A música não é apenas entretenimento; ela é portal. Não é só sobre tocar música, é sobre atravessá-la. Eu faço músicas e também canto músicas que transformam a mim e a outras pessoas&quot;
            <span style={{ display: 'block', fontStyle: 'normal', color: '#a855f7', fontWeight: 'bold', marginTop: '16px', letterSpacing: '0.4em', fontSize: '11px' }}>— Poliva Soham</span>
          </div>

          {/* CAIXA DO SHOW COM MOVIMENTO HOVER (MANTIDA) */}
          <div className="show-box" style={{ 
            maxWidth: '800px', margin: '0 auto 30px', padding: '40px', 
            backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(168, 85, 247, 0.3)', 
            borderRadius: '8px', backdropFilter: 'blur(5px)', transition: 'all 0.4s ease'
          }}>
            <h2 style={{ fontSize: '26px', letterSpacing: '0.1em', fontWeight: 'bold', color: 'white', marginBottom: '10px' }}>pølivessense, o show:</h2>
            <p style={{ fontSize: '14px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#a855f7' }}>assista abaixo na íntegra</p>
          </div>

          {/* PLAYER YOUTUBE */}
          <div style={{ width: '100%', maxWidth: '720px', aspectRatio: '16/9', margin: '0 auto 150px', boxShadow: '0 0 50px rgba(0,0,0,1)' }}>
             <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ID_DO_VIDEO" frameBorder="0" allowFullScreen style={{ borderRadius: '4px' }}></iframe>
          </div>

          {/* CARROSSEL PONTA A PONTA (REDUZIDO 35%) COM DOTS */}
          <section style={{ marginBottom: '180px', width: '100vw', marginLeft: '50%', transform: 'translateX(-50%)' }}>
            <div style={{ marginBottom: '40px', textAlign: 'center' }}>
               <h3 style={{ fontSize: '20px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'white', fontWeight: 'bold' }}>playlists para as melhores ocasiões:</h3>
               <p style={{ fontSize: '18px', color: '#a855f7', marginTop: '10px' }}>o que o seu momento pede?</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '30px' }}>
              {playlists.map((_, i) => (
                <div key={i} onClick={() => setCurrentIndex(i)} style={{ 
                  width: '10px', height: '10px', borderRadius: '50%', cursor: 'pointer',
                  backgroundColor: currentIndex === i ? '#a855f7' : 'rgba(255,255,255,0.2)',
                  transition: '0.3s'
                }} />
              ))}
            </div>
            
            <div style={{ position: 'relative', overflow: 'hidden', width: '100vw' }}>
              <div style={{ display: 'flex', transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)', transform: `translateX(-${currentIndex * 100}vw)` }}>
                {playlists.map((item, index) => (
                  <div key={index} style={{ minWidth: '100vw', display: 'flex', justifyContent: 'center' }}>
                    <div className="playlist-card" style={{ width: '100%', maxWidth: '280px', textAlign: 'center' }}>
                      <img src={item.img} style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '4px', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.1)' }} />
                      <button style={{ backgroundColor: 'transparent', border: '1px solid #a855f7', color: '#a855f7', fontSize: '11px', padding: '12px 24px', cursor: 'pointer', letterSpacing: '0.2em' }}>OUÇA AQUI</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* RODAPÉ COMPACTO */}
        <footer style={{ backgroundColor: 'black', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '60px 20px 120px', textAlign: 'center', zIndex: 10, position: 'relative' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', color: 'white' }}>
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

        {/* O PLAY DO SITE (PLAYER FIXO) */}
        <div style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 100, backgroundColor: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '15px 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <img src="/simbolo-poliva.png" alt="Ø" style={{ width: '35px', height: '35px' }} />
              <div>
                <h4 style={{ fontSize: '11px', fontWeight: 'bold', textTransform: 'lowercase', margin: 0 }}>depressa</h4>
                <p style={{ fontSize: '10px', color: '#71717a', margin: 0 }}>pøliva • 16 de abril</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
               <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: '#52525b' }}>432hz</span>
               <div style={{ fontSize: '22px', color: '#a855f7', fontWeight: 'bold', cursor: 'pointer' }}>ø</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .nav-item { color: white; transition: 0.3s; text-decoration: none; border-bottom: 1px solid transparent; padding-bottom: 5px; }
        .nav-item:hover { color: #a855f7; border-bottom: 1px solid #a855f7; }
        .nav-item.active { color: white; border-bottom: 1px solid #a855f7; }
        
        .show-box:hover { 
          transform: translateY(-5px); 
          background-color: rgba(168, 85, 247, 0.08);
          border-color: #a855f7;
          box-shadow: 0 10px 40px rgba(168, 85, 247, 0.15);
        }

        .playlist-card img { transition: 0.5s ease; }
        .playlist-card:hover img { transform: scale(1.02); border-color: #a855f7; }
        
        /* Simulação Parallax pelo Navegador (will-change) */
        .depth-slow { animation: depthSlow 60s infinite linear; }
        .depth-fast { animation: depthFast 15s infinite linear; }
        
        @keyframes depthSlow {
          0% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(20px, 10px, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        @keyframes depthFast {
          0% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(-30px, -15px, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
      `}</style>
    </div>
  );
}