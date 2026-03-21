import React, { useState, useEffect } from 'react';

export default function Inicio() {
  const playlists = [
    { title: "4 horas de música para despertar o fim de semana", img: "/capa-playlist-1.jpg" },
    { title: "Curtindo a estrada com rocks inesquecíveis", img: "/capa-playlist-2.jpg" },
    { title: "Rock matinal para começar bem o dia", img: "/capa-playlist-3.jpg" }
  ];

  // Estado para Carrossel Auto-Play
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % playlists.length);
    }, 4500); // 4.5 segundos por slide
    return () => clearInterval(timer);
  }, [playlists.length]);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'black', color: 'white', overflowX: 'hidden', fontFamily: "'Avant Garde', sans-serif" }}>
      
      {/* 1. SISTEMA PORTAL: VÍDEO COM MOVIMENTO PARALLAX INVERSO */}
      <div style={{ 
        position: 'fixed', 
        inset: 0, 
        zIndex: 0, 
        backgroundColor: 'black', 
        overflow: 'hidden' 
      }}>
        <video 
          autoPlay muted loop playsInline 
          style={{ 
            position: 'absolute', 
            width: '100%', 
            height: '130%', 
            top: '-10%', // Posição -10% fixada
            left: 0, 
            objectFit: 'cover', 
            opacity: 0.3, 
            // Sugestão de Movimento 1: Parallax Inverso no Scroll (Gerido pelo navegador)
            willChange: 'transform', 
            animation: 'portalDepth 30s infinite linear' 
          }}>
          <source src="/video-home-loop.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)', pointerEvents: 'none' }}></div>
      </div>

      {/* 2. CONTEÚDO COM MOVIMENTO PROGRESSIVO DE REVELAÇÃO */}
      <div style={{ 
        position: 'relative', 
        zIndex: 10, 
        paddingTop: '180px', 
        paddingBottom: '100px', 
        animation: 'contentReveal 1.2s ease-out forwards' 
      }}>
        
        {/* MENU COM LOGO DESLOCADA 20% PARA O CENTRO */}
        <nav style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '15px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
          <div style={{ position: 'absolute', left: '20%', transform: 'translateX(-50%)' }}>
            <img src="/logo-poliva.png" alt="Pøliva Logo" style={{ width: '110px', height: 'auto', objectFit: 'contain' }} />
          </div>
          <div style={{ display: 'flex', gap: '30px', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
            <a href="#" style={{ color: '#a855f7' }}>iníciø</a>
            <a href="#">søbre</a>
            <a href="#">shøws</a>
            <a href="#" style={{ whiteSpace: 'nowrap' }}>singles & álbuns</a>
            <a href="#">agenda</a>
            <a href="#">cøntatø</a>
          </div>
        </nav>

        <main style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
          
          {/* TÍTULO - ALINHADO COM A CITAÇÃO */}
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 'bold', letterSpacing: '-0.05em', marginBottom: '40px', lineHeight: '1.1' }}>
            Música que desperta, <br/>
            <span style={{ color: 'rgba(168, 85, 247, 0.8)' }}>Show que vira portal</span>
          </h1>

          {/* CITAÇÃO - ALINHADA E CORRETA */}
          <div style={{ maxWidth: '650px', margin: '0 auto 60px', fontStyle: 'italic', color: '#a1a1aa', fontSize: '15px', lineHeight: '1.6', borderLeft: '2px solid rgba(126, 34, 206, 0.5)', paddingLeft: '30px', textAlign: 'left', letterSpacing: '0.05em' }}>
            &quot;A música não é apenas entretenimento; ela é portal. Não é só sobre tocar música, é sobre atravessá-la. Eu faço músicas e também canto músicas que transformam a mim e a outras pessoas&quot;
            <span style={{ display: 'block', fontStyle: 'normal', color: '#a855f7', fontWeight: 'bold', marginTop: '16px', letterSpacing: '0.4em', fontSize: '11px' }}>— Poliva Soham</span>
          </div>

          {/* DESIGN REVISADO: TÍTULO DO VÍDEO COM CONTRASTE (Reduced) */}
          <div style={{ marginBottom: '40px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '18px', letterSpacing: '0.1em', fontWeight: 'bold', color: 'white', marginBottom: '10px', textShadow: '0 0 15px rgba(168, 85, 247, 0.5)' }}>pølivessense, o show:</h2>
            <p style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#71717a' }}>assista abaixo na íntegra</p>
          </div>

          {/* PLAYER YOUTUBE (Reduzido em 15%) */}
          <div style={{ width: '100%', maxWidth: '720px', aspectRatio: '16/9', margin: '0 auto 150px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9)', backgroundColor: '#000' }}>
             <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ID_DO_VIDEO" frameBorder="0" allowFullScreen style={{ borderRadius: '4px' }}></iframe>
          </div>

          {/* CARROSSEL AUTO-PLAY (REDUZIDO EM 35%) E ALINHADO */}
          <section style={{ marginBottom: '200px' }}>
            {/* TÍTULO PLAYLISTS - NOVO DESIGN MINIMALISTA */}
            <div style={{ maxWidth: '600px', margin: '0 auto 50px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '20px' }}>
               <h3 style={{ fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#ececec', fontWeight: 600 }}>o que o seu momento pede?</h3>
               <p style={{ fontSize: '10px', color: '#52525b', textTransform: 'lowercase', marginTop: '8px' }}>curadoria sonora pølivessense</p>
            </div>
            
            {/* CARROSSEL REDUZIDO E CENTRALIZADO */}
            <div style={{ position: 'relative', overflow: 'hidden', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
              <div style={{ display: 'flex', gap: '30px', transition: 'transform 0.5s ease-in-out', transform: `translateX(-${currentIndex * 100}%)` }}>
                {playlists.map((item, index) => (
                  <div key={index} style={{ minWidth: '100%', textAlign: 'center', backgroundColor: '#050505', border: '1px solid rgba(255,255,255,0.05)', padding: '20px' }}>
                    <div style={{ width: '100%', aspectRatio: '1/1', marginBottom: '25px', overflow: 'hidden', borderRadius: '2px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <img src={item.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={item.title} />
                    </div>
                    <button style={{ backgroundColor: 'transparent', border: '1px solid #a855f7', color: '#a855f7', fontSize: '10px', letterSpacing: '0.2em', padding: '12px 24px', textTransform: 'uppercase', fontWeight: 600, cursor: 'pointer' }}>OUÇA AQUI</button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* RODAPÉ PRETO E BRANCO MINIMALISTA E COMPACTO */}
        <footer style={{ backgroundColor: 'black', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '50px 40px 30px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', color: 'white', fontSize: '14px', lineHeight: '1.6', letterSpacing: '0.05em' }}>
            
            <h4 style={{ fontSize: '18px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'white', marginBottom: '15px', fontWeight: 'bold' }}>cøntatø</h4>
            
            <p>para shøws e parcerias</p>
            <p>e-mail: contato@polivaoficial.com.br</p>
            <p>redes sociais: @polivaoficial</p>
            
            <p style={{ marginTop: '10px' }}>telefone: 22 98802-3803</p>

            {/* COPYRIGHT PRESERVADO (JEITO QUE TAVA) */}
            <div style={{ marginTop: '50px', fontSize: '10px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>
              <p>pøliva© 2026. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>

        {/* PLAYER FIXO INFERIOR LIMPO (Ø REMOVIDO) */}
        <div style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 100, backgroundColor: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '15px 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <img src="/simbolo-poliva.png" alt="Ø" style={{ width: '35px', height: '35px' }} />
              <div>
                <h4 style={{ fontSize: '11px', fontWeight: 'bold', textTransform: 'lowercase', margin: 0 }}>depressa</h4>
                <p style={{ fontSize: '10px', color: '#71717a', margin: 0 }}>pøliva • 16 de abril</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 3. KEYFRAMES DAS ANIMAÇÕES (PORTAL & CONTEÚDO) */}
      <style jsx global>{`
        @keyframes portalDepth {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(5px) scale(1.02); }
          100% { transform: translateY(0) scale(1); }
        }
        @keyframes contentReveal {
          0% { opacity: 0; transform: translateY(20px); filter: blur(5px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        main strong, main b {
          color: rgba(168, 85, 247, 0.9);
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}