import { BASE_URL, request } from "./constants";

export const getModelsOfMake = (make: string) => {
  return request(`${BASE_URL}/GetModelsForMake/${make}?format=json`);
};

export const getMakesForType = (type: string) => {
  return request(`${BASE_URL}/GetMakesForVehicleType/${type}?format=json`);
};

export const getMakesForManufacturer = (manufacturer: string) => {
  return request(
    `${BASE_URL}/GetMakeForManufacturer/${manufacturer}?format=json`
  );
};

export const getOtherSearch = (searchInput: string) => {
  return request(
    `${BASE_URL}/GetVehicleVariableValuesList/${searchInput}?format=json`
  );
};

export const getSearchVariables = () => {
  return request(`${BASE_URL}/GetVehicleVariableList?format=json`);
};

export const getAllMakes = () => {
  return request(`${BASE_URL}/GetAllMakes?format=json`);
};
