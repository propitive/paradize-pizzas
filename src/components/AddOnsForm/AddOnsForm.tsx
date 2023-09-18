import React from "react";
import { useState } from "react";
import { SelectOption } from "../MultipleSelect/MultipleSelect";
import FormWrapper from "../FormWrapper/FormWrapper.tsx";
import MultipleSelect from "../MultipleSelect/MultipleSelect.tsx";

const dichotomousOptions = [
  { label: "Yes", value: 1 },
  { label: "No", value: 1 },
];

function AddOnsForm() {
  const [charcuterieValue, setCharcuterieValue] = useState<
    SelectOption | undefined
  >();
  const [glazingValue, setGlazingValue] = useState<SelectOption | undefined>();

  return (
    <FormWrapper title="Add-Ons">
      <div>
        <h3 className="form__input-label">
          Will you want a charcuterie board?
        </h3>
        <MultipleSelect
          options={dichotomousOptions}
          value={charcuterieValue}
          onChange={(o) => setCharcuterieValue(o)}
        />
      </div>
      <div>
        <h3 className="form__input-label">Will you want a glazing table?</h3>
        <MultipleSelect
          options={dichotomousOptions}
          value={glazingValue}
          onChange={(o) => setGlazingValue(o)}
        />
      </div>
    </FormWrapper>
  );
}

export default AddOnsForm;
