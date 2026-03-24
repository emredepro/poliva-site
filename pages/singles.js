import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Singles() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const singlesData = [
    { title: "Depressa", img: "singles-depressa.jpg", link: "https://open.spotify.com/intl-pt/track/1SP07UiCSS9BOqWbHG0nSI?si=b732588566094064 " },
    { title: "TOQES", img: "singles-toqes.jpg", link: "https://open.spotify.com/intl-pt/track/6rXLgOVJJMYamEVPW6V45N?si=c24b3f16b407463e " },
    { title: "OTT", img: "singles-ott.jpg", link: "https://open.spotify.com/intl-pt/track/7ev9TpcSvAXkjrNmZ9qMyr?si=2a040ef2f16b4795 " },
    { title: "Há Mar", img: "singles-ha-mar.jpg", link: "https://open.spotify.com/intl-pt/track/5tkFsijUJp5Ml5Kr6tnIgq?si=1bbda7e12f7c4beb " }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % singlesData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="singles-page">
      <Head>
        <title>singles & álbuns | pølivessense</title>
      </Head>

      <nav className="navbar">
        <div className="nav-container">
          <img src="/logo-poliva.png" alt="Logo" className="nav-logo" />
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span><span></span><span></span>
          </div>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="/" className="nav-item">iníciø</a>
            <a href="/sobre" className="nav-item">søbre pøliva</a>
            <a href="/shows-ao-vivo" className="nav-item">shøws aø vivø</a>
            <a href="/singles" className="nav-item active-link">singles & álbuns</a>
            <a href="#" className="nav-item">agenda</a>
            <a href="#" className="nav-item">cøntatø</a>
          </div>
        </div>
      </nav>

      <a href="https://wa.me/message/L5OXQTU6PDIFF1" target="_blank" rel="noopener noreferrer" className="wa-global interactive-zoom">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>

      {/* CAPA AJUSTADA PARA 65% DA ALTURA DA TELA (65vh) */}
      <header className="main-capa-ajustada anim-fade-in">
        <img src="/depressa-novo.jpg" alt="Depressa Capa" className="img-crop-ajustada" />
      </header>

      <main className="content-wrapper">
        <section className="intro-section anim-fade-up">
          <div className="brutal-header center">
            <h2>Singles</h2>
          </div>
          <p className="desc-justificada">
            A trajetória da pøliva iniciou-se na pureza da voz e do violão, onde a alma das canções foi revelada em sua essência nua. 
            Antes do ritual, houve a semente com os singles <strong><em>Depressa, TOQES, OTT, Há Mar.</em></strong>
          </p>
        </section>

        {/* CARROSSEL */}
        <section className="carousel-full-width anim-fade-up">
          <div className="carousel-container">
            <button className="nav-btn prev" onClick={() => setCurrentSlide(currentSlide === 0 ? singlesData.length - 1 : currentSlide - 1)}>‹</button>
            <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {singlesData.map((s, i) => (
                <div key={i} className="carousel-slide">
                  <h3 className="slide-title">{s.title}</h3>
                  <div className="capa-wrapper interactive-zoom">
                    <img src={`/${s.img}`} alt={s.title} className="capa-img" />
                  </div>
                  <a href={s.link} target="_blank" rel="noopener noreferrer" className="ouca-btn-anim">Ouça Aqui</a>
                </div>
              ))}
            </div>
            <button className="nav-btn next" onClick={() => setCurrentSlide((currentSlide + 1) % singlesData.length)}>›</button>
          </div>
        </section>

        <section className="album-section anim-fade-up">
          <div className="brutal-header center">
            <h2>Álbum</h2>
          </div>
          {/* IMAGEM DO ÁLBUM TAMANHO PADRÃO (480px) */}
          <div className="album-art-box reduced interactive-zoom">
            <img src="/polivessense-album.jpg" alt="Álbum Polivessense" className="img-album" />
          </div>
          <p className="desc-justificada">
            O álbum <strong>pølivessense (2026)</strong> marca o despertar do <strong>Rock Xamânico</strong> no cenário nacional. 
            Este projeto conceitual, fundamentado nos 5 elementos e nas 7 Leis Herméticas, é o ponto onde o misticismo encontra a distorção 
            para criar um "show-portal" visceral. O portal de entrada dessa jornada é o single <strong>"Depressa"</strong>, 
            que personifica o elemento <strong>Éter</strong> e sela o rebranding oficial da artista em uma narrativa de morte do ego e renascimento da alma. 
            Unindo a força dos tambores, a profundidade da poesia e o peso do rock alternativo, o álbum apresenta uma tracklist oficial composta por: 
            <strong>Depressa (Single de Abertura), Se Tiver Vontade, fe-li-ci-da-de, Viver, Sonhos, OTT e Viver - Remix.</strong>
          </p>
        </section>

        <section className="depressa-2026 anim-fade-up">
          <div className="brutal-header center">
            <h2>Depressa</h2>
          </div>
          {/* IMAGEM DO SINGLE DEPRESSA NO MESMO TAMANHO QUE POLIVESSENSE (480px) */}
          <div className="album-art-box reduced interactive-zoom">
            <img src="/depressa-2026.jpg" alt="Depressa 2026" className="img-album" />
          </div>
          {/* BOTAO CENTRALIZADO */}
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <a href="#" className="ouca-btn-anim">Pré Save Aqui</a>
          </div>
        </section>

        <section className="letras-section anim-fade-up">
          <div className="brutal-header center spacer-lg">
            <h2 className="title-gold">Letras</h2>
          </div>

          <div className="letra-bloco">
            <h3>Depressa</h3>
            {/* LETRAS JUSTIFICADAS AO MEIO */}
            <pre className="letra-justificada-centro">
              Dentro de mim sinto o tempo correr e a vontade de ver seu sorriso aqui.<br/>
              Perto de mim sinto o amor crescer e que pena não ter essa loucura em mim.<br/><br/>
              Sinto que vou precisar pousar em algum lugar e preciso ver você lá<br/><br/>
              Dentro de mim sinto o tempo correr e a vontade de ver seu sorriso aqui.<br/>
              Perto de mim sinto o amor crescer e que pena não ter essa loucura em mim.<br/><br/>
              Sinto que vou precisar pousar em algum lugar e preciso ver você lá<br/>
              Pra eu saber onde devo ir, pra eu viver algo sem fim.
            </pre>
          </div>

          <div className="letra-bloco">
            <h3>TOQES</h3>
            <pre className="letra-justificada-centro">
              Se isso é tudo o que você precisa, será tudo o que eu serei.<br/>
              Só não chore quando anoitecer<br/><br/>
              Nessa distância de olhares, o sol nos une quando ele nasce<br/>
              E se um dia não for o suficiente, viva todos de uma vez<br/><br/>
              E quando a gente quer muito alguma coisa o universo conspira ao nosso favor<br/>
              Então diga, pare com isso coração. Pare de sentir o que você não sente, se você tiver que chorar<br/><br/>
              Há poucos passos da saída, você olha para o relógio<br/>
              E torce para que as portas fechem antes de você<br/><br/>
              Dois lados nessa grande historinha.<br/>
              Dois corações sobrevivendo ao seu tempo<br/>
              Nada mais faz sentido, mas a saudade já faz<br/><br/>
              E quando a gente quer muito alguma coisa o universo conspira ao nosso favor<br/>
              Então diga, pare com isso coração. Pare de sentir o que você não sente, se você tiver que chorar<br/><br/>
              Só não diga que perdemos tempo. Nada vai nos superar. Seja menos, sendo mais<br/>
              Sinta como eu sinto muito, mas seja menos que uma fase e volte para casa a me encontrar<br/><br/>
              E quando a gente quer muito alguma coisa o universo conspira ao nosso favor<br/>
              Então diga, pare com isso coração. Pare de sentir o que você não sente, se você tiver que chorar
            </pre>
          </div>

          <div className="letra-bloco">
            <h3>OTT</h3>
            <pre className="letra-justificada-centro">
              Você passa o tempo todo querendo entender o sorriso, mas não quer sorrir.<br/>
              Só dá meia volta e espera ter o que eles tem.<br/><br/>
              Você jura o tempo todo que a felicidade convém, mas o sossego lhe serve bem.<br/>
              Só senta em seu sofá, esquece e assiste a TV<br/><br/>
              Toda vez que o hoje do hoje chegar, faça diferente do ontem que já foi<br/>
              E quem sabe o hoje de amanhã, não te fará sorrir bem mais, ser feliz e aproveitar?<br/><br/>
              Passa, jura, deseja, planeja, mas não corre atrás, not cumpre mais.<br/>
              Não alcança e faz, não realiza e traz.<br/><br/>
              O Universo, então, te dá em troca o que você oferecer.<br/>
              Enquanto você perde seu tempo esperando, faça ele acontecer.
            </pre>
          </div>

          {/* ESPAÇO ADICIONAL ANTES DO FINAL (padding-bottom aumentado) */}
          <div className="letra-bloco" style={{ paddingBottom: '250px' }}>
            <h3>Há Mar</h3>
            <pre className="letra-justificada-centro">
              Não há clichê. Não há talvez um só lugar. Te vejo no céu, sinto no ar e em todas as partes que eu lembrar você. Que lembrar você.<br/><br/>
              Vejo o mar e o seu brilho em um pôr do sol me lembra o seu olhar.<br/>
              É entender que nessa liberdade só existe um lugar, onde o amor não é o possuir.<br/><br/>
              Não há clichê. Não há talvez um só lugar. Te vejo no céu; sinto no ar e em todas as partes que eu lembrar você. Que lembrar você.<br/><br/>
              Vejo o mar e o seu brilho em um pôr do sol me lembra o seu olhar.<br/>
              É entender que nessa liberdade só existe um lugar, onde o amor não é o possuir.<br/><br/>
              É o admirar, no outro se encontrar, se apaixonar, plantar e cuidar.<br/><br/>
              É o admirar, no outro se encontrar, se apaixonar, plantar e cuidar.<br/><br/>
              E se eu for para onde quer que eu vá, sei que haverá motivos pra voltar. E o que importa nessa direção é que sempre haverá um mar no caminho.<br/><br/>
              E se eu for para onde quer que eu vá, sempre haverá motivos pra voltar. E o que importa nessa direção é que sempre haverá um mar no caminho.<br/><br/>
              Vejo o mar e o seu brilho em um pôr do sol me lembra o seu olhar.<br/>
              É entender que nessa liberdade só existe um lugar. Onde o amor não é o possuir.
            </pre>
          </div>
        </section>
      </main>

      <style jsx>{`
        .singles-page { background: black; min-height: 100vh; color: white; overflow-x: hidden; position: relative; z-index: 1; }
        .singles-page::before { content: ""; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-image: url('/patterns_poliva_simbolos-07.jpg'); background-size: cover; background-position: center; opacity: 0.1; z-index: -1; }
        
        .navbar { position: fixed; top: 0; width: 100%; background: rgba(0,0,0,0.95); padding: 25px 40px; z-index: 4000; border-bottom: 1px solid #111; }
        .nav-container { max-width: 1400px; margin: 0 auto; display: flex; justify-content: center; align-items: center; position: relative; min-height: 50px; }
        .nav-logo { width: 110px; position: absolute; left: 0; }
        .nav-links { display: flex; gap: 40px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: bold; }
        .nav-item { color: white; text-decoration: none; transition: 0.3s ease; }
        .nav-item:hover, .active-link { color: #a855f7 !important; }
        .wa-global { position: fixed; bottom: 120px; right: 30px; z-index: 5000; width: 50px; }

        .main-capa-ajustada { width: 100%; height: 65vh; overflow: hidden; margin-top: 80px; }
        .img-crop-ajustada { width: 100%; height: 100%; object-fit: cover; object-position: center 40%; filter: grayscale(20%); }

        .content-wrapper { max-width: 1000px; margin: 0 auto; padding: 0 20px; }
        
        .brutal-header h2 { font-size: 32px; font-weight: bold; text-transform: lowercase; margin-top: 80px; margin-bottom: 30px; }
        .brutal-header.center { text-align: center; }
        
        .desc-justificada { font-size: 18px; line-height: 1.6; margin-bottom: 50px; color: #ccc; text-align: justify; hyphens: auto; }

        /* CARROSSEL */
        .carousel-full-width { width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; overflow: hidden; margin-bottom: 100px; background: rgba(255,255,255,0.02); padding: 60px 0; }
        .carousel-container { max-width: 100%; position: relative; }
        .carousel-track { display: flex; transition: transform 0.8s cubic-bezier(0.65, 0, 0.35, 1); }
        .carousel-slide { min-width: 100%; display: flex; flex-direction: column; align-items: center; }
        .slide-title { font-size: 24px; font-weight: bold; margin-bottom: 25px; text-transform: uppercase; letter-spacing: 2px; }
        .capa-wrapper { width: 300px; aspect-ratio: 1/1; margin-bottom: 30px; box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
        .capa-img { width: 100%; height: 100%; object-fit: cover; }
        
        .ouca-btn-anim { display: inline-block; background: none; border: 1px solid #a855f7; color: #a855f7; padding: 12px 35px; font-weight: bold; text-decoration: none; text-transform: lowercase; transition: 0.4s; }
        .ouca-btn-anim:hover { background: #a855f7; color: black; transform: scale(1.1); box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); }

        .nav-btn { position: absolute; top: 50%; transform: translateY(-50%); background: none; border: none; color: white; font-size: 60px; cursor: pointer; z-index: 100; opacity: 0.3; transition: 0.3s; }
        .nav-btn:hover { opacity: 1; color: #a855f7; }
        .prev { left: 50px; }
        .next { right: 50px; }

        /* ALBUM E CAPAS IGUALADAS */
        .album-art-box { width: 100%; max-width: 600px; margin: 40px auto; border: 1px solid #222; transition: 0.4s; }
        .album-art-box.reduced { max-width: 480px; } /* REDUZIDO EM 20% PARA IGUALAR DEPRESSA (600 - 120 = 480) */
        .img-album { width: 100%; display: block; }

        /* LETRAS */
        .letra-bloco { margin-bottom: 80px; text-align: center; }
        .letra-bloco h3 { font-size: 20px; color: #a855f7; margin-bottom: 30px; text-transform: none; font-weight: bold; }
        .letra-bloco pre { font-family: inherit; font-size: 16px; line-height: 1.8; color: #aaa; white-space: pre-wrap; }
        
        /* JUSTIFICADO AO MEIO */
        .letra-justificada-centro { text-align: justify; text-align-last: center; max-width: 800px; margin: 0 auto; }
        
        .spacer-lg { margin-top: 150px; }
        .title-gold { color: #fff; border-bottom: 1px solid #a855f7; display: inline-block; padding-bottom: 10px; }

        .anim-fade-up { opacity: 0; transform: translateY(30px); animation: revealUp 0.6s forwards; }
        .anim-fade-in { opacity: 0; animation: fadeIn 1.2s forwards; }
        @keyframes revealUp { to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { to { opacity: 1; } }
        .interactive-zoom:hover { transform: scale(1.03); filter: brightness(1.1); transition: 0.4s; }

        @media (max-width: 1024px) {
          .hamburger { display: block; }
          .nav-links { position: fixed; top: 0; right: -100%; width: 100%; height: 100vh; background: black; flex-direction: column; align-items: center; justify-content: center; transition: 0.5s; }
          .nav-links.active { right: 0; }
          .nav-btn { display: none; }
          .carousel-full-width { padding: 40px 0; }
          .capa-wrapper { width: 250px; }
          .letra-justificada-centro { text-align: center; text-align-last: center; }
        }
      `}</style>
    </div>
  );
}