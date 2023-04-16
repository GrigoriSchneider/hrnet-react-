import React, { useState } from "react";
import { useGlobalFilter, useAsyncDebounce } from "react-table";

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
    <div>
      <h2>Search :</h2>
      <input
        // value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`Search Employee`}
      />
    </div>
  );
};

export default GlobalFilter;
