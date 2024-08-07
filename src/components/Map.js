import GoogleMapReact from "google-map-react";

//Unable to restrict to env due to costs, hence visible API key
// process.env.GOOGLE_MAPS_API_KEY 

const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBQj1ThkyDR8Hr3aBOdb83vuUFIGV8r93A'}}
        defaultCenter={center}
        defaultZoom={zoom}
      />
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
