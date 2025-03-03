import { BASE_URL, request } from "./constants";

export const getModelsOfMake = (make: string) => {
  return request(`${BASE_URL}/GetModelsForMake/${make}?format=json`);
};

export const getMakesForType = (type: string) => {
  return request(`${BASE_URL}/GetMakesForVehicleType/${type}?format=json`);
};

export const getManufacutrer = (manufacturer: string) => {
  return request(
    `${BASE_URL}/GetManufacturerDetails/${manufacturer}?format=json`
  );
};

export const getSearchVariables = () => {
  return request(`${BASE_URL}/GetVehicleVariableList?format=json`);
};
