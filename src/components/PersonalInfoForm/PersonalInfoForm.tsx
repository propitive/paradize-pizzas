import React from "react";
import FormWrapper from "../FormWrapper/FormWrapper.tsx";

function PersonalInfoForm() {
  return (
    <FormWrapper title="User Details">
      <div className="form__input-box">
        <input className="form__input" type="text" autoFocus required />
        <span className="form__input-span">Full Name</span>
      </div>
      <div className="form__input-box">
        <input className="form__input" type="email" required />
        <span className="form__input-span">Email</span>
      </div>
      <div className="form__input-box">
        <input className="form__input" type="number" min="25" required />
        <span className="form__input-span">Expected Attendance</span>
      </div>
      <div className="form__input-box">
        <input className="form__input" required />
        <span className="form__input-span">Location</span>
      </div>
    </FormWrapper>
  );
}

export default PersonalInfoForm;
