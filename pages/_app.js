import React, { useState, useRef, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const tracks = [
    { file: "/ha-mar.mp3", name: "Há Mar - pøliva ft. bruno morpheo ft. bruno perrone ft. lucão freitas" },
    { file: "/Depressa.mp3", name: "Depressa - pøliva" },
    { file: "/OTT.mp3", name: "OTT - pøliva ft. bruno morpheo ft. daniel filgueiras" },
    { file: "/TOQES.mp3", name: "TOQES - pøliva ft. morpheo ft. daniel filgueiras" }
  ];

  const togglePlay = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src={tracks[currentTrack].file} onEnded={() => setCurrentTrack((prev) => (prev + 1) % tracks.length)} />
      
      {/* Componente que renderiza as páginas (Home, Sobre, etc) */}
      <Component {...pageProps} />

      {/* RÁDIO GLOBAL (TRAVADA NO SITE TODO) */}
      <div className="radio-bar">
        <div className="radio-inner">
          <div className="radio-controls">
            <button onClick={() => setCurrentTrack(prev => (prev === 0 ? 3 : prev - 1))} className="radio-nav-btn">«</button>
            <div className="play-circle" onClick={togglePlay} style={{ cursor: 'pointer', textAlign: 'center', minWidth: '70px' }}>
              <img src="/simbolo-poliva.png" alt="Play" style={{ width: '35px', opacity: isPlaying ? 1 : 0.6 }} />
              <span style={{ display: 'block', fontSize: '8px', color: '#a855f7', fontWeight: 'bold', textTransform: 'uppercase', marginTop: '5px' }}>
                {isPlaying ? 'pausar' : 'play'}
              </span>
            </div>
            <button onClick={() => setCurrentTrack(prev => (prev + 1) % 4)} className="radio-nav-btn">»</button>
          </div>
          <div className="radio-display">
            <div className="marquee-box"><p className={isPlaying ? 'running' : ''}>{tracks[currentTrack].name}</p></div>
            <span style={{ fontSize: '9px', color: 'white', display: 'block', marginTop: '5px' }}>você está ouvindo</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Reset básico que o globals.css faria, agora direto aqui */
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: black; margin: 0; padding: 0; overflow-x: hidden; }

        .radio-bar { position: fixed; bottom: 0; width: 100%; background: #050505; padding: 15px 40px; border-top: 1px solid #111; z-index: 9999; }
        .radio-inner { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; gap: 50px; }
        .radio-controls { display: flex; align-items: center; gap: 25px; }
        .radio-nav-btn { background: none; border: none; color: #a855f7; font-size: 24px; cursor: pointer; }
        .radio-display { flex: 1; text-align: left; overflow: hidden; }
        .marquee-box { width: 280px; overflow: hidden; border-bottom: 1px solid rgba(168, 85, 247, 0.1); padding-bottom: 5px; }
        .marquee-box p { white-space: nowrap; font-weight: bold; font-size: 13px; }
        .running { animation: marquee 15s linear infinite; }
        @keyframes marquee { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
      `}</style>
    </>
  );
}

export default MyApp;