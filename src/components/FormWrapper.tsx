import React, { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 className="wrapper__title">{title}</h2>
      <div className="wrapper__children">{children}</div>
    </>
  );
}

export default FormWrapper;
