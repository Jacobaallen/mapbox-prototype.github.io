import React, { useState } from 'react';
import './App.css';
import ReactMapGL from "react-map-gl"

export  default function App() {
const [viewport, setViewport] = useState({
  latitude:25.774266,
  longitud:-80.193659,
  width: '100ve',
  height: '100vh',
  zoom: 10
});

  return (
    <div>
      <ReactMapGL {...viewport}>
        Markers here
      </ReactMapGL>
    </div>
  );
}
