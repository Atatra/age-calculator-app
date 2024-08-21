import infoSchema from "@/lib/formSchema";

export const handleSubmit = async (formData: FormData) => {
  const day = parseFloat(formData.get("day")?.toString() || "");
  const month = parseFloat(formData.get("month")?.toString() || "");
  const year = parseFloat(formData.get("year")?.toString() || "");

  const FormData = {
    day: day,
    month: month,
    year: year,
    date: `${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    }`,
  };

  console.log(FormData);
  const valSchema = infoSchema.safeParse(FormData);
  if (!valSchema.success) {
    const errors = valSchema.error.format();
    console.log(errors);
  } else {
    const data = valSchema.data;
    console.log(data);
  }
};
