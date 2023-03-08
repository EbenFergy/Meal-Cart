import React from "react";
import AuthStyle from "./AuthStyle";
import FormikControl from "../../Components/Formik/FormikControl";

const Auth = () => {
  return (
    <AuthStyle>
      <FormikControl control="input" />
    </AuthStyle>
  );
};

export default Auth;
