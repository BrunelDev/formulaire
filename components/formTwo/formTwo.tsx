import { Button } from "@/components/ui/button";
import { useFormState } from "@/context/useContext";
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
            <div className="flex items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <Image
                className="relative w-[60px] h-[60px]"
                width={60}
                height={60}
                alt="Ellipse"
                src={"/images/jeremy.png"}
              />

              <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                <div className="relative self-stretch mt-[-1.00px] font-text-bold-medium font-[number:var(--text-bold-medium-font-weight)] text-picto-color text-[length:var(--text-bold-medium-font-size)] tracking-[var(--text-bold-medium-letter-spacing)] leading-[var(--text-bold-medium-line-height)] [font-style:var(--text-bold-medium-font-style)]">
                  Jérémy
                </div>

                <div className="relative self-stretch font-text-medium font-[number:var(--text-medium-font-weight)] text-text-color text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                  {/* Main Content */}
                  <div className="space-y-4">
                    <p className="text-[#021327] leading-relaxed">
                      Votre adresse se situe dans une zone{" "}
                      <span className="text-[#094d9a] font-medium">
                        {formData.addressDetails?.urbanZone || "Non disponible"}
                        {formData.addressDetails?.urbanZone &&
                          " (zone d'urbanisme)"}
                      </span>{" "}
                      du Plan Local d&apos;Urbanisme (PLU) de la commune de{" "}
                      <span className="text-[#094d9a] font-medium">
                        {formData.addressDetails?.city?.toUpperCase() ||
                          "NON DISPONIBLE"}
                      </span>
                      .
                    </p>

                    <p className="text-[#021327] leading-relaxed">
                      Nous estimons la difficulté à{" "}
                      <span className="text-[#094d9a] font-medium">
                        {formData.addressDetails?.difficultyEstimation || 3}/5
                      </span>{" "}
                      pour obtenir une autorisation d&apos;urbanisme à cet
                      endroit.
                    </p>

                    <p className="text-[#021327] leading-relaxed">
                      Nous vous conseillons de vous faire aider. Passez à
                      l&apos;étape suivante !
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Information Summary */}
            <div className="flex items-center gap-5 bg-background p-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              <div className="space-y-6 pt-6">
                <h3 className="text-lg font-semibold text-[#021327]">
                  Récapitulatif des informations
                </h3>

                <div className="space-y-4">
                  <div>
                    <span className="text-[#021327]">Localisation : </span>
                    <span className="text-[#094d9a] font-medium">
                      {formData.addressDetails?.formattedAddress ||
                        formData.address ||
                        "Adresse non sélectionnée"}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#021327]">
                      Numéro de parcelle :{" "}
                    </span>
                    <span className="text-[#094d9a] font-medium">
                      {formData.addressDetails?.parcelNumber ||
                        "Non disponible"}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#021327]">Mairie : </span>
                    <span className="text-[#094d9a] font-medium">
                      {formData.addressDetails?.city || "Non disponible"}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#021327]">
                      Zone d&apos;urbanisme de la parcelle :{" "}
                    </span>
                    <span className="text-[#094d9a] font-medium">
                      {formData.addressDetails?.urbanZone || "Non disponible"}
                    </span>
                  </div>
                </div>

                {/* Difficulty Badge */}
                <div className="flex items-center justify-between pt-4">
                  <span className="text-[#021327] font-medium">
                    Estimation de la difficulté
                  </span>
                  <div className="bg-[#094d9a] text-white px-4 py-2 rounded-full font-semibold">
                    {formData.addressDetails?.difficultyEstimation || 3}/5
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}

            <div className="flex items-center justify-between pt-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
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
          <div className="relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
            <div className="w-full h-[600px] rounded-lg overflow-hidden">
              <Mapbox
                coordinates={formData.addressDetails?.coordinates}
                zoom={16}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
