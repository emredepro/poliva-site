import React from 'react';

// Este é o componente da sua página Inicial
export default function Inicio() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden" style={{ fontFamily: "'Avant Garde', sans-serif" }}>
      
      {/* 1. CAMADA DE FUNDO (O VÍDEO E O PRETO) */}
      <div className="fixed inset-0 -z-20 bg-black">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover object-top opacity-40"
        >
          <source src="/video-home-loop.mp4" type="video/mp4" />
        </video>
        {/* FILTRO DE 15% DIRETO NO FUNDO */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none"></div>
      </div>

      {/* 2. MENU - CAIXA BAIXA COM ESPAÇAMENTO */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/5 py-5">
        <div className="flex justify-center gap-10 text-[12px] !lowercase tracking-[0.3em] font-light opacity-80">
          <a href="#" className="hover:text-purple-400 transition">iníciø</a>
          <a href="#" className="hover:text-purple-400 transition">søbre</a>
          <a href="#" className="hover:text-purple-400 transition">shøws</a>
          <a href="#" className="hover:text-purple-400 transition">agenda</a>
          <a href="#" className="hover:text-purple-400 transition">cøntatø</a>
        </div>
      </nav>

      <main className="relative pt-44 pb-48 px-6 flex flex-col items-center max-w-5xl mx-auto text-center z-10">
        
        {/* 3. TÍTULO - CAIXA BAIXA E TRACKING-TIGHTER */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-10 leading-[1.1] !lowercase">
          música que desperta <br/>
          <span className="text-purple-600/80 !lowercase">show que vira portal</span>
        </h1>

        {/* 4. CITAÇÃO - POLIVA SOHAM COM INICIAIS MAIÚSCULAS */}
        <div className="max-w-lg mb-16 italic text-zinc-400 text-sm md:text-base leading-relaxed border-l-2 border-purple-900/50 pl-8 text-left mx-auto !lowercase tracking-widest">
          &quot;a música não é apenas entretenimento; ela é portal. não é só sobre tocar música, é sobre atravessá-la. eu faço músicas e também canto músicas que transformam a mim e a outras pessoas&quot;
          <span className="block not-italic text-purple-600 font-bold mt-4 tracking-[0.4em] text-[10px]">
            — Poliva Soham
          </span>
        </div>

        {/* 5. PLAYER YOUTUBE */}
        <div className="w-full max-w-2xl aspect-video bg-zinc-950/40 rounded border border-white/10 flex items-center justify-center mb-10 shadow-2xl backdrop-blur-sm">
           <p className="text-zinc-700 tracking-[0.6em] !lowercase text-[10px] font-light">[ player vídeo de ativação ]</p>
        </div>

      </main>

      {/* 6. PLAYER DE RODAPÉ */}
      <footer className="fixed bottom-0 w-full bg-black/80 backdrop-blur-2xl border-t border-white/5 p-5 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          <div className="flex items-center gap-5">
            <img 
              src="/simbolo-poliva.png" 
              alt="pøliva" 
              className="w-10 h-10 object-contain brightness-110"
              onError={(e) => { e.target.style.display = 'none'; }} 
            />
            <div>
              <h4 className="text-[11px] font-bold tracking-[0.2em] !lowercase">depressa</h4>
              <p className="text-[10px] text-zinc-500 tracking-widest mt-0.5 !lowercase">pøliva • 16 de abril</p>
            </div>
          </div>
          <div className="flex items-center gap-8">
             <span className="text-[10px] tracking-[0.3em] text-zinc-600 hidden md:block !lowercase font-light">432hz</span>
             <div className="text-xl text-purple-600 font-bold tracking-tighter">ø</div>
          </div>
        </div>
      </footer>
    </div>
  );
}