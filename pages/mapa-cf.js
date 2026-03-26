import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

// --- SEU BANCO DE DADOS REAL ---
const PORTAL_DADOS = {
  diamond: [
    { id: "d1", nome: "EXEMPLO DIAMOND", nicho: "Cafeterias", bairro: "Passagem", status: "disponivel", img: "/ao-vivo-show.jpg", bio: "O portal oficial do café na Passagem.", lat: -22.8814, lng: -42.0123 },
  ],
  gold: [
    { id: "g1", nome: "EXEMPLO GOLD", nicho: "Noite", bairro: "Praia do Forte", status: "disponivel", img: "/quadrado-show.png", beneficio: "15% OFF", lat: -22.8850, lng: -42.0150 },
  ],
  silver: []
};

// ESTILO ULTRA-DARK (JSON)
const mapStyles = [
  { "elementType": "geometry", "stylers": [{ "color": "#1d2c4d" }] },
  { "elementType": "labels.text.fill", "stylers": [{ "color": "#8ec3b9" }] },
  { "elementType": "labels.text.stroke", "stylers": [{ "color": "#1a3646" }] },
  { "featureType": "administrative.country", "elementType": "geometry.stroke", "stylers": [{ "color": "#4b6878" }] },
  { "featureType": "landscape.man_made", "elementType": "geometry.stroke", "stylers": [{ "color": "#334e87" }] },
  { "featureType": "poi", "stylers": [{ "visibility": "off" }] },
  { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#304a7d" }] },
  { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#98a5be" }] },
  { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#2c6675" }] },
  { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#0e1626" }] }
];

const containerStyle = { width: '100%', height: '450px' };
const center = { lat: -22.8833, lng: -42.0167 }; // Cabo Frio - Passagem

export default function MapaCultural() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBeMIpkJqzjQOURxV70GWFZmCWk6Eeut2Y"
  });

  const [filtroNicho, setFiltroNicho] = useState('Todos');
  const [selected, setSelected] = useState(null);
  const [data, setData] = useState({ diamond: [], gold: [], silver: [] });

  useEffect(() => {
    const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
    setData({
      diamond: shuffle(PORTAL_DADOS.diamond),
      gold: shuffle(PORTAL_DADOS.gold),
      silver: shuffle(PORTAL_DADOS.silver)
    });
  }, []);

  const filtrar = (lista) => filtroNicho === 'Todos' ? lista : lista.filter(p => p.nicho === filtroNicho);

  return (
    <div className="mapa-page">
      <Head><title>mapa cultural | pølivessense</title></Head>

      <main className="mapa-container">
        <header className="mapa-header">
          <h1 className="title-brutal">MAPA CULTURAL PØLIVA</h1>
          <p className="subtitle">OS PORTAIS DE CABO FRIO</p>
        </header>

        {/* GOOGLE MAPS REAL */}
        <section className="map-wrapper">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
              options={{ styles: mapStyles, disableDefaultUI: true }}
            >
              {[...data.diamond, ...data.gold].map(p => (
                <Marker 
                  key={p.id} 
                  position={{ lat: p.lat, lng: p.lng }} 
                  onClick={() => setSelected(p)}
                  label={{ text: "Ø", color: "#a855f7", fontWeight: "900", fontSize: "18px" }}
                />
              ))}

              {selected && (
                <InfoWindow position={{ lat: selected.lat, lng: selected.lng }} onCloseClick={() => setSelected(null)}>
                  <div className="info-window-dark">
                    <h6>{selected.nome}</h6>
                    <small>{selected.bairro}</small>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          ) : <div className="loading">Carregando Portais...</div>}
        </section>

        <nav className="filter-nav">
          {["Todos", "Cafeterias", "Gastronomia", "Noite", "Experiências", "Lifestyle"].map(n => (
            <button key={n} className={filtroNicho === n ? 'active' : ''} onClick={() => setFiltroNicho(n)}>{n}</button>
          ))}
        </nav>

        {/* LISTAGEM DIAMOND */}
        <section className="section-tier">
          <h3 className="label-tier diamond-text">✦ EMBAIXADORES DIAMOND ✦</h3>
          {filtrar(data.diamond).map(p => (
            <div key={p.id} className="diamond-card-brutal">
              <div className="img-box"><img src={p.img} /></div>
              <div className="info-box">
                <div className={`status ${p.status}`}>● {p.status.toUpperCase()}</div>
                <h2>{p.nome}</h2>
                <p>{p.bio}</p>
                <a href={`https://wa.me/22988023803?text=Vim+pelo+Mapa+e+quero+meu+VIP+${p.nome}`} className="btn-portal">RESGATAR PORTAL VIP</a>
              </div>
            </div>
          ))}
        </section>
      </main>

      <style jsx>{`
        .mapa-page { background: #000; min-height: 100vh; color: #fff; padding-bottom: 100px; }
        .mapa-container { max-width: 1100px; margin: 0 auto; padding: 20px; }
        .title-brutal { font-size: 50px; font-weight: 900; text-align: center; color: #fff; }
        .subtitle { text-align: center; font-size: 11px; letter-spacing: 5px; opacity: 0.5; margin-bottom: 40px; }
        .map-wrapper { border: 1px solid #a855f7; box-shadow: 0 0 30px rgba(168, 85, 247, 0.2); margin-bottom: 40px; }
        .filter-nav { display: flex; justify-content: center; gap: 10px; margin-bottom: 60px; }
        .filter-nav button { background: none; border: 1px solid #222; color: #666; padding: 10px 20px; cursor: pointer; text-transform: uppercase; font-size: 10px; }
        .filter-nav button.active { border-color: #a855f7; color: #fff; background: #a855f722; }
        .section-tier { margin-bottom: 80px; }
        .diamond-card-brutal { display: grid; grid-template-columns: 1fr 1fr; background: #080808; border: 1px solid #222; }
        .img-box img { width: 100%; height: 400px; object-fit: cover; }
        .info-box { padding: 40px; display: flex; flex-direction: column; justify-content: center; }
        .status.disponivel { color: #22c55e; font-size: 10px; font-weight: 900; margin-bottom: 15px; }
        .btn-portal { background: #a855f7; color: #000; padding: 18px; text-align: center; text-decoration: none; font-weight: 900; margin-top: 25px; }
        .info-window-dark { color: #000; padding: 10px; }
        .loading { height: 450px; display: flex; align-items: center; justify-content: center; color: #a855f7; letter-spacing: 5px; }
      `}</style>
    </div>
  );
}