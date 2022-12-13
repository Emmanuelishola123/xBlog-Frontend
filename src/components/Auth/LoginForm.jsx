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
import { loginApi } from "../../services/authApis";
import UseNavigate from "../../hooks/useNavigate";
import UseQuery from "../../hooks/useQuery";

function LoginForm() {
  const query = UseQuery();
  const navigate = UseNavigate();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values, actions) => {
        try {
          await loginApi({
            ...values,
          });

          return navigate(query || '/');
        
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
          <Field name="password">
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
          <Button
            mt={4}
            colorScheme="blue"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
