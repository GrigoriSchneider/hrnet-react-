import React from "react";
import PropTypes from "prop-types";
import { useAsyncDebounce } from "react-table";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./Search.scss";

/**
 * @description SearchInput
 * @param   {function}    props.onSeacrh
 * @returns {Reactnode}   jsx injected in DOM
 */

const SearchInput = ({ onSearch }) => {
  const handleChange = useAsyncDebounce((value) => {
    onSearch(value || undefined);
  }, []);

  return (
    <div className="search-form" aria-labelledby="search input">
      <i className="fas fa-search">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </i>
      <input
        aria-label="cost-input"
        className="search-input"
        type="search"
        placeholder="Search an employee"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

SearchInput.propTypes = {
  onSearch: PropTypes.func,
};

export default SearchInput;
