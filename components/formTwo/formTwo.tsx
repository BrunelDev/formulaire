import { Button } from "@/components/ui/button";
import { useFormState } from "@/context/useContext";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Mapbox from "../mapbox";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";

export function FormTwo() {
  const { formData, updateFormData } = useFormState();

  return (
    <div className="min-h-screen bg-[#f7f7f8]">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* User Profile */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-[#b8b9c1]">
                <Image
                  src="/professional-man-avatar.png"
                  alt="Jérémy"
                  className="w-full h-full object-cover"
                  width={64}
                  height={64}
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#094d9a]">Jérémy</h2>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-4">
              <p className="text-[#021327] leading-relaxed">
                Votre adresse se situe dans une zone{" "}
                <span className="text-[#094d9a] font-medium">
                  1UL (secteur d&apos; habitat en lotissement courants)
                </span>{" "}
                du Plan Local d&apos;Urbanisme (PLU) de la commune de{" "}
                <span className="text-[#094d9a] font-medium">CESTAS</span>.
              </p>

              <p className="text-[#021327] leading-relaxed">
                Nous estimons la difficulté à{" "}
                <span className="text-[#094d9a] font-medium">3/5</span> pour
                obtenir une autorisation d&apos;urbanisme à cet endroit.
              </p>

              <p className="text-[#021327] leading-relaxed">
                Nous vous conseillons de vous faire aider. Passez à l&apos;étape
                suivante !
              </p>
            </div>

            {/* Information Summary */}
            <div className="space-y-6 pt-6">
              <h3 className="text-lg font-semibold text-[#021327]">
                Récapitulatif des informations
              </h3>

              <div className="space-y-4">
                <div>
                  <span className="text-[#021327]">Localisation : </span>
                  <span className="text-[#094d9a] font-medium">
                    69 Chemin de l&apos;Aoudougue 33610 Cestas
                  </span>
                </div>

                <div>
                  <span className="text-[#021327]">Numéro de parcelle : </span>
                  <span className="text-[#094d9a] font-medium">Num</span>
                </div>

                <div>
                  <span className="text-[#021327]">Mairie : </span>
                  <span className="text-[#021327]">-</span>
                </div>

                <div>
                  <span className="text-[#021327]">
                    Zone d&apos;urbanisme de la parcelle :{" "}
                  </span>
                  <span className="text-[#094d9a] font-medium">1UL</span>
                </div>
              </div>

              {/* Difficulty Badge */}
              <div className="flex items-center justify-between pt-4">
                <span className="text-[#021327] font-medium">
                  Estimation de la difficulté
                </span>
                <div className="bg-[#094d9a] text-white px-4 py-2 rounded-full font-semibold">
                  3/5
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}

            <div className="flex items-center justify-between pt-8">
              <Button
                onClick={() => {
                  updateFormData({
                    ...formData,
                    isStepTwoChecked: false,
                    isStepOneChecked: false,
                  });
                }}
                variant="outline"
                className="inline-flex items-center justify-center gap-3 px-4 py-3 relative flex-[0_0_auto] bg-[#f7f7f8] rounded-lg border border-solid border-[#b8b9c1] h-auto hover:bg-[#f0f0f1] transition-colors"
              >
                <div className="inline-flex flex-col h-6 items-center justify-end gap-3 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-37.00px] opacity-0 font-label-medium font-[number:var(--label-medium-font-weight)] text-subtitle-color text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] whitespace-nowrap [font-style:var(--label-medium-font-style)]">
                    Étape précédente
                  </div>

                  <div className="mt-[-1.00px] text-subtitle-color relative w-fit font-label-medium font-[number:var(--label-medium-font-weight)] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] whitespace-nowrap [font-style:var(--label-medium-font-style)]">
                    Étape précédente
                  </div>
                </div>
              </Button>
              <PrimaryButton
                className={undefined}
                handleClick={() => {
                  updateFormData({
                    ...formData,
                    isStepTwoChecked: true,
                  });
                }}
              />
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="relative">
            <div className="w-full h-[600px] rounded-lg overflow-hidden">
              <Mapbox />
              {/* Location Marker */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-[#db4200] rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
