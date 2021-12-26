import NodeGeocoder from "node-geocoder";

const { GEOCODER_PROVIDER, GEOCODER_API_KEY } = process.env;

const options = {
  provider: GEOCODER_PROVIDER,

  // Optional depending on the providers
  fetch: "https",
  apiKey: GEOCODER_API_KEY, // for Mapquest, OpenCage, Google Premier
  formatter: null, // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

export default geocoder;
