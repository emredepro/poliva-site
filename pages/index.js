import React, { useState, useEffect } from 'react';

export default function Inicio() {
  const playlists = [
    { title: "4 horas de música para despertar o fim de semana", img: "/capa-playlist-1.jpg" },
    { title: "curtindo a estrada com rocks inesquecíveis", img: "/capa-playlist-2.jpg" },
    { title: "rock matinal para começar bem o dia", img: "/capa-playlist-3.jpg" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % playlists.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [playlists.length]);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'black', color: 'white', overflowX: 'hidden', fontFamily: "'Avant Garde', sans-serif" }}>
      
      {/* 1. VÍDEO DE FUNDO FIXO */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, backgroundColor: 'black' }}>
        <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }}>
          <source src="/video-home-loop.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, transparent 20%, black 120%)' }}></div>
      </div>

      {/* 2. CONTEÚDO COM ANIMAÇÃO DE ENTRADA (ESTILO RESN) */}
      <div style={{ position: 'relative', zIndex: 10, animation: 'resnReveal 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards' }}>
        
        {/* MENU */}
        <nav style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(15px)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '20px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
          <div style={{ position: 'absolute', left: '20%', transform: 'translateX(-50%)' }}>
            <img src="/logo-poliva.png" alt="Logo" style={{ width: '110px' }} />
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
          
          {/* HERO */}
          <section style={{ marginBottom: '140px' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 'bold', lineHeight: '1.1', marginBottom: '40px', letterSpacing: '-0.02em' }}>
              música que desperta, <br/>
              <span style={{ color: '#a855f7' }}>show que vira portal</span>
            </h1>

            <div style={{ maxWidth: '650px', margin: '0 auto', textAlign: 'left', borderLeft: '2px solid #a855f7', paddingLeft: '30px', color: '#a1a1aa', fontSize: '17px', lineHeight: '1.7', fontStyle: 'italic' }}>
              <p>&quot;a música não é apenas entretenimento; ela é portal. não é só sobre tocar música, é sobre atravessá-la. eu faço músicas e também canto músicas que transformam a mim e a outras pessoas&quot;</p>
              <span style={{ display: 'block', fontStyle: 'normal', color: '#a855f7', fontWeight: 'bold', marginTop: '20px', letterSpacing: '0.4em', fontSize: '11px', textTransform: 'uppercase' }}>— poliva soham</span>
            </div>
          </section>

          {/* CAIXA DO SHOW - AJUSTADA (MINÚSCULO, BOLD, FONTE MAIOR) */}
          <section style={{ marginBottom: '160px' }}>
            <div className="compact-box" style={{ 
              maxWidth: '800px', margin: '0 auto 40px', padding: '30px 40px', 
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(168, 85, 247, 0.3)', 
              borderRadius: '4px', backdropFilter: 'blur(10px)'
            }}>
              <h2 style={{ fontSize: '28px', fontWeight: '500', marginBottom: '10px', textTransform: 'lowercase' }}>pølivessense, o show:</h2>
              <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#a855f7', textTransform: 'lowercase' }}>assista abaixo na íntegra</p>
            </div>

            <div style={{ width: '100%', maxWidth: '612px', aspectRatio: '16/9', margin: '0 auto', boxShadow: '0 40px 100px rgba(0,0,0,0.8)', overflow: 'hidden', borderRadius: '4px' }}>
               <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ID_DO_VIDEO" frameBorder="0" allowFullScreen></iframe>
            </div>
          </section>

          {/* CARROSSEL PLAYLISTS - AJUSTADO (MINÚSCULO, BOLD, ESPAÇAMENTO CURTO) */}
          <section style={{ marginBottom: '180px' }}>
             <div style={{ marginBottom: '50px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: '500', textTransform: 'lowercase', letterSpacing: '0.05em' }}>playlists para as melhores ocasiões:</h3>
                <p style={{ fontSize: '20px', color: '#a855f7', marginTop: '10px', fontWeight: 'bold', textTransform: 'lowercase' }}>o que o seu momento pede?</p>
             </div>

             <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
                <div style={{ display: 'flex', transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)', transform: `translateX(-${currentIndex * 100}%)` }}>
                  {playlists.map((item, index) => (
                    <div key={index} style={{ minWidth: '100%', display: 'flex', justifyContent: 'center' }}>
                      <div className="playlist-card" style={{ width: '300px', textAlign: 'center' }}>
                         <img src={item.img} style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '4px', marginBottom: '25px', border: '1px solid rgba(255,255,255,0.05)' }} />
                         <button className="btn-play">ouça aqui</button>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </section>
        </main>

        {/* RODAPÉ */}
        <footer style={{ backgroundColor: 'black', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '80px 20px 140px' }}>
           <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
              <h4 style={{ fontSize: '20px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '20px' }}>cøntatø</h4>
              <div style={{ fontSize: '14px', lineHeight: '1.8', color: '#ccc' }}>
                <p>para shøws e parcerias</p>
                <p>e-mail: contato@polivaoficial.com.br</p>
                <p>redes sociais: @polivaoficial</p>
                <p style={{ marginTop: '15px', fontWeight: 'bold', color: 'white', fontSize: '16px' }}>telefone: 22 98802-3803</p>
              </div>
              <p style={{ marginTop: '80px', fontSize: '10px', color: 'rgba(255,255,255,0.3)' }}>pøliva© 2026. todos os direitos reservados.</p>
           </div>
        </footer>

        {/* PLAYER FIXO - LIMPO */}
        <div style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 100, backgroundColor: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '15px 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <img src="/simbolo-poliva.png" alt="Logo" style={{ width: '40px', height: '40px' }} />
              <div style={{ textAlign: 'left' }}>
                <strong style={{ fontSize: '12px', display: 'block', textTransform: 'lowercase' }}>depressa</strong>
                <span style={{ fontSize: '10px', color: '#71717a' }}>pøliva • 16 de abril</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes resnReveal {
          0% { opacity: 0; transform: scale(1.05); filter: blur(10px); }
          100% { opacity: 1; transform: scale(1); filter: blur(0); }
        }
        .nav-item { color: white; text-decoration: none; transition: 0.3s; padding-bottom: 5px; border-bottom: 1px solid transparent; }
        .nav-item:hover { color: #a855f7; border-bottom-color: #a855f7; }
        .btn-play { background: none; border: 1px solid #a855f7; color: #a855f7; font-size: 10px; padding: 12px 24px; cursor: pointer; letter-spacing: 0.2em; fontWeight: bold; text-transform: lowercase; transition: 0.3s; }
        .btn-play:hover { background: #a855f7; color: white; transform: scale(1.05); }
        .compact-box:hover { transform: translateY(-5px); background: rgba(168, 85, 247, 0.05); transition: 0.4s; }
      `}</style>
    </div>
  );
}