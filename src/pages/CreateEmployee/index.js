import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import "./CreateEmployee.scss";
import { states } from "../../datas/states";
import { useDispatch } from "react-redux";
import { createEmployee } from "../../store/slices/employeeSlice";

const CreateEmployee = () => {
  const dispatch = useDispatch();

  // useForm()
  const { register, formState, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(createEmployee(data));
    console.log(data);
  };

  return (
    <div className="employee">
      <h2>Create Employee</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* person */}
        <section>
          <div className="input-wrapper">
            <label htmlFor="firstName">Firstname :</label>
            <input
              type="text"
              id="firstName"
              {...register("firstName", { required: true })}
            />
            {formState.errors.firstName && (
              <p style={{ color: "red" }}>Firstname is required</p>
            )}
          </div>

          <div className="input-wrapper">
            <label htmlFor="lastName">Lastname :</label>
            <input
              type="text"
              id="lastName"
              {...register("lastName", { required: true })}
            />
            {formState.errors.lastName && (
              <p style={{ color: "red" }}>Lastname is required</p>
            )}
          </div>

          <div className="input-wrapper">
            <label htmlFor="dateOfBirth">Birthday :</label>
            <input
              type="date"
              id="dateOfBirth"
              {...register("dateOfBirth", { required: true })}
            />
            {formState.errors.dateOfBirth && (
              <p style={{ color: "red" }}>Birthday is required</p>
            )}
          </div>

          <div className="input-wrapper">
            <label htmlFor="startDate">Start date :</label>
            <input
              type="date"
              id="startDate"
              {...register("startDate", { required: true })}
            />
            {formState.errors.startDate && (
              <p style={{ color: "red" }}>Start date is required</p>
            )}
          </div>
        </section>

        {/* address */}
        <section>
          <h3>Address</h3>

          <div className="input-wrapper">
            <label htmlFor="street">Street :</label>
            <input
              type="text"
              id="street"
              {...register("street", { required: true })}
            />
            {formState.errors.street && (
              <p style={{ color: "red" }}>Street is required</p>
            )}
          </div>

          <div className="input-wrapper">
            <label htmlFor="city">City :</label>
            <input
              type="text"
              id="city"
              {...register("city", { required: true })}
            />
            {formState.errors.city && (
              <p style={{ color: "red" }}>City is required</p>
            )}
          </div>

          <div className="input-wrapper">
            <label htmlFor="state">State :</label>
            <select placeholder="Alabama" {...register("state")} id="state">
              {states.map((state, i) => (
                <option value={state.name} key={i}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>

          <div className="input-wrapper">
            <label htmlFor="zipCode">Zipcode :</label>
            <input
              type="number"
              id="zipCode"
              {...register("zipCode", { required: true })}
            />
            {formState.errors.zipCode && (
              <p style={{ color: "red" }}>Zipcode is required</p>
            )}
          </div>
        </section>

        <section>
          <div className="input-wrapper">
            <label htmlFor="department">Department</label>
            <select
              placeholder="Sales"
              {...register("department")}
              id="department"
            >
              <option>Sales</option>
              <option>Marketing</option>
              <option>Engineering</option>
              <option>Human Resources</option>
              <option>Legal</option>
            </select>
          </div>
        </section>

        <button type="submit" className="sign-in-button">
          Create Employee
        </button>
      </form>
    </div>
  );
};

export default CreateEmployee;
