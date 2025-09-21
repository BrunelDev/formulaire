import { StatisticsSection } from "./sections/statisticsSection/statisticsSection";

export const FormFive = () => {
  return (
    <div className="bg-[#f7f7f8] flex flex-col items-center min-h-screen w-full ">
      <div className="bg-[#f7f7f8] w-full flex flex-col sm:px-6 lg:px-8">
        <div className=" [--animation-delay:400ms] w-full  relative ">
          <StatisticsSection />
        </div>
      </div>
    </div>
  );
};
