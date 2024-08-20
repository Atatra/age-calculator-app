import Input from "@/components/Input";

export default function Home() {
  return (
    <main
      className="flex justify-center
    items-center font-poppins bg-neutral-lGrey"
    >
      <section className="card">
        <form>
          <div className="flex justify-between gap-4">
            <Input id="day" name="day" placeholder="DD" topLabel="DAY" />
            <Input id="month" name="month" placeholder="MM" topLabel="MONTH" />
            <Input id="year" name="year" placeholder="YYYY" topLabel="YEAR" />
          </div>
        </form>
      </section>
    </main>
  );
}
