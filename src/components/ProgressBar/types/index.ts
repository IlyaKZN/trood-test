export type TProgressBarProps = {
  items: {
    name: string,
    color: string,
    value: number
  }[],
  height: number,
  width: number
};

export type TBarOptions = {
  convertedData: TConvertedData;
};

export type TConvertedData = TConvertedDataItem[];

export type TConvertedDataItem = {
  name: string,
  value: number,
  percentageOfTotal: number,
  color: string,
  columnsNumber: number
};

