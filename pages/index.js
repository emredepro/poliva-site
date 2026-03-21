import React from 'react';

// Este é o componente da sua página Inicial
export default function Inicio() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'black', color: 'white', overflowX: 'hidden', fontFamily: "'Avant Garde', sans-serif" }}>
      
      {/* 1. O VÍDEO - FORÇADO PARA APARECER (Z-INDEX 0) */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', opacity: 0.4 }}
        >
          <source src="/video-home-loop.mp4" type="video/mp4" />
        </video>
        {/* FILTRO DE 30% PARA LEITURA */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)', pointerEvents: 'none' }}></div>
      </div>

      {/* 2. CONTEÚDO - TUDO COM Z-INDEX 10 PARA FICAR NA FRENTE DO VÍDEO */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        
        {/* MENU - CAIXA ALTA, 11px, JUNTO */}
        <nav style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '20px 0' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', fontSize: '11px', letterSpacing: '-0.02em', textTransform: 'uppercase', fontWeight: 600 }}>
            <a href="#" style={{ color: '#a855f7' }}>iníciø</a>
            <a href="#">søbre</a>
            <a href="#">shøws</a>
            <a href="#" style={{ whiteSpace: 'nowrap' }}>singles & álbuns</a>
            <a href="#">agenda</a>
            <a href="#">cøntatø</a>
          </div>
        </nav>

        <main style={{ 
    fontSize: 'clamp(2rem, 8vw, 4rem)', 
    fontWeight: 'bold', 
    letterSpacing: '-0.05em', 
    marginBottom: '40px', 
    lineHeight: '1.1' 
    // textTransform: 'lowercase' <- REMOVIDO PARA ACEITAR AS MAIÚSCULAS
  }}
>
  Música que desperta <br/>
  <span style={{ color: 'rgba(168, 85, 247, 0.8)' }}>
    Show que vira portal,
  </span>
          </h1>

          <div style={{ maxWidth: '500px', margin: '0 auto 60px', fontStyle: 'italic', color: '#a1a1aa', fontSize: '15px', lineHeight: '1.6', borderLeft: '2px solid rgba(126, 34, 206, 0.5)', paddingLeft: '30px', textAlign: 'left', letterSpacing: '0.05em', textTransform: 'lowercase' }}>
            &quot;a música não é apenas entretenimento; ela é portal. não é só sobre tocar música, é sobre atravessá-la. eu faço músicas e também canto músicas que transformam a mim e a outras pessoas&quot;
            <span style={{ display: 'block', fontStyle: 'normal', color: '#a855f7', fontWeight: 'bold', marginTop: '16px', letterSpacing: '0.4em', fontSize: '11px', textTransform: 'none' }}>
              — Poliva Soham
            </span>
          </div>

          <div style={{ width: '100%', maxWidth: '640px', aspectRatio: '16/9', backgroundColor: 'rgba(9, 9, 11, 0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 40px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(4px)' }}>
             <p style={{ color: '#3f3f46', letterSpacing: '0.6em', textTransform: 'lowercase', fontSize: '10px' }}>[ player vídeo de ativação ]</p>
          </div>
        </main>
      </div>

      {/* 3. RODAPÉ FIXO */}
      <footer style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 100, backgroundColor: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '20px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img src="/simbolo-poliva.png" alt="pøliva" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
            <div>
              <h4 style={{ fontSize: '11px', fontWeight: 'bold', letterSpacing: '0.2em', textTransform: 'lowercase', margin: 0 }}>depressa</h4>
              <p style={{ fontSize: '10px', color: '#71717a', margin: 0 }}>pøliva • 16 de abril</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
             <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: '#52525b', textTransform: 'lowercase' }}>432hz</span>
             <div style={{ fontSize: '24px', color: '#a855f7', fontWeight: 'bold' }}>ø</div>
          </div>
        </div>
      </footer>
    </div>
  );
}