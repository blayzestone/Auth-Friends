import React from "react";

const FormContainer = (props) => {
  return (
    <div className="w-50 m-auto p-3 text-center rounded shadow">
      {props.children}
    </div>
  );
};

export default FormContainer;
