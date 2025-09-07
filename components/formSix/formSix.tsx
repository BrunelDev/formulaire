import { ClientReviewsSection } from "./sections/ClientReviewsSection/ClientReviewsSection";
import { ContentWrapperSection } from "./sections/ContentWrapperSection/ContentWrapperSection";

export const FormSix = () => {
  return (
    <main
      className="bg-[#f7f7f8] w-full flex flex-col"
      data-model-id="224:1183"
    >
      <div className="bg-[#f7f7f8] w-full max-w-[1280px] mx-auto flex flex-col relative px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-0">
          <aside className="w-full lg:w-[35%] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <ClientReviewsSection />
          </aside>

          <section className="w-full lg:w-[56%] lg:ml-[1%] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <ContentWrapperSection />
          </section>
        </div>
      </div>
    </main>
  );
};
