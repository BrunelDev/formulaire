import {
  Question,
  QuestionWithInput,
} from "@/components/formFour/questionComponent";
import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import { Button } from "@/components/ui/button";
import { Option, useFormState } from "@/context/useContext";
import { useSummarySate } from "@/context/useSummary";
import { useEffect } from "react";

export const InformationSummarySection = () => {
  const { formData, updateFormData } = useFormState();
  const { setSummary } = useSummarySate();

  useEffect(() => {
    if (
      formData.option === Option.ETUDE_RE2020 ||
      formData.option === Option.AIDE_CONCEPTION ||
      formData.option === Option.ETUDE_SISMIQUE
    ) {
      updateFormData({
        ...formData,
        isStepThreeChecked: false,
      });
    }
  }, [formData, updateFormData]);

  const PermisForm = [
    {
      question: "Votre permis nécessite un architecte ?",
      description:
        "Un permis de construire nécessite un architecte si la superficie de plancher (somme des surfaces de tous les niveaux à l'intérieur des murs) dépasse 150 m².",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, isArchitectNeeded: value });
      },
      value: false,
      type: "default",
    },
    {
      question:
        "Votre projet comprend plusieurs réalisations sur une même permis de construire ?",
      description:
        "Exemple: Création d'une extension et d'une clôture. Si c'est le cas, précisez le nombre de sous-projets à déclarer.",
      handleChange: (value: boolean) => {
        updateFormData({
          ...formData,
          hasMultipleRealizationsOnSameConstructionPermit: value,
        });
      },
      value: false,
      placeholder: "Nombre de sous projets à déclarer",
    },
    {
      question: "Vérification du PLU ",
      description:
        "Nos services vérifient que votre projet respecte les règles du Plan Local d'Urbanisme (PLU) de votre commune pour éviter tout refus de votre permis.",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, pluVerification: value });
      },
      value: false,
      price: "(180€ TTC)",
    },
    {
      question: "Réalisation d'un plan de niveau RDC (plan intérieur) ",
      description:
        "Les plans de niveaux ne sont pas obligatoires pour un permis de construire. Si nécessaire, indiquez le nombre de niveaux à dessiner.",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, rdcPlanVerification: value });
      },
      value: false,
      placeholder: "Nombre de niveau à déssiner",
      price: "(125€ TTC / niveau)",
    },
    {
      question: "Étude BBIO RE2020",
      description:
        "L'étude BBIO RE2020 évalue la performance énergétique d'un projet de construction neuve ou d'extension et est obligatoire pour tout bâtiment résidentiel neuf ou étendu soumis à la réglementation thermique RE2020.",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, bbioStudy: value });
      },
      value: false,
      price: "(300€ TTC)",
    },
    {
      question: "Étude sismique",
      description:
        "L'étude sismique analyse la résistance du terrain et de la construction aux séismes. Nécessaire uniquement dans les zones à risque sismique.",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, seismicStudy: value });
      },
      value: false,
      price: "(400€ TTC)",
    },
    {
      question: "Service livraison express",
      description:
        "Envoi de votre A.P. sous 48 h pour un traitement rapide de votre projet.",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, expressDelivery: value });
      },
      value: false,
      price: "(90€ TTC)",
    },
    {
      question: "Panneau d'affichage ",
      description: "Livraison incluse.",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, displayPanel: value });
      },
      value: false,
      price: "(25€ TTC)",
    },
  ];
  const DpForm = [
    {
      question:
        "Votre projet comprend plusieurs réalisations sur une même déclaration préalable de travaux ?",
      description:
        "Exemple: changement de façade et clôture. précisez le nombre de sous-projets à déclarer.",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, displayPanel: value });
      },
      value: false,
      placeholder: "Nombre de sous-projets à déclarer",
    },
    {
      question: "Vérification du P.L.U",
      description:
        "Nos services vérifient que votre projet respecte les règles du Plan Local d'Urbanisme (PLU) de votre commune pour éviter tout refus de votre déclaration préalable de travaux.",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, displayPanel: value });
      },
      value: false,
      price: "(180€ TTC)",
    },
    {
      question: "Réalisation d'un plan de niveau RDC (plan intérieur) ",
      description:
        "Les plans de niveaux ne sont pas obligatoires pour une déclaration préalable de travaux. Si nécessaire, indiquez le nombre de niveaux à dessiner.",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, displayPanel: value });
      },
      value: false,
      placeholder: "Nombre de niveaux à déssiner",
      price: "(125€ TTC / niveau)",
    },
    {
      question: "Service livraison express ",
      description:
        "Envoi de votre A.P.S sous 48h pour un traitement rapide de votre projet.",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, displayPanel: value });
      },
      value: false,
      price: "(90€ TTC)",
    },
    {
      question: "Étude sismique ",
      description:
        "L'étude sismique analyse de la résistance du terrain et de la construction aux séismes. Nécessaire uniquement dans les zones à risque sismique.",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, displayPanel: value });
      },
      value: false,
      price: "(400€ TTC)",
    },
    {
      question: "Panneau d'affichage ",
      description: "Livraison incluse.",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, displayPanel: value });
      },
      value: false,

      price: "(25€ TTC)",
    },
  ];
  const uniteForm = [
    {
      question:
        "Votre plan comprend plusieurs projets sur un même plan demandant ?",
      description:
        "Exemple: Création d'une extension et d'une clôture. Si c'est le cas, précisez le nombre de sous-projets à déclarer.",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, displayPanel: value });
      },
      value: false,
      type: "option",
      options: ["option1", "option2", "option3"],
    },
    {
      question: "Sélectionnez les plans dont vous avez besoin:",
      description:
        "Au-delà de 4 plans à l’unité, le pack “Permis de construire” ou “Déclaration préalable de travaux” devient plus avantageux. Tarif à l’unité : 180 € TTC pour le premier plan, puis 50 € TTC par plan supplémentaire. ",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, displayPanel: value });
      },
      value: false,
      type: "option",
      options: ["option1", "option2", "option3"],
    },
    {
      question: "Réalisation d'un plan de niveau RDC (plan intérieur)",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, displayPanel: value });
      },
      value: false,
      price: "(125€ TTC /niveau)",
      type: "option",
      options: ["option1", "option2", "option3"],
    },

    {
      question: "Réalisation d'un rendu 3D de votre aménagement intérieur",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, displayPanel: value });
      },
      value: false,
      price: "(125€ TTC /niveau)",
      type: "option",
      options: ["option1", "option2", "option3"],
    },
    {
      question: "Service livraison express",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, displayPanel: value });
      },
      value: false,

      price: "(90€ TTC)",
    },
  ];
  const erpForm = [
    {
      question: "Votre permis E.R.P nécessite un architecte ?",
      description:
        "Un permis E.R.P nécessite un architecte si la superficie de plancher (somme des surfaces de tous les niveaux à l'intérieur des murs) dépasse 150 m².",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, displayPanel: value });
      },
      value: false,
      type: "default",
    },
    {
      question: "Service livraison express ",
      description:
        "Envoi de votre A.P.S sous 48h pour un traitement rapide de votre projet.",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, displayPanel: value });
      },
      value: false,
      price: "(90€ TTC)",
    },
  ];

  const urbanismForm = [
    {
      question:
        "Votre projet comprend plusieurs réalisations sur un même certificat d'urbanisme?",
      description: "Exemple: Création d'une piscine et d'une clôture.",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, displayPanel: value });
      },
      value: false,
      placeholder: "Nombre de sous-projets à déclarer",
    },
    {
      question: "Vérification du PLU ",
      description:
        "Nos services vérifient que votre projet respecte les règles du Plan Local d'Urbanisme (PLU) de votre commune pour éviter tout refus de votre certificat d'urbanisme.",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, displayPanel: value });
      },
      value: false,
      price: "(180€ TTC)",
    },
    {
      question: "Service livraison express (90€ TTC)",
      description:
        "Envoi de votre A.P.S sous 48h pour un traitement rapide de votre projet.",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, displayPanel: value });
      },
      value: false,
      price: "(90€ TTC)",
    },
  ];
  const formToUse: {
    question: string;
    description?: string;
    handleChange: (value: boolean) => void;
    value?: boolean;
    placeholder?: string;
    price?: string;
    type?: string;
    options?: string[];
  }[] =
    formData.option === Option.PERMIS_CONSTRUIRE
      ? PermisForm
      : formData.option === Option.DECLARATION_PREALABLE
      ? DpForm
      : formData.option === Option.DOSSIER_ERP
      ? erpForm
      : formData.option === Option.CERTIFICAT_URBANISME
      ? urbanismForm
      : formData.option === Option.PLAN_UNITE
      ? uniteForm
      : [];

  return (
    <div className="flex flex-col w-full items-start gap-6 sm:gap-8 pt-0 pb-6 sm:pb-8 px-0 animate-fade-in opacity-0">
      <div className="flex flex-col items-start gap-4 sm:gap-5 relative self-stretch w-full flex-[0_0_auto] overflow-y-auto">
        <div></div>
        {formToUse.map((item, index) =>
          "type" in item && item.type === "default" ? (
            <Question
              key={index}
              question={item.question}
              description={item.description}
              handleChange={item.handleChange}
              value={item.value ? "oui" : "non"}
            />
          ) : (
            <QuestionWithInput
              key={index}
              question={item.question}
              description={item.description}
              handleChange={item.handleChange}
              value={item.value}
              placeholder={item.placeholder}
              price={item.price}
              type={item.type}
              options={item.options}
            />
          )
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 relative self-stretch w-full flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <Button
          onClick={() => {
            setSummary([]);

            updateFormData({
              ...formData,
              isStepFourChecked: false,
              isStepThreeChecked: false,
            });
          }}
          variant="outline"
          className="inline-flex items-center justify-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 relative flex-[0_0_auto] bg-[#f7f7f8] rounded-lg border border-solid border-[#b8b9c1] h-auto hover:bg-[#f0f0f1] transition-colors w-full sm:w-auto group"
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
            setSummary([]);
            updateFormData({
              ...formData,
              isStepFourChecked: true,
            });
          }}
        />
      </div>
    </div>
  );
};
