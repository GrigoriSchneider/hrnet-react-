import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import "./CreateEmployee.scss";
import { states } from "../../datas/states";

const CreateEmployee = () => {
  const [newEmployee, setNewEmployee] = useState({});

  // useForm()
  const { register, formState, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(states[0]);
  };

  return (
    <div className="employee">
      <h2>Create Employee</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* person */}
        <section>
          <div className="input-wrapper">
            <label htmlFor="firstname">Firstname</label>
            <input
              type="text"
              id="firstname"
              {...register("firstname", { required: true })}
            />
            {formState.errors.firstname && (
              <p style={{ color: "red" }}>Firstname is required</p>
            )}
          </div>

          <div className="input-wrapper">
            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              id="lastname"
              {...register("lastname", { required: true })}
            />
            {formState.errors.firstname && (
              <p style={{ color: "red" }}>Lastname is required</p>
            )}
          </div>

          <div className="input-wrapper">
            <label htmlFor="lastname">Birthday</label>
            <input
              type="date"
              placeholder="birthday"
              {...register("Date of Birth", {})}
            />
            {formState.errors.birthday && (
              <p style={{ color: "red" }}>Birthday is required</p>
            )}
          </div>

          <div className="input-wrapper">
            <label htmlFor="lastname">Start date</label>
            <input
              type="date"
              placeholder="startdate"
              {...register("Start Date", {})}
            />
            {formState.errors.startdate && (
              <p style={{ color: "red" }}>Start date is required</p>
            )}
          </div>
        </section>

        {/* address */}
        <section>
          <h3>Address</h3>

          <div className="input-wrapper">
            <label htmlFor="street">Street</label>
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
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              {...register("city", { required: true })}
            />
            {formState.errors.city && (
              <p style={{ color: "red" }}>City is required</p>
            )}
          </div>

          <select placeholder="Alabama" {...register("state")} id="state">
            {states.map((state, i) => (
              <option value={state.name} key={i}>
                {state.name}
              </option>
            ))}
          </select>
        </section>

        <div className="input-wrapper">
          <label htmlFor="zipcode">zipcode</label>
          <input
            type="number"
            id="zipcode"
            {...register("zipcode", { required: true })}
          />
          {formState.errors.zipcode && (
            <p style={{ color: "red" }}>zipcode is required</p>
          )}
        </div>

        <button type="submit" className="sign-in-button">
          Create Employee
        </button>
      </form>
    </div>
  );
};

export default CreateEmployee;
