import { BASE_URL, request } from "./constants";

export const getModelsOfMake = (make: string) => {
  return request(`${BASE_URL}/GetModelsForMake/${make}?format=json`);
};

export const getMakesForType = (type: string) => {
  return request(`${BASE_URL}/GetMakesForVehicleType/${type}?format=json`);
};
