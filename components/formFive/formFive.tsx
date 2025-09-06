import { StatisticsSection } from "./sections/statisticsSection/statisticsSection";

export const FormFive = () => {
  return (
    <div
      className="bg-[#f7f7f8] flex flex-col items-center min-h-screen w-full translate-y-[-1rem] animate-fade-in opacity-0"
      data-model-id="88:417"
    >
      <div className="bg-[#f7f7f8] w-full max-w-[1280px] flex flex-col">
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <StatisticsSection />
        </div>
      </div>
    </div>
  );
};
