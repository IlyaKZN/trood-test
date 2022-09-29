import { TProgressBarProps, TBarOptions, TConvertedData } from "./types";

export const getBarOptions = (props: TProgressBarProps): TBarOptions => {
  const { items, width } = props;
  const totalColumnsNumber = Math.trunc(width / 12);
  const convertedData: TConvertedData = [];

  let sumValues = 0;
  items.forEach((item) => {
    sumValues += item.value;
  });
  items.forEach((item) => {
    const percentageOfTotal = +((item.value / sumValues) * 100).toFixed(2);
    if (item.value <= 0) {
      return
    }
    convertedData.push({
      name: item.name,
      value: item.value,
      color: item.color,
      percentageOfTotal: percentageOfTotal,
      columnsNumber: Math.round(totalColumnsNumber * (percentageOfTotal / 100))
    }) 
  });

  return (
    {
      convertedData: convertedData
    }
  )
};