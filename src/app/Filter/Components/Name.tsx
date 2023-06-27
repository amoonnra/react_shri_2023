import { Divider } from "@/UI/Divider";
import { TextField } from "@/UI/TextField";
import { useAppDispatch } from "@/store/hooks";
import { useState, useEffect, useCallback } from "react";
import { updateFilterName } from "../Slice/reducer";
import debounce from "lodash/debounce";

const Translations = {
  name: "title",
  placeholder: "Введите название",
  label: "Название",
};

const Name: React.FC = () => {
  const [value, setValue] = useState<string>();
  const dispatch = useAppDispatch();

  const debouncedDispatch = useCallback(
    debounce(dispatch, 500, { trailing: true }),
    []
  );

  useEffect(() => {
    debouncedDispatch(updateFilterName(value));
  }, [value, debouncedDispatch]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <TextField
        value={value || ""}
        onChange={handleChange}
        name={Translations.name}
        placeholder={Translations.placeholder}
        label={Translations.label}
      />
    </>
  );
};

export default Name;
