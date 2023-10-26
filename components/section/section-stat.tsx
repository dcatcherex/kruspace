import React from "react";

const stats = [
  { id: 1, name: "ทำงานมากกว่า 8 ชั่วโมง/วัน", value: "94%" },
  { id: 2, name: "มีภาระงานที่นอกเหนือจากการสอน", value: "58%" },
  { id: 3, name: "ทำงานในวันหยุด 2-3 ครั้ง/เดือน", value: "29.3%" },
  { id: 4, name: "สอนมากกว่า 20 ชั่วโมง/สัปดาห์", value: "59.7%" },
];

const SectionStat = () => {
  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-semibold leading-[1.1] sm:text-3xl md:text-6xl">
              เรารู้ว่าครูเหนื่อยแค่ไหน
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Lorem ipsum dolor sit amet consect adipisicing possimus.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default SectionStat;
