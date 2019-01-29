import React, { Component } from 'react';

export class PokemonInfo extends Component {
  static displayName = PokemonInfo.name;

  constructor (props) {
    super(props);
    this.state = { pokemon: [], loading: true};

    fetch('api/Pokemon/' + this.props.name)
    .then(response => response.json())
      .then(data => {
        console.log(data);
       this.setState({ pokemon: [data], loading: false });
      });
  }

  static getPokemon (pokemon) {
    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Weight</th>
            <th>ID</th>
            <th>Height</th>
            <th>Base Experience</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.map(element =>
            <tr key={element.name}>
              <td>{element.weight}</td>
              <td>{element.id}</td>
              <td>{element.height}</td>
              <td>{element.base_experience}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render () {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : PokemonInfo.getPokemon(this.state.pokemon);

    return (
      <div>
        <h1>Pokemon Search</h1>
        <p>This component fetches data from Pokemon API with .Net Core Web API</p>
        {contents}
      </div>
    );
  }
}

export default PokemonInfo;
