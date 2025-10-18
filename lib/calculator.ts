interface Data {
  isArchitectNeeded?: boolean;
  hasMultipleRealizationsOnSameConstructionPermit?: boolean;
  realizationsOnSameConstructionPermitNumber?: number;
  cerfaFilling?: boolean;
  pluVerification?: boolean;
  rdcPlanVerification?: boolean;
  rdcPlanNumber?: number;
  bbioStudy?: boolean;
  seismicStudy?: boolean;
  expressDelivery?: boolean;
  displayPanel?: boolean;
  hasMultipleRealizationsOnSameDeclaration?: boolean;
  realizationsOnSameDeclarationNumber?: number;
  hasMultipleRealizationsOnSameUrbanismCertificate?: boolean;
  realizationsOnSameUrbanismCertificateNumber?: number;
  hasMultipleRealizationsOnSamePlanRequest?: boolean;
  realizationsOnSamePlanRequestNumber?: number;
  doesNeedPlan?: boolean;
  neededPlans?: string[];
  shouldMakeRDCPlan?: boolean;
  rdcPlanCount?: number;
  shouldMake3dRender?: boolean;
  renderCount3d?: number;
  render3D?: boolean;
}

export interface DevisRecord {
  designation: string;
  quantity?: number;
  pu?: number;
  tva?: number;
  totalht?: number;
}

const designations = {
  isArchitectNeeded: "Dossier de permis de construire",
  hasMultipleRealizationsOnSameConstructionPermit: `Plus-value pour modélisation et précisions<br>
<br>
La plus-value inclut :<br>
<br>
- La modélisation et la précision d'un bâtiment supplémentaire à modéliser<br>
<br>
Le projet comprend plusieurs volets. Par conséquent, une plus-value sera appliquée en fonction du nombre d’heures supplémentaires nécessaires à la réalisation de ce projet.`,
  cerfaFilling: `Remplissage Cerfa et dépôt en mairie. Le dépôt en mairie sera possible que si le service urbanisme a un service de dépôt dématerialisé. Le cas échéant, le client devra lui-même déposer son permis dans la mairie concernée.`,
  pluVerification: `Vérification PLU :<br>
<br>
Mes Plans de Permis vérifie la conformité de votre projet au Plan Local d'Urbanisme afin d'assurer qu'il respecte les règles d'urbanisme en vigueur.`,
  rdcPlanVerification: `Réalisation d'un plan de niveau RDC (distribution des pièces) (125 € / niveau. Ex: pour un R+1 compter 250€)<br>
<br>
Conception non incluse.<br>
<br>
Des croquis des plans de niveaux seront à fournir afin de permettre leur réalisation et leur intégration dans le dossier de déclaration préalable.<br>
<br>
Si des plans ont déjà été réalisés par un architecte, un géomètre ou un dessinateur, ils pourront être utilisés et intégrés au dossier, permettant ainsi d’éviter la facturation de ce service.`,
  bbioStudy: `Étude BBIO:<br>
<br>
Fourniture de l’attestation RE2020 permis de construire du projet. Ce forfait permet de valider uniquement le permis de construire.<br>
<br>
Les livrables:<br>
-Rapport thermique des préconisations<br>
- Attestation Bbio, DH<br>
<br>
Note : Pour l'élaboration de l'étude thermique, des plans de niveaux avec côtes sont nécessaires.`,
  seismicStudy: `Étude sismique:<br>
<br>
- Vérification de la conformité des plans aux règles sismiques<br>
- Vérification de la conformité en fonction de la typologie de la Zone<br>
- Prise en compte des normes des PPR<br>
- Préconisation du type d'étude à réaliser<br>
- Attestation du controleur technique : PCMI 13`,
  expressDelivery: `Service livraison express :<br> 
Recevez votre A.P.S sous 5 jours ouvrés.`,
  displayPanel: `Fourniture d’un panneau d’affichage de permis de construire 80 x 120 cm`,
  hasMultipleRealizationsOnSameDeclaration:
    `Plus-value pour modélisation et précisions<br>
<br>
La plus-value inclut :<br>
<br>
- La modélisation et la précision d'un bâtiment supplémentaire à modéliser<br>
<br>
Le projet comprend plusieurs volets. Par conséquent, une plus-value sera appliquée en fonction du nombre d’heures supplémentaires nécessaires à la réalisation de ce projet.`,
  hasMultipleRealizationsOnSameUrbanismCertificate:
    `Plus-value pour modélisation et précisions<br>
<br>
La plus-value inclut :<br>
<br>
- La modélisation et la précision d'un bâtiment supplémentaire à modéliser<br>
<br>
Le projet comprend plusieurs volets. Par conséquent, une plus-value sera appliquée en fonction du nombre d’heures supplémentaires nécessaires à la réalisation de ce projet.`,
  hasMultipleRealizationsOnSamePlanRequest:
    `Plus-value pour modélisation et précisions<br>
<br>
La plus-value inclut :<br>
<br>
- La modélisation et la précision d'un bâtiment supplémentaire à modéliser<br>
<br>
Le projet comprend plusieurs volets. Par conséquent, une plus-value sera appliquée en fonction du nombre d’heures supplémentaires nécessaires à la réalisation de ce projet.`,
  doesNeedPlan: `Forfait réalisation de plan à l'unité<br>
Pièces envoyés:`,
  shouldMakeRDCPlan: `Réalisation d'un plan de niveau RDC (distribution des pièces) (125 € / niveau. Ex: pour un R+1 compter 250€)<br>
<br>
Conception non incluse.<br>
<br>
Des croquis des plans de niveaux seront à fournir afin de permettre leur réalisation et leur intégration dans le dossier de déclaration préalable.<br>
<br>
Si des plans ont déjà été réalisés par un architecte, un géomètre ou un dessinateur, ils pourront être utilisés et intégrés au dossier, permettant ainsi d’éviter la facturation de ce service.`,
  shouldMake3dRender: `Réalisation d'un plan rendu 3D de l’aménagement intérieur (125 € / niveau. Ex: pour un R+1 compter 250€)<br>
<br>
Conception non incluse.<br>
<br>
Des croquis des plans de niveaux seront à fournir afin de permettre leur réalisation.<br>
<br>
Si des plans ont déjà été réalisés par un architecte, un géomètre ou un dessinateur, ils pourront être utilisés et intégrés au dossier, permettant ainsi d’éviter la facturation de ce service.`,
  render3D: `Réalisation d'un plan rendu 3D de l’aménagement intérieur (125 € / niveau. Ex: pour un R+1 compter 250€)<br>
<br>
Conception non incluse.<br>
<br>
Des croquis des plans de niveaux seront à fournir afin de permettre leur réalisation.<br>
<br>
Si des plans ont déjà été réalisés par un architecte, un géomètre ou un dessinateur, ils pourront être utilisés et intégrés au dossier, permettant ainsi d’éviter la facturation de ce service.`,
};

