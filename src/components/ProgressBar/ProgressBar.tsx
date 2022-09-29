import { FC, useState, useEffect } from "react";
import {
  TProgressBarProps,
  TBarOptions,
  TConvertedDataItem,
} from "./types";
import { getBarOptions } from "./utils";
import {
  DataContainer,
  Indicator,
  Item,
  ItemDataContainer,
  ItemDataText,
  ItemsContainer,
  ProgressBarContainer,
} from "./ProgressBar.styles";
import { v4 as uuid } from "uuid";

const ProgressBar: FC<TProgressBarProps> = (props) => {
  const [barOptions, setBarOptions] = useState<TBarOptions>({
    convertedData: [],
  });

  useEffect(() => {
    setBarOptions(getBarOptions(props));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  const renderGroupColumns = (data: TConvertedDataItem) => {
    const groupColumn = [];

    for (let i = 0; i < data.columnsNumber; i++) {
      groupColumn.push(<Item color={data.color} key={uuid()}/>);
    }

    return groupColumn;
  };

  return (
    <ProgressBarContainer height={props.height} width={props.width}>
      <ItemsContainer>
        {barOptions.convertedData.map((data) => renderGroupColumns(data))}
      </ItemsContainer>
      <DataContainer>
        {barOptions.convertedData.map((data) => (
          <ItemDataContainer key={uuid()}>
            <Indicator color={data.color} />
            <ItemDataText>
              {data.name}: {data.value} ({data.percentageOfTotal} %)
            </ItemDataText>
          </ItemDataContainer>
        ))}
      </DataContainer>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
