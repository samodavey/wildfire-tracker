import { useState, useEffect } from "react";
import Map from "./components/Map";
import Loader from "./components/Loader";
import React from "react";
//Use axios instead?
function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      //Add to .env file?
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v3/events");
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return <div>{!loading ? <Map eventData={eventData} /> : <Loader />} </div>;
}

export default App;