export const genreratePermisDevis = (data: Data) => {
  const payload: DevisRecord[] = [
    {
      designation: `Forfait réalisation des pièces pour permis de construire (-150m2).<br>
<br>
Réalisation des plans à jour du projet en vue en plans, coupe et façades, implantation sur plan de masse. Perspectives filaires pour préciser les différents volumes. Perspectives couleur façade avant et arrière. Livraison du dossiers de permis de construire. prêts à dé poser en mairie. Les photos du terrain sont réalisées par le client.<br>
<br>
Plans envoyés:<br>
-PC 1 (plan de situation)<br>
-PC 2 (plan de masse)<br>
-PC 3 ( plan de coupe)<br>
-PC 4 (notice descriptive)<br>
-PC 5 (plan de façades)<br>
-PC 6 (document graphique 3D)<br>
-PC 7 (photographie situant le terrain dans son environnement proche)<br>
-PC 8 (photographie situant le terrain dans l’environnement lointain)<br>
<br>
Remplissage Cerfa et prise de côte non compris.  Le donneur d'ordre est tenu de fournir toutes informations techniques permettant d'établir les documents.`,
      quantity: 1,
      pu: 1000 / 1.2,
      tva: 20,
      totalht: 1000 / 1.2,
    },
  ];

  if (data.isArchitectNeeded) {
    payload.push({
      designation: designations.isArchitectNeeded,
    });
  }

  if (data.hasMultipleRealizationsOnSameConstructionPermit) {
    payload.push({
      designation: designations.hasMultipleRealizationsOnSameConstructionPermit,
      quantity: data.realizationsOnSameConstructionPermitNumber,
      pu: 800 / 1.2,
      tva: 20,
    });
  }

  if (data.cerfaFilling) {
    payload.push({
      designation: designations.cerfaFilling,
      quantity: 1,
      pu: 80 / 1.2,
      tva: 20,
    });
  }

  if (data.pluVerification) {
    payload.push({
      designation: designations.pluVerification,
      quantity: 1,
      pu: 180 / 1.2,
      tva: 20,
    });
  }

  if (data.rdcPlanVerification) {
    payload.push({
      designation: designations.rdcPlanVerification,
      quantity: data.rdcPlanNumber,
      pu: 125 / 1.2,
      tva: 20,
    });
  }

  if (data.bbioStudy) {
    payload.push({
      designation: designations.bbioStudy,
      quantity: 1,
      pu: 300 / 1.2,
      tva: 20,
    });
  }

  if (data.seismicStudy) {
    payload.push({
      designation: designations.seismicStudy,
      quantity: 1,
      pu: 400 / 1.2,
      tva: 20,
    });
  }

  if (data.expressDelivery) {
    payload.push({
      designation: designations.expressDelivery,
      quantity: 1,
      pu: 90 / 1.2,
      tva: 20,
    });
  }

  if (data.displayPanel) {
    payload.push({
      designation: designations.displayPanel,
      quantity: 1,
      pu: 25,
      tva: 20,
    });
  }

  // Calculate totalht for each record
  payload.forEach((record) => {
    if (record.quantity && record.pu) {
      record.totalht = record.quantity * record.pu;
    }
  });

  return payload;
};

