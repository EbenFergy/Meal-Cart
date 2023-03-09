import React from "react";
import AuthStyle from "./AuthStyle";
import FormikControl from "../../Components/Formik/FormikControl";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormCont } from "../../Components/Formik/FormStyle";
import Button from "../../Components/ReUsables/Button";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Auth = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Enter valid email")
      .required("Email is required"),
    password: Yup.string().required("Password required"),
  });

  const onSubmit = async (values) => {
    await createUserWithEmailAndPassword(auth, values.email, values.password);
    try {
    } catch (err) {
      console.log(values);
      console.log("...error", err);
    }
  };

  return (
    <AuthStyle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <FormCont>
              <FormikControl control="input" name="email" label="Email" />
              <FormikControl
                control="input"
                name="password"
                label="Password"
                type="password"
                placeholder="Password"
              />
              <Button type="submit">Sign In</Button>
            </FormCont>
          </Form>
        )}
      </Formik>
    </AuthStyle>
  );
};

export default Auth;
