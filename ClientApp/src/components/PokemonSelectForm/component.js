import React, { Component } from 'react';
import Select from 'react-select';

//List of pokemon in the game as a JSON Object
const options = require('./PokemonFullList').map((option, index) => ({
  value: index + 1,
  label: option.label,
}));

class PokemonSelectForm extends Component {
  state = {
    pokemonName: '',
    selectedOption: null
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.selectedOption !== null) {
      this.props.onSubmit(this.state.selectedOption.value);
    }
  };

  render() {

    const { selectedOption } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="pokemoncard-form">
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
          placeholder="Enter a Pokemon Name..."
        />
        <hr />
        <button type="submit" className="btn btn-primary pokemon-submit-button">Submit</button>
      </form>
    )
  };
};

export default PokemonSelectForm;
