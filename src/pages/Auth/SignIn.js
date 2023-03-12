import React, { useReducer } from "react";
import AuthStyle from "./AuthStyle";
import FormikControl from "../../Components/Formik/FormikControl";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../Redux/slices/auth_slice";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormCont } from "../../Components/Formik/FormStyle";
import Button from "../../Components/ReUsables/Button";
import { auth, googleProvider } from "../../config/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const SignIn = () => {
  const authStatus = useSelector((state) => state.authStatus.signedIn);
  const dispatch = useDispatch();
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

  const signIn = async (values) => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      dispatch(authActions.signedIn());

      console.log("email and password response", response);
      console.log("status report", authStatus);
    } catch (err) {
      // console.log(values);
      console.log("...error", err);
    }
  };

  const googleHandler = async () => {
    try {
      const response = await signInWithPopup(auth, googleProvider);
      console.log("Google auth response", response);
    } catch (err) {
      console.log("...error from google auth", err);
    }
  };

  const signUpHandler = () => {
    dispatch(authActions.signUp());
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
        onSubmit={signIn}
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
      <div className="buttons" onClick={signUpHandler}>
        New to Food World?
        <label id="signUp">Sign up</label>
      </div>
      <Button className="buttons" dormant={true} onClick={googleHandler}>
        Sign in with Google
      </Button>
    </AuthStyle>
  );
};

export default SignIn;
