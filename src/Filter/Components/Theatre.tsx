"use client";

import { SelectField } from "@/UI/SelectField";
import { useAppDispatch } from "@/store/hooks";
import { useGetCinemasQuery } from "@/store/movieReducer";
import { useEffect, useState } from "react";
import { updateFilterCinema } from "../Slice/reducer";
import { ISelectorOption } from "@/models";

const translations = {
  name: "cinema",
  placeholder: "Выберите кинотеатр",
  label: "Кинотеатр",
};

const Theatre: React.FC = () => {
  const [value, setValue] = useState<ISelectorOption<string>>();
  const { data } = useGetCinemasQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateFilterCinema(value?.id));
  }, [dispatch, value?.id]);

  return (
    <SelectField
      label={translations.label}
      name={translations.name}
      placeholder={translations.placeholder}
      options={data?.map(({ id, name }) => ({ id, label: name }))}
      onSelect={setValue}
    />
  );
};

export default Theatre;
