import React from 'react';

const PokemonSelector = (props) => {



  function handleChange(e){
    props.onPokemonSelected(e.target.value);
  }


  const options = props.pokemon.map( (poke, index) => {
    return <option value={index} key={index}>{poke.name}</option>
  });

  // const options = Object.keys(props.pokemon).forEach(function(key){
  //   return <option value={index} key={index}>{poke[key].name}</option>
  // });



  return (
    <select id="pokemon-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Choose a Pokemon...</option>
      {options}
    </select>
  )
}

export default PokemonSelector;


// Object.keys(obj).forEach(function(key) {
//
//   console.log(key, obj[key]);
//
// });
