import React from "react";
import { StyledSearchBar } from "../styles/components/SearchBar.styles";

export const SearchBar = ({searchTerm, setSearchTerm}) => {
  const handleTermChange = e => setSearchTerm(e.target.value.toLowerCase())

  return (
    <StyledSearchBar>
      <input placeholder="Enter a search term" onChange={handleTermChange} value={searchTerm} />
    </StyledSearchBar>
  )
}