import React, { useState } from 'react';

export default function Inicio() {
  const playlists = [
    { title: "4 horas de música para despertar o fim de semana", img: "/capa-playlist-1.jpg" },
    { title: "Curtindo a estrada com rocks inesquecíveis", img: "/capa-playlist-2.jpg" },
    { title: "Rock matinal para começar bem o dia", img: "/capa-playlist-3.jpg" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div style={{ backgroundColor: '#f9f9f9', color: '#1a1a1a', minHeight: '100vh', fontFamily: "'Helvetica Neue', Arial, sans-serif", overflowX: 'hidden' }}>
      
      {/* 1. MENU EDITORIAL - 6 ABAS (STICKY) */}
      <nav style={{ 
        position: 'sticky', top: 0, width: '100%', backgroundColor: 'white', 
        borderBottom: '1px solid #e5e5e5', padding: '25px 50px', 
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 100 
      }}>
        <div style={{ flex: 1 }}>
          <img src="/logo-poliva.png" alt="Logo" style={{ width: '120px', filter: 'invert(1)' }} /> {/* Invert para logo preta no fundo branco */}
        </div>
        
        <div style={{ display: 'flex', gap: '30px', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 'bold' }}>
          <a href="#" className="nav-item-editorial">iníciø</a>
          <a href="#" className="nav-item-editorial">søbre pøliva</a>
          <a href="#" className="nav-item-editorial">shøws aø vivø</a>
          <a href="#" className="nav-item-editorial">singles & álbuns</a>
          <a href="#" className="nav-item-editorial">agenda</a>
          <a href="#" className="nav-item-editorial">cøntatø</a>
        </div>
        <div style={{ flex: 1 }}></div>
      </nav>

      <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
        
        {/* 2. HERO - IMPACTO DE REVISTA */}
        <section style={{ paddingTop: '120px', paddingBottom: '100px', textAlign: 'center', borderBottom: '1px solid #e5e5e5' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', fontWeight: '900', letterSpacing: '-0.04em', lineHeight: '0.9', marginBottom: '60px', textTransform: 'uppercase' }}>
            Música que <br/> desperta.
          </h1>
          
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '24px', lineHeight: '1.4', color: '#444', marginBottom: '40px', fontWeight: '300' }}>
              &quot;A música não é apenas entretenimento; ela é portal. Não é só sobre tocar música, é sobre atravessá-la.&quot;
            </p>
            <span style={{ fontSize: '12px', letterSpacing: '0.3em', fontWeight: 'bold', color: '#a855f7' }}>— POLIVA SOHAM</span>
          </div>
        </section>

        {/* 3. SHOW - DESTAQUE LIMPO */}
        <section style={{ padding: '100px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div style={{ textAlign: 'left' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '20px' }}>pølivessense, o show.</h2>
            <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.6', marginBottom: '30px' }}>
              Assista à performance completa e mergulhe na frequência 432Hz. Uma jornada de limpeza, aterramento e catarse.
            </p>
            <button style={{ padding: '15px 40px', backgroundColor: 'black', color: 'white', border: 'none', fontWeight: 'bold', cursor: 'pointer', letterSpacing: '0.1em' }}>ASSISTIR AGORA</button>
          </div>
          
          <div style={{ aspectRatio: '16/9', backgroundColor: '#000', boxShadow: '20px 20px 0px #f0f0f0' }}>
             <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ID_DO_VIDEO" frameBorder="0" allowFullScreen></iframe>
          </div>
        </section>

        {/* 4. PLAYLISTS - GRID EDITORIAL */}
        <section style={{ padding: '100px 0', borderTop: '1px solid #e5e5e5' }}>
          <div style={{ marginBottom: '60px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '12px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#999', marginBottom: '20px' }}>Curadoria</h3>
            <h2 style={{ fontSize: '36px', fontWeight: '900' }}>O que o seu momento pede?</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px' }}>
            {playlists.map((item, index) => (
              <div key={index} className="playlist-card-editorial">
                <div style={{ overflow: 'hidden', marginBottom: '20px' }}>
                  <img src={item.img} alt={item.title} style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', transition: '0.6s' }} />
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', lineHeight: '1.3' }}>{item.title}</h4>
                <a href="#" style={{ fontSize: '11px', fontWeight: 'bold', textDecoration: 'none', color: '#a855f7', letterSpacing: '0.1em' }}>OUVIR PLAYLIST →</a>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 5. RODAPÉ - BLOCO SÓLIDO */}
      <footer style={{ backgroundColor: 'white', borderTop: '1px solid #e5e5e5', padding: '100px 50px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ textAlign: 'left' }}>
            <h4 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '30px' }}>CØNTATØ</h4>
            <div style={{ fontSize: '16px', lineHeight: '2', color: '#444' }}>
              <p>contato@polivaoficial.com.br</p>
              <p>@polivaoficial</p>
              <p style={{ fontWeight: 'bold', color: 'black' }}>22 98802-3803</p>
            </div>
          </div>
          <div style={{ textAlign: 'right', alignSelf: 'flex-end' }}>
            <p style={{ fontSize: '12px', color: '#999' }}>pøliva© 2026. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .nav-item-editorial { color: #1a1a1a; text-decoration: none; transition: 0.3s; border-bottom: 2px solid transparent; padding-bottom: 5px; }
        .nav-item-editorial:hover { color: #a855f7; border-bottom-color: #a855f7; }
        .playlist-card-editorial:hover img { transform: scale(1.05); }
        body { margin: 0; padding: 0; }
      `}</style>
    </div>
  );
}