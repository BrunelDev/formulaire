import { useSummarySate } from "@/context/useSummary";
import Image from "next/image";

export function SummaryView() {
  const { summary } = useSummarySate();
  const items = [
    "Vérification du P.L.U",
    "Réalisation d'un plan de niveau RDC (plan intérieur)",
    "Étude BBIO RE2020",
    "Certificat d'urbanisme",
    "Étude sismique",
    "Service livraison express",
    "Panneau d'affichage",
  ];

  return (
    <div className="bg-[#ffffff] p-4 sm:p-6 lg:p-8 rounded-lg lg:rounded-none">
      <div className="max-w-2xl">
        <h1 className="text-[#000000] text-xl sm:text-2xl font-medium mb-6 sm:mb-8">
          Récapitulatif des informations
        </h1>

        <div className="space-y-2 sm:space-y-3">
          {summary.map((item, index) => (
            <div key={index} className="flex items-center gap-3 sm:gap-4">
              <Image
                src="/icons/check.svg"
                alt="Check Icon"
                width={16}
                height={16}
                className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
              />
              <p className="text-[#000000] text-sm sm:text-base lg:text-lg leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
