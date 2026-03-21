import React from 'react';

// Este é o componente da sua página Inicial
export default function Inicio() {
  return (
    Excelente, Pøliva! Estamos chegando na estética exata. O ajuste do vídeo (enquadrar o topo) é um detalhe técnico de "foco visual" que resolvemos com uma linha de CSS, e o filtro de 15% vai dar aquela profundidade sem esconder o movimento.

Como seu Tech Lead, aqui está o código refinado com:

Menu e Título: Tudo em caixa baixa (lowercase).

Título: Removi o ponto final, diminuí o tracking (espaçamento) para ficar mais coeso e mantive o tamanho 6xl.

Vídeo: Usei object-top para priorizar a parte superior do enquadramento e adicionei o filtro de 15% (overlay).

🛠️ Código de Ajuste Fino (index.js)
JavaScript
export default function Inicio() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans" style={{ fontFamily: "'Avant Garde', 'Astonpoliz', sans-serif" }}>
      
      {/* 1. FILTRO DE SOBREPOSIÇÃO (15% DE PRETO) */}
      <div className="fixed inset-0 bg-black/15 z-0 pointer-events-none"></div>

      {/* 2. VÍDEO DE FUNDO - FOCO NO TOPO (object-top) */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="fixed top-0 left-0 w-full h-full object-cover object-top -z-10 opacity-40"
      >
        <source src="/video-home-loop.mp4" type="video/mp4" />
      </video>

      {/* 3. MENU EM CAIXA BAIXA */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/5 py-5">
        <div className="flex justify-center gap-10 text-[12px] lowercase tracking-[0.2em] font-light opacity-80">
          <a href="#" className="text-purple-500 hover:text-purple-400 transition">iníciø</a>
          <a href="#" className="hover:text-purple-400 transition">søbre</a>
          <a href="#" className="hover:text-purple-400 transition">shøws</a>
          <a href="#" className="hover:text-purple-400 transition">agenda</a>
          <a href="#" className="hover:text-purple-400 transition">cøntatø</a>
        </div>
      </nav>

      <main className="relative pt-44 pb-48 px-6 flex flex-col items-center max-w-5xl mx-auto text-center z-10">
        
        {/* 4. TÍTULO CAIXA BAIXA - SEM PONTO - ESPAÇAMENTO REDUZIDO */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-[-0.02em] mb-10 leading-[1.1] lowercase">
          música que desperta <br/>
          <span className="text-purple-600/80">show que vira portal</span>
        </h1>

        {/* 5. CITAÇÃO */}
        <div className="max-w-lg mb-16 italic text-zinc-400 text-sm md:text-base leading-relaxed border-l-2 border-purple-900/50 pl-8 text-left mx-auto">
          "a música não é apenas entretenimento; ela é portal. não é só sobre tocar música, é sobre atravessá-la. eu faço músicas e também canto músicas que transformam a mim e a outras pessoas"
          <span className="block not-italic text-purple-600 font-bold mt-4 lowercase tracking-[0.3em] text-[10px]">— poliva soham</span>
        </div>

        {/* 6. PLAYER YOUTUBE */}
        <div className="w-full max-w-2xl aspect-video bg-zinc-950/40 rounded border border-white/10 flex items-center justify-center mb-10 shadow-2xl backdrop-blur-sm">
           <p className="text-zinc-700 tracking-[0.6em] lowercase text-[10px] font-light">[ player vídeo de ativação ]</p>
        </div>

      </main>

      {/* 7. PLAYER DE RODAPÉ */}
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
              <h4 className="text-[11px] font-bold tracking-[0.2em] lowercase">depressa</h4>
              <p className="text-[10px] text-zinc-500 tracking-widest mt-0.5 lowercase">pøliva • 16 de abril</p>
            </div>
          </div>
          <div className="flex items-center gap-8">
             <span className="text-[10px] tracking-[0.3em] text-zinc-600 hidden md:block lowercase font-light">432hz</span>
             <div className="text-xl text-purple-600 font-bold tracking-tighter">ø</div>
          </div>
        </div>
      </footer>
    </div>
  );
}