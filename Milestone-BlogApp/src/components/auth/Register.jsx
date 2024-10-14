import React from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import { Link } from "react-router-dom";
import useApiRequests from "../../service/useApiRequests";

const Register = () => {
  const { register } = useApiRequests();

  const registerSchema = object({
    username: string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters")
      .max(16, "Username must be at most 16 characters"),
    firstName: string()
      .required("Firstname is required")
      .min(3, "Firstname must be at least 3 characters")
      .max(16, "Firstname must be at most 16 characters"),
    lastName: string()
      .required("Lastname is required")
      .min(3, "Lastname must be at least 3 characters")
      .max(16, "Lastname must be at most 16 characters"),
    email: string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(16, "Password must be at most 16 characters")
      .matches(/[a-z]+/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]+/, "Password must contain at least one uppercase letter")
      .matches(
        /[@$!%*?&]+/,
        "Password must contain at least one special character (@$!%*?&)"
      ),
  });

  return (
    <Container
      sx={{
        backgroundColor: "whitesmoke",
        minWidth: "100%",
      }}
    >
      <Container
        component="main"
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh",
        }}
      >
        <Formik
          initialValues={{
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            image: "",
            city: "",
            bio: "",
          }}
          validationSchema={registerSchema}
          onSubmit={(values, actions) => {
            register(values);
            actions.resetForm();
            actions.setSubmitting(false);
          }}
        >
          {({
            isSubmitting,
            handleChange,
            handleBlur,
            values,
            touched,
            errors,
            isValid,
          }) => (
            <Form>
              <Box
                sx={{ pt: 10, pb: 10, pr: 5, pl: 5, borderRadius: 5, boxShadow: 10, backgroundColor: "#fff", border: "2px solid #800000" }}>
                <Typography
                  component="h1"
                  variant="h5"
                  sx={{ color: "#800000", mb: 4, textAlign: "center" }}>
                  Register
                </Typography>

                <TextField
                  variant="outlined"
                  fullWidth
                  label="Username"
                  type="text"
                  name="username"
                  onChange={handleChange}
                  value={values.username}
                  error={touched.username && Boolean(errors.username)}
                  onBlur={handleBlur}
                  helperText={errors.username}
                  sx={{ mb: 2 }}
                />
                <Box display="flex" justifyContent="space-between">
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Firstname"
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    value={values.firstName}
                    error={touched.firstName && Boolean(errors.firstName)}
                    onBlur={handleBlur}
                    helperText={errors.firstName}
                    sx={{ mr: 1, mb: 2 }}
                  />
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Lastname"
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    value={values.lastName}
                    error={touched.lastName && Boolean(errors.lastName)}
                    onBlur={handleBlur}
                    helperText={errors.lastName}
                  />
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    error={touched.email && Boolean(errors.email)}
                    onBlur={handleBlur}
                    helperText={errors.email}
                    sx={{ mr: 1, mb: 2 }}
                  />
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    error={touched.password && Boolean(errors.password)}
                    onBlur={handleBlur}
                    helperText={errors.password}
                  />
                </Box>

                <Typography
                  sx={{ textAlign: "center", color: "#0288d1", mt: 1 }}
                >
                  {Object.keys(touched).length > 0 && isValid}
                </Typography>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  fullWidth
                  variant="contained"
                  sx={{
                    mb: 2, mt: 2, backgroundColor: "#800000", color: "#fff",
                    "&:hover": {
                      backgroundColor: "#982B1C"
                    }
                  }}>
                  Sign Up
                </Button>
                <Typography variant="body2" align="center">
                  Do you have an account? <Link to="/login">Log in</Link>
                </Typography>
              </Box>
            </Form>
          )}
        </Formik>
      </Container>
    </Container>
  );
};

export default Register;