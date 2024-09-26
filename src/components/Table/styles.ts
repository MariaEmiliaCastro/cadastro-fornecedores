import styled from "styled-components";

export const TableWrapper = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 32px;
`;

export const TableHeader = styled.thead`
  text-align: left;
  padding: 12px;
  background-color: #003b75;
  border-radius: 4px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #003b75;
`;

export const TableCell = styled.td`
  padding: 12px 4px 12px 12px;
  font-size: 14px;
  vertical-align: top;
  color: #666666;
  border-right: 1px solid #003b75;
  text-align: left;

  @media (max-width: 768px) {
    display: block;
    border: none;

    &:before {
      content: attr(data-cell) ": ";
      text-transform: capitalize;
      float: left;
      font-weight: bold;
    }
  }
`;

export const TableHeaderCell = styled.th`
  padding: 12px;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  background-color: #003b75;
  border-right: 1px solid #003b75;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ButtonsWrapper = styled.td`
  padding: 12px 4px 12px 12px;
  display: flex;
  gap: 8px;
  justify-content: start;
  align-items: center;
  height: 100%;
`;
