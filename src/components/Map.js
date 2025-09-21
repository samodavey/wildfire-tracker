import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

//Unable to restrict to env due to costs, hence visible API key
// process.env.GOOGLE_MAPS_API_KEY 

const Map = ({ eventData, center, zoom }) => {

  const [locationInfo, setLocationInfo] = useState(null)

  const markers = eventData.map((ev, index) => {
    if(ev.categories[0].id === "wildfires"){
      //console.log("Latitude: " + ev.geometries[0].coordinates[1] + "Longitude" + ev.geometries[0].coordinates[0])
      return  <LocationMarker key={index} lat={ev.geometry[0].coordinates[1]} lng={ev.geometry[0].coordinates[0]} onClick={() => setLocationInfo({id: ev.id, title: ev.title})} />
    }
    return null
  })

  return (
    <div className="map" data-testid="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAmhuIe8ndd8k8eAqTsIijr_IaSp3Zof_U'}}
        defaultCenter={ center }
        defaultZoom={ zoom }
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo}/>}
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
