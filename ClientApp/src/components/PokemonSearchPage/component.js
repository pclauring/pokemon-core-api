import React, { Component } from 'react';
import PokemonInfo from '../PokemonInfo';
import PokemonSelectForm from '../PokemonSelectForm';

class PokemonSearchPage extends Component {
  render() {
    return (
      <div className="PokemonSearchPage">
        <PokemonInfo name={"charmander"} />
        <PokemonSelectForm />
      </div>);
  }
}

export default PokemonSearchPage;
