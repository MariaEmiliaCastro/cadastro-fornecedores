import styled from "styled-components";

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background-color: #003b75;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 24px;
  white-space: nowrap;

  div:last-child {
    position: absolute;
    bottom: 24px;
    left: 24px;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px;
    height: 60px;

    div {
      display: flex;
      gap: 12px;
    }

    div:last-child {
      position: static;
    }
  }

  @media (max-width: 425px) {
    div {
      gap: 0;
    }
  }
`;
