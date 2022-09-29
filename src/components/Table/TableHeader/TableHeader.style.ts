import styled from "styled-components";

const TableHeaderContainer = styled.div`
  padding: 15px;
  width: 100%;
  height: 60px;
  display: grid;
  grid-template-columns: 170px 105px 105px 85px 85px 85px 1fr;
  column-gap: 15px;
  align-items: center;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 0;
  justify-self: flex-start;
  text-align: start;
  font-family: "Roboto";
  font-weight: 500;
  color: grey;
  background: none;
  border: none;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FilterImg = styled.img`
  width: 10px;
  height: 14px;
  cursor: pointer;
`;



export {
  TableHeaderContainer,
  Button,
  ButtonContainer,
  FilterImg,
};
