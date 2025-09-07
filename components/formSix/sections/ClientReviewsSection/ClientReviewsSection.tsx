import { StarIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ClientReviewsSection = ()=> {
  const stars = Array(5).fill(null);

  return (
    <section className="relative w-full h-[668px] bg-[linear-gradient(180deg,rgba(2,19,39,0)_0%,rgba(2,19,39,1)_100%),url(/images/finalisation-hero.jpg)] bg-cover bg-center bg-no-repeat translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      <Card className="absolute bottom-0 left-0 right-0 bg-transparent border-0 shadow-none">
        <CardContent className="flex flex-col items-start gap-3 pt-5 pb-8 px-8">
          <div className="flex flex-col items-start gap-2 w-full">
            <blockquote className="font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-white text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)]">
              « Les échanges ont étés fluides, les plans réalisés rapidement et
              pour un coût très raisonnable. »
            </blockquote>

            <div className="flex items-center gap-1 w-full">
              <cite className="flex-1 font-text-medium font-[number:var(--text-medium-font-weight)] text-white text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)] not-italic">
                Emmanuelle , Avis client
              </cite>
            </div>
          </div>

          <div className="inline-flex items-center gap-2">
            {stars.map((_, index) => (
              <StarIcon
                key={`star-${index}`}
                className="w-[19.02px] h-[18.09px] fill-current text-yellow-400"
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
