import { IPeopleList, IPlanet, IPeople } from "./types";

// your code
const SW_PEOPLE_API = "https://swapi.co/api/people/";
function getPersonPlanet(name: string): Promise<string> {
  return fetch(SW_PEOPLE_API)
  .then(res  => res.json())
  .then(data => (data as IPeopleList).results.find(person => person.name === name))
  .then(person => {
    if(!person) {
      throw new Error('Sorry, not found')
    }
     return fetch((person as any).homeworld)
  })
  .then(response => response.json())
  .then(planet => {
    const { name, population } = planet as IPlanet;
    return `${name} - ${population}`
  })
  .catch((error) => `There is something going wrong. ${error.message}`)
}

export { getPersonPlanet };
