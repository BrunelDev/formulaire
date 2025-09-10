import { StatisticsSection } from "./sections/statisticsSection/statisticsSection";

export const FormFive = () => {
  return (
    <div
      className="bg-[#f7f7f8] flex flex-col items-center min-h-screen w-full animate-fade-in opacity-0"
      data-model-id="88:417"
    >
      <div className="bg-[#f7f7f8] w-full flex flex-col px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in opacity-0 [--animation-delay:400ms] w-full ">
          <StatisticsSection />
        </div>
      </div>
    </div>
  );
};
