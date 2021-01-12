import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 350px;
  height: 50px;
  border: 1.5px solid rgb(74, 81, 87);
  font-size: 1em;
  padding: 0.25em 0.5em 0.3em;
  border-radius: 0.25em;
  background: transparent;
  transition: all 0.1s;
  outline: none;
  color: rgb(48, 47, 47);
`;

const SearchBar = ({ filterValue, changeHandler }) => {
  return (
    <div>
      <Input
        className="filter-input"
        type="text"
        id="filter"
        name="filter"
        required
        size="30"
        placeholder="Buscar por nombre de candidato..."
        onChange={(e) => changeHandler(e.target.value)}
        value={filterValue}
      />
    </div>
  );
};

export default SearchBar;
