import styled from "styled-components";
import { Link } from "react-router-dom";

const TableLineContainer = styled(Link)<{color: 'green' | 'yellow' | 'red'}>`
  padding: 15px;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  background-color: ${({ color }) => {
    switch (color) {
      case 'green':
        return '#f2fefd';
      case 'red':
        return '#fff5f1';
      case 'yellow':
        return '#fdffe3';
    }
  }};
  display: grid;
  grid-template-columns: 15px 140px 105px 105px 85px 85px 85px 85px 1fr;
  column-gap: 15px;
  align-items: center;
  cursor: pointer;
  color: black;
  text-decoration: none;
`;

const Status = styled.div<{color: 'green' | 'yellow' | 'red'}>`
  margin-right: 8px;
  height: 15px;
  width: 15px;
  border-radius: 100%;
  background-color: ${({ color }) => color};
`;

const Text = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
`;

const BuyButton = styled.button`
  justify-self: flex-end;
  background: none;
  border: 2px solid #cc00cc;
  box-sizing: border-box;
  border-radius: 8px;
  font-family: 'Roboto';
  color: #cc00cc;
  font-weight: 500;
  cursor: pointer;
  width: min-content;
  padding: 10px 15px;

  :hover {
    background: #cc00cc;
    color: white;
  }
`;

export { TableLineContainer, Status, Text, BuyButton }