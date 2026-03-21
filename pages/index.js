import React from 'react';

// Este é o componente da sua página Inicial
export default function Inicio() {
  return (
    <div className="min-h-screen bg-transparent text-white overflow-x-hidden" style={{ fontFamily: "'Avant Garde', 'Astonpoliz', sans-serif" }}>
      
      {/* VÍDEO DE FUNDO - CAMADA ZERO */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1] opacity-40"
      >
        <source src="/video-home-loop.mp4" type="video/mp4" />
      </video>

      {/* FUNDO PRETO DE SEGURANÇA (ATRÁS DO VÍDEO) */}
      <div className="fixed inset-0 bg-black z-[-2]"></div>

      {/* MENU - UM POUCO MAIOR E MAIS ESPAÇADO */}
      <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/5 py-5">
        <div className="flex justify-center gap-10 text-[11px] uppercase tracking-[0.4em] font-light">
          <a href="#" className="text-purple-500 hover:text-purple-400 transition">iníciø</a>
          <a href="#" className="hover:text-purple-400 transition">søbre</a>
          <a href="#" className="hover:text-purple-400 transition">shøws</a>
          <a href="#" className="hover:text-purple-400 transition">agenda</a>
          <a href="#" className="hover:text-purple-400 transition">cøntatø</a>
        </div>
      </nav>

      <main className="relative pt-44 pb-48 px-6 flex flex-col items-center max-w-5xl mx-auto text-center">
        
        {/* TÍTULO - TAMANHO 6XL (O MEIO TERMO) COM ESPAÇAMENTO */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-[0.15em] mb-10 leading-[1.1] uppercase">
          Música que desperta. <br/>
          <span className="text-purple-600/80">Show que vira portal</span>
        </h1>

        {/* CITAÇÃO - TEXT-SM (ESTILO ESCRITORA) */}
        <div className="max-w-lg mb-16 italic text-zinc-400 text-sm md:text-base leading-relaxed border-l-2 border-purple-900/50 pl-8 text-left mx-auto">
          "a música não é apenas entretenimento; ela é portal. não é só sobre tocar música, é sobre atravessá-la. Eu faço músicas e também canto músicas que transformam a mim e a outras pessoas"
          <span className="block not-italic text-purple-600 font-bold mt-4 uppercase tracking-[0.3em] text-[10px]">— Poliva Soham</span>
        </div>

        {/* PLAYER YOUTUBE - TAMANHO OK */}
        <div className="w-full max-w-2xl aspect-video bg-zinc-950/40 rounded border border-white/10 flex items-center justify-center mb-10 shadow-2xl backdrop-blur-sm">
           <p className="text-zinc-700 tracking-[0.6em] uppercase text-[9px] font-light">[ Player Vídeo de Ativação ]</p>
        </div>

      </main>

      {/* PLAYER DE RODAPÉ - COM SEU SÍMBOLO */}
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
              <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase">DEPRESSA</h4>
              <p className="text-[9px] text-zinc-500 tracking-widest mt-0.5">pøliva • 16 de Abril</p>
            </div>
          </div>
          <div className="flex items-center gap-8">
             <span className="text-[10px] tracking-[0.3em] text-zinc-600 hidden md:block uppercase font-light">432Hz</span>
             <div className="text-xl text-purple-600 font-bold tracking-tighter">ø</div>
          </div>
        </div>
      </footer>
    </div>
  );
}