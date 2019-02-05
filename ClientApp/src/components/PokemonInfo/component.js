import React, { Component } from 'react';

export class PokemonInfo extends Component {
  static displayName = PokemonInfo.name;
  render () {
    console.log(this.props.pokemon);
    return (
      <div>
        <h1>Pokemon Search</h1>
        <table className='table table-striped'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
            <tr key={this.props.pokemon.name}>
            <td>{this.props.pokemon.name}</td>
              <td>{this.props.pokemon.height}</td>
              <td>{this.props.pokemon.id}</td>
            </tr>
        </tbody>
      </table>
      </div>
    );
  }
}

export default PokemonInfo;
