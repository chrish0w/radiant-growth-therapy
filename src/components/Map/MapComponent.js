import React, { useState } from 'react';
import Map, { Marker } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css'; // Correct styling import

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN; // Secure your token

function MapComponent() {
    const [viewState, setViewState] = useState({
        longitude: 151.047310, // Office longitude
        latitude: -33.833343,  // Office latitude
        zoom: 12
    });

    // Function to handle zoom in
    const zoomIn = () => {
        setViewState((prev) => ({ ...prev, zoom: Math.min(prev.zoom + 1, 20) })); // Max zoom: 20
    };

    // Function to handle zoom out
    const zoomOut = () => {
        setViewState((prev) => ({ ...prev, zoom: Math.max(prev.zoom - 1, 2) })); // Min zoom: 2
    };

    return (
        <div className="map-container">
            <Map
                mapboxAccessToken={MAPBOX_TOKEN}
                {...viewState} // Spread the updated viewState
                onMove={(evt) => setViewState(evt.viewState)} // Ensure map updates on user movement
                style={{ width: '100%', height: '500px' }}
                mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
            >
                <Marker longitude={151.047310} latitude={-33.833343} color="red" />
            </Map>

            {/* Zoom Controls */}
            <div className="zoom-controls">
                <button onClick={zoomIn} className="zoom-button">+</button>
                <button onClick={zoomOut} className="zoom-button">−</button>
            </div>
        </div>
    );
}

export default MapComponent;
