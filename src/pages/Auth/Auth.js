import React from "react";
import AuthStyle from "./AuthStyle";
import FormikControl from "../../Components/Formik/FormikControl";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormCont } from "../../Components/Formik/FormStyle";
import Button from "../../Components/ReUsables/Button";
import { auth, googleProvider } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const Auth = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Enter a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password required"),
  });

  const onSubmit = async (values) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      console.log(auth);
    } catch (err) {
      console.log(values);
      console.log("...error", err);
    }
  };

  const googleHandler = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log("USER_EMAIL", auth?.currentUser?.photoURL);
    } catch (err) {
      console.log("...error from google auth", err);
    }
  };

  const signOutHandler = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log("...sign out error", err);
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
      <Button className="buttons" onClick={signOutHandler}>
        Sign out
      </Button>
      <Button className="buttons" dormant={true} onClick={googleHandler}>
        Sign in with Google
      </Button>
    </AuthStyle>
  );
};

export default Auth;
