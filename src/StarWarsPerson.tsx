import React, { Component, Fragment } from 'react';
import { render } from "react-dom";
import { getPersonPlanet } from "./api";
import PersonPlanet from "./PersonPlanet";
import { IPeople } from './types';

type StarWarsPersonState = {
  inputValue: string,
  name: string
}

class StarWarsPerson extends Component<any, StarWarsPersonState> {

  constructor(props: any) {
    super(props);
    this.state = {
      inputValue: '',
      name: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
          <PersonPlanet name={this.state.name} />
        </div>
      </Fragment>
    )
  }

  handleInputChange(e: any) {
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }));
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      name: prevState.inputValue,
      inputValue: ''
    }));
  }
}

export default StarWarsPerson;
