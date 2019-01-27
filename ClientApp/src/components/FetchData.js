import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor (props) {
    super(props);
    this.state = { pokemon: [], loading: true };

    fetch('api/Pokemon/ditto')
      .then(response => response.json())
      .then(data => {
        console.log(data);
       this.setState({ pokemon: [data], loading: false });
      });
  }

  static renderForecastsTable (pokemon) {
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
      : FetchData.renderForecastsTable(this.state.pokemon);

    return (
      <div>
        <h1>Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
}
