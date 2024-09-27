import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 24px;
  background-color: #003b75;

  div {
    padding: 16px;
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  h1 {
    color: #003b75;
    font-weight: 700;
    font-size: 32px;
    align-text: center;
    align-self: center;
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;

  label {
    font-size: 20px;
    color: #003b75;
    margin-bottom: 8px;
  }

  input {
    padding: 8px;
    border-radius: 4px 4px 0px 0px;
    border: none;
    border-bottom: 1px solid #003b75;
    background-color: #efefef;
    margin-bottom: 24px;
  }

  input:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
