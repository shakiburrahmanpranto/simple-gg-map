import { Map } from "@vis.gl/react-google-maps";
import "./App.css";

function App() {
  return (
    <>
      <h1> React google maps</h1>
      <Map
        style={{ width: "100vw", height: "100vh" }}
        defaultCenter={{ lat: 23.8041, lng: 90.4152 }}
        defaultZoom={13}
        gestureHandling="greedy"
        disableDefaultUI
      />
    </>
  );
}

export default App;
