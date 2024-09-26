import styled from "styled-components";

export const ViewSupplierWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  height: 100%;
  width: 100%;
  background-color: #f9f9f9;
  padding: 24px;
  margin-left: 250px;

  h1 {
    font-weight: bold;
    font-size: 48px;
    color: #666666;
    margin-bottom: 32px;
  }
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
`;

export const FieldName = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #666666;
`;

export const FieldValue = styled.p`
  font-size: 14px;
  color: #666666;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
