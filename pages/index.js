import React from 'react';

// Este é o componente da sua página Inicial
export default function Inicio() {
  return (
    <div style={{ 
      position: 'relative', 
      minHeight: '100vh', 
      backgroundColor: 'black', 
      color: 'white', 
      overflowX: 'hidden', 
      fontFamily: "'Avant Garde', sans-serif" 
    }}>
      
      {/* 1. SISTEMA DE VÍDEO - POSICIONAMENTO -10% E OPACIDADE 0.3 */}
      <div style={{ 
        position: 'fixed', 
        inset: 0, 
        zIndex: 0, 
        backgroundColor: 'black',
        overflow: 'hidden' 
      }}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          style={{ 
            position: 'absolute',
            width: '100%', 
            height: '140%', 
            top: '-10%',    // AJUSTE: RECUADO PARA -10%
            left: 0,
            objectFit: 'cover', 
            opacity: 0.3 
          }}
        >
          <source src="/video-home-loop.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 2. CONTEÚDO SOBRE O VÍDEO */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        
        {/* MENU - CAIXA ALTA, 11px, ESPAÇAMENTO 0.2em */}
        <nav style={{ 
          position: 'fixed', 
          top: 0, 
          width: '100%', 
          backgroundColor: 'rgba(0,0,0,0.6)', 
          backdropFilter: 'blur(10px)', 
          borderBottom: '1px solid rgba(255,255,255,0.05)', 
          padding: '20px 0' 
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '30px', 
            fontSize: '11px', 
            letterSpacing: '0.2em', 
            textTransform: 'uppercase', 
            fontWeight: 600 
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
          paddingTop: '180px', 
          paddingBottom: '150px', 
          maxWidth: '1000px', 
          margin: '0 auto', 
          textAlign: 'center', 
          paddingLeft: '20px', 
          paddingRight: '20px' 
        }}>
          
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
            fontWeight: 'bold', 
            letterSpacing: '-0.05em', 
            marginBottom: '40px', 
            lineHeight: '1.1' 
          }}>
            Música que desperta, <br/>
            <span style={{ color: 'rgba(168, 85, 247, 0.8)' }}>
              Show que vira portal
            </span>
          </h1>

          <div style={{ 
            maxWidth: '500px', 
            margin: '0 auto 60px', 
            fontStyle: 'italic', 
            color: '#a1a1aa', 
            fontSize: '15px', 
            lineHeight: '1.6', 
            borderLeft: '2px solid rgba(126, 34, 206, 0.5)', 
            paddingLeft: '30px', 
            textAlign: 'left', 
            letterSpacing: '0.05em',
            textTransform: 'lowercase'
          }}>
            &quot;a música não é apenas entretenimento; ela é portal. não é só sobre tocar música, é sobre atravessá-la. eu faço músicas e também canto músicas que transformam a mim e a outras pessoas&quot;
            <span style={{ 
              display: 'block', 
              fontStyle: 'normal', 
              color: '#a855f7', 
              fontWeight: 'bold', 
              marginTop: '16px', 
              letterSpacing: '0.4em', 
              fontSize: '11px', 
              textTransform: 'none' 
            }}>
              — Poliva Soham
            </span>
          </div>

          <div style={{ 
            width: '100%', 
            maxWidth: '640px', 
            aspectRatio: '16/9', 
            backgroundColor: 'rgba(9, 9, 11, 0.7)', 
            border: '1px solid rgba(255,255,255,0.05)', 
            borderRadius: '4px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            margin: '0 auto 40px', 
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)', 
            backdropFilter: 'blur(4px)' 
          }}>
             <p style={{ color: '#3f3f46', letterSpacing: '0.6em', textTransform: 'lowercase', fontSize: '10px' }}>
               [ player vídeo de ativação ]
             </p>
          </div>
        </main>
      </div>

      <footer style={{ 
        position: 'fixed', 
        bottom: 0, 
        width: '100%', 
        zIndex: 100, 
        backgroundColor: 'rgba(0,0,0,0.95)', 
        backdropFilter: 'blur(20px)', 
        borderTop: '1px solid rgba(255,255,255,0.05)', 
        padding: '20px 40px' 
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
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