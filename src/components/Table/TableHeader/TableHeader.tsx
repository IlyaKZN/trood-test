import { FC } from "react";
import { TItem, TTableHedaerProps } from "../types";
import {
  Button,
  ButtonContainer,
  TableHeaderContainer,
  FilterImg,
} from "./TableHeader.style";
import StatusFilterForm from "../FilterForms/StatusFilterForm";
import { useDispatch, useSelector } from "../../../store/hooks";
import { setActiveFilterWindow, setSortColumn } from "../../../store/viewSlice";
import TypeFilterForm from "../FilterForms/TypeFilterForm";
import arrowImg from "../assets/Arrow.svg";
import SortButton from "../SortButton/SortButton";


const TableHeader: FC<TTableHedaerProps> = ({ onFilter }) => {

  const dispatch = useDispatch();
  const { sortColumn } = useSelector((store) => store.viewReducer)

  const openFilterWindow = (filterType: "status" | "type") => {
    dispatch(setActiveFilterWindow(filterType));
  };

  const setSorting = (columnName: string) => {
    if (!sortColumn?.startsWith('-') && sortColumn === columnName) {
      dispatch(setSortColumn(`-${columnName}`));
    } else {
      dispatch(setSortColumn(columnName));
    }
  };

  return (
    <TableHeaderContainer>
      <ButtonContainer>
        <FilterImg src={arrowImg} onClick={() => openFilterWindow("status")} />
        <Button onClick={() => setSorting('name')}>Project</Button>
        <StatusFilterForm />
        <SortButton />
      </ButtonContainer>
      <ButtonContainer>
        <FilterImg src={arrowImg} onClick={() => openFilterWindow("type")} />
        <Button onClick={() => setSorting('type')}>Token type</Button>
        <TypeFilterForm />
        <SortButton />
      </ButtonContainer>
      <ButtonContainer>
        <Button onClick={() => setSorting('conditions')}>Conditions</Button>
        <SortButton />
      </ButtonContainer>
      <ButtonContainer>
        <Button onClick={() => setSorting('volume')}>Volume</Button>
        <SortButton />
      </ButtonContainer>
      <ButtonContainer>
        <Button onClick={() => setSorting('roi')}>ROI</Button>
        <SortButton />
      </ButtonContainer>
      <ButtonContainer>
        <Button onClick={() => setSorting('free')}>Free float</Button>
        <SortButton />
      </ButtonContainer>
      <ButtonContainer>
        <Button onClick={() => setSorting('hedge')}>Insurance hedge</Button>
        <SortButton />
      </ButtonContainer>
    </TableHeaderContainer>
  );
};

export default TableHeader;
