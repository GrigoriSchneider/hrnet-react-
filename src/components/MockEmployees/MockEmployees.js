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

const MockEmployees = () => {
  const createdEmployees = useSelector((state) => state.employeeList.employees);

  console.log(createdEmployees);
  const [employees, setEmployees] = useState(createdEmployees);

  // const fetchEmployees = async () => {
  //   const response = await axios
  //     .get("./MockEmployees.json")
  //     .catch((err) => console.log(err));

  //   if (response) {
  //     const employees = response.data;

  //     //   console.log("Employees: ", employees);
  //     setEmployees(employees);
  //   }
  // };

  const data = useMemo(
    () => [
      {
        firstName: "Arni",
        lastName: "Miall",
        startDate: "8/30/2007",
        dateOfBirth: "9/7/1981",
        department: "Marketing",
        street: "Meadow Valley",
        city: "Zdíkov",
        zipCode: "384 72",
      },
      {
        firstName: "Gaby",
        lastName: "Furtado",
        startDate: "1/3/2017",
        dateOfBirth: "12/30/1980",
        department: "Training",
        street: "Elgar",
        city: "Pidigan",
        zipCode: "2806",
      },
      {
        firstName: "Petronia",
        lastName: "Edgson",
        startDate: "9/19/2010",
        dateOfBirth: "12/20/2001",
        department: "Marketing",
        street: "Eggendart",
        city: "Changsha",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "firstname",
        accessor: "firstName",
      },
      {
        Header: "lastname",
        accessor: "lastName",
      },
      {
        Header: "startDate",
        accessor: "startDate",
      },
      {
        Header: "date of birth",
        accessor: "dateOfBirth",
      },
      {
        Header: "department",
        accessor: "department",
      },
      {
        Header: "street",
        accessor: "street",
      },
      {
        Header: "city",
        accessor: "city",
      },
    ],
    []
  );

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
      <table {...getTableProps()}>
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
      </table>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
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
    </>
  );
};

export default MockEmployees;
