import React from 'react';

// Este é o componente da sua página Inicial
export default function Inicio() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden" style={{ fontFamily: "'Avant Garde', 'Astonpoliz', sans-serif" }}>
      
      {/* VÍDEO DE FUNDO (CORRIGIDO) */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 opacity-30"
      >
        <source src="/video-home-loop.mp4" type="video/mp4" />
      </video>

      {/* MENU - VIDRO FUMÊ DISCRETO */}
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/5 py-4">
        <div className="flex justify-center gap-8 text-[9px] uppercase tracking-[0.4em] font-light opacity-70">
          <a href="#" className="text-purple-500">iníciø</a>
          <a href="#" className="hover:text-purple-400 transition">søbre</a>
          <a href="#" className="hover:text-purple-400 transition">shøws</a>
          <a href="#" className="hover:text-purple-400 transition">agenda</a>
          <a href="#" className="hover:text-purple-400 transition">cøntatø</a>
        </div>
      </nav>

      <main className="relative pt-36 pb-40 px-6 flex flex-col items-center max-w-4xl mx-auto text-center">
        
        {/* TÍTULO - TAMANHO 4XL (EQUILIBRADO) E BOLD */}
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-8 leading-tight uppercase">
          Música que desperta. <br/>
          <span className="text-purple-600/70">Show que vira portal</span>
        </h1>

        {/* CITAÇÃO - TEXT-SM (ESTILO ESCRITORA) */}
        <div className="max-w-lg mb-12 italic text-zinc-500 text-sm leading-relaxed border-l border-purple-900/50 pl-6 text-left mx-auto">
          "a música não é apenas entretenimento; ela é portal. não é só sobre tocar música, é sobre atravessá-la. Eu faço músicas e também canto músicas que transformam a mim e a outras pessoas"
          <span className="block not-italic text-purple-700 font-bold mt-3 uppercase tracking-widest text-[9px]">— Poliva Soham</span>
        </div>

        {/* PLAYER YOUTUBE - CENTRALIZADO E MENOR */}
        <div className="w-full max-w-xl aspect-video bg-zinc-950/60 rounded border border-white/5 flex items-center justify-center mb-10 shadow-2xl">
           <p className="text-zinc-700 tracking-[0.5em] uppercase text-[9px]">[ Player YouTube ]</p>
        </div>

      </main>

      {/* PLAYER DE RODAPÉ - COM SEU SÍMBOLO */}
      <footer className="fixed bottom-0 w-full bg-black/90 backdrop-blur-2xl border-t border-white/5 p-4 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-4">
            {/* O SEU SÍMBOLO (simbolo-poliva) */}
            <img 
              src="/simbolo-poliva.png" 
              alt="pøliva" 
              className="w-10 h-10 object-contain brightness-125"
              onError={(e) => { e.target.style.display = 'none'; }} 
            />
            <div>
              <h4 className="text-[10px] font-bold tracking-widest uppercase">DEPRESSA</h4>
              <p className="text-[9px] text-zinc-600 tracking-wider">pøliva • 16 de Abril</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
             <span className="text-[9px] tracking-widest text-zinc-700">432Hz</span>
             <div className="text-lg text-purple-600 font-bold">ø</div>
          </div>
        </div>
      </footer>
    </div>
  );
}