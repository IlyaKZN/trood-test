import styled from "styled-components";
import triangleImg from "../assets/Triangle.svg";

const SortBtn = styled.button<{ angleRotation?: number }>`
  height: 6px;
  width: 10px;
  background-image: url(${triangleImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-color: rgba(1,1,1, 0);
  transform: rotate(${({ angleRotation }) => angleRotation}deg);
  border: none;
  padding: 0;
`;

const SortBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export { SortBtn, SortBtnContainer };