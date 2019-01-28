import React, { Component } from 'react';
import PokemonInfo from '../PokemonInfo';
import PokemonSelectForm from '../PokemonSelectForm';

class PokemonSearchPage extends Component {
  constructor (props) {
    super(props);
    this.state = { pokemonId: '', noneSelected: true };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (Id) {
    this.setState({
      pokemonId: Id,
      noneSelected: false
    });
  }

  render() {

    let selectedPokemon = this.state.noneSelected
    ? <p><em>Select a Pokemon... </em></p>
    :  <PokemonInfo name={this.state.pokemonId} />

    return (
      <div className="PokemonSearchPage">
      {selectedPokemon}
        <PokemonSelectForm onSubmit={this.onSubmit} />
      </div>);
  }
}

export default PokemonSearchPage;
