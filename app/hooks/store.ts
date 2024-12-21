import { create } from "zustand";

import { CompanyType } from "@/lib/types/types.type";
import { ChangeEvent } from "react";

type ExtendedCompanyType = CompanyType & {
  company_bio: string;
  media?: string;
  file?: string;
  setCompanyName: (e: ChangeEvent<HTMLInputElement>) => void;
  setCompanyEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  setCompanyPhone: (e: ChangeEvent<HTMLInputElement>) => void;
  setCompanyOffice: (e: ChangeEvent<HTMLInputElement>) => void;
  setCompanyField: (e: ChangeEvent<HTMLSelectElement>) => void;
  setAddress: ({ lt, ln }: { lt: number; ln: number }) => void;
};

// export const useCompanyStore = create<ExtendedCompanyType>((set) => ({
//   company_name: "",
//   company_office: "",
//   company_email: "",
//   business_field: "",
//   company_telephone: "",

//   latitude: 0,
//   longitude: 0,

//   company_bio: "",
//   media: "",
//   file: "",
//   setCompanyField: (e) => {
//     set((state) => ({
//       company_office: e.target.value,
//     }));
//   },
//   setCompanyEmail: (e) => {
//     set((state) => ({
//       company_email: e.target.value,
//     }));
//   },
//   setCompanyPhone: (e) => {
//     set((state) => ({
//       company_telephone: e.target.value,
//     }));
//   },
//   setCompanyName(e) {
//     set((state) => ({
//       company_name: e.target.value,
//     }));
//   },
//   setCompanyOffice(e) {
//     set((state) => ({
//       company_office: e.target.value,
//     }));
//   },
//   setAddress(address) {
//     set((state) => ({
//       latitude: address.lt,
//       longitude: address.ln,
//     }));
//   },
// }));
