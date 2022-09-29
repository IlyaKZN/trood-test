import styled from "styled-components";

const FilterFormContainer = styled.form<{ status: 'active' | 'disable' }>`
  width: 100px;
  border: 2px solid lightgrey;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: 30px;
`;

const RadioLabelContainer = styled.div`
  height: 39px;
  width: 100%;
  position: relative;
`;

const RadioLabel = styled.label`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
  font-size: 14px;
`;

const RadioInput = styled.input`
  margin: 0;
  box-sizing: border-box;
  opacity: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  &:checked + ${RadioLabel} {
    font-weight: 700;
    background: linear-gradient(0deg, lightgrey, rgba(0, 0, 0, 0) 20%);
  }

  &:hover + ${RadioLabel} {
    font-weight: 700;
  }
`;

export { FilterFormContainer, RadioInput, RadioLabel, RadioLabelContainer };