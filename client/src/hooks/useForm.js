import { useState } from "react";

export const useForm = (state) => {
  const [values, setValues] = useState(state);

  const changeHandler = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    setValues({
      ...values,
      [name]: value,
    });
  };
  return [values, changeHandler];
};
