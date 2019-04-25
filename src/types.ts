export interface IPeopleList {
  // your code
  results: IPeople[];
}

export interface IPeople {
  name: string;
  homeworld?: string | undefined;
}

export interface IPlanet {
  name: string;
  population: string;
}
