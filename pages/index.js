import React from 'react';

// Este é o componente da sua página Inicial
export default function Inicio() {
  return (
    <div style={{ 
      backgroundColor: 'black', 
      minHeight: '100vh', 
      color: 'white', 
      overflowX: 'hidden', 
      fontFamily: "'Avant Garde', sans-serif" 
    }}>
      
      {/* 1. SISTEMA DE VÍDEO BLINDADO (Z-INDEX NEGATIVO) */}
      <div style={{ 
        position: 'fixed', 
        inset: 0, 
        zIndex: 0, 
        backgroundColor: 'black' 
      }}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            objectPosition: 'center 20%', 
            opacity: 0.4 
          }}
        >
          <source src="/video-home-loop.mp4" type="video/mp4" />
        </video>
        {/* FILTRO DE LEITURA 30% */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundColor: 'rgba(0,0,0,0.3)', 
          pointerEvents: 'none' 
        }}></div>
      </div>

      {/* 2. MENU - 16px E LETRAS MAIS JUNTAS (TRACKING-WIDE) */}
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        zIndex: 100, 
        backgroundColor: 'rgba(0,0,0,0.4)', 
        backdropFilter: 'blur(10px)', 
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        padding: '24px 0'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '30px', 
          fontSize: '16px', 
          letterSpacing: '0.15em', 
          textTransform: 'lowercase', 
          fontWeight: 300 
        }}>
          <a href="#" style={{ color: '#a855f7' }}>iníciø</a>
          <a href="#">søbre</a>
          <a href="#">shøws</a>
          <a href="#" style={{ whiteSpace: 'nowrap' }}>singles & álbuns</a>
          <a href="#">agenda</a>
          <a href="#">cøntatø</a>
        </div>
      </nav>

      <main style={{ 
        position: 'relative', 
        zIndex: 10, 
        paddingTop: '180px', 
        paddingBottom: '150px', 
        maxWidth: '1000px', 
        margin: '0 auto', 
        textAlign: 'center' 
      }}>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-10 leading-[1.1] lowercase">
          música que desperta <br/>
          <span className="text-purple-600/80">show que vira portal</span>
        </h1>

        <div className="max-w-lg mb-16 italic text-zinc-300 text-sm md:text-base leading-relaxed border-l-2 border-purple-900/50 pl-8 text-left mx-auto tracking-widest lowercase">
          &quot;a música não é apenas entretenimento; ela é portal. não é só sobre tocar música, é sobre atravessá-la. eu faço músicas e também canto músicas que transformam a mim e a outras pessoas&quot;
          <span style={{ 
            display: 'block', 
            fontStyle: 'normal', 
            color: '#a855f7', 
            fontWeight: 'bold', 
            marginTop: '16px', 
            letterSpacing: '0.4em', 
            fontSize: '12px',
            textTransform: 'none' // FORÇA AS INICIAIS MAIÚSCULAS
          }}>
            — Poliva Soham
          </span>
        </div>

        <div className="w-full max-w-2xl aspect-video bg-zinc-950/60 rounded border border-white/10 flex items-center justify-center mb-10 shadow-2xl backdrop-blur-sm mx-auto">
           <p className="text-zinc-700 tracking-[0.6em] lowercase text-[10px] font-light">[ player vídeo de ativação ]</p>
        </div>

      </main>

      {/* 3. RODAPÉ */}
      <footer style={{ 
        position: 'fixed', 
        bottom: 0, 
        width: '100%', 
        zIndex: 100, 
        backgroundColor: 'rgba(0,0,0,0.85)', 
        backdropFilter: 'blur(20px)', 
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '20px 40px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img src="/simbolo-poliva.png" alt="pøliva" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
            <div>
              <h4 style={{ fontSize: '11px', fontWeight: 'bold', letterSpacing: '0.2em', textTransform: 'lowercase', margin: 0 }}>depressa</h4>
              <p style={{ fontSize: '10px', color: '#71717a', letterSpacing: '0.1em', textTransform: 'lowercase', margin: 0 }}>pøliva • 16 de abril</p>
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