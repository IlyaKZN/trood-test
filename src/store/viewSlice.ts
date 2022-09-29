import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TFilters, TItem } from "../components/Table/types";

type TViewState = {
  items: TItem[];
  sortColumn: string | null;
  filters: TFilters | null;
  activeFilterWindow: "status" | "type" | null;
};

const initialState: TViewState = {
  items: [],
  activeFilterWindow: null,
  sortColumn: null,
  filters: null,
};

const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    setItems: (state: TViewState, action: PayloadAction<TItem[]>) => ({
      ...state,
      items: action.payload,
    }),
    setSortColumn: (state: TViewState, action: PayloadAction<string>) => ({
      ...state,
      sortColumn: action.payload,
    }),
    setFilters: (state: TViewState, action: PayloadAction<TFilters>) => ({
      ...state,
      filters: action.payload,
    }),
    setActiveFilterWindow: (
      state: TViewState,
      action: PayloadAction<"status" | "type">
    ) => ({
      ...state,
      activeFilterWindow: action.payload,
    }),
    clearActiveFilterWindow: (state: TViewState) => ({
      ...state,
      activeFilterWindow: null,
    }),
  },
});

export const {
  setItems,
  setFilters,
  setSortColumn,
  setActiveFilterWindow,
  clearActiveFilterWindow,
} = viewSlice.actions;
const viewReducer = viewSlice.reducer;
export default viewReducer;
