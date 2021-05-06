import React, { useState, useEffect } from 'react';
import PokemonsList from 'components/organisms/PokemonsList/PokemonsList';
import axios from 'axios';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { RootWrapper } from 'views/Root.styles';
import img from 'assets/images/bgc.png';
import logo from 'assets/images/logo.png';

const sortArray = (a, b) => {
  if (a.id > b.id) {
    return 1;
  }
  if (a.id < b.id) {
    return -1;
  }
  if ((a.id = b.id)) {
    return 0;
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledBackground = styled.div`
  height: 90%;
  width: 100%;
  background-image: url(${img});
  background-size: auto;
  background-size: auto;
`;

const StyledLogo = styled.img.attrs({
  src: `${logo}`,
})`
  width: 400px;
`;

const StyledPaginateContainer = styled.div`
  ul {
    width: 400px;
    display: flex;
    justify-content: space-around;
  }
  li {
    width: 30px;
    height: 30px;
    background-color: #f9e01d;
    color: #0366d6;
    list-style: none;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
  }
  .pagination {
    color: #0366d6;
  }
  .break-me {
    cursor: default;
  }
  .active {
    border-color: transparent;
    background-color: #0366d6;
    color: #f9e01d;
  }
`;

const Root = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=36&offset=0'
  );
  const [pageNumber, setPageNumber] = useState(0);
  const pokemonsPerPage = 6;
  const pagesVisited = pageNumber * pokemonsPerPage;
  const displayPokemons = allPokemons.slice(
    pagesVisited,
    pagesVisited + pokemonsPerPage
  );

  const pageCount = Math.ceil(allPokemons.length / pokemonsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const getAllPokemons = async () => {
    const { data } = await axios.get(loadMore);

    const createPokemonObject = (result) => {
      result.forEach(async (pokemon) => {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setAllPokemons((currentList) => [...currentList, data].sort(sortArray));
      });
    };
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RootWrapper>
        <Wrapper>
          <StyledBackground></StyledBackground>
        </Wrapper>
        <Wrapper>
          <StyledLogo />
          {allPokemons.length === 0 ? (
            'Loading'
          ) : (
            <PokemonsList pokemons={displayPokemons} />
          )}
          <StyledPaginateContainer>
            <ReactPaginate
              previousLabel={'<'}
              nextLabel={'>'}
              pageCount={pageCount}
              onPageChange={changePage}
              activeClassName="active"
            />
          </StyledPaginateContainer>
        </Wrapper>
      </RootWrapper>
    </ThemeProvider>
  );
};

export default Root;
