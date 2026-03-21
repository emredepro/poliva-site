import React from 'react';

// Este é o componente da sua página Inicial
export default function Inicio() {
  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* MENU COM IDENTIDADE ø */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-center space-x-8 bg-black/50 backdrop-blur-md text-xs tracking-[0.3em] uppercase">
        <a href="/" className="text-purple-500">iníciø</a>
        <a href="/sobre" className="hover:text-purple-400">søbre pøliva</a>
        <a href="/shows" className="hover:text-purple-400">shøws aø vivø</a>
        <a href="/musica" className="hover:text-purple-400">singles & álbuns</a>
        <a href="/agenda" className="hover:text-purple-400">agenda</a>
        <a href="/contato" className="hover:text-purple-400">cøntatø</a>
      </nav>

      {/* HERO SECTION: O VÍDEO LOOP 8s */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50">
          <source src="/video-home-loop.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-20 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-light tracking-[0.4em] mb-4">pøliva</h1>
          <p className="italic text-gray-400 tracking-widest text-sm md:text-base max-w-2xl mx-auto">
            Música que desperta. Show que vira portal: sommelier de hits que eletrizam o palco
          </p>
        </div>

        {/* SÍMBOLO DA PØLIVA (BOTÃO DE FREQUÊNCIA) */}
        <button className="fixed bottom-32 right-10 z-50 group flex flex-col items-center">
          <span className="text-[10px] tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity">432Hz</span>
          <div className="w-14 h-14 bg-purple-900/40 rounded-full flex items-center justify-center border border-purple-500/50 hover:scale-110 transition-transform">
            {/* Aqui entrará o seu arquivo de símbolo em SVG ou PNG */}
            <span className="text-xl">ø</span> 
          </div>
        </button>
      </section>

      {/* BLOCO: pølivessense, o show */}
      <section className="py-24 bg-zinc-900 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-video bg-black flex items-center justify-center border border-white/10">
            <p className="text-gray-500 text-sm tracking-widest">[ PLAYER YOUTUBE AQUI ]</p>
          </div>
          <div className="space-y-8">
            <p className="text-2xl md:text-3xl italic font-extralight leading-relaxed">
              "a música não é apenas entretenimento; ela é portal. não é só sobre tocar música, é sobre atravessá-la. Eu faço músicas e também canto músicas que transformam a mim e a outras pessoas"
            </p>
            <p className="text-purple-500 tracking-[0.3em] text-sm uppercase">— Poliva Soham</p>
          </div>
        </div>
      </section>

      {/* GLOBAL PLAYER (RODAPÉ FIXO) */}
      <footer className="fixed bottom-0 w-full bg-zinc-950 border-t border-white/5 p-4 z-[100] flex items-center justify-between px-10">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-zinc-800"></div>
          <div>
            <p className="text-xs font-bold tracking-widest">DEPRESSA</p>
            <p className="text-[10px] text-gray-500">pøliva</p>
          </div>
        </div>
        <div className="text-gray-400 text-xs">
          01:24 / 03:45
        </div>
      </footer>
    </div>
  );
}