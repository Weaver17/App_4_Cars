import { useState } from "react";

type useFormProps = {
  make?: string;
  manufacturer?: string;
  vehicleType?: string;
  variableValue?: string;
};

export function useForm(inputValues: useFormProps) {
  const [values, setValues] = useState(inputValues);

  const handleChange = (event: { target: { value: string; name: string } }) => {
    const { value, name } = event.target;
    console.log(value, name);

    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, setValues };
}
