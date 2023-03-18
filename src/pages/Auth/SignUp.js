import React from "react";
import AuthStyle from "./AuthStyle";
import FormikControl from "../../Components/Formik/FormikControl";
import { useSelector } from "react-redux";
// import { authActions } from "../../Redux/slices/auth_slice";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormCont } from "../../Components/Formik/FormStyle";
import Button from "../../Components/ReUsables/Button";
import { auth, googleProvider } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  // signOut,
} from "firebase/auth";

const SignUp = () => {
  const authStatus = useSelector((state) => state.authStatus.signedIn);
  // const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Enter a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("required"),
  });

  const signUp = async (values) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

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

  return (
    <AuthStyle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={signUp}
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
              <FormikControl
                control="input"
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                placeholder="Confirm Password"
              />
              <Button type="submit">Sign Up</Button>
            </FormCont>
          </Form>
        )}
      </Formik>

      <Button className="buttons" dormant={true} onClick={googleHandler}>
        Sign in with Google
      </Button>
    </AuthStyle>
  );
};

export default SignUp;
