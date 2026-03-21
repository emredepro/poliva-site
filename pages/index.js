import React from 'react';

// Este é o componente da sua página Inicial
export default function Inicio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      
      {/* 0. VÍDEO DE FUNDO (RITUAL 8s) */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 opacity-40"
      >
        <source src="/video-home-loop.mp4" type="video/mp4" />
      </video>

      {/* 1. MENU COM VIDRO FUMÊ (TRANSPARENTE) */}
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10 py-4">
        <div className="flex justify-center gap-8 text-[10px] uppercase tracking-[0.3em] font-light">
          <a href="#" className="text-purple-500">iníciø</a>
          <a href="#" className="hover:text-purple-400 transition">søbre pøliva</a>
          <a href="#" className="hover:text-purple-400 transition">shøws</a>
          <a href="#" className="hover:text-purple-400 transition">agenda</a>
          <a href="#" className="hover:text-purple-400 transition">cøntatø</a>
        </div>
      </nav>

      <main className="relative pt-40 pb-40 px-6 flex flex-col items-center max-w-5xl mx-auto text-center">
        
        {/* 2. TÍTULO IMPACTANTE (BOLD) */}
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-12 leading-tight uppercase">
          Música que desperta. <br/>
          <span className="text-purple-600">Show que vira portal:</span> <br/>
          sommelier de hits que eletrizam o palco
        </h1>

        {/* 3. CITAÇÃO ESTILO ESCRITORA (MENOR E ABAIXO DO TÍTULO) */}
        <div className="max-w-2xl mb-24 italic text-zinc-400 text-sm md:text-lg leading-relaxed border-l-2 border-purple-500/50 pl-8 text-left">
          "a música não é apenas entretenimento; ela é portal. não é só sobre tocar música, é sobre atravessá-la. Eu faço músicas e também canto músicas que transformam a mim e a outras pessoas"
          <span className="block not-italic text-purple-500 font-bold mt-4 uppercase tracking-[0.4em] text-[10px]">— Poliva Soham</span>
        </div>

        {/* 4. PLAYER YOUTUBE CENTRALIZADO */}
        <div className="w-full max-w-4xl aspect-video bg-zinc-900/40 rounded-sm border border-white/10 flex items-center justify-center mb-20 shadow-2xl shadow-purple-900/20">
           <p className="text-zinc-600 tracking-[0.5em] uppercase text-[10px]">[ Player do Vídeo de Ativação ]</p>
        </div>

      </main>

      {/* 5. PLAYER DE RODAPÉ (ESTILO PREMIUM) */}
      <footer className="fixed bottom-0 w-full bg-zinc-950/90 backdrop-blur-xl border-t border-white/5 p-4 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-950/40 border border-purple-500/20 rounded-sm flex items-center justify-center">
               <span className="text-purple-500 text-xs">ø</span>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase">DEPRESSA</h4>
              <p className="text-[10px] text-zinc-500 tracking-wider">pøliva • 16 de Abril</p>
            </div>
          </div>
          <div className="hidden md:block text-[10px] tracking-[0.3em] text-zinc-500">01:24 / 03:45</div>
          <div className="flex items-center gap-6">
             <span className="text-[10px] tracking-widest text-zinc-600">432Hz</span>
             <div className="text-lg text-purple-500">ø</div>
          </div>
        </div>
      </footer>
    </div>
  );
}