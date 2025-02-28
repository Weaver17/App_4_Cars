export const BASE_URL = "https://vpic.nhtsa.dot.gov/api//vehicles";

export const handleServerResponse = (res: {
  ok: any;
  json: () => any;
  status: any;
}) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export function request(
  url: RequestInfo | URL,
  options: RequestInit | undefined
) {
  return fetch(url, options).then(handleServerResponse);
}

export const manufacturers = [
  "Select Manufacturer",
  "HOMBILT TRAILERS",
  "AMERICAN CUSTOM GOLF CARS",
  "LATITUDE CAMPER COMPANY",
  "CHAIRIOT MOBILITY",
  "HAYES WELDING",
  "PETE'S GOLF CARTS",
  "HINO MOTORS",
  "OSHKOSH",
  "IC BUS",
  "FOREST RIVER",
  "THOR INDUSTRIES",
  "CRUISER",
  "MVP RV",
  "WINNEBAGO",
  "GILLIG",
  "CHAMPION",
  "PIERCE MANUFACTURING",
  "MOTOR COACH INDUSTRIES",
  "TURTLEBACK TRAILERS",
  "GOOGLE AUTO",
  "VAN HOOL",
  "BUSSCAR ONIBUS",
  "3T",
  "A&M FABRICATIONS",
  "A-BAR-D",
  "CREATIVE COACHWORKS",
  "CUSTOM DESIGN",
  "CUSTOM MOBILE DESIGNS",
  "CUSTOM PITS AND FABRICATION",
  "COUNTRYSIDE WELDING",
  "MARKET DIRECT CAMPERS",
  "CORAS TRAILER",
  "CROSS COUNTRY",
  "CORNELIUS MANUFACTURING",
  "AMERICAN MANUFACTURING OPERATIONS",
];

export const vehicleType = [
  "Vehicle",
  "Car",
  "Truck",
  "Motorcycle",
  "Bus",
  "Trailer",
  "Low Speed Vehicle (LSV)",
];

export const makes = [
  "Select Make",
  "ACURA",
  "ALFA ROMEO",
  "ALPINE",
  "AMC",
  "ASTON MARTIN",
  "AUDI",
  "AVANTI",
  "BEARCAT",
  "BENTLEY",
  "BLUE BIRD",
  "BMW",
  "BRAAAP MOTORCYCLES",
  "BRADLEY",
  "BUGATTI",
  "BUICK",
  "BULLDOG",
  "CADILLAC",
];
