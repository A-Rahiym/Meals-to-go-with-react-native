import camelize from "camelize";
import { locations } from "./locationMock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result = {}) => {
  const formatedResponse = camelize(result.results);
  const { geometry = {} } = formatedResponse[0];
  const { lat, lng } = geometry.location;
  return { lat, lng, viewport: geometry.viewport };
};
