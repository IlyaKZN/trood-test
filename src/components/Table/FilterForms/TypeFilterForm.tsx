import { FC, useState, useEffect } from "react";
import {
  FilterFormContainer,
  RadioInput,
  RadioLabel,
  RadioLabelContainer,
} from "./FilterForms.styles";
import { useDispatch, useSelector } from "../../../store/hooks";
import { clearActiveFilterWindow, setFilters } from "../../../store/viewSlice";

const TypeFilterForm: FC = () => {

  const [value, setValue] = useState<"trst" | "tht">();
  const { activeFilterWindow, filters } = useSelector((store) => store.viewReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (filters?.type) {
      setValue(filters.type)
    }
  }, [filters?.type])

  if (activeFilterWindow !== "type") {
    return null;
  }

  const onClickInput = (value: "trst" | "tht") => {
    setValue(value);
    dispatch(setFilters({ ...filters, type: value }));
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
          checked={value === "trst"}
          onClick={() => onClickInput("trst")}
          readOnly
        />
        <RadioLabel htmlFor="FilterForm1">TRST</RadioLabel>
      </RadioLabelContainer>
      <RadioLabelContainer>
        <RadioInput
          id="FilterForm2"
          type="radio"
          value="yellow"
          name="radio"
          checked={value === "tht"}
          onClick={() => onClickInput("tht")}
          readOnly
        />
        <RadioLabel htmlFor="FilterForm2">THT</RadioLabel>
      </RadioLabelContainer>
    </FilterFormContainer>
  );
};

export default TypeFilterForm;