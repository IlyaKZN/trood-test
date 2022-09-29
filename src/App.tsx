import React from "react";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Table from "./components/Table/Table";
import { TProgressBarProps } from "./components/ProgressBar/types";
import { TData, TFilters } from "./components/Table/types";
import { Route, Routes } from "react-router";

const progressBarProps: TProgressBarProps = {
  items: [
    { name: "Sold", color: "#BD1FBE", value: 677 },
    { name: "Got free", color: "#FC64FF", value: 220 },
    { name: "Burned", color: "#ceff6d", value: 100 },
    { name: "Free Float", color: "#c2c2c2", value: 20 },
  ],
  height: 65,
  width: 700,
};

const tableProps: TData = {
  items: [
    {
      id: 1,
      name: "Pyshky.net",
      status: "green",
      type: "TRST",
      conditions: "x 2, 6 months",
      volume: 120000,
      roi: 4,
      free: 20,
      hedge: 20,
    },
    {
      id: 2,
      name: "NFT-Flowershop",
      status: "yellow",
      type: "THT",
      conditions: "x 4, 2 years",
      volume: 80000,
      roi: 23,
      free: 12,
      hedge: 0,
    },
    {
      id: 4,
      name: "Web3 P2P University",
      status: "red",
      type: "TRST",
      conditions: "x 2, 1 years",
      volume: 200000,
      roi: 6,
      free: 1,
      hedge: 0,
    },
  ],
  sortColumn: 'name',
  filters: {
    status: 'green',
    type: 'tht'
  },
};

const onSort = (sortColumn: string) => {
  console.log('Sort', sortColumn);
};

const onFilter = (filters: TFilters) => {
  console.log('Filter', filters);
};

const onBuy = (id: number) => {
  console.log(`Buy ${id}`);
};

function App() {
  return (
      <Routes>
        <Route path="/" element = {
          <div style={{ display: "flex", flexDirection: "column", gap: "50px", alignItems: "center" }}>
            <Table data={tableProps} onSort={onSort} onFilter={onFilter} onBuy={onBuy} />
            <ProgressBar items={progressBarProps.items} height={progressBarProps.height} width={progressBarProps.width} />
          </div>
        }>
        </Route>
      </Routes>
  );
}

export default App;
