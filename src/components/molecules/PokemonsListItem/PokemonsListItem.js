import React from 'react';
import styled from 'styled-components';

const PokemonItem = styled.tr`
  transition: 0.3s ease;
  :hover {
    background-color: #1a5cb0;
  }

  td {
    padding: 4px 0;
  }
`;

const StyledButton = styled.button`
  border-radius: 3px;
  background-color: #f9e01d;
  color: #1a5cb0;
`;

const PokemonsListItem = ({ pokemonData: { id, name, types, sprites } }) => {
  console.log(name);
  return (
    <PokemonItem key={id}>
      <td>{id}</td>
      <td>
        <img
          src={sprites.other.dream_world.front_default}
          alt={name}
          style={{ width: '75px', height: '75px' }}
        />
      </td>
      <td>{name}</td>
      <td>Test</td>
      <td>{types[0].type.name}</td>
      <td>
        <StyledButton>Info</StyledButton>
      </td>
    </PokemonItem>
  );
};

export default PokemonsListItem;
