import React from "react";
import FormWrapper from "./FormWrapper.tsx";

function UserForm() {
  return (
    <FormWrapper title="User Details">
      <div className="form__input-box">
        <input className="form__input" name="user-name" type="text" required />
        <span className="form__input-span">Full Name</span>
      </div>
      <div className="form__input-box">
        <input className="form__input" name="user-email" type="text" required />
        <span className="form__input-span">Email</span>
      </div>
      <div className="form__input-box">
        <input
          className="form__input"
          name="attendance"
          type="number"
          required
        />
        <span className="form__input-span">Expected Attendance</span>
      </div>
      <div className="form__input-box">
        <input className="form__input" name="location" required />
        <span className="form__input-span">Location</span>
      </div>
    </FormWrapper>
  );
}

export default UserForm;
