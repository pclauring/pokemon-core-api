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

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (this.state.selectedOption.value !== null) {
  //     var pokemonRequest = this.state.selectedOption.value;
  //     P.getPokemonByName(pokemonRequest)
  //       .then(resp => {
  //         console.log(resp);
  //         this.props.onSubmit(resp);
  //       });
  //   }
  // };

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
              <button type="submit" className="pokemon-submit-button">{this.props.buttonTitle} >Submit</button>
            </form>
    )
  };
};

export default PokemonSelectForm;
