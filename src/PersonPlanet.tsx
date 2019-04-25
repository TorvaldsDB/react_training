import React, { Component } from 'react';
import { IPeople } from './types';
import { getPersonPlanet } from "./api";

type PersonPlanetState = {
  person_planet: string
}

class PersonPlanet extends Component<any, PersonPlanetState> {
  constructor(props: any) {
    super (props);

    this.state = {
      person_planet: ""
    }
  }

  componentWillReceiveProps(nextProps: any) {
    const { name }  = nextProps;
    if (name) {
      getPersonPlanet(name).then(p_p => this.setState({ person_planet: p_p }));
    }
  }

  render() {
    return <p>{this.state.person_planet}</p>
  }
}

export default PersonPlanet;
