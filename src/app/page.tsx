import Input from "@/components/Input";
import iconArrow from "../../public/images/icon-arrow.svg";

export default function Home() {
  return (
    <main className="w-full font-poppins flex justify-center">
      <section className="card max-w-[350px] sm:max-w-[500px]">
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

        <strong className="text-5xl font-extrabold">
          <span className="text-primary-purple">38</span> years
        </strong>
        <strong className="text-5xl font-extrabold">
          <span className="text-primary-purple">3</span> months
        </strong>
        <strong className="text-5xl font-extrabold">
          <span className="text-primary-purple">26</span> days
        </strong>
      </section>
    </main>
  );
}
