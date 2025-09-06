import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const Mapbox = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYnJ1bmVsZGV2IiwiYSI6ImNtYXhyaDl3aDAxNWwybHNjZ3MyM2JnNXoifQ.7aMayv740vLKIK_ix0efLQ';

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [137.915, 36.259],
      zoom: 90,
      projection: 'globe'
    });

    mapRef.current.on('style.load', () => {
      mapRef.current.setFog({});
    });

    return () => mapRef.current.remove();
  }, []);

  return <div ref={mapContainerRef} style={{ height: '100%' }} />;
};

export default Mapbox;