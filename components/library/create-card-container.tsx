import CreateCard from "./create-card";
import CreateCardForm from "./create-card-form";

const CreateCardContainer = () => {
  return (
    <section className="max-w-[800px] rounded-lg border-[1px] p-8 shadow-sm bg-white dark:bg-black">
      <h1 className="text-center text-xl font-semibold mb-8">สร้างไอเดียการสอน</h1>
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
