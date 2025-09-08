import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";

import "mapbox-gl/dist/mapbox-gl.css";

const Mapbox = ({ coordinates, zoom = 16 }) => {
  const mapContainerRef = useRef();
  const mapRef = useRef();
  const markerRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYnJ1bmVsZGV2IiwiYSI6ImNtYXhyaDl3aDAxNWwybHNjZ3MyM2JnNXoifQ.7aMayv740vLKIK_ix0efLQ";

    // Default coordinates (France center) if none provided
    const defaultCenter = [2.3522, 48.8566]; // Paris coordinates
    const center = coordinates
      ? [coordinates.lng, coordinates.lat]
      : defaultCenter;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/satellite-v9",
      center: center,
      zoom: zoom,
      projection: "mercator",
    });

    // Add marker if coordinates are provided
    if (coordinates) {
      markerRef.current = new mapboxgl.Marker({
        color: "#db4200",
      })
        .setLngLat([coordinates.lng, coordinates.lat])
        .addTo(mapRef.current);
    }

    return () => {
      if (markerRef.current) {
        markerRef.current.remove();
      }
      mapRef.current.remove();
    };
  }, [coordinates, zoom]);

  return <div ref={mapContainerRef} style={{ height: "100%", width : "100%" }} />;
};

export default Mapbox;
