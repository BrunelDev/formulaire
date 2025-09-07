import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState } from "@/context/useContext";
import Image from "next/image";

const formFields = [
  {
    id: "nom",
    label: "Nom",
    placeholder: "DOE",
    defaultValue: "DUPONT",
  },
  {
    id: "prenom",
    label: "Prénom",
    placeholder: "John",
    defaultValue: "Nicolas",
  },
  {
    id: "email",
    label: "Email",
    placeholder: "johndoe@gmail.com",
    defaultValue: "nicolasdupont@gmail.com",
  },
  {
    id: "telephone",
    label: "Téléphone",
    placeholder: "0101010101",
    defaultValue: "0606060606",
  },
];

const statistics = [
  {
    value: "6800+",
    label: "Plans réalisés",
  },
  {
    value: "900+",
    label: "Cerfas remplis",
  },
  {
    value: "96%",
    label: "Permis accepté",
  },
  {
    value: "70%",
    label: "D'économie",
  },
];

export const StatisticsSection = () => {
  const { formData, updateFormData } = useFormState();
  return (
    <section className="flex flex-col lg:flex-row items-center gap-6 lg:gap-5 w-full">
      <div className="flex flex-col w-full lg:w-[534px] items-start gap-6 lg:gap-7 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <div className="flex flex-col items-end gap-4 sm:gap-5 w-full">
          <header className="flex items-start gap-3 sm:gap-3.5 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <Avatar className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] flex-shrink-0">
              <AvatarImage
                src="https://c.animaapp.com/mf2gfnauygUKoU/img/ellipse-1.png"
                alt="Jérémy"
              />
              <AvatarFallback>J</AvatarFallback>
            </Avatar>

            <div className="flex flex-col items-start gap-2 flex-1">
              <h2 className="font-text-bold-medium font-[number:var(--text-bold-medium-font-weight)] text-picto-color text-sm sm:text-[length:var(--text-bold-medium-font-size)] tracking-[var(--text-bold-medium-letter-spacing)] leading-[var(--text-bold-medium-line-height)] [font-style:var(--text-bold-medium-font-style)]">
                Jérémy
              </h2>

              <p className="font-text-medium font-[number:var(--text-medium-font-weight)] text-text-color text-sm sm:text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                Merci de compléter vos informations afin de finaliser votre
                demande.
                <br />
                Votre devis vous sera envoyé instantanément par e-mail.
              </p>
            </div>
          </header>

          <div className="flex flex-col items-start gap-6 sm:gap-8 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <form className="flex flex-col items-start gap-4 w-full">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 w-full">
                {formFields.slice(0, 2).map((field) => (
                  <div
                    key={field.id}
                    className="flex flex-col items-start gap-2 flex-1"
                  >
                    <Label
                      htmlFor={field.id}
                      className="font-label-medium font-[number:var(--label-medium-font-weight)] text-[#042347] text-sm sm:text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)]"
                    >
                      {field.label}
                    </Label>

                    <div className="relative w-full">
                      <Input
                        id={field.id}
                        placeholder={field.placeholder}
                        className="px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-[#6d7074] font-text-medium font-[number:var(--text-medium-font-weight)] text-placeholder-color text-sm sm:text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]"
                      />
                      <div className="absolute w-[116px] top-[20px] sm:top-[23px] left-3 sm:left-4 opacity-0 font-text-medium font-[number:var(--text-medium-font-weight)] text-text-color text-sm sm:text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] whitespace-nowrap [font-style:var(--text-medium-font-style)]">
                        {field.defaultValue}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 w-full">
                {formFields.slice(2, 4).map((field) => (
                  <div
                    key={field.id}
                    className="flex flex-col items-start gap-2 flex-1"
                  >
                    <Label
                      htmlFor={field.id}
                      className="font-label-medium font-[number:var(--label-medium-font-weight)] text-[#042347] text-sm sm:text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)]"
                    >
                      {field.label}
                    </Label>

                    <div className="relative w-full">
                      <Input
                        id={field.id}
                        placeholder={field.placeholder}
                        className="px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-[#6d7074] font-text-medium font-[number:var(--text-medium-font-weight)] text-placeholder-color text-sm sm:text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]"
                      />
                      <div className="absolute w-[116px] top-[20px] sm:top-[23px] left-3 sm:left-4 opacity-0 font-text-medium font-[number:var(--text-medium-font-weight)] text-text-color text-sm sm:text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] whitespace-nowrap [font-style:var(--text-medium-font-style)]">
                        {field.defaultValue}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </form>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 w-full">
              <Button
                onClick={() => {
                  updateFormData({
                    ...formData,
                    isStepFourChecked: false,
                    isStepFiveChecked: false,
                  });
                }}
                variant="outline"
                className="inline-flex items-center justify-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 relative flex-[0_0_auto] bg-[#f7f7f8] rounded-lg border border-solid border-[#b8b9c1] h-auto hover:bg-[#f0f0f1] transition-colors w-full sm:w-auto"
              >
                <div className="inline-flex flex-col h-6 items-center justify-end gap-3 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-37.00px] opacity-0 font-label-medium font-[number:var(--label-medium-font-weight)] text-subtitle-color text-sm sm:text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] whitespace-nowrap [font-style:var(--label-medium-font-style)]">
                    Étape précédente
                  </div>

                  <div className="mt-[-1.00px] text-subtitle-color relative w-fit font-label-medium font-[number:var(--label-medium-font-weight)] text-sm sm:text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] whitespace-nowrap [font-style:var(--label-medium-font-style)]">
                    Étape précédente
                  </div>
                </div>
              </Button>

              <PrimaryButton
                className="w-full sm:w-auto"
                handleClick={() => {
                  updateFormData({
                    ...formData,
                    isStepFiveChecked: true,
                  });
                }}
              />
            </div>
          </div>
        </div>

        <Card className="w-full bg-[#042347] border-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <CardContent className="flex flex-col items-center justify-center gap-5 sm:gap-7 p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4 sm:gap-8 w-full">
              <div className="flex flex-col items-center sm:items-start gap-2 sm:gap-3 flex-1 text-center sm:text-left">
                <h3 className="font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-white text-lg sm:text-xl lg:text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)]">
                  Faites comme des milliers de français
                </h3>

                <p className="font-text-small font-[number:var(--text-small-font-weight)] text-white text-sm sm:text-[length:var(--text-small-font-size)] tracking-[var(--text-small-letter-spacing)] leading-[var(--text-small-line-height)] [font-style:var(--text-small-font-style)]">
                  Optez pour notre service rapide et facile, et faites réaliser
                  vos plans sur mesure par des professionnels compétents
                </p>
              </div>

              <Image
                width={120}
                height={100}
                className="w-[100px] h-[80px] sm:w-[120px] sm:h-[100px] object-cover flex-shrink-0"
                alt="Urban building hero"
                src="/images/Urban-building.png"
              />
            </div>

            <div className="grid grid-cols-2 sm:flex sm:h-16 items-center justify-center sm:justify-between gap-4 sm:gap-0 w-full">
              {statistics.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col w-full sm:w-[98px] items-center sm:items-start gap-1"
                >
                  <div className="w-full font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-white text-2xl sm:text-3xl lg:text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                    {stat.value}
                  </div>

                  <div className="w-full font-text-medium font-[number:var(--text-medium-font-weight)] text-white text-xs sm:text-sm lg:text-[length:var(--text-medium-font-size)] text-center tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Image
        width={534}
        height={640}
        className="w-full max-w-[400px] lg:w-[534px] h-auto lg:h-[640px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] object-contain"
        alt="Frame"
        src="https://c.animaapp.com/mf2gfnauygUKoU/img/frame-51.svg"
      />
    </section>
  );
};
