import React, { Component } from 'react';
import PokemonInfo from '../PokemonInfo';
import PokemonSelectForm from '../PokemonSelectForm';

class PokemonSearchPage extends Component {
  constructor (props) {
    super(props);
    this.state = { pokemon: null};
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (pokemonData) =>{
    this.setState({
      pokemon: pokemonData,
    });
  }

  render() {

    return (
      <div className="PokemonSearchPage">
        <PokemonSelectForm onSubmit={this.onSubmit} />
        {this.state.pokemon &&
         <PokemonInfo pokemon={this.state.pokemon} />}
      </div>);
  }
}

export default PokemonSearchPage;
