import BackButton from "@/components/PrimaryButton/BackButton";
import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Option, useFormState } from "@/context/useContext";
import {
  DevisRecord,
  generateDpDevis,
  generateErpDevis,
  generateUniteDevis,
  generateUrbanismFormDevis,
  genreratePermisDevis,
} from "@/lib/calculator";
import generateDevisPdf from "@/lib/generateDevisPdf";
import Image from "next/image";
import { useRef, useState } from "react";

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
    label: "Permis acceptés",
  },
  {
    value: "70%",
    label: "D'économie",
  },
];

export const StatisticsSection = () => {
  const { formData, updateFormData } = useFormState();
  const [formErrors, setFormErrors] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  const formFields = [
    {
      id: "nom",
      label: "Nom",
      placeholder: "Nom",
      defaultValue: "DUPONT",
      value: nom,
      onChange: setNom,
      required: true,
    },
    {
      id: "prenom",
      label: "Prénom",
      placeholder: "Prénom",
      defaultValue: "Nicolas",
      value: prenom,
      onChange: setPrenom,
      required: true,
    },
    {
      id: "email",
      label: "Email",
      placeholder: "Email",
      defaultValue: "nicolasdupont@gmail.com",
      value: email,
      onChange: setEmail,
      required: true,
    },
    {
      id: "telephone",
      label: "Téléphone",
      placeholder: "Téléphone",
      defaultValue: "0606060606",
      value: telephone,
      onChange: setTelephone,
      required: true,
    },
  ];

  const validateForm = () => {
    if (formRef.current) {
      return formRef.current.checkValidity();
    }
    return false;
  };
  /*const urlsToFetch = [
    "https://hook.eu2.make.com/rxxc7eszpz77obxo33ev885mess8x5rm",
    "https://hook.eu2.make.com/vaf1vj89y84tzjjmx2w3e9itqus80a8u",
    "https://hook.eu2.make.com/u5b5rjya9rc3ef1msqeityqz5g7q0dt8",
    "https://hook.eu2.make.com/cd9j3od253fiskl917hwlehvokvmm31m",
    "https://hook.eu2.make.com/31p9di5lwheyirk0we8olt3r4y19slv2",
    "https://hook.eu2.make.com/3uu3o2jiq1x4yrfj9l9do60mcx8k2wrm",
    "https://hook.eu2.make.com/8m3qylvopepjwkvcjarw7i6cipfljxhr",
  ];*/
  const urlToSendPdf =
    "https://hook.eu2.make.com/w5ps2bie8tnxj252b5grhyufigalaohw";
  const urlToSendData =
    "https://hook.eu2.make.com/h8xmhq9ryu6sdfa0jp0uv8e6qx0kk2vr";

  const handleGeneratePDF = async (client: {
    nom: string;
    prenom: string;
    email: string;
    tel: string;
  }) => {
    setLoading(true);

    try {
      // Vos données de devis
      const devisData = {
        REFERENCE_DEVIS: "DEVIS-2024-001",
        NUM_DEVIS: "001",
        DATE_DEVIS: new Date().toLocaleDateString("fr-FR"),
        CLIENT_NAME: "Jean Dupont",
        CLIENT_TEL: "06 12 34 56 78",
        CLIENT_MAIL: "jean.dupont@email.com",

        // Prestations
        permis_Construire: "Permis de Construire",
        PU_Permis: "1200.00",
        TVA_Permis: "20%",
        HT_Permis: "1200.00",
        permis_Construire_class: "", // Laisser vide pour afficher

        // Masquer les lignes non utilisées
        plan_3D_class: "hidden-row",

        // Totaux
        total_HT: "1200.00",
        total_TVA: "240.00",
        total_TTC: "1440.00",
      };

      // Générer le HTML complet

      let devis: DevisRecord[] = [];
      switch (formData.option) {
        case Option.DECLARATION_PREALABLE:
          devis = generateDpDevis(formData);
          break;
        case Option.PLAN_UNITE:
          devis = generateUniteDevis(formData);
          break;
        case Option.DOSSIER_ERP:
          devis = generateErpDevis(formData);
          break;
        case Option.CERTIFICAT_URBANISME:
          devis = generateUrbanismFormDevis(formData);
          break;
        case Option.PERMIS_CONSTRUIRE:
          devis = genreratePermisDevis(formData);
          break;
        default:
          devis = genreratePermisDevis(formData);
      }
      const htmlContent = generateDevisPdf(devis, client);

      // Appeler l'API
      const response = await fetch("/api/generate-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          htmlContent,
          filename: `devis-${devisData.NUM_DEVIS}.pdf`,
        }),
      });

      console.log("response", response)
      // Télécharger le PDF
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      await fetch(urlToSendPdf, {
        method: "POST",
        headers: {
          "Content-Type": "application/pdf",
        },
        body: blob,
      });
      await fetch(urlToSendData, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      a.download = `devis-${devisData.NUM_DEVIS}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur lors de la génération du PDF");
    } finally {
      setLoading(false);
    }
  };

  const handleNextStep = async () => {
    const isValid = validateForm();
    if (isValid) {
      const nom = document.getElementById("nom") as HTMLInputElement;
      const prenom = document.getElementById("prenom") as HTMLInputElement;
      const email = document.getElementById("email") as HTMLInputElement;
      const telephone = document.getElementById(
        "telephone"
      ) as HTMLInputElement;

      const payload = {
        ...formData,
        clientLastName: nom?.value || formData.clientLastName,
        clientFirstName: prenom?.value || formData.clientFirstName,
        clientEmail: email?.value || formData.clientEmail,
        clientPhone: telephone?.value || formData.clientPhone,
      };

      try {
        /*for (const url of urlsToFetch) {
          const temp_response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });
          
          if (!temp_response.ok) {
            console.error(
              "Échec de l'envoi au webhook",
              await temp_response.text()
            );
          }
        }*/
        await handleGeneratePDF({
          nom: nom.value,
          prenom: prenom.value,
          email: email.value,
          tel: telephone.value,
        });

        updateFormData({ ...payload, isStepFiveChecked: true });
      } catch (error) {
        console.error("Erreur réseau lors de l'envoi au webhook", error);
      }
    } else {
      setFormErrors(true);
      const form = formRef.current;
      if (form) {
        const inputs = form.querySelectorAll("input");
        inputs.forEach((input: HTMLInputElement) => {
          if (!input.validity.valid) {
            input.reportValidity();
          }
        });
      }
    }
  };

  //Calcul et génération de devis

  const [loading, setLoading] = useState(false);

  return (
    <section className="w-full sm:pb-8 pb-[150px]">
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-5 w-full justify-center px-4">
        <div className="flex flex-col w-full lg:w-[40%] items-start gap-6 lg:gap-7 animate-fade-in opacity-0 [--animation-delay:0ms]">
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
              <form
                ref={formRef}
                className="flex flex-col items-start gap-4 w-full"
                noValidate
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 w-full">
                  {formFields.slice(0, 2).map((field) => (
                    <div
                      key={field.id}
                      className="flex flex-col items-stretch gap-2 flex-1 w-full"
                    >
                      <Label
                        htmlFor={field.id}
                        className="font-label-medium font-[number:var(--label-medium-font-weight)] text-[#042347] text-sm sm:text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)] flex items-center"
                      >
                        {field.label}
                        {field.required && (
                          <span className="text-red-500 ml-1">*</span>
                        )}
                      </Label>

                      <div className="relative w-full">
                        <Input
                          id={field.id}
                          placeholder={field.placeholder}
                          value={field.value}
                          onChange={(e) => field.onChange(e.target.value)}
                          className="px-3 w-full sm:px-4 py-2.5 sm:py-3 rounded-lg border border-[#6d7074]"
                          required={field.required}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 w-full">
                  {formFields.slice(2, 4).map((field) => (
                    <div
                      key={field.id}
                      className="flex flex-col items-stretch gap-2 flex-1 w-full"
                    >
                      <Label
                        htmlFor={field.id}
                        className="font-label-medium font-[number:var(--label-medium-font-weight)] text-[#042347] text-sm sm:text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)] flex items-center"
                      >
                        {field.label}
                        {field.required && (
                          <span className="text-red-500 ml-1">*</span>
                        )}
                      </Label>

                      <div className="relative w-full">
                        <Input
                          id={field.id}
                          placeholder={field.placeholder}
                          className="px-3 w-full sm:px-4 py-2.5 sm:py-3 rounded-lg border border-[#6d7074] font-text-medium font-[number:var(--text-medium-font-weight)] text-placeholder-color text-sm sm:text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]"
                          value={field.value}
                          onChange={(e) => field.onChange(e.target.value)}
                          required={field.required}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </form>

              {formErrors && (
                <div className="text-red-500 text-sm w-full font-medium mt-2">
                  Veuillez remplir tous les champs obligatoires avant de
                  continuer.
                </div>
              )}

              <div className="hidden sm:flex flex-row sm:flex-row items-center justify-between gap-4 sm:gap-0 w-full">
                <BackButton
                  //className="w-full sm:w-auto"
                  handleClick={() => {
                    updateFormData({
                      ...formData,
                      isStepFourChecked: false,
                      isStepFiveChecked: false,
                    });
                  }}
                 // disabled={!formData.isStepFourChecked}
                />

                <PrimaryButton
                  isLoading={loading}
                  disabled={!nom || !prenom || !email || !telephone}
                  //className="w-full sm:w-auto"
                  handleClick={handleNextStep}
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
                    Optez pour notre service rapide et facile, et faites
                    réaliser vos plans sur mesure par des professionnels
                    compétents
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

              <div className="grid grid-cols-2 sm:flex lg:grid lg:gap-4 lg:h-auto lg:mx-auto xl:flex sm:h-16 items-center lg:items-center lg:justify-center justify-center sm:justify-between gap-4 sm:gap-0 w-full">
                {statistics.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col w-full sm:w-[98px] lg:w-full xl:w-[98px] items-center lg:items-center sm:items-start xl:items-start gap-1"
                  >
                    <div className="w-full  text-white text-2xl sm:text-3xl text-center">
                      {stat.value}
                    </div>

                    <div className="w-full font-text-medium text-white text-xs sm:text-sm text-center text-nowrap">
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
          className="w-full lg:w-[40%] h-auto lg:h-[640px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] object-contain hidden sm:block"
          alt="Frame"
          src="/images/frame51.svg"
        />
      </div>
      <div className="sm:hidden fixed bottom-0 left-0 right-0 flex items-center justify-between animate-fade-in opacity-0 [--animation-delay:400ms]  bg-[#ffffffaa] pt-10 pb-14 px-4 shadow-xl backdrop-blur-lg">
        <BackButton
          //className="w-full sm:w-auto"
          handleClick={() => {
            updateFormData({
              ...formData,
              isStepFourChecked: false,
              isStepFiveChecked: false,
            });
          }}
          //disabled={!formData.isStepFourChecked}
        />

        <PrimaryButton
          //className="w-full sm:w-auto"
          handleClick={handleNextStep}
        />
      </div>
    </section>
  );
};
