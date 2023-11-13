import CreateCard from "./create-card";
import CreateCardForm from "./create-card-form";

const CreateCardContainer = () => {
  return (
    <section className="max-w-[800px] rounded-lg border-[1px] bg-white p-8 shadow-sm dark:bg-black">
      <h1 className="mb-8 text-center text-xl font-semibold">
        สร้างไอเดียการสอน
      </h1>
      <div className="flex">
        <div>
          <CreateCard />
        </div>
        <CreateCardForm />
      </div>
    </section>
  );
};
export default CreateCardContainer;
