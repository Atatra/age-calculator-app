import { defaultErrorMap, z } from "zod";
import errorMap from "zod/locales/en.js";

const infoSchema = z.object({
  day: z
    .number({ message: "Day is required" })
    .positive({ message: "Must be a valid day" })
    .max(31, { message: "Must be a valid day" }),

  month: z
    .number({ message: "Month is required" })
    .positive({ message: "Must be a valid month" })
    .max(12, { message: "Must be a valid month" }),

  year: z
    .number({ message: "Year is required" })
    .positive({ message: "Must be a valid year" })
    .max(new Date().getFullYear() + 1, { message: "Must be in the pastr" }),

  date: z.string().date("Must be a valid date"),
});

export default infoSchema;
