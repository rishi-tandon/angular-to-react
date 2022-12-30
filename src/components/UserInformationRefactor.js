import * as Yup from "yup";

import { ErrorMessage, Field, Form, Formik } from "formik";

import React from "react";

const UserSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  address: Yup.string().required("Address is required"),
});

const UserInformationRefactor = ({ clearCart }) => (
  <Formik
    validationSchema={UserSchema}
    initialValues={{ name: "", address: "" }}
    onSubmit={(values, { setSubmitting, resetForm }) => {
      setTimeout(() => {
        console.warn(
          "Your order has been submitted",
          JSON.stringify(values, null, 2)
        );
        setSubmitting(false);
        clearCart();
        resetForm();
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name"></Field>
          <ErrorMessage
            name="name"
            component="p"
            className="error"
          ></ErrorMessage>
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <Field name="address"></Field>
          <ErrorMessage
            name="address"
            component="p"
            className="error"
          ></ErrorMessage>
        </div>
        <button type="submit" disabled={isSubmitting}>
          Purchased
        </button>
      </Form>
    )}
  </Formik>
);

export default UserInformationRefactor;
