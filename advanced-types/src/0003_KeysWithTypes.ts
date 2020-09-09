type Vehicle = {
  model: string;
  year: number;
};

type Car = {
  year: Vehicle["model"];
  name: Vehicle["year"];
  brand: string;
};

const car: Car = {
  brand: "Ford",
  year: "2020",
  name: 2,
};
console.log(car);
