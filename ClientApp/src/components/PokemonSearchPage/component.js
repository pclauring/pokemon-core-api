import React, { Component } from 'react';
import PokemonInfo from '../PokemonInfo';
import PokemonSelectForm from '../PokemonSelectForm';

class PokemonSearchPage extends Component {
  constructor (props) {
    super(props);
    this.state = { pokemonId: null};
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (Id) =>{
    this.setState({
      pokemonId: Id,
    });
  }

  render() {

    return (
      <div className="PokemonSearchPage">
        {this.state.pokemonId &&
         <PokemonInfo id={this.state.pokemonId} />}
        <PokemonSelectForm onSubmit={this.onSubmit} />
      </div>);
  }
}

export default PokemonSearchPage;
