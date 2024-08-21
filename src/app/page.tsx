"use client";
import { createRef, useState } from "react";
import Input from "@/components/Input";
import iconArrow from "../../public/images/icon-arrow.svg";
import infoSchema from "@/lib/formSchema";
import { ZodError } from "zod";

interface ErrorMap {
  day: string | null;
  month: string | null;
  year: string | null;
  date: string | null;
}
export default function Home() {
  const [errorMap, setErrorMap] = useState<ErrorMap>({
    day: null,
    month: null,
    year: null,
    date: null,
  });

  const handleSubmit = async (formData: FormData) => {
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

    const valSchema = infoSchema.safeParse(FormData);

    /** Error mapping is done here to avoid bugs later on */
    const errors = valSchema.error?.format();
    setErrorMap({
      day: errors?.day ? errors.day._errors[0] : null,
      month: errors?.month ? errors.month._errors[0] : null,
      year: errors?.year ? errors.year._errors[0] : null,
      date: errors?.date ? errors.date._errors[0] : null,
    });

    if (valSchema.success) {
      const data = valSchema.data;
      console.log(data);
    }
  };

  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  return (
    <main className="flex justify-center w-full font-poppins sm:min-h-screen">
      <section
        className="card mt-20 my-10 max-w-[350px] sm:min-w-[600px] lg:min-w-[750px] sm:self-center
        sm:px-[50px] sm:py-[50px] sm:mt-10
      "
      >
        <form action={handleSubmit}>
          <div className="flex gap-3">
            <Input
              id="day"
              name="day"
              placeholder="DD"
              topLabel="DAY"
              minValue={1}
              maxValue={31}
            />
            <Input
              id="month"
              name="month"
              placeholder="MM"
              topLabel="MONTH"
              minValue={1}
              maxValue={12}
            />
            <Input
              id="year"
              name="year"
              placeholder="YYYY"
              topLabel="YEAR"
              minValue={currentDate.getFullYear() - 120}
              maxValue={currentDate.getFullYear()}
            />
          </div>

          <div className="text-center sm:text-end mt-12">
            <hr />
            <button
              type="submit"
              className="p-4 rounded-full bg-primary-purple hover:bg-neutral-offBlack relative top-[-27px]
              sm:top-[-42px]"
            >
              <img
                width={22}
                height={22}
                src={iconArrow.src}
                alt="Submit icon arrow"
                className="sm:w-[50px] sm:h-[50px]"
              />
            </button>
          </div>
        </form>

        <strong
          className="text-[2.6rem]/[2.5rem] font-extrabold
          italic sm:text-7xl"
        >
          <span className="text-primary-purple">-- </span> years
        </strong>
        <strong
          className="text-[2.6rem]/[2.5rem] font-extrabold
          italic sm:text-7xl"
        >
          <span className="text-primary-purple">--</span> months
        </strong>
        <strong
          className="text-[2.6rem]/[2.5rem] font-extrabold
          italic sm:text-7xl"
        >
          <span className="text-primary-purple">--</span> days
        </strong>
      </section>
    </main>
  );
}
