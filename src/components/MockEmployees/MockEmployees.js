import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import {
  useGlobalFilter,
  useSortBy,
  useTable,
  usePagination,
} from "react-table";
import GlobalFilter from "../GlobalFilter/globalFilter";
import { useSelector } from "react-redux";
import styled from "styled-components";

const MockEmployees = () => {
  const createdEmployees = useSelector((state) => state.employeeList.employees);

  console.log(createdEmployees);
  const [employees, setEmployees] = useState(createdEmployees);

  const employeesData = useMemo(() => [...employees], [employees]);

  const employeesColumns = useMemo(
    () =>
      employees[0]
        ? Object.keys(employees[0])
            .filter((key) => key !== "rating")
            .map((key) => {
              return { Header: key, accessor: key };
            })
        : [],
    [employees]
  );

  const tableInstance = useTable(
    {
      columns: employeesColumns,
      data: employeesData,
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,

    // pagination
    state: { pageIndex, pageSize },
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = tableInstance;

  useEffect(() => {
    // fetchEmployees();
  }, []);

  const isEven = (idx) => idx % 2 === 0;

  return (
    <>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        setGlobalFilter={setGlobalFilter}
        // globalFilter={state.globalFilter}
        gotoPage
      />
      <Table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, j) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {/* {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""} */}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row, idx) => {
            prepareRow(row);

            return (
              <tr
                {...row.getRowProps()}
                className={isEven(idx) ? "bg-green bg-opacity30" : ""}
              >
                {row.cells.map((cell, j) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Pagination>
        <div>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
          </button>{" "}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {"<"}
          </button>{" "}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {">"}
          </button>{" "}
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>{" "}
        </div>
        {/* Pages */}
        <div>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </div>
        {/* Select */}
        <div>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </Pagination>
    </>
  );
};

export default MockEmployees;

const Table = styled.table`
  font-family: "Montserrat", "Roboto", sans-serif;
  border-collapse: collapse;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  max-height: 400px;
  overflow: scroll;
  max-width: 1400px;
  margin: auto;
  margin-bottom: 1rem;

  tr:nth-child(even) {
    background-color: #c4d961;
  }
  tr:hover {
    background-color: #6d7e1e;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #62711b;
    color: #fff;
    height: 25px;
    padding: 0.35rem;
  }

  td {
    padding-top: 10px;
    padding-bottom: 10px;
    height: 20px;
  }
`;

const Pagination = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: auto;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: 500px;
  border-top: none;
  padding: 2px;

  button {
    padding-top: 3px;
    padding: 0.35rem;
  }
`;
