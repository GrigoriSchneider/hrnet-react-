import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { states } from "../../datas/states";
import { useDispatch } from "react-redux";
import { createEmployee } from "../../store/slices/employeeSlice";
import { Modal } from "hrnet-react-modal-component";
import { redirect } from "react-router-dom";
import styled from "styled-components";

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const [modalSwitch, setModalSwitch] = useState(false);
  const [firstNameValue, setFirstNameValue] = useState("");
  const [value, setValue] = useState("");

  // useForm()
  const { register, formState, handleSubmit, reset } = useForm();

  const toggleModal = () => setModalSwitch(!modalSwitch);

  const onSubmit = (data) => {
    dispatch(createEmployee(data));
    console.log(data);
    toggleModal();
    setFirstNameValue("");
    // reset();
    // redirect("/employeelist");
  };

  return (
    <Employee>
      <h2>Create Employee</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* person */}
        <section>
          <Wrapper>
            <label htmlFor="firstName">Firstname :</label>
            <input
              value={firstNameValue}
              type="text"
              id="firstName"
              {...register("firstName", { required: true })}
              onInput={(e) => {
                setFirstNameValue(e.target.value);
                // onSetInput(e.target.value);
              }}
            />
          </Wrapper>

          <Wrapper>
            <label htmlFor="lastName">Lastname :</label>
            <input
              // value={value}
              type="text"
              id="lastName"
              {...register("lastName", { required: true })}
            />
          </Wrapper>

          <Wrapper>
            <label htmlFor="dateOfBirth">Birthday :</label>
            <input
              // value={value}
              type="date"
              id="dateOfBirth"
              {...register("dateOfBirth", { required: true })}
            />
          </Wrapper>

          <Wrapper>
            <label htmlFor="startDate">Start date :</label>
            <input
              // value={value}
              type="date"
              id="startDate"
              {...register("startDate", { required: true })}
            />
          </Wrapper>
        </section>

        {/* address */}
        <section>
          <Wrapper>
            <label htmlFor="street">Street :</label>
            <input
              // value={value}
              type="text"
              id="street"
              {...register("street", { required: true })}
            />
          </Wrapper>

          <Wrapper>
            <label htmlFor="city">City :</label>
            <input
              // value={value}
              type="text"
              id="city"
              {...register("city", { required: true })}
            />
          </Wrapper>

          <Wrapper>
            <label htmlFor="state">State :</label>
            <select placeholder="Alabama" {...register("state")} id="state">
              {states.map((state, i) => (
                <option value={state.name} key={i}>
                  {state.name}
                </option>
              ))}
            </select>
          </Wrapper>

          <Wrapper>
            <label htmlFor="zipCode">Zipcode :</label>
            <input
              // value={value}
              type="number"
              id="zipCode"
              {...register("zipCode", { required: true })}
            />
          </Wrapper>
        </section>

        <section>
          <Wrapper>
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
          </Wrapper>
        </section>

        <Modal modalStatus={modalSwitch} onConfirm={toggleModal} />

        <button type="submit">Create Employee</button>
      </form>
    </Employee>
  );
};

export default CreateEmployee;

const Employee = styled.div`
  font-family: "Montserrat", "Roboto", sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #62711b;
  font-size: 18px;

  h2 {
    font-size: 25px;
  }

  select {
    font-family: "Montserrat", "Roboto", sans-serif;
    font-size: 18px;
    width: 18rem;
    height: 2rem;
    border: 2px solid #62711b;
    border-radius: 0.3rem;
    color: #000;
    font-size: 16px;
    margin: 3px 0;
    box-sizing: border-box;
  }

  button {
    margin-top: 1rem;
    background-color: #6d7e1e;
    color: #ffffff;
    padding: 0.7rem;
    border-radius: 5px;
    font-family: "Montserrat", "Roboto", sans-serif;
    font-size: 18px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  input {
    background-color: white;
    font-family: "Montserrat", "Roboto", sans-serif;
    width: 18rem;
    height: 2rem;
    border: 2px solid #62711b;
    border-radius: 0.3rem;
    color: #000;
    font-size: 16px;
    margin: 3px 0;
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
