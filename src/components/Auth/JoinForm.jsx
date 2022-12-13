import React from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../../utils/formValidator";
import { registerApi } from "../../services/authApis";

function JoinForm() {
  return (
    <Formik
      initialValues={{
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={async (values, actions) => {
        try {
          if (values.password != values.confirmPassword) {
            actions
              .setErrors({ confirmPassword: "Password does not match" })
              .setSubmitting(false);
            return;
          }
          const response = await registerApi({ ...values, confirmPassword: null });
         console.log({response})
        } catch (error) {
          console.log({ error });
          return error;
        }
      }}
    >
      {(props) => (
        <Form gap="4">
          {/* <Flex gap='4'> */}
          <Field name="name" validate={validateName}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel>Full Name</FormLabel>
                <Input {...field} type="text" placeholder="Full name" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="username" validate={validateName}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.username && form.touched.username}
              >
                <FormLabel>Username</FormLabel>
                <Input {...field} type="text" placeholder="Username" />
                <FormErrorMessage>{form.errors.username}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="email" validate={validateEmail}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
                <FormLabel>Email</FormLabel>
                <Input {...field} type="email" placeholder="Email Address" />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="password" validate={validatePassword}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.password && form.touched.password}
              >
                <FormLabel>Password</FormLabel>
                <Input {...field} type="password" placeholder="Password" />
                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="confirmPassword">
            {({ field, form }) => (
              <FormControl
                isInvalid={
                  form.errors.confirmPassword && form.touched.confirmPassword
                }
              >
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  {...field}
                  type="password"
                  placeholder="Confirm Password"
                />
                <FormErrorMessage>
                  {form.errors.confirmPassword}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
          {/* </Flex> */}

          <Button
            mt={4}
            colorScheme="blue"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Join Community
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default JoinForm;
