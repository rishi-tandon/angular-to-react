import * as Yup from "yup";

import { Form, Formik } from "formik";

import React from "react";

const UserSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  address: Yup.string().required("Address is required"),
});

const UserInformation = ({ clearCart }) => (
  <Formik
    initialValues={{ name: "", address: "" }}
    validationSchema={UserSchema}
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
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
    }) => (
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="type"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          ></input>
          {errors.name && touched.name && (
            <p className="error">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input
            type="type"
            name="address"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          ></input>
          {errors.address && touched.address && (
            <p className="error">{errors.address}</p>
          )}
        </div>
        <button type="submit" disabled={isSubmitting}>
          Purchased
        </button>
      </Form>
    )}
  </Formik>
);

export default UserInformation;
