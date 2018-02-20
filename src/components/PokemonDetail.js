import React from 'react';

const PokemonDetail = (props) => {
  if(!props.poke) return null;
  var res = props.poke.url.slice(-2);
  var res2 = res.slice(0, 1);
  console.log(res2);

  return (
    <h3>
      {props.poke.name}
      <img alt="eiufhrhu" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + res2 + ".png"} />
    </h3>
  )
}
export default PokemonDetail;
