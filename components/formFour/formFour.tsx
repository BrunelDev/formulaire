import { ScrollArea } from "../ui/scroll-area";
import { ClientFeedbackSection } from "./sections/ClientFeedbackSection/ClientFeedbackSection";
import { InformationSummarySection } from "./sections/InformationSummarySection/InformationSummarySection";
import { SummaryView } from "./summaryView";

export const FormFour = () => {
  return (
    <div
      className="bg*-[#f7f7f8] w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] bg-red-500"
    >
      <div className="bg-[#f7f7f8]">
        <div className="flex gap-6">
          <div className="w-[28%] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <ClientFeedbackSection />
          </div>
          <ScrollArea className="w-[42%] h-[calc(100vh-140px)] px-5" scrollHideDelay={300}>
            <div className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
              <InformationSummarySection />
            </div>
          </ScrollArea>
          <div className="w-[20%] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <SummaryView />
          </div>
        </div>
      </div>
    </div>
  );
};
