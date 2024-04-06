import Map from "../components/map.jsx";
export default function Home() {
  //To get Location: https://geo.ipify.org/  OR https://ipapi.co/json/
  //To draw the map: https://leafletjs.com
  //Demo Cord: long="40.8054",lat="-74.0241"

  let mapHeight = "90vh";
  return (
    <>
      <h2 className="text-blue-700">
        IP Address Tracker Search for any IP address or domain IP Address
        Location Timezone UTC ISP
      </h2>
      <Map h={mapHeight} userIp={null} />
    </>
  );
}
