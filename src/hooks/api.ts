import { BASE_URL, request } from "../utils/constants";

export const getModelsOfMake = (make: string) => {
  return request(`${BASE_URL}/GetModelsForMake/${make}?format=json`);
};
