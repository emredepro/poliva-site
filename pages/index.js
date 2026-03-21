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
    }, 4000); // Muda a cada 4 segundos
    return () => clearInterval(timer);
  }, [playlists.length]);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'black', color: 'white', overflowX: 'hidden', fontFamily: "'Avant Garde', sans-serif" }}>
      
      {/* 1. VÍDEO DE FUNDO SOMBRIO (-10% Posição, Opacidade 0.3) */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, backgroundColor: 'black', overflow: 'hidden' }}>
        <video autoPlay muted loop playsInline style={{ position: 'absolute', width: '100%', height: '140%', top: '-10%', left: 0, objectFit: 'cover', opacity: 0.3 }}>
          <source src="/video-home-loop.mp4" type="video/mp4" />
        </video>
      </div>

      <div style={{ position: 'relative', zIndex: 10 }}>
        
        {/* MENU COM LOGO DESLOCADA 20% PARA O CENTRO */}
        <nav style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '15px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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

        <main style={{ paddingTop: '180px', paddingBottom: '100px', maxWidth: '1400px', margin: '0 auto', textAlign: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
          
          {/* TÍTULO COM VÍRGULA E MAIÚSCULAS */}
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 'bold', letterSpacing: '-0.05em', marginBottom: '40px', lineHeight: '1.1' }}>
            Música que desperta, <br/>
            <span style={{ color: 'rgba(168, 85, 247, 0.8)' }}>Show que vira portal</span>
          </h1>

          {/* CORREÇÃO DA CITAÇÃO (TEXTO COMPLETO) */}
          <div style={{ maxWidth: '650px', margin: '0 auto 60px', fontStyle: 'italic', color: '#a1a1aa', fontSize: '15px', lineHeight: '1.6', borderLeft: '2px solid rgba(126, 34, 206, 0.5)', paddingLeft: '30px', textAlign: 'left', letterSpacing: '0.05em' }}>
            &quot;A música não é apenas entretenimento; ela é portal. Não é só sobre tocar música, é sobre atravessá-la. Eu faço músicas e também canto músicas que transformam a mim e a outras pessoas&quot;
            <span style={{ display: 'block', fontStyle: 'normal', color: '#a855f7', fontWeight: 'bold', marginTop: '16px', letterSpacing: '0.4em', fontSize: '11px' }}>— Poliva Soham</span>
          </div>

          {/* TÍTULOS DO VÍDEO */}
          <div style={{ marginBottom: '30px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '20px', letterSpacing: '0.1em', fontWeight: 'bold', color: 'white' }}>pølivessense, o show:</h2>
            <p style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#71717a', marginTop: '8px' }}>assista abaixo na íntegra:</p>
          </div>

          {/* PLAYER YOUTUBE (Reduzido em 15%) */}
          <div style={{ width: '100%', maxWidth: '720px', aspectRatio: '16/9', margin: '0 auto 120px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9)', backgroundColor: '#000' }}>
             <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ID_DO_VIDEO" frameBorder="0" allowFullScreen style={{ borderRadius: '4px' }}></iframe>
          </div>

          {/* CARROSSEL AUTO-PLAY FULL-WIDTH */}
          <section style={{ marginBottom: '180px', width: '100vw', marginLeft: '50%', transform: 'translateX(-50%)' }}>
            {/* TÍTULO ALINHADO AO RODAPÉ */}
            <h3 style={{ fontSize: '18px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'white', marginBottom: '50px', fontWeight: 'bold' }}>o que o seu momento pede?</h3>
            
            <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
              <div style={{ display: 'flex', transition: 'transform 0.5s ease-in-out', transform: `translateX(-${currentIndex * (100 / playlists.length)}%)` }}>
                {/* Loop para garantir carrossel infinito */}
                {[...playlists, ...playlists].map((item, index) => (
                  <div key={index} style={{ minWidth: '33.33vw', padding: '0 20px', textAlign: 'center' }}>
                    <div style={{ width: '100%', aspectRatio: '1/1', marginBottom: '25px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
                      <img src={item.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={item.title} />
                    </div>
                    <button style={{ backgroundColor: 'transparent', border: '1px solid #a855f7', color: '#a855f7', fontSize: '10px', letterSpacing: '0.2em', padding: '12px 24px', textTransform: 'uppercase', fontWeight: 600, cursor: 'pointer' }}>OUÇA AQUI</button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* RODAPÉ COMPACTO E MINIMALISTA */}
        <footer style={{ backgroundColor: 'black', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '50px 40px 30px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', color: 'white', fontSize: '14px', lineHeight: '1.6', letterSpacing: '0.05em' }}>
            
            {/* TÍTULO RODAPÉ ALINHADO */}
            <h4 style={{ fontSize: '18px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'white', marginBottom: '15px', fontWeight: 'bold' }}>cøntatø</h4>
            
            <p>para shøws e parcerias</p>
            <p>e-mail: contato@polivaoficial.com.br</p>
            <p>redes sociais: @polivaoficial</p>
            
            <p style={{ marginTop: '10px' }}>telefone: 22 98802-3803</p>

            <div style={{ marginTop: '50px', fontSize: '10px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>
              <p>pøliva© 2026. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>

        {/* PLAYER FIXO INFERIOR LIMPO */}
        <div style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 100, backgroundColor: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '15px 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <img src="/simbolo-poliva.png" alt="Ø" style={{ width: '35px', height: '35px' }} />
              <div>
                <h4 style={{ fontSize: '11px', fontWeight: 'bold', textTransform: 'lowercase', margin: 0 }}>depressa</h4>
                <p style={{ fontSize: '10px', color: '#71717a', margin: 0 }}>pøliva • 16 de abril</p>
              </div>
            </div>
            {/* REMOVIDO Ø SOLITÁRIO */}
          </div>
        </div>

      </div>
    </div>
  );
}