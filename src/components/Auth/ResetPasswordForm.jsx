import React from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { validatePassword } from "../../utils/formValidator";
import { resetPasswordApi } from "../../services/authApis";

function ResetPassword({ resetToken }) {
  return (
    <Formik
      initialValues={{ password: "", confirmPassword: "" }}
      onSubmit={async (values, actions) => {
        try {
          if (values.password != values.confirmPassword) {
            actions
              .setErrors({ confirmPassword: "Password does not match" })
              .setSubmitting(false);
            return;
          }
          const response = await resetPasswordApi({
            ...values,
            token: resetToken,
            confirmPassword: null,
          });
          console.log({ response });
        } catch (error) {
          console.log({ error });
          return error;
        }
      }}
    >
      {(props) => (
        <Form>
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

          <Field name="confirmPassword" validate={validatePassword}>
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
          <Button
            mt={4}
            colorScheme="blue"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Update Password
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default ResetPassword;
