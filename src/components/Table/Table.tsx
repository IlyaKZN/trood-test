import { FC, useEffect } from "react";
import { TableContainer } from "./Table.styles";
import TableLine from "./TableLine/TableLine";
import { TTableProps } from "./types";
import { useSelector, useDispatch } from "../../store/hooks";
import { setFilters, setItems, setSortColumn } from "../../store/viewSlice";
import TableHeader from "./TableHeader/TableHeader";
import { batch } from "react-redux";

const Table: FC<TTableProps> = ({ data, onBuy, onFilter, onSort}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    batch(() => {
      dispatch(setItems(data.items));
      dispatch(setSortColumn(data.sortColumn));
      dispatch(setFilters(data.filters));
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { items, filters, sortColumn } = useSelector((store) => store.viewReducer);

  useEffect(() => {
    if (filters) {
      onFilter(filters);
    }
  }, [filters, onFilter]);

  useEffect(() => {
    if (sortColumn) {
      onSort(sortColumn);
    }
  }, [sortColumn, onSort]);

  return (
    <TableContainer>
      <TableHeader onFilter={onFilter} />
      { items.map((item, index) => (
        <TableLine data={item} key={index} onBuy={onBuy} />
      )) }
    </TableContainer>
  )
};

export default Table;