import Input from "@/components/Input";
import iconArrow from "../../public/images/icon-arrow.svg";

export default function Home() {
  return (
    <main className="flex justify-center w-full font-poppins sm:min-h-screen">
      <section
        className="card mt-20 my-10 max-w-[350px] sm:min-w-[500px] sm:self-center
        xl:min-w-[800px]
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
              className="p-3 rounded-full bg-primary-purple relative top-[-24px]"
            >
              <img
                width={26}
                height={26}
                src={iconArrow.src}
                alt="Submit icon arrow"
              />
            </button>
          </div>
        </form>

        <strong className="text-[2.6rem]/[2.5rem] font-extrabold italic">
          <span className="text-primary-purple">--</span> years
        </strong>
        <strong className="text-[2.6rem]/[2.5rem] font-extrabold italic">
          <span className="text-primary-purple">--</span> months
        </strong>
        <strong className="text-[2.6rem]/[2.5rem] font-extrabold italic">
          <span className="text-primary-purple">--</span> days
        </strong>
      </section>
    </main>
  );
}
