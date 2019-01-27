import React, { Component } from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';

class PokemonSearchPage extends Component {
  render() {
    return (
      <div className="PokemonSearchPage">
        <PokemonCard name={"charmander"} />
      </div>);
  }
}

export default PokemonSearchPage;
