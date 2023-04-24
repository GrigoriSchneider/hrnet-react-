import React from "react";
import { useSelector } from "react-redux";
import MockEmployees from "../../components/MockEmployees/MockEmployees";

const EmployeeList = () => {
  const state = useSelector((state) => state);

  console.log(state);

  return (
    <div>
      <MockEmployees />
    </div>
  );
};

export default EmployeeList;