export const generateDpDevis = (data: Data) => {
  const payload: DevisRecord[] = [
    {
      designation: `Forfait réalisation des pièces pour déclaration préalable de travaux.

Réalisation des plans à jour du projet en vue en plans, coupe et façades, implantation sur plan de masse. Perspectives filaires pour préciser les différents volumes. Perspectives couleur façade avant et arrière.<br>
<br>
Pièces envoyées:<br>
-DP1 (plan de situation)<br>
-DP2 (plan de masse)<br>
-DP3 (plan de coupe)<br>
-DP4 & DP5 (plan d'élévation)<br>
-DP6 (insertion graphique)<br>
-DP7 (vues rapprochées)<br>
-DP8 (vues éloignées)<br>
-DP11 (notice descriptive)<br>
<br>
Les photos du terrain sont réalisées par le client. Le donneur d'ordre est tenu de fournir toutes informations techniques permettant d'établir les documents`,
      quantity: 1,
      pu: 1000 / 1.2,
      tva: 20,
      totalht: 1000,
    },
  ];

  if (data.hasMultipleRealizationsOnSameDeclaration) {
    payload.push({
      designation: designations.hasMultipleRealizationsOnSameDeclaration,
      quantity: data.realizationsOnSameDeclarationNumber,
      pu: 400 / 1.2,
      tva: 20,
    });
  }

  if (data.cerfaFilling) {
    payload.push({
      designation: designations.cerfaFilling,
      quantity: 1,
      pu: 80 / 1.2,
      tva: 20,
    });
  }

  if (data.pluVerification) {
    payload.push({
      designation: designations.pluVerification,
      quantity: 1,
      pu: 180 / 1.2,
      tva: 20,
    });
  }

  if (data.rdcPlanVerification) {
    payload.push({
      designation: designations.rdcPlanVerification,
      quantity: data.rdcPlanNumber,
      pu: 125 / 1.2,
      tva: 20,
    });
  }

  if (data.expressDelivery) {
    payload.push({
      designation: designations.expressDelivery,
      quantity: 1,
      pu: 90 / 1.2,
      tva: 20,
    });
  }

  if (data.displayPanel) {
    payload.push({
      designation: designations.displayPanel,
      quantity: 1,
      pu: 25 / 1.2,
      tva: 20,
    });
  }

  // Calculate totalht for each record
  payload.forEach((record) => {
    if (record.quantity && record.pu) {
      record.totalht = record.quantity * record.pu;
    }
  });

  return payload;
};

