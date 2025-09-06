import { useSummarySate } from "@/context/useSummary";
import Image from "next/image";

export function SummaryView() {
  const { summary,  } = useSummarySate();
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
    <div className="bg-[#ffffff] p-8">
      <div className="max-w-2xl">
        <h1 className="text-[#000000] text-2xl font-medium mb-8">
          Récapitulatif des informations
        </h1>

        <div className="space-y-3">
          {summary.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <Image
                src="/icons/check.svg"
                alt="Check Icon"
                width={20}
                height={20}
              />
              <p className="text-[#000000] text-lg leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
