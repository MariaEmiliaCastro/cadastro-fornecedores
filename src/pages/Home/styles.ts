import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 64px;
  height: 100%;
  width: 100%;
  background-color: #f9f9f9;
  padding: 24px;
  margin-left: 250px;

  h1 {
    font-weight: bold;
    font-size: 48px;
    color: #666666;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 60px;

    h1 {
      font-size: 32px;
    }

    > div {
      overflow-x: auto;
    }
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 250px;
  padding: 9px 4px 9px 40px;
  border: 1px solid #003b75;
  border-radius: 4px;
  background: transparent
    url("https://img.icons8.com/material-outlined/24/003b75/search--v1.png")
    no-repeat 8px center;

  &:focus {
    outline: none;
  }
`;
