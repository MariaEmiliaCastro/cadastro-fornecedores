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

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px;
    height: 60px;
  }
`;
