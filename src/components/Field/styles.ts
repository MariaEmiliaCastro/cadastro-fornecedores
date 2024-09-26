import styled from "styled-components";

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  label {
    font-size: 20px;
    color: #003b75;
  }

  input:focus {
    outline: none;
  }

  input {
    padding: 12px;
    background-color: #efefef;
    border: none;
    border-bottom: 1px solid #0082f5;
    border-radius: 4px;
  }

  select {
    padding: 12px;
    background-color: #efefef;
    border: none;
    border-bottom: 1px solid #0082f5;
    border-radius: 4px;
  }

  p {
    font-size: 16px;
    color: #ff0000;
  }
`;