export const generateUniteDevis = (data: Data) => {
  const payload: DevisRecord[] = [
    {
      designation: `Forfait réalisation des pièces pour déclaration préalable de travaux--.<br>

Réalisation des plans à jour du projet en vue en plans, coupe et façades, implantation sur plan de masse. Perspectives filaires pour préciser les différents volumes. Perspectives couleur façade avant et arrière.<br>
<br>
Pièces envoyées:<br>
-DP1 (plan de situation)<br>
-DP2 (plan de masse)<br>
-DP3 (plan de coupe)<br>
-DP4 & DP5 (plan d'élévation)<br>
-DP6 (insertion graphique)<br>
-DP7 (vues rapprochées)<br>
-DP8 (vues éloignées)<br>
-DP11 (notice descriptive)<br>

Les photos du terrain sont réalisées par le client. Le donneur d'ordre est tenu de fournir toutes informations techniques permettant d'établir les documents<br>`,
      quantity: 1,
      pu: 1000 / 1.2,
      tva: 20,
      totalht: 1000,
    },
  ];

  if (data.hasMultipleRealizationsOnSamePlanRequest) {
    payload.push({
      designation: designations.hasMultipleRealizationsOnSamePlanRequest,
      quantity: data.realizationsOnSamePlanRequestNumber,
      pu: 250 / 1.2,
      tva: 20,
    });
  }

  if (data.doesNeedPlan && data.neededPlans) {
    let temp_designation = designations.doesNeedPlan;
    if (data.neededPlans.length >= 1) {
      for (let i = 1; i < data.neededPlans.length; i++) {
        temp_designation += "<br>" + data.neededPlans[i];
      }
    }
    temp_designation +=
      "<br>Le donneur d'ordre est tenu de fournir toutes informations techniques permettant d'établir les documents.";
    payload.push({
      designation: temp_designation,
      quantity: data.neededPlans.length,
      pu: 150 / 1.2,
      tva: 20,
    });
  }

  if (data.rdcPlanVerification) {
    payload.push({
      designation: designations.rdcPlanVerification,
      quantity: data.rdcPlanCount,
      pu: 125 / 1.2,
      tva: 20,
    });
  }

  if (data.render3D) {
    payload.push({
      designation: designations.render3D,
      quantity: data.renderCount3d,
      pu: 200 / 1.2,
      tva: 20,
    });
  }

  if (data.expressDelivery) {
    payload.push({
      designation: designations.expressDelivery,
      quantity: 1,
      pu: 90 / 1.2,
      tva: 20,
    });
  }

  // Calculate totalht for each record
  payload.forEach((record) => {
    if (record.quantity && record.pu) {
      record.totalht = record.quantity * record.pu;
    }
  });

  return payload;
};

export const generateErpDevis = (data: Data) => {
  const payload: DevisRecord[] = [
    {
      designation: `Création d'un dossier ERP (-150m2)

Nous réalisons votre dossier ERP au complet, avec :

- La notice de sécurité
- La notice d’accessibilité
- Les plans sur 1 niveau (situation, cadastre, masse,…)
- Remplissage CERFA ERP 13824*04

Le donneur d'ordre est tenu de fournir toutes informations techniques permettant d'établir les documents.
      `,
      quantity: 1,
      pu: 1000 / 1.2,
      tva: 20,
      totalht: 1000,
    },
  ];

  if (data.isArchitectNeeded) {
    payload.push({
      designation: designations.isArchitectNeeded,
      quantity: 1,
      pu: 2000 / 1.2,
      tva: 20,
    });
  }

  if (data.expressDelivery) {
    payload.push({
      designation: designations.expressDelivery,
      quantity: 1,
      pu: 90 / 1.2,
      tva: 20,
    });
  }

  // Calculate totalht for each record
  payload.forEach((record) => {
    if (record.quantity && record.pu) {
      record.totalht = record.quantity * record.pu;
    }
  });

  return payload;
};

export const generateUrbanismFormDevis = (data: Data) => {
  const payload: DevisRecord[] = [
    {
      designation: `Certificat d’Urbanisme opérationnel (CUb) – Réalisation des plans graphiques nécessaires à la demande (plan de situation, plan cadastral, plan sommaire du projet)

Plans envoyés:
- Plan de situation
-Plan de masse
-Plan de façades

(les plans de niveaux seront intégrés au C.U)`,
      quantity: 1,
      pu: 1000 / 1.2,
      tva: 20,
      totalht: 1000,
    },
  ];

  if (data.hasMultipleRealizationsOnSameUrbanismCertificate) {
    payload.push({
      designation:
        designations.hasMultipleRealizationsOnSameUrbanismCertificate,
      quantity: data.realizationsOnSameUrbanismCertificateNumber,
      pu: 300 / 1.2,
      tva: 20,
    });
  }

  if (data.pluVerification) {
    payload.push({
      designation: designations.pluVerification,
      quantity: 1,
      pu: 180 / 1.2,
      tva: 20,
    });
  }

  if (data.expressDelivery) {
    payload.push({
      designation: designations.expressDelivery,
      quantity: 1,
      pu: 90 / 1.2,
      tva: 20,
    });
  }

  // Calculate totalht for each record
  payload.forEach((record) => {
    if (record.quantity && record.pu) {
      record.totalht = record.quantity * record.pu;
    }
  });

  return payload;
};

export const generateRe2020Devis = () => {
  const payload: DevisRecord[] = [
    {
      designation: designations.bbioStudy,
      quantity: 1,
      pu: 1000 / 1.2,
      tva: 20,

    }
  ]
  return payload
}

export const generateSismicDevis = () => {
  const payload: DevisRecord[] = [
    {
      designation: designations.seismicStudy,
      quantity: 1,
      pu: 1000 / 1.2,
      tva: 20,

    }
  ]
  return payload
}
