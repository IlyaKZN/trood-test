import { FC, useState, useEffect } from "react";
import {
  FilterFormContainer,
  RadioInput,
  RadioLabel,
  RadioLabelContainer,
} from "./FilterForms.styles";
import { useDispatch, useSelector } from "../../../store/hooks";
import { clearActiveFilterWindow, setFilters } from "../../../store/viewSlice";

const StatusFilterForm: FC = () => {

  const [value, setValue] = useState<"green" | "yellow" | "red">();
  const { activeFilterWindow, filters } = useSelector((store) => store.viewReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (filters?.status) {
      setValue(filters.status)
    }
  }, [filters?.status])

  if (activeFilterWindow !== "status") {
    return null;
  }

  const onClickInput = (value: "green" | "yellow" | "red") => {
    setValue(value);
    dispatch(setFilters({ ...filters, status: value }));
    dispatch(clearActiveFilterWindow());
  };

  return (
    <FilterFormContainer status="active">
      <RadioLabelContainer>
        <RadioInput
          id="FilterForm1"
          type="radio"
          value="green"
          name="radio"
          checked={value === "green"}
          onClick={() => onClickInput("green")}
          readOnly
        />
        <RadioLabel htmlFor="FilterForm1">Green</RadioLabel>
      </RadioLabelContainer>
      <RadioLabelContainer>
        <RadioInput
          id="FilterForm2"
          type="radio"
          value="yellow"
          name="radio"
          checked={value === "yellow"}
          onClick={() => onClickInput("yellow")}
          readOnly
        />
        <RadioLabel htmlFor="FilterForm2">Yellow</RadioLabel>
      </RadioLabelContainer>
      <RadioLabelContainer>
        <RadioInput
          id="FilterForm3"
          type="radio"
          value="red"
          name="radio"
          checked={value === "red"}
          onClick={() => onClickInput("red")}
          readOnly
        />
        <RadioLabel htmlFor="FilterForm3">Red</RadioLabel>
      </RadioLabelContainer>
    </FilterFormContainer>
  );
};

export default StatusFilterForm;
