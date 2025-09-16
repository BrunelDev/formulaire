import {
  Question,
  QuestionWithInput,
} from "@/components/formFour/questionComponent";
import BackButton from "@/components/PrimaryButton/BackButton";
import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import { Option, useFormState } from "@/context/useContext";
import { useSummarySate } from "@/context/useSummary";
import { useEffect, useState } from "react";

export const InformationSummarySection = () => {
  const { formData, updateFormData } = useFormState();
  const { setSummary } = useSummarySate();
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  type FormItem = {
    question: string;
    description?: string;
    handleChange: (value: boolean) => void;
    value?: boolean;
    placeholder?: string;
    price?: string;
    type?: string;
    options?: string[];
    required: boolean;
    inputRequired?: boolean;
  };

  const PermisForm: FormItem[] = [
    {
      question: "Votre permis nécessite un architecte ?",
      description:
        "Un permis de construire nécessite un architecte si la superficie de plancher (somme des surfaces de tous les niveaux à l'intérieur des murs) dépasse 150 m².",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, isArchitectNeeded: value });
      },
      value: formData.isArchitectNeeded,
      type: "default",
      required: true,
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
      value: formData.hasMultipleRealizationsOnSameConstructionPermit,
      placeholder: "Nombre de sous projets à déclarer",
      required: true,
      inputRequired: true,
    },
    {
      question: "Vérification du PLU ",
      description:
        "Nos services vérifient que votre projet respecte les règles du Plan Local d'Urbanisme (PLU) de votre commune pour éviter tout refus de votre permis.",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, pluVerification: value });
      },
      value: formData.pluVerification,
      price: "(180€ TTC)",
      required: true,
    },
    {
      question: "Réalisation d'un plan de niveau RDC (plan intérieur) ",
      description:
        "Les plans de niveaux ne sont pas obligatoires pour un permis de construire. Si nécessaire, indiquez le nombre de niveaux à dessiner.",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, rdcPlanVerification: value });
      },
      value: formData.rdcPlanVerification,
      placeholder: "Nombre de niveau à déssiner",
      price: "(125€ TTC / niveau)",
      required: true,
      inputRequired: true,
    },
    {
      question: "Étude BBIO RE2020",
      description:
        "L'étude BBIO RE2020 évalue la performance énergétique d'un projet de construction neuve ou d'extension et est obligatoire pour tout bâtiment résidentiel neuf ou étendu soumis à la réglementation thermique RE2020.",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, bbioStudy: value });
      },
      value: formData.bbioStudy,
      price: "(300€ TTC)",
      required: true,
    },
    {
      question: "Service livraison express",
      description:
        "Envoi de votre A.P.S sous 48 h pour un traitement rapide de votre projet.",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, expressDelivery: value });
      },
      value: formData.expressDelivery,
      price: "(90€ TTC)",
      required: false,
    },
    {
      question: "Panneau d'affichage ",
      description: "Livraison incluse.",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, displayPanel: value });
      },
      value: formData.displayPanel,
      price: "(25€ TTC)",
      required: true,
    },
  ];

  const DpForm: FormItem[] = [
    {
      question:
        "Votre projet comprend plusieurs réalisations sur une même déclaration préalable de travaux ?",
      description:
        "Exemple: changement de façade et clôture. précisez le nombre de sous-projets à déclarer.",
      handleChange: (value: boolean) => {
        updateFormData({
          ...formData,
          hasMultipleRealizationsOnSameDeclaration: value,
        });
      },
      value: formData.hasMultipleRealizationsOnSameDeclaration,
      placeholder: "Nombre de sous-projets à déclarer",
      required: true,
      inputRequired: true,
    },
    {
      question: "Vérification du P.L.U",
      description:
        "Nos services vérifient que votre projet respecte les règles du Plan Local d'Urbanisme (PLU) de votre commune pour éviter tout refus de votre déclaration préalable de travaux.",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, pluVerification: value });
      },
      value: formData.pluVerification,
      price: "(180€ TTC)",
      required: true,
    },
    {
      question: "Réalisation d'un plan de niveau RDC (plan intérieur) ",
      description:
        "Les plans de niveaux ne sont pas obligatoires pour une déclaration préalable de travaux. Si nécessaire, indiquez le nombre de niveaux à dessiner.",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, rdcPlanVerification: value });
      },
      value: formData.rdcPlanVerification,
      placeholder: "Nombre de niveaux à déssiner",
      price: "(125€ TTC / niveau)",
      required: true,
      inputRequired: true,
    },
    {
      question: "Service livraison express ",
      description:
        "Envoi de votre A.P.S sous 48h pour un traitement rapide de votre projet.",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, expressDelivery: value });
      },
      value: formData.expressDelivery,
      price: "(90€ TTC)",
      required: false,
    },
    {
      question: "Panneau d'affichage ",
      description: "Livraison incluse.",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, displayPanel: value });
      },
      value: formData.displayPanel,
      price: "(25€ TTC)",
      required: true,
    },
  ];

  const uniteForm: FormItem[] = [
    {
      question:
        "Votre plan comprend plusieurs projets sur un même plan demandé ?",
      description:
        "Exemple: Création d'une extension et d'une clôture. Si c'est le cas, précisez le nombre de sous-projets à déclarer.",
      handleChange: (value: boolean) => {
        updateFormData({
          ...formData,
          hasMultipleRealizationsOnSamePlanRequest: value,
          question_0_select: value ? "Option 1" : undefined
        });
      },
      value: formData.hasMultipleRealizationsOnSamePlanRequest,
      type: "option",
      options: ["Option 1", "Option 2", "Option 3"],
      required: true,
      inputRequired: true,
    },
    {
      question: "Sélectionnez les plans dont vous avez besoin:",
      description:
        "Au-delà de 4 plans à l'unité, le pack Permis de construire ou Déclaration préalable de travaux devient plus avantageux. Tarif à l'unité : 180 € TTC pour le premier plan, puis 50 € TTC par plan supplémentaire. ",
      handleChange: (value: boolean) => {
        updateFormData({ 
          ...formData, 
          neededPlans: value ? ["option1"] : [],
          question_1_select: value ? "option1" : undefined
        });
      },
      value: formData.neededPlans?.length ? true : false,
      type: "option",
      options: ["Plans de situation et Vue aérienne", "Plans de masse", "Plans de coupe", "Plans de façades", "Plans de toiture", "Insertion Graphique (paysagère)"],
      required: true,
      inputRequired: true,
    },
    {
      question: "Réalisation d'un plan de niveau RDC (plan intérieur)",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, rdcPlanVerification: value });
      },
      value: formData.rdcPlanVerification,
      price: "(125€ TTC /niveau)",
      type: "option",
      options: ["option1", "option2", "option3"],
      required: true,
    },
    {
      question: "Réalisation d'un rendu 3D de votre aménagement intérieur",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, render3D: value });
      },
      value: formData.render3D,
      price: "(125€ TTC /niveau)",
      type: "option",
      options: ["option1", "option2", "option3"],
      required: true,
    },
    {
      question: "Service livraison express",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, expressDelivery: value });
      },
      value: formData.expressDelivery,
      price: "(90€ TTC)",
      required: false,
    },
  ];

  const erpForm: FormItem[] = [
    {
      question: "Votre permis E.R.P nécessite un architecte ?",
      description:
        "Un permis E.R.P nécessite un architecte si la superficie de plancher (somme des surfaces de tous les niveaux à l'intérieur des murs) dépasse 150 m².",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, isArchitectNeeded: value });
      },
      value: formData.isArchitectNeeded,
      type: "default",
      required: true,
    },
    {
      question: "Service livraison express ",
      description:
        "Envoi de votre A.P.S sous 48h pour un traitement rapide de votre projet.",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, expressDelivery: value });
      },
      value: formData.expressDelivery,
      price: "(90€ TTC)",
      required: false,
    },
  ];

  const urbanismForm: FormItem[] = [
    {
      question:
        "Votre projet comprend plusieurs réalisations sur un même certificat d'urbanisme?",
      description: "Exemple: Création d'une piscine et d'une clôture.",
      handleChange: (value: boolean) => {
        updateFormData({
          ...formData,
          hasMultipleRealizationsOnSameUrbanismCertificate: value,
        });
      },
      value: formData.hasMultipleRealizationsOnSameUrbanismCertificate,
      placeholder: "Nombre de sous-projets à déclarer",
      required: true,
      inputRequired: true,
    },
    {
      question: "Vérification du PLU ",
      description:
        "Nos services vérifient que votre projet respecte les règles du Plan Local d'Urbanisme (PLU) de votre commune pour éviter tout refus de votre certificat d'urbanisme.",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, pluVerification: value });
      },
      value: formData.pluVerification,
      price: "(180€ TTC)",
      required: true,
    },
    {
      question: "Service livraison express (90€ TTC)",
      description:
        "Envoi de votre A.P.S sous 48h pour un traitement rapide de votre projet.",
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, expressDelivery: value });
      },
      value: formData.expressDelivery,
      price: "(90€ TTC)",
      required: true,
    },
  ];

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    let isValid = true;
    const currentForm =
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
    
    if (formData.option === Option.PLAN_UNITE) {
      const hasNeededPlans = formData.neededPlans && formData.neededPlans.length > 0;
      const hasRdcPlan = formData.rdcPlanVerification === true;
      const has3DRender = formData.render3D === true;
      
      if (!hasNeededPlans && !hasRdcPlan && !has3DRender) {
        errors['plan_selection'] = "Veuillez sélectionner au moins un type de plan";
        isValid = false;
      }
    }
    
    currentForm.forEach((item, index) => {
      if (item.required) {
        if (
          (typeof item.value === "boolean" && item.value === false) ||
          (typeof item.value === "string" && item.value === "")
        ) {
          errors[`question_${index}`] = "Ce champ est obligatoire";
          isValid = false;
        }

        if (item.inputRequired) {
          if (item.value === true && !formData[`question_${index}_input`]) {
            errors[`question_${index}_input`] = "Ce champ est obligatoire";
            isValid = false;
          }
        }

        if (item.type === "option" && Array.isArray(item.options)) {
          if (item.value === true) {
            const selectValue = formData[`question_${index}_select`];
            if (!selectValue) {
              errors[`question_${index}_input`] = "Veuillez sélectionner une option";
              isValid = false;
            }
          }
        }

        if (item.question.includes("Sélectionnez les plans") && item.value === true) {
          if (!formData.neededPlans || formData.neededPlans.length === 0) {
            errors[`question_${index}_input`] = "Veuillez sélectionner au moins un plan";
            isValid = false;
          }
        }
      }
    });
    
    setFormErrors(errors);
    
    if (!isValid) {
      errors['general'] = "Veuillez compléter tous les champs obligatoires avant de continuer.";
    }
    
    return isValid;
  };

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

  const formToUse: FormItem[] =
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
      {formErrors['general'] && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-full" role="alert">
          <strong className="font-bold">Attention! </strong>
          <span className="block sm:inline">{formErrors['general']}</span>
        </div>
      )}
      
      {formErrors['plan_selection'] && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-full" role="alert">
          <strong className="font-bold">Attention! </strong>
          <span className="block sm:inline">{formErrors['plan_selection']}</span>
        </div>
      )}
      
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
              required={item.required}
              error={formErrors[`question_${index}`]}
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
              required={item.required}
              inputRequired={item.inputRequired}
              error={formErrors[`question_${index}`]}
              inputError={formErrors[`question_${index}_input`]}
              index={index}
              updateFormData={updateFormData}
              formData={formData}
            />
          )
        )}
      </div>
      <div className="flex flex-row sm:flex-row items-center justify-between gap-4 sm:gap-0 relative self-stretch w-full flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <BackButton
          handleClick={() => {
            setSummary([]);
            updateFormData({
              ...formData,
              isStepFourChecked: false,
              isStepThreeChecked: false,
            });
          }}
          disabled={!formData.isStepFourChecked}
        />
        <PrimaryButton
          handleClick={() => {
            if (validateForm()) {
              setSummary([]);
              updateFormData({
                ...formData,
                isStepFourChecked: true,
              });
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        />
      </div>
    </div>
  );
};
