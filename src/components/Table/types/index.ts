export type TTableProps = {
  data: TData;
  onSort: (sortColumn: string) => void;
  onFilter: (filters: TFilters) => void;
  onBuy: (id: number) => void;
};

export type TTableHedaerProps = {
  onFilter: (filters: TFilters) => void;
};

export type TTableLineProps = {
  data: TItem;
  onBuy: (id: number) => void;
};

export type TData = {
  items: TItem[];
  sortColumn: string;
  filters: TFilters;
};

export type TItem = {
  id: number;
  name: string;
  status: "green" | "yellow" | "red";
  type: string;
  conditions: string;
  volume: number;
  roi: number;
  free: number;
  hedge: number;
};

export type TFilters = {
  status?: "green" | "yellow" | "red";
  type?: "trst" | "tht";
};
