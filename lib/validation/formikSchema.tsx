import { services } from "@/public/documents/services";
import Email from "next-auth/providers/email";
import * as Yup from "yup";

export const accountTypeValidationSchema = Yup.object({
  type: Yup.string().required("Please choose account type"),
});
export const locationValidationSchema = Yup.object({
  state: Yup.string().required("Please choose your state"),
  city: Yup.string().required("Please choose your city"),
  country: Yup.string().required("Please choose your country"),
  street: Yup.string().required("Please choose your street"),
  postCode: Yup.string().required("Please choose your postal code"),
});
export const PersonalDetailsValidationSchema = Yup.object({
  fullName: Yup.string().required("Please fill your Name"),
  email: Yup.string()
    .required("Please fill your email")
    .email("Enter valid email"),
  phoneNumber: Yup.number()
    .required("Please fill your phone number")
    .min(10, "Enter valid phone number"),
  password: Yup.string()
    .required("Please fill your passwordd")
    .min(4, "at least 4 charaters"),
});

export const passwordvalidateSchema = Yup.object({
  password: Yup.string()
    .required("Please enter your pasword")
    .min(4, "at least 4 charaters"),
  repassword: Yup.string()
    .required("Please confirm password")
    .min(4, "at least 4 charaters"),
});

export const companyProfileValidationSchema = Yup.object({
  company_name: Yup.string().required("Please fill your company name"),
  company_email: Yup.string()
    .required("Please fill your company email")
    .email("Please enter valid email"),
  company_office: Yup.string().required("Please fill your company office"),
  company_telephone: Yup.string()
    .min(10)
    .max(15)
    .required("Please fill your company phone number"),
  business_field: Yup.string().required("Please select business field"),
  dob: Yup.date().required("Date of birth is required"),
  ssn: Yup.string().required("ssn is required"),
  location: Yup.string().required("location is required"),
  gender: Yup.string().required("Gender is required"),
  routing_number: Yup.string().required("Routing number is required"),
  address: Yup.object().shape({
    longitude: Yup.number().required("Please fill your longitude"),
    latitude: Yup.number().required("Please fill your latitude"),
  }),
});

export const CredentialsValidationSchema = Yup.object({
  email: Yup.string().required("Email is required").email("Incorrect email"),
  password: Yup.string().required("Password is required"),
});

export const ServicesValidationSchema = Yup.object({
  services: Yup.array()
    .required("Pick at least one service")
    .min(1, "Pick at least one service"),
});

export const CompanyDocumentValidationSchema = Yup.object({
  companyDocument: Yup.string().required("Please upload company document"),
});
export const CompanyBioMediaValidationSchema = Yup.object({
  companyBio: Yup.string()
    .required("Please enter company bio")
    .min(30, "Write at least 30 characters"),
  companyLogo: Yup.string().required("Please upload company media/logo"),
});

export const CompleteServiceValidation = Yup.object({
  description: Yup.string()
    .required("Please enter description")
    .min(30, "Add at least 30 words"),
  estimatedPrice: Yup.number().required("Please enter estimates price"),
  media: Yup.string().required("Plesae upload media"),
});

export const HouseRegisterSchema = Yup.object().shape({
  name: Yup.string()
    .max(100, "Property name must be 100 characters or less")
    .required("Propert name is required"),
  type: Yup.string().required("Property type is required"),
  numberOfRooms: Yup.number()
    .positive("Number of rooms must be a positive number")
    .integer("Number of rooms must be a whole number")
    .required("Number of rooms is required"),
  size: Yup.number()
    .positive("Square footage must be a positive number")
    .required("Square footage is required"),
  numberOfWindows: Yup.number()
    .positive("Number of windows must be a positive number")
    .integer("Number of windows must be a whole number")
    .required("Number of windows is required"),
  address: Yup.object().shape({
    street: Yup.string().required("Street address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    longitude: Yup.number().required("longitude is required"),
    latitude: Yup.number().required("latitude is required"),
  }),
});

export const jobFormikValiationSchema = Yup.object().shape({
  start_time: Yup.string().required("Start Time is Required"),
  shift_date: Yup.date().required("shift date is Required"),
  end_time: Yup.string().required("End Time is Required"),
  description: Yup.string().required("description is required").min(30, "minimun character is equal 30"),
})

export const enableFreelancerSchema = Yup.object().shape({
  dob: Yup.date().required("Date of birth is required"),
  location: Yup.string().required("Location is required"),
  routing_number: Yup.string().required("Routing number is required"),
  gender: Yup.string().required("Gender is required"),
  address: Yup.object().shape({
    longitude: Yup.number().required("Please fill your longitude"),
    latitude: Yup.number().required("Please fill your latitude"),
  }),

})
