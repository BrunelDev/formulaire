import { StarIcon } from "lucide-react";

export const ClientFeedbackSection = () => {
  const stars = Array(5).fill(null);

  return (
    <section className="relative w-full h-[300px] sm:h-[400px] lg:h-[calc(100vh-122px)] bg-[linear-gradient(180deg,rgba(2,19,39,0)_0%,rgba(2,19,39,1)_100%),url(/images/form4-hero.jpg)] bg-cover bg-center bg-no-repeat translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] rounded-lg lg:rounded-none">
      <div className="flex flex-col w-full max-w-[353px] items-start gap-2 sm:gap-3 pt-4 sm:pt-5 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 absolute bottom-0 left-0">
        <div className="flex flex-col items-start gap-2 w-full">
          <blockquote className="font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-white text-lg sm:text-xl lg:text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)]">
            «La communication a été aisée et la conception des plans très
            rapide. »
          </blockquote>

          <div className="flex items-center gap-1 w-full">
            <cite className="flex-1 font-text-medium font-[number:var(--text-medium-font-weight)] text-white text-sm sm:text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
              Emilien, Avis client
            </cite>
          </div>
        </div>

        <div className="inline-flex items-center gap-1 sm:gap-2">
          {stars.map((_, index) => (
            <StarIcon
              key={`star-${index}`}
              className="w-4 h-4 sm:w-[19.02px] sm:h-[18.09px] fill-white text-white"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
