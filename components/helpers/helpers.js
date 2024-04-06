//https://geo.ipify.org/api/v2/country,city?apiKey=at_cGZ6gRQvSdxr4UX4jBMdUr95auep7&ipAddress=196.21.153.5
//https://ipapi.co/json/

let latitude = null;
let longitude = null;
let region = null;
let country = null;
let city = null;
export async function getMyLoc(ip) {
  //https://ipapi.co/8.8.8.8/json
  let url = "https://ipapi.co/json";
  let response = await fetch(url);
  let respLoc = await response.json();
  latitude = respLoc.latitude;
  longitude = respLoc.longitude;
  region = respLoc.region;
  country = respLoc.country;
  city = respLoc.city;

  let location = {
    lat: latitude,
    long: longitude,
    region: region,
    country: country,
    city: city,
  };
  return location;
}

// export async function getDiffLoc(ip){
//     let url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_cGZ6gRQvSdxr4UX4jBMdUr95auep7&ipAddress=${ip}`;
//     let response = await fetch(url);
//     let respLoc =  await response.json();
//     latitude = respLoc.location.lat;
//     longitude = respLoc.location.lng;
//     region = respLoc.location.region;
//     country = respLoc.location.country;
//     city = respLoc.location.city;
//     let location = {"lat":latitude,"long":longitude,"region":region,"country":country,"city":city}
//     return location;
// }
