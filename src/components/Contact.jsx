import { useFormik } from "formik";
import React from "react";
import { Button, Form } from "react-bootstrap";
import * as Yup from "yup";
export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      program: 0,
      message: "",
      agree: false,
    },
    onSubmit: () => {
      formik.resetForm();
      alert("Submit Succesfully");
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().required("Required.").email("Invalid email"),
      phone: Yup.number().integer().typeError("Please enter a valid number"),
      program: Yup.number().integer().typeError("Please select a program."),
      message: Yup.string()
        .required("Required.")
        .min(10, "Must be 10 characters or more"),
      agree: Yup.boolean().oneOf(
        [true],
        "The terms and conditions must be accepted."
      ),
    }),
  });
  return (
    <>
      <Form form={formik} onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            placeholder="Name"
            name="name"
            type="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <Form.Text className="text-danger">{formik.errors.name}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            placeholder="Email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <Form.Text className="text-danger">{formik.errors.email}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            placeholder="Phone"
            name="phone"
            type="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
          <Form.Text className="text-danger">{formik.errors.phone}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Select
            aria-label="Default select example"
            name="program"
            type="select"
            value={formik.values.program}
            onChange={formik.handleChange}
          >
            <option>Please Select</option>
            <option value="1">React</option>
            <option value="2">Spring</option>
            <option value="3">ASP .NET</option>
          </Form.Select>
          <Form.Text className="text-danger">{formik.errors.program}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Message"
            name="message"
            type="text"
            value={formik.values.message}
            onChange={formik.handleChange}
          />
          <Form.Text className="text-danger">{formik.errors.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            label="Agree to terms and conditions"
            name="agree"
            type="switch"
            value={formik.values.agree}
            onChange={formik.handleChange}
          />
          <Form.Text className="text-danger">{formik.errors.agree}</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </>
  );
}
