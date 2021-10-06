import React from "react";
import leaflet, {
  CRS,
  latLng,
  latLngBounds,
} from "leaflet";
import { 
  MapContainer, 
  ImageOverlay,
  useMapEvents 
} from "react-leaflet";

import DraftMap from 'assets/DraftMap.jpg';

import './LeafletMap.css';

// CRS coordinates are [y, x] to conform with [lat, lng] methodology
const bounds = latLngBounds([0,0], [4588, 8192]);

function MapTesting() {
  const map = useMapEvents({
    zoomend: () => {
      console.log(map.getZoom());
    },
    click: (e) => {
      console.log(e)
    }
   })
  return null
}

const LeafletMap = () => {

  return(
    <MapContainer
      crs={CRS.Simple}
      maxBounds={bounds}
      center={latLng(4588/2, 8192/2)}
      zoom={1}
      minZoom={-2}
      maxZoom={1}
    >
      <ImageOverlay
        url={DraftMap}
        bounds={bounds}
      />
      <MapTesting/>
    </MapContainer>
  )
};

export default LeafletMap;