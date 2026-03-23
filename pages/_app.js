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

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(err => console.log("Autoplay blocked", err));
    }
  }, [currentTrack]);

  const togglePlay = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
    setIsPlaying(true);
  };

  return (
    <>
      <audio ref={audioRef} src={tracks[currentTrack].file} onEnded={nextTrack} />
      
      <Component {...pageProps} isPlaying={isPlaying} togglePlay={togglePlay} nextTrack={nextTrack} prevTrack={prevTrack} currentTrack={currentTrack} tracks={tracks} />

      {/* RADIO BAR - EXATAMENTE IGUAL À SUA VERSÃO 2.5.5 */}
      <div className="radio-bar">
        <div className="radio-inner">
          <div className="radio-controls">
            <button onClick={prevTrack} className="radio-nav-btn interactive-zoom">
              <span>«</span><small>voltar</small>
            </button>
            <div className="play-circle interactive-zoom" onClick={togglePlay}>
              <img src="/simbolo-poliva.png" alt="Play" style={{ opacity: isPlaying ? 1 : 0.6 }} />
              <span className="play-label">{isPlaying ? 'pausar' : 'dê o play'}</span>
            </div>
            <button onClick={nextTrack} className="radio-nav-btn interactive-zoom">
              <span>»</span><small>avançar</small>
            </button>
          </div>
          
          <div className="radio-display">
            <div className="marquee-box">
              <p className={`marquee-content ${isPlaying ? 'running' : 'paused'}`}>
                {tracks[currentTrack].name}
              </p>
            </div>
            <span className="status-label" style={{ color: 'white', fontSize: '9px' }}>você está ouvindo</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: black; margin: 0; padding: 0; overflow-x: hidden; }

        .radio-bar { position: fixed; bottom: 0; width: 100%; background: #050505; padding: 15px 40px; border-top: 1px solid #111; z-index: 9999; }
        .radio-inner { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; gap: 50px; }
        .radio-controls { display: flex; align-items: center; gap: 25px; }
        .radio-nav-btn { background: none; border: none; color: #a855f7; cursor: pointer; display: flex; flex-direction: column; align-items: center; transition: 0.3s ease; }
        .radio-nav-btn small { font-size: 8px; text-transform: uppercase; opacity: 0.6; margin-top: 2px; }
        .play-circle { cursor: pointer; display: flex; flex-direction: column; align-items: center; min-width: 70px; transition: 0.3s ease; }
        .play-circle img { width: 35px; }
        .play-label { font-size: 8px; text-transform: uppercase; color: #a855f7; font-weight: bold; margin-top: 5px; }

        .radio-display { flex: 1; text-align: left; overflow: hidden; }
        .marquee-box { width: 280px; overflow: hidden; white-space: nowrap; margin-bottom: 5px; border-bottom: 1px solid rgba(168, 85, 247, 0.1); }
        .marquee-content { display: inline-block; padding-left: 20%; font-size: 13px; font-weight: bold; letter-spacing: 0.05em; }
        .marquee-content.running { animation: marquee 15s linear infinite; }

        @keyframes marquee { 0% { transform: translate(0, 0); } 100% { transform: translate(-100%, 0); } }
        .interactive-zoom:hover { transform: scale(1.08); filter: brightness(1.2); transition: 0.3s; }
      `}</style>
    </>
  );
}

export default MyApp;