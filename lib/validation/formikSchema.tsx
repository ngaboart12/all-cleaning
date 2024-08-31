import * as Yup from "yup"

export const accountTypeValidationSchema = Yup.object({
    type: Yup.string().required("Please choose account type")
})
export const locationValidationSchema = Yup.object({
    state: Yup.string().required("Please choose your state"),
    city: Yup.string().required("Please choose your city"),
})
export const PersonalDetailsValidationSchema = Yup.object({
    fullName: Yup.string().required("Please fill your Name"),
    email: Yup.string().required("Please fill your email").email("Enter valid email"),
    phoneNumber: Yup.number().required("Please fill your phone number").min(10,"Enter valid phone number")
})

export const passwordvalidateSchema = Yup.object({
    password: Yup.string().required("Please enter your pasword").min(4, "at least 4 charaters"),
    repassword: Yup.string().required("Please confirm password").min(4, "at least 4 charaters"),
})