import { ChangeEvent, FC } from "react";
import { TTableLineProps } from "../types";
import { Text, Status, TableLineContainer, BuyButton } from "./TableLine.styles";

const TableLine: FC<TTableLineProps> = ({ data, onBuy }) => {
  const { id, name, status, type, conditions, volume, roi, free, hedge } = data;

  const onBuyClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();
    onBuy(id);
  }

  return (
    <TableLineContainer color={status} to={`/project/${id}`}>
      <Status color={status}/>
      <Text>{name}</Text>
      <Text>{type}</Text>
      <Text>{conditions}</Text>
      <Text>$ {volume}</Text>
      <Text>{roi} %</Text>
      <Text>{free}</Text>
      <Text>{hedge} %</Text>
      <BuyButton onClick={(e) => onBuyClick(e, id)}>Buy</BuyButton>
    </TableLineContainer>
  );
};

export default TableLine;
