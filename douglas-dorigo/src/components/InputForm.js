import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setNames } from '../redux/actions';
import { styled } from "styled-components";

const InputWrapper = styled.div`
    display: flex;
    padding: 8px;
    flex-direction: column;
    align-items: flex-start;
`;

const Form = styled.div`
    display: flex;
    flex-direction: row;
`;

const Input = styled.input`
    width: 150px;
    height: 28px;
    border-radius: 4px;
    border-color: transparent;
`;

const PrimaryButton = styled.button`
    padding: 8px;
    color: #e1e1e1;
    background: #034830;
    font-size: 18px;
    width: 340px;
    margin-top: 15px;
    border-radius: 8px;
`;

function InputForm() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleNamesChange = () => {
    dispatch(setNames(firstName, lastName));
  };

  return (
    <>
      <Form>
        <InputWrapper>
            <label htmlFor="firstName">First Name</label>
            <Input type="text" name='firstName' placeholder="First Name" value={firstName} onChange={handleChangeFirstName} />
        </InputWrapper>
        <InputWrapper>
            <label htmlFor="lastName">Last Name</label>
            <Input type="text" name='lastName' placeholder="Last Name" value={lastName} onChange={handleChangeLastName} />
        </InputWrapper>
      </Form>
      <PrimaryButton onClick={() => handleNamesChange()}>Breakify</PrimaryButton>
    </>
  );
}

export default InputForm;