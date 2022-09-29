import styled from "styled-components";

const ProgressBarContainer = styled.div<{ height: number; width: number }>`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  display: grid;
  grid-template-rows: 1fr 40px;
`;

const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div<{ color: string }>`
  width: 11px;
  height: 100%;
  border-radius: 4px;
  background-color: ${({ color }) => color};
`;

const DataContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ItemDataContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Indicator = styled.div<{ color: string }>`
  height: 15px;
  width: 15px;
  border-radius: 100%;
  background-color: ${({ color }) => color}
`;

const ItemDataText = styled.p`
  margin: 0;
  font-size: 16px;
`;

export {
  ProgressBarContainer,
  Item,
  ItemsContainer,
  DataContainer,
  ItemDataContainer,
  Indicator,
  ItemDataText
};
