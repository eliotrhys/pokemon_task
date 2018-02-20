import React from 'react';
import PokemonSelector from '../components/PokemonSelector'
import PokemonDetail from '../components/PokemonDetail'

class PokemonContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokemon: [],
      currentPokemon: null
    };
    this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
  }

  componentDidMount(){
    const url = 'http://pokeapi.co/api/v2/pokemon/?limit=151';

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.addEventListener('load', () => {
      if (xhr.status !== 200) return;
      const jsonString = xhr.responseText;
      const data = JSON.parse(jsonString);
      this.setState({
        pokemon: data.results
      })
    })
    xhr.send();
  }

  handlePokemonSelected(index) {
    const selectedPokemon = this.state.pokemon[index];
    this.setState({currentPokemon: selectedPokemon});
  }

  render(){
    return (
      <div>
        <h2>Pokemon Container</h2>
        <PokemonSelector pokemon={this.state.pokemon} onPokemonSelected={this.handlePokemonSelected}/>
        <PokemonDetail poke={this.state.currentPokemon}/>
      </div>
    );
  }



}

export default PokemonContainer;
