import { ClientReviewsSection } from "./sections/ClientReviewsSection/ClientReviewsSection";
import { ContentWrapperSection } from "./sections/ContentWrapperSection/ContentWrapperSection";

export const FormSix = () => {
  return (
    <main
      className="bg-[#f7f7f8] w-full flex flex-col"
      data-model-id="224:1183"
    >
      <div className="bg-[#f7f7f8] w-full flex flex-col relative">
        <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-0">
          <aside className="w-full lg:w-[35%] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <ClientReviewsSection />
          </aside>

          <section className="w-full lg:w-[76%] lg:ml-[1%] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <ContentWrapperSection />
          </section>
        </div>
      </div>
    </main>
  );
};
