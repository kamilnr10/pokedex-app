import React from 'react';
import styled from 'styled-components';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import PokemonsListItem from 'components/molecules/PokemonsListItem/PokemonsListItem';

const Table = styled.table`
  width: 100%;

  thead tr:first-child {
    height: 30px;
    background-color: #f9e01d;
    color: #1a5cb0;
  }
`;

const PokemonsList = ({ pokemons }) => {
  return (
    <ViewWrapper>
      <Table>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Pokemon</th>
            <th>Name</th>
            <th>Min lvl</th>
            <th>Type</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.map((pokemon, index) => (
            <PokemonsListItem key={index} pokemonData={pokemon} />
            /* <div key={index}>
          <div>
            <small>{pokemon.id}</small>
          </div>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
            style={{ width: '100px' }}
          />
          <div>
            <h3>{pokemon.name}</h3>
            <small>{pokemon.types[0].type.name}</small>
          </div>
        </div> */
          ))}
        </tbody>
      </Table>
      {/* {pokemons.map((pokemon, index) => (
       <PokemonsListItem key={index} pokemonData={pokemon} />
        <div key={index}>
          <div>
            <small>{pokemon.id}</small>
          </div>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
            style={{ width: '100px' }}
          />
          <div>
            <h3>{pokemon.name}</h3>
            <small>{pokemon.types[0].type.name}</small>
          </div>
        </div> 
      ))} */}
    </ViewWrapper>
  );
};

export default PokemonsList;
