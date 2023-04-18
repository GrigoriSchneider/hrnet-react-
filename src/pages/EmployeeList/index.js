import React from "react";
import { useSelector } from "react-redux";
import Table from "../../components/Table/Table";
import MockEmployees from "../../components/MockEmployees/MockEmployees";

const EmployeeList = () => {
  const state = useSelector((state) => state);

  console.log(state);

  return (
    <div>
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}

      {/* <Table state={state} /> */}
      <MockEmployees />
    </div>
  );
};

export default EmployeeList;
