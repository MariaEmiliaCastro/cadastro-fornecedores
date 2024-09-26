import styled from "styled-components";

export const AddSupplierWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 24px;
  width: 100%;
  margin-left: 250px;
  margin-bottom: 32px;
  overflow-y: auto;

  h1 {
    font-size: 48px;
    color: #666666;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 60px;

    h1 {
      font-size: 32px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 600px;
  width: 100%;
  height: 100%;

  h2 {
    font-size: 24px;
    color: #666666;
    font-weight: 600;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
