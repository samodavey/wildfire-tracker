import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";

//Unable to restrict to env due to costs, hence visible API key
// process.env.GOOGLE_MAPS_API_KEY 

const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAmhuIe8ndd8k8eAqTsIijr_IaSp3Zof_U'}}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <LocationMarker lat={center.lat} lng={center.lng}/>
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 50.5462,
    lng: -3.4973
  },
  zoom: 16
}

export default Map;
