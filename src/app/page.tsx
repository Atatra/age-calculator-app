"use client";
import { useState } from "react";
import Input from "@/components/Input";
import iconArrow from "../../public/images/icon-arrow.svg";
import infoSchema from "@/lib/formSchema";
import { getDate } from "@/lib/secondsToDate";
import { ErrorMap, DateFromBirth, Odometer } from "@/lib/types";

export default function Home() {
  const [currentDate, setCurrentDate] = useState<Date>(() => new Date());

  const [errorMap, setErrorMap] = useState<ErrorMap>({
    day: null,
    month: null,
    year: null,
    date: null,
  });
  const [date, setDate] = useState<DateFromBirth>({
    years: null,
    months: null,
    days: null,
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
      const { years, months, days } = getDate(data.date);
      setDate({
        years: years,
        months: months,
        days: days,
      });
    }
  };

  return (
    <main className="flex justify-center w-full font-poppins sm:min-h-screen">
      <div
        className="card mt-20 my-10 max-w-[350px] sm:min-w-[600px] lg:min-w-[750px] sm:self-center
        sm:px-[50px] sm:py-[50px] sm:mt-10
      "
      >
        <form action={handleSubmit}>
          <div className="flex gap-3 lg:gap-[25px]">
            <Input
              id="day"
              name="day"
              placeholder="DD"
              topLabel="DAY"
              minValue={1}
              maxValue={31}
              error={errorMap.day}
            />
            <Input
              id="month"
              name="month"
              placeholder="MM"
              topLabel="MONTH"
              minValue={1}
              maxValue={12}
              error={errorMap.month}
            />
            <Input
              id="year"
              name="year"
              placeholder="YYYY"
              topLabel="YEAR"
              minValue={currentDate.getFullYear() - 120}
              maxValue={currentDate.getFullYear()}
              error={errorMap.year}
            />
          </div>
          {!errorMap.month &&
            !errorMap.day &&
            !errorMap.year &&
            errorMap.date && (
              <p className="mt-2 text-xs italic errorText">{errorMap.date}</p>
            )}

          <div className="text-center sm:text-end mt-12 mb-[-12px] sm:mb-[-42px]">
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
          <span
            className={`text-primary-purple ${
              date.years !== null && "odometerYear"
            }`}
            style={{ "--year": date.years } as Odometer}
          >
            {date.years === null && "--"}
          </span>{" "}
          year{(date.years ?? 0) > 1 ? "s" : ""}
        </strong>

        <strong
          className="text-[2.6rem]/[2.5rem] font-extrabold
          italic sm:text-7xl"
        >
          <span
            className={`text-primary-purple ${
              date.months !== null && "odometerMonth"
            }`}
            style={{ "--month": date.months } as Odometer}
          >
            {date.months === null && "--"}
          </span>{" "}
          month{(date.months ?? 0) > 1 ? "s" : ""}
        </strong>

        <strong
          className="text-[2.6rem]/[2.5rem] font-extrabold
          italic sm:text-7xl"
        >
          <span
            className={`text-primary-purple ${
              date.years !== null && "odometerDay"
            }`}
            style={{ "--day": date.days } as Odometer}
          >
            {date.days === null && "--"}
          </span>{" "}
          day{(date.days ?? 0) > 1 ? "s" : ""}
        </strong>
      </div>
    </main>
  );
}
