import React from 'react';

// Este é o componente da sua página Inicial
export default function Inicio() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden" style={{ fontFamily: "'Avant Garde', sans-serif", backgroundColor: 'black' }}>
      
      {/* 1. SISTEMA DE FUNDO (VÍDEO + FILTRO) */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -10 }}>
        {/* O VÍDEO */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            objectPosition: 'center 20%', // SOBE O VÍDEO PARA O TOPO
            opacity: 0.5 
          }}
        >
          <source src="/video-home-loop.mp4" type="video/mp4" />
        </video>
        {/* O FILTRO ESCURO (30% de opacidade para leitura) */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundColor: 'rgba(0,0,0,0.3)', 
          pointerEvents: 'none' 
        }}></div>
      </div>

      {/* 2. MENU - 6 ABAS E FONTE 18px (MAIOR) */}
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/5 py-6">
        <div className="flex justify-center items-center gap-8 text-[18px] lowercase tracking-[0.3em] font-light">
          <a href="#" className="hover:text-purple-400 transition">iníciø</a>
          <a href="#" className="hover:text-purple-400 transition">søbre</a>
          <a href="#" className="hover:text-purple-400 transition">shøws</a>
          <a href="#" className="hover:text-purple-400 transition whitespace-nowrap">singles & álbuns</a>
          <a href="#" className="hover:text-purple-400 transition">agenda</a>
          <a href="#" className="hover:text-purple-400 transition">cøntatø</a>
        </div>
      </nav>

      <main className="relative pt-56 pb-48 px-6 flex flex-col items-center max-w-5xl mx-auto text-center z-10">
        
        {/* 3. TÍTULO */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-10 leading-[1.1] lowercase">
          música que desperta <br/>
          <span className="text-purple-600/80">show que vira portal</span>
        </h1>

        {/* 4. CITAÇÃO - POLIVA SOHAM COM INICIAIS MAIÚSCULAS FORÇADAS */}
        <div className="max-w-lg mb-16 italic text-zinc-300 text-sm md:text-base leading-relaxed border-l-2 border-purple-900/50 pl-8 text-left mx-auto tracking-widest lowercase">
          &quot;a música não é apenas entretenimento; ela é portal. não é só sobre tocar música, é sobre atravessá-la. eu faço músicas e também canto músicas que transformam a mim e a outras pessoas&quot;
          <span 
            className="block not-italic text-purple-500 font-bold mt-4 tracking-[0.4em] text-[12px]" 
            style={{ textTransform: 'none', display: 'block' }}
          >
            — Poliva Soham
          </span>
        </div>

        {/* 5. PLAYER YOUTUBE */}
        <div className="w-full max-w-2xl aspect-video bg-zinc-950/60 rounded border border-white/10 flex items-center justify-center mb-10 shadow-2xl backdrop-blur-sm">
           <p className="text-zinc-700 tracking-[0.6em] lowercase text-[10px] font-light">[ player vídeo de ativação ]</p>
        </div>

      </main>

      {/* 6. PLAYER DE RODAPÉ */}
      <footer className="fixed bottom-0 w-full bg-black/90 backdrop-blur-2xl border-t border-white/5 p-6 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          <div className="flex items-center gap-5">
            <img 
              src="/simbolo-poliva.png" 
              alt="pøliva" 
              className="w-12 h-12 object-contain brightness-110"
              onError={(e) => { e.target.style.display = 'none'; }} 
            />
            <div>
              <h4 className="text-[12px] font-bold tracking-[0.2em] lowercase">depressa</h4>
              <p className="text-[10px] text-zinc-500 tracking-widest mt-0.5 lowercase">pøliva • 16 de abril</p>
            </div>
          </div>
          <div className="flex items-center gap-8">
             <span className="text-[10px] tracking-[0.3em] text-zinc-600 hidden md:block lowercase font-light">432hz</span>
             <div className="text-2xl text-purple-600 font-bold tracking-tighter">ø</div>
          </div>
        </div>
      </footer>
    </div>
  );
}