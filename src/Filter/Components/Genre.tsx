'use client'

import { SelectField } from "@/UI/SelectField";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";
import { updateFilterGenre } from "../Slice/reducer";
import { ISelectorOption } from "@/models";

const translations = {
  name: "genre",
  placeholder: "Выберите жанр",
  label: "Жанр",
};

const Genre: React.FC = () => {
  const [value, setValue] = useState<ISelectorOption<string>>();
  const dispatch = useAppDispatch();
  const options: ISelectorOption<string>[] = Object.entries(
    useAppSelector((state) => state.genres)
  ).map(([value, label]) => ({ id: value, value, label }));

  useEffect(() => {
    dispatch(updateFilterGenre(value?.value));
  }, [dispatch, value?.value]);

  return (
    <>
      <SelectField
        label={translations.label}
        name={translations.name}
        placeholder={translations.placeholder}
        options={options}
        onSelect={setValue}
      />
    </>
  );
};

export default Genre;
