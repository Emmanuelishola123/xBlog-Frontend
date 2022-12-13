import React from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { validateEmail } from "../../utils/formValidator";
import { forgotPasswordApi } from "../../services/authApis";

function ForgetPasswordForm() {
  return (
    <Formik
    initialValues={{ email: '' }}
      onSubmit={async (values, actions) => {
        try {   
          const response = await forgotPasswordApi({ ...values});
         console.log({response})
        } catch (error) {
          console.log({ error });
          return error;
        }
      }}
    >
      {(props) => (
        <Form>
          <Field name="email" validate={validateEmail}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
                <FormLabel>Email</FormLabel>
                <Input {...field} type="email" placeholder="Email Address" />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme="blue"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Send Password Reset Link
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default ForgetPasswordForm;
