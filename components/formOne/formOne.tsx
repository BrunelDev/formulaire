import { useFormState } from "@/context/useContext";
import Image from "next/image";
import { useState } from "react";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { Input } from "../ui/input";

export const FormOne = () => {
  const { formData, updateFormData } = useFormState();
  const [address, setAddress] = useState(formData.address || "");
  return (
    <div className="bg-[#f7f7f8] grid justify-items-center align-items:start] ">
      <div className="bg-[#f7f7f8] relative flex flex-col justify-center px-40 gap-y-10">
        <div className="flex flex-col items-center justify-center gap-8 ">
          <div className="flex items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
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

              <p className="relative self-stretch font-text-medium font-[number:var(--text-medium-font-weight)] text-text-color text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                Bienvenue chez Mes Plans de Permis !<br />
                Vous pensez a un permis de construire ou à une déclaration
                préalable ?<br />
                Avant de sortir les crayons et les mètres, regardons d&#39;abord
                ce que le règlement d&#39;urbanisme autorise sur votre terrain
                (promis, on traduit le jargon en français courant 😉).
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-end justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <Input
                  placeholder="16 rue latapie 33650 La Brède"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <PrimaryButton
                  className={undefined}
                  handleClick={() => {
                    updateFormData({
                      ...formData,
                      address: "16 rue latapie 33650 La Brède",
                      isStepOneChecked: true,
                    });
                  }}
                />
              </div>

              <p className="relative self-stretch font-text-smaller font-[number:var(--text-smaller-font-weight)] text-subtitle-color text-[length:var(--text-smaller-font-size)] tracking-[var(--text-smaller-letter-spacing)] leading-[var(--text-smaller-line-height)] [font-style:var(--text-smaller-font-style)]">
                Nous ne revendons jamais vos informations et les sécurisons.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5 bg-background">
          <div className="flex flex-col w-[442px] items-start gap-5 pl-5 pr-0 py-0 relative">
            <div className="relative self-stretch mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-black text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
              Récapitulatif des informations
            </div>

            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-text-medium font-[number:var(--text-medium-font-weight)] text-[#042347] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] whitespace-nowrap [font-style:var(--text-medium-font-style)]">
                  Localisation :
                </div>

                <p className="relative w-fit mt-[-1.00px] font-text-bold-medium font-[number:var(--text-bold-medium-font-weight)] text-[#094d9a] text-[length:var(--text-bold-medium-font-size)] tracking-[var(--text-bold-medium-letter-spacing)] leading-[var(--text-bold-medium-line-height)] whitespace-nowrap [font-style:var(--text-bold-medium-font-style)]">
                  16 rue latapie 33650 La Brède
                </p>
              </div>

              <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-text-medium font-[number:var(--text-medium-font-weight)] text-[#042347] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] whitespace-nowrap [font-style:var(--text-medium-font-style)]">
                  Numéro de parcelle :
                </div>

                <div className="relative w-fit mt-[-1.00px] font-text-bold-medium font-[number:var(--text-bold-medium-font-weight)] text-[#094d9a] text-[length:var(--text-bold-medium-font-size)] tracking-[var(--text-bold-medium-letter-spacing)] leading-[var(--text-bold-medium-line-height)] whitespace-nowrap [font-style:var(--text-bold-medium-font-style)]">
                  AK 0084
                </div>
              </div>

              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-text-medium font-[number:var(--text-medium-font-weight)] text-[#042347] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] whitespace-nowrap [font-style:var(--text-medium-font-style)]">
                  Mairie :
                </div>

                <div className="relative w-fit mt-[-1.00px] font-text-bold-medium font-[number:var(--text-bold-medium-font-weight)] text-[#094d9a] text-[length:var(--text-bold-medium-font-size)] tracking-[var(--text-bold-medium-letter-spacing)] leading-[var(--text-bold-medium-line-height)] whitespace-nowrap [font-style:var(--text-bold-medium-font-style)]">
                  La Brède
                </div>
              </div>

              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] font-text-medium font-[number:var(--text-medium-font-weight)] text-[#042347] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] whitespace-nowrap [font-style:var(--text-medium-font-style)]">
                  Zone d&#39;urbanisme de la parcelle :
                </p>

                <div className="relative w-fit mt-[-1.00px] font-text-bold-medium font-[number:var(--text-bold-medium-font-weight)] text-[#094d9a] text-[length:var(--text-bold-medium-font-size)] tracking-[var(--text-bold-medium-letter-spacing)] leading-[var(--text-bold-medium-line-height)] whitespace-nowrap [font-style:var(--text-bold-medium-font-style)]">
                  UA
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-black text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
                Estimation de la difficulté
              </div>

              <div className="inline-flex px-5 py-3 flex-[0_0_auto] bg-[#094d9a] flex-col items-center justify-center gap-2.5 relative rounded-[1000px]">
                <div className="relative w-fit mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-white text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
                  3/5
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-[442px] h-[334px] bg-[url(/frame-23.png)] bg-cover bg-[50%_50%]" />
        </div>
      </div>
    </div>
  );
};
