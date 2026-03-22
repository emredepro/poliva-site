import React, { useState, useEffect } from 'react';

export default function Inicio() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const playlists = [
    { title: "4 horas de música para despertar o fim de semana", img: "/capa-playlist-1.jpg" },
    { title: "Curtindo a estrada com rocks inesquecíveis", img: "/capa-playlist-2.jpg" },
    { title: "Rock matinal para começar bem o dia", img: "/capa-playlist-3.jpg" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '200vh', fontFamily: "'Avant Garde', sans-serif" }}>
      
      {/* CAMADA 1: O FUNDO (MOVIMENTAÇÃO LENTA - 0.2x) */}
      <div style={{ 
        position: 'fixed', 
        top: 0, left: 0, width: '100%', height: '100%', 
        zIndex: 0, 
        transform: `translateY(${offsetY * 0.2}px)`, /* O vídeo sobe devagar enquanto você desce rápido */
        opacity: 0.3
      }}>
        <video autoPlay muted loop playsInline style={{ width: '100%', height: '120%', objectFit: 'cover' }}>
          <source src="/video-home-loop.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, black)' }}></div>
      </div>

      {/* CAMADA 2: O CONTEÚDO (MOVIMENTAÇÃO REAL - FLUTUANTE) */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        
        {/* MENU FIXO - ESTILO WIS.DIGITAL / CONDÉ NAST */}
        <nav style={{ 
          position: 'fixed', top: 0, width: '100%', height: '80px', 
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(15px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)', zIndex: 100 
        }}>
          <div style={{ position: 'absolute', left: '20%', transform: 'translateX(-50%)' }}>
            <img src="/logo-poliva.png" alt="Logo" style={{ width: '100px' }} />
          </div>
          <div style={{ display: 'flex', gap: '30px', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
            <a href="#" style={{ color: '#a855f7', textDecoration: 'none' }}>iníciø</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>søbre</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>shøws</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>agenda</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>cøntatø</a>
          </div>
        </nav>

        <main style={{ paddingTop: '220px', textAlign: 'center' }}>
          
          {/* TÍTULO - IMPACTO EDITORIAL */}
          <section style={{ marginBottom: '100px', transform: `translateY(-${offsetY * 0.1}px)` }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 'bold', lineHeight: '1.1', marginBottom: '40px' }}>
              Música que desperta, <br/>
              <span style={{ color: 'rgba(168, 85, 247, 0.8)' }}>Show que vira portal</span>
            </h1>

            <div style={{ 
              maxWidth: '650px', margin: '0 auto', textAlign: 'left',
              fontStyle: 'italic', color: '#a1a1aa', fontSize: '16px', lineHeight: '1.6',
              borderLeft: '2px solid #a855f7', paddingLeft: '30px'
            }}>
              <p>&quot;A música não é apenas entretenimento; ela é portal. Não é só sobre tocar música, é sobre atravessá-la. Eu faço músicas e também canto músicas que transformam a mim e a outras pessoas&quot;</p>
              <span style={{ display: 'block', fontStyle: 'normal', color: '#a855f7', fontWeight: 'bold', marginTop: '15px', letterSpacing: '0.3em', fontSize: '11px' }}>— Poliva Soham</span>
            </div>
          </section>

          {/* CAIXA DO SHOW - DESIGN REFINADO COM MOVIMENTO */}
          <section style={{ marginBottom: '150px', padding: '0 20px' }}>
            <div style={{ 
              maxWidth: '700px', margin: '0 auto 40px', padding: '50px',
              background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(168, 85, 247, 0.3)',
              borderRadius: '4px', backdropFilter: 'blur(10px)',
              transition: '0.5s ease'
            }} className="hover-card">
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>pølivessense, o show:</h2>
              <p style={{ fontSize: '12px', textTransform: 'uppercase', color: '#a855f7', letterSpacing: '0.4em' }}>assista abaixo na íntegra</p>
            </div>

            <div style={{ width: '100%', maxWidth: '612px', aspectRatio: '16/9', margin: '0 auto', boxShadow: '0 0 100px rgba(0,0,0,1)' }}>
               <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ID_DO_VIDEO" frameBorder="0" allowFullScreen style={{ borderRadius: '2px' }}></iframe>
            </div>
          </section>

          {/* CARROSSEL PLAYLISTS - MOVIMENTO DINÂMICO */}
          <section style={{ marginBottom: '200px' }}>
             <div style={{ marginBottom: '60px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'white' }}>playlists para as melhores ocasiões:</h3>
                <p style={{ fontSize: '16px', color: '#a855f7', marginTop: '10px' }}>o que o seu momento pede?</p>
             </div>

             <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px' }}>
                {playlists.map((_, i) => (
                  <div key={i} onClick={() => setCurrentIndex(i)} style={{ 
                    width: '8px', height: '8px', borderRadius: '50%', cursor: 'pointer',
                    backgroundColor: currentIndex === i ? '#a855f7' : '#333',
                    transition: '0.3s'
                  }} />
                ))}
             </div>

             <div style={{ display: 'flex', transition: 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)', transform: `translateX(-${currentIndex * 100}%)` }}>
                {playlists.map((item, index) => (
                  <div key={index} style={{ minWidth: '100%', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '182px', textAlign: 'center' }}> {/* Reduzido em 35% */}
                       <img src={item.img} style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '2px', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.05)' }} />
                       <button style={{ background: 'none', border: '1px solid #a855f7', color: '#a855f7', fontSize: '10px', padding: '10px 20px', cursor: 'pointer', letterSpacing: '0.2em' }}>OUÇA AQUI</button>
                    </div>
                  </div>
                ))}
             </div>
          </section>
        </main>

        {/* RODAPÉ RENDE À BASE */}
        <footer style={{ backgroundColor: 'black', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '60px 20px 140px' }}>
           <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
              <h4 style={{ fontSize: '20px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '20px' }}>cøntatø</h4>
              <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#eee' }}>
                <p>para shøws e parcerias</p>
                <p>e-mail: contato@polivaoficial.com.br</p>
                <p>redes sociais: @polivaoficial</p>
                <p style={{ marginTop: '15px', fontWeight: 'bold' }}>telefone: 22 98802-3803</p>
              </div>
              <p style={{ marginTop: '60px', fontSize: '10px', color: 'rgba(255,255,255,0.2)' }}>pøliva© 2026. Todos os direitos reservados.</p>
           </div>
        </footer>

        {/* PLAYER FIXO INFERIOR */}
        <div style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 100, backgroundColor: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '15px 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <img src="/simbolo-poliva.png" alt="Ø" style={{ width: '35px', height: '35px' }} />
              <div>
                <span style={{ fontSize: '11px', fontWeight: 'bold', display: 'block' }}>depressa</span>
                <span style={{ fontSize: '10px', color: '#71717a' }}>pøliva • 16 de abril</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
               <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: '#52525b' }}>432hz</span>
               <div style={{ fontSize: '22px', color: '#a855f7', fontWeight: 'bold' }}>ø</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .hover-card:hover { transform: translateY(-5px); background: rgba(168, 85, 247, 0.05) !important; border-color: #a855f7 !important; }
        a:hover { color: #a855f7 !important; }
      `}</style>
    </div>
  );
}