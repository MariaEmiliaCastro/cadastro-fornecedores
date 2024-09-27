import * as yup from "yup";

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters long")
    .max(50, "Username cannot be longer than 50 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Email must be a valid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm Password is required"),
});

export default registerSchema;
