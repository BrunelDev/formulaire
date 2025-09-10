import { Option, useFormState } from "@/context/useContext";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import Mapbox from "../mapbox";

export const FormThree = () => {
  const { formData, updateFormData } = useFormState();

  const projectOptions = [
    {
      id: Option.PERMIS_CONSTRUIRE,
      title: "Permis de construire",
      image: "https://c.animaapp.com/mf2fxk6fBvYbpA/img/frame-36.png",
    },
    {
      id: Option.DECLARATION_PREALABLE,
      title: "Déclaration préalable de travaux",
      image: "https://c.animaapp.com/mf2fxk6fBvYbpA/img/frame-36-1.png",
    },
    {
      id: Option.DOSSIER_ERP,
      title: "Dossier E.R.P",
      image: "https://c.animaapp.com/mf2fxk6fBvYbpA/img/frame-36-2.png",
    },
    {
      id: Option.CERTIFICAT_URBANISME,
      title: "Certificat d'urbanisme",
      image: "https://c.animaapp.com/mf2fxk6fBvYbpA/img/frame-36-3.png",
    },
    {
      id: Option.PLAN_UNITE,
      title: "Réalisation plan à l'unité",
      image: "https://c.animaapp.com/mf2fxk6fBvYbpA/img/frame-36-4.png",
    },
    {
      id: Option.ETUDE_RE2020,
      title: "Étude RE2020",
      image: "https://c.animaapp.com/mf2fxk6fBvYbpA/img/frame-36-5.png",
    },
    {
      id: Option.ETUDE_SISMIQUE,
      title: "Étude sismique",
      image: "https://c.animaapp.com/mf2fxk6fBvYbpA/img/frame-36-6.png",
    },
    {
      id: Option.AIDE_CONCEPTION,
      title: "Aide à la conception",
      image: "https://c.animaapp.com/mf2fxk6fBvYbpA/img/frame-36-7.png",
    },
  ];

  return (
    <div
      className="bg-[#f7f7f8] w-full flex justify-center"
      data-model-id="55:360"
    >
      <div className="bg-[#f7f7f8] w-full relative">
        <main className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] flex flex-col lg:flex-row w-full gap-6 lg:gap-8  px-4 sm:px-8 lg:px-24">
          <div className="flex flex-col lg:px-4 items-start gap-6 lg:gap-8 flex-1">
            <div className="flex items-start gap-3.5 w-full">
              <Avatar className="w-[60px] h-[60px]">
                <AvatarImage src="https://c.animaapp.com/mf2fxk6fBvYbpA/img/ellipse-1.png" />
                <AvatarFallback>J</AvatarFallback>
              </Avatar>

              <div className="flex flex-col items-start gap-2 flex-1">
                <h2 className="font-text-bold-medium font-[number:var(--text-bold-medium-font-weight)] text-picto-color text-[length:var(--text-bold-medium-font-size)] tracking-[var(--text-bold-medium-letter-spacing)] leading-[var(--text-bold-medium-line-height)] [font-style:var(--text-bold-medium-font-style)]">
                  Jérémy
                </h2>

                <p className="font-text-medium font-[number:var(--text-medium-font-weight)] text-text-color text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                  Adresse localisée, et le secteur est validé !<br />
                  Dites-nous maintenant ce que vous souhaitez réaliser parmi les
                  options ci-dessous pour obtenir votre autorisation
                  d&apos;urbanisme, puis passez à l&apos;étape suivante.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 w-full">
              {projectOptions.map((option, index) => (
                <Card
                  key={option.id}
                  className={`translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:${
                    600 + index * 100
                  }ms] w-[125px] cursor-pointer transition-all hover:scale-105 ${
                    formData.option === option.id
                      ? "bg-[#042347] text-white"
                      : "bg-app-background hover:bg-gray-100"
                  }`}
                  onClick={() => {
                    updateFormData({
                      ...formData,
                      option: option.id,
                    });
                  }}
                >
                  <CardContent className="flex flex-col items-center gap-2 p-1 pt-1 pb-2">
                    <div
                      className="w-full h-[117px] rounded bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${option.image})` }}
                    />
                    <div className="flex h-[52px] items-center justify-center w-full">
                      <div
                        className={`text-center font-label-smaller font-[number:var(--label-smaller-font-weight)] text-[length:var(--label-smaller-font-size)] tracking-[var(--label-smaller-letter-spacing)] leading-[var(--label-smaller-line-height)] [font-style:var(--label-smaller-font-style)] px-2`}
                      >
                        {option.title}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms] flex items-center justify-between w-full">
              <Button
                onClick={() => {
                  updateFormData({
                    ...formData,
                    isStepTwoChecked: false,
                    isStepThreeChecked: false,
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
                disabled={!formData.option}
                handleClick={() => {
                  if (
                    formData.option === Option.ETUDE_RE2020 ||
                    formData.option === Option.AIDE_CONCEPTION ||
                    formData.option === Option.ETUDE_SISMIQUE
                  ) {
                    updateFormData({
                      ...formData,
                      isStepFourChecked: true,
                      isStepThreeChecked: true,
                    });
                  } else {
                    updateFormData({
                      ...formData,
                      isStepThreeChecked: true,
                    });
                  }
                }}
              />
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="animate-fade-in opacity-0 [--animation-delay:600ms] lg:w-[50%] w-full h-[640px] bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden hidden lg:block">
            <Mapbox
              coordinates={formData.addressDetails?.coordinates}
              zoom={14}
            />
          </div>
          <div className="lg:hidden relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
            <div className="w-full h-[600px] rounded-lg overflow-hidden">
              <Mapbox
                coordinates={formData.addressDetails?.coordinates}
                zoom={16}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
