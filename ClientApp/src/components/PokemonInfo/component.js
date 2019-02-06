import React, { Component } from 'react';

export class PokemonInfo extends Component {
  static displayName = PokemonInfo.name;
  render() {
    return (
      <div>
        <h1>{this.props.pokemon.name}</h1>
        <img width="75px" src={this.props.pokemon.sprites.front_default} alt="sprite front" className="sprite-img" />
        <img width="75px" src={this.props.pokemon.sprites.back_default} alt="sprite back" className="sprite-img" />
        <img width="75px" src={this.props.pokemon.sprites.front_shiny} alt="sprite front shiny" className="sprite-img" />
        <img width="75px" src={this.props.pokemon.sprites.back_shiny} alt="sprite back shiny" className="sprite-img" />
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
