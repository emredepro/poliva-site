Apoio total, Pøliva. Às vezes, no processo criativo, a gente tenta inventar caminhos complexos e acaba perdendo a essência do que já estava funcionando. Esse código que você resgatou é a base mais sólida que construímos: ele tem o equilíbrio entre o mistério do portal (fundo escuro e vídeo fixo) e a clareza editorial que um projeto desse porte exige.

Já limpei o código, organizei os espaçamentos e garanti que as 6 abas do menu e a citação correta estejam cravadas.

🛠️ Código Consolidado (Versão "A Base de Tudo")
JavaScript
import React, { useState } from 'react';

export default function Inicio() {
  const playlists = [
    { title: "4 horas de música para despertar o fim de semana", img: "/capa-playlist-1.jpg" },
    { title: "Curtindo a estrada com rocks inesquecíveis", img: "/capa-playlist-2.jpg" },
    { title: "Rock matinal para começar bem o dia", img: "/capa-playlist-3.jpg" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', fontFamily: "'Avant Garde', sans-serif" }}>
      
      {/* 1. FUNDO FIXO (O PORTAL) */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }}>
          <source src="/video-home-loop.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, transparent 20%, black 120%)' }}></div>
      </div>

      <div style={{ position: 'relative', zIndex: 10 }}>
        
        {/* 2. MENU EDITORIAL - 6 ABAS E LOGO DESLOCADA */}
        <nav style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '20px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
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
              Música que desperta, <br/>
              <span style={{ color: '#a855f7' }}>Show que vira portal</span>
            </h1>

            <div style={{ maxWidth: '650px', margin: '0 auto', textAlign: 'left', borderLeft: '2px solid #a855f7', paddingLeft: '30px', color: '#a1a1aa', fontSize: '17px', lineHeight: '1.7', fontStyle: 'italic' }}>
              <p>&quot;A música não é apenas entretenimento; ela é portal. Não é só sobre tocar música, é sobre atravessá-la. Eu faço músicas e também canto músicas que transformam a mim e a outras pessoas&quot;</p>
              <span style={{ display: 'block', fontStyle: 'normal', color: '#a855f7', fontWeight: 'bold', marginTop: '20px', letterSpacing: '0.4em', fontSize: '11px', textTransform: 'uppercase' }}>— Poliva Soham</span>
            </div>
          </section>

          {/* CAIXA DO SHOW */}
          <section style={{ marginBottom: '160px' }}>
            <div style={{ maxWidth: '750px', margin: '0 auto 40px', padding: '50px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '4px', backdropFilter: 'blur(10px)' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', letterSpacing: '0.1em' }}>pølivessense, o show:</h2>
              <p style={{ fontSize: '12px', textTransform: 'uppercase', color: '#a855f7', letterSpacing: '0.4em' }}>assista abaixo na íntegra</p>
            </div>

            <div style={{ width: '100%', maxWidth: '612px', aspectRatio: '16/9', margin: '0 auto', boxShadow: '0 40px 100px rgba(0,0,0,0.8)', overflow: 'hidden', borderRadius: '4px' }}>
               <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ID_DO_VIDEO" frameBorder="0" allowFullScreen></iframe>
            </div>
          </section>

          {/* CARROSSEL PLAYLISTS */}
          <section style={{ marginBottom: '180px' }}>
             <div style={{ marginBottom: '50px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.2em' }}>playlists para as melhores ocasiões:</h3>
                <p style={{ fontSize: '16px', color: '#a855f7', marginTop: '10px' }}>o que o seu momento pede?</p>
             </div>

             <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px' }}>
                {playlists.map((_, i) => (
                  <button key={i} onClick={() => setCurrentIndex(i)} style={{ width: '10px', height: '10px', borderRadius: '50%', border: 'none', cursor: 'pointer', backgroundColor: currentIndex === i ? '#a855f7' : '#333', transition: '0.3s' }} />
                ))}
             </div>

             <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
                <div style={{ display: 'flex', transition: 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)', transform: `translateX(-${currentIndex * 100}%)` }}>
                  {playlists.map((item, index) => (
                    <div key={index} style={{ minWidth: '100%', display: 'flex', justifyContent: 'center' }}>
                      <div style={{ width: '182px', textAlign: 'center' }}>
                         <img src={item.img} style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '4px', marginBottom: '25px', border: '1px solid rgba(255,255,255,0.05)' }} />
                         <button style={{ background: 'none', border: '1px solid #a855f7', color: '#a855f7', fontSize: '10px', padding: '12px 24px', cursor: 'pointer', letterSpacing: '0.2em', fontWeight: 'bold' }}>OUÇA AQUI</button>
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
              <h4 style={{ fontSize: '20px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '0.1em' }}>cøntatø</h4>
              <div style={{ fontSize: '14px', lineHeight: '1.8', color: '#ccc' }}>
                <p>para shøws e parcerias</p>
                <p>e-mail: contato@polivaoficial.com.br</p>
                <p>redes sociais: @polivaoficial</p>
                <p style={{ marginTop: '15px', fontWeight: 'bold', color: 'white', fontSize: '16px' }}>telefone: 22 98802-3803</p>
              </div>
              <p style={{ marginTop: '80px', fontSize: '10px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>pøliva© 2026. Todos os direitos reservados.</p>
           </div>
        </footer>

        {/* PLAYER FIXO */}
        <div style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 100, backgroundColor: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(30px)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '15px 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <img src="/simbolo-poliva.png" alt="Logo" style={{ width: '40px', height: '40px' }} />
              <div style={{ textAlign: 'left' }}>
                <strong style={{ fontSize: '12px', display: 'block', textTransform: 'lowercase' }}>depressa</strong>
                <small style={{ fontSize: '10px', color: '#71717a' }}>pøliva • 16 de abril</small>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
               <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: '#52525b' }}>432hz</span>
               <div style={{ fontSize: '24px', color: '#a855f7', fontWeight: 'bold' }}>ø</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .nav-item { color: white; text-decoration: none; transition: 0.3s; padding-bottom: 5px; border-bottom: 1px solid transparent; }
        .nav-item:hover { color: #a855f7; border-bottom-color: #a855f7; }
        main button:hover { background: #a855f7 !important; color: white !important; }
      `}</style>
    </div>
  );
}