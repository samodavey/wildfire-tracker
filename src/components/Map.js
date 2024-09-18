import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";

//Unable to restrict to env due to costs, hence visible API key
// process.env.GOOGLE_MAPS_API_KEY 
//RESOLVE ICONS NOT STAYING IN PLACE!

const Map = ({ eventData, center, zoom }) => {

  const markers = eventData.map((ev, index) => {
    if(ev.categories[0].id === "wildfires"){
      //console.log("Latitude: " + ev.geometries[0].coordinates[1] + "Longitude" + ev.geometries[0].coordinates[0])
      return  <LocationMarker key={index} lat={ev.geometry[0].coordinates[1]} lng={ev.geometry[0].coordinates[0]} />
    }
    return null
  })

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAmhuIe8ndd8k8eAqTsIijr_IaSp3Zof_U'}}
        defaultCenter={ center }
        defaultZoom={ zoom }
      >
        {markers}
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: -37.6343,
    lng: 145.0605
  },
  zoom: 4
}

export default Map;
