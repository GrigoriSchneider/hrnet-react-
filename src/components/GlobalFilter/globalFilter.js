import React, { useState } from "react";
import { useGlobalFilter, useAsyncDebounce } from "react-table";
import styled from "styled-components";

const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  gotoPage,
}) => {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
    gotoPage(0);
  }, 400);

  return (
    <Search>
      <h2>Employeelist</h2>
      <input
        // value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`Search Employee`}
      />
    </Search>
  );
};

export default GlobalFilter;

const Search = styled.div`
  font-family: "Montserrat", "Roboto", sans-serif;
  color: #6d7e1e;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0.5rem;

  input {
    background-color: white;
    font-family: "Montserrat", "Roboto", sans-serif;
    width: 18rem;
    height: 2rem;
    border: 2px solid #62711b;
    border-radius: 0.3rem;
    color: #000;
    font-size: 16px;
    /* max-width: 1000px; */
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;

    &:focus-visible {
      outline: none;
    }

    &::-webkit-input-placeholder {
      color: grey;
    }

    &::-moz-placeholder {
      color: grey;
    }

    &:-ms-input-placeholder {
      color: grey;
    }

    &::-ms-input-placeholder {
      color: grey;
    }

    &::placeholder {
      color: grey;
    }
  }
`;
