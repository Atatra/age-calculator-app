import Input from "@/components/Input";
import iconArrow from "../../public/images/icon-arrow.svg";

export default function Home() {
  return (
    <main className="flex justify-center w-full font-poppins sm:min-h-screen">
      <section
        className="card mt-20 my-10 max-w-[350px] sm:min-w-[600px] lg:min-w-[750px] sm:self-center
        sm:px-[50px] sm:py-[50px] sm:mt-10
      "
      >
        <form>
          <div className="flex gap-3">
            <Input id="day" name="day" placeholder="DD" topLabel="DAY" />
            <Input id="month" name="month" placeholder="MM" topLabel="MONTH" />
            <Input id="year" name="year" placeholder="YYYY" topLabel="YEAR" />
          </div>

          <div className="text-center sm:text-end mt-12">
            <hr />
            <button
              type="submit"
              className="p-4 rounded-full bg-primary-purple relative top-[-27px]
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
