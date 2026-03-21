import React from 'react';

// Este é o componente da sua página Inicial
export default function Inicio() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'black', color: 'white', overflowX: 'hidden', fontFamily: "'Avant Garde', sans-serif" }}>
      
      {/* 1. VÍDEO DE FUNDO (POSICIONAMENTO -10% E OPACIDADE 0.3) */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, backgroundColor: 'black', overflow: 'hidden' }}>
        <video autoPlay muted loop playsInline style={{ position: 'absolute', width: '100%', height: '140%', top: '-10%', left: 0, objectFit: 'cover', opacity: 0.3 }}>
          <source src="/video-home-loop.mp4" type="video/mp4" />
        </video>
      </div>

      <div style={{ position: 'relative', zIndex: 10 }}>
        
        {/* MENU COM A LOGO-POLIVA À ESQUERDA */}
        <nav style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '15px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <img src="/logo-poliva.png" alt="Pøliva Logo" style={{ width: '120px', height: 'auto', objectFit: 'contain' }} />
          <div style={{ display: 'flex', gap: '30px', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
            <a href="#" style={{ color: '#a855f7' }}>iníciø</a>
            <a href="#">søbre</a>
            <a href="#">shøws</a>
            <a href="#" style={{ whiteSpace: 'nowrap' }}>singles & álbuns</a>
            <a href="#">agenda</a>
            <a href="#">cøntatø</a>
          </div>
          <div style={{ width: '120px' }}></div> {/* Equilíbrio para centralizar o menu */}
        </nav>

        <main style={{ paddingTop: '180px', paddingBottom: '100px', maxWidth: '1100px', margin: '0 auto', textAlign: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
          
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 'bold', letterSpacing: '-0.05em', marginBottom: '40px', lineHeight: '1.1' }}>
            Música que desperta, <br/>
            <span style={{ color: 'rgba(168, 85, 247, 0.8)' }}>Show que vira portal</span>
          </h1>

          {/* CITAÇÃO */}
          <div style={{ maxWidth: '500px', margin: '0 auto 60px', fontStyle: 'italic', color: '#a1a1aa', fontSize: '15px', lineHeight: '1.6', borderLeft: '2px solid rgba(126, 34, 206, 0.5)', paddingLeft: '30px', textAlign: 'left', letterSpacing: '0.05em' }}>
            &quot;a música não é apenas entretenimento; ela é portal... eu faço músicas que transformam a mim e a outras pessoas&quot;
            <span style={{ display: 'block', fontStyle: 'normal', color: '#a855f7', fontWeight: 'bold', marginTop: '16px', letterSpacing: '0.4em', fontSize: '11px' }}>— Poliva Soham</span>
          </div>

          {/* TÍTULO DO VÍDEO */}
          <div style={{ marginBottom: '30px' }}>
            <p style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#71717a', marginBottom: '8px' }}>assista abaixo na íntegra:</p>
            <h2 style={{ fontSize: '20px', letterSpacing: '0.1em', fontWeight: 'bold' }}>pølivessense, o show:</h2>
          </div>

          {/* PLAYER YOUTUBE */}
          <div style={{ width: '100%', maxWidth: '800px', aspectRatio: '16/9', margin: '0 auto 100px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)', backgroundColor: '#000' }}>
             <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ID_DO_VIDEO" frameBorder="0" allowFullScreen style={{ borderRadius: '4px' }}></iframe>
          </div>

          {/* CARROSSEL DE PLAYLISTS COM TEXTOS CORRIGIDOS */}
          <section style={{ marginBottom: '150px' }}>
            <h3 style={{ fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#a855f7', marginBottom: '40px' }}>curadoria sonora</h3>
            <div style={{ display: 'flex', gap: '30px', overflowX: 'auto', paddingBottom: '30px', scrollbarWidth: 'none' }}>
              {[
                { title: "4 horas de música para despertar o fim de semana", img: "/capa-playlist-1.jpg" },
                { title: "Curtindo a estrada com rocks inesquecíveis", img: "/capa-playlist-2.jpg" },
                { title: "Rock matinal para começar bem o dia", img: "/capa-playlist-3.jpg" }
              ].map((item, index) => (
                <div key={index} style={{ minWidth: '320px', textAlign: 'left' }}>
                  <div style={{ width: '100%', aspectRatio: '1/1', backgroundColor: '#111', marginBottom: '15px', borderRadius: '2px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
                    <img src={item.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={item.title} />
                  </div>
                  <p style={{ fontSize: '13px', fontWeight: 'bold', letterSpacing: '0.05em', lineHeight: '1.4', color: '#ececec' }}>{item.title}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* RODAPÉ COMPLETO */}
        <footer style={{ backgroundColor: 'rgba(5, 5, 5, 0.98)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '80px 40px 40px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '60px', justifyContent: 'space-between' }}>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a855f7', marginBottom: '25px' }}>cøntatø</h4>
              <p style={{ fontSize: '13px', color: '#71717a', marginBottom: '15px' }}>para shøws e parcerias</p>
              <div style={{ fontSize: '13px', lineHeight: '2.2', color: 'white' }}>
                <p>e-mail: <span style={{ color: '#a855f7' }}>contato@polivaoficial.com.br</span></p>
                <p>redes sociais: <span style={{ color: '#a855f7' }}>@polivaoficial</span></p>
                <p>telefone: <span style={{ color: '#a855f7' }}>22 98802-3803</span></p>
              </div>
            </div>
            <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
               <img src="/logo-poliva.png" alt="Logo" style={{ width: '100px', opacity: 0.6, marginLeft: 'auto', marginBottom: '20px' }} />
               <p style={{ fontSize: '10px', letterSpacing: '0.1em', color: '#3f3f46' }}>pøliva© 2026. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>

        {/* PLAYER DE MÚSICA FIXO (O SÍMBOLO Ø VAI AQUI) */}
        <footer style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 100, backgroundColor: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '15px 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <img src="/simbolo-poliva.png" alt="Símbolo" style={{ width: '40px', height: '40px' }} />
              <div>
                <h4 style={{ fontSize: '11px', fontWeight: 'bold', textTransform: 'lowercase', margin: 0 }}>depressa</h4>
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
    </div>
  );
}