import styled from "styled-components";

export const ButtonWrapper = styled.button<{ rounded: number }>`
  padding: ${({ rounded }) => (rounded ? "8px" : "12px 12px")};
  border: none;
  border-radius: ${({ rounded }) => (rounded ? "999px" : "4px")};
  cursor: pointer;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  transition: background-color 0.2s;

  &.button--primary {
    background-color: #0082f5;
    color: #fff;
  }

  &.button--secondary {
    background-color: transparent;
    color: #fff;
  }

  &.button--link {
    background-color: transparent;
    text-decoration: underline;
    padding: 0;
    color: #4ac0ff;
    display: inline;
  }

  &.button--delete {
    background-color: #b70909;
    color: #fff;
  }

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    background-color: #ccc;
    color: #fff;
    cursor: not-allowed;
  }
`;
