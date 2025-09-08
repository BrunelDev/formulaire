import { useEffect } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { ClientFeedbackSection } from "./sections/ClientFeedbackSection/ClientFeedbackSection";
import { InformationSummarySection } from "./sections/InformationSummarySection/InformationSummarySection";
import { SummaryView } from "./summaryView";

export const FormFour = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);
  return (
    <div className="w-full animate-fade-in opacity-0 [--animation-delay:0ms]">
      <div className="bg-[#f7f7f8]">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          <div className="w-full lg:w-[28%] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <ClientFeedbackSection />
          </div>
          <ScrollArea
            className="w-full lg:w-[42%] h-[60vh] lg:h-[calc(100vh-140px)] px-2 sm:px-4 lg:px-5 sm:h-full"
            scrollHideDelay={300}
          >
            <div className="w-full translate-y-[-1rem] z-50 animate-fade-in opacity-0 [--animation-delay:800ms]">
              <InformationSummarySection />
            </div>
          </ScrollArea>
          <div className="w-full lg:w-[20%] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <SummaryView />
          </div>
        </div>
      </div>
    </div>
  );
};
