// app/components/GenerateDevis.jsx
"use client";

import generateDevisPdf from "@/lib/generateDevisPdf";
import { useState } from "react";

export default function GenerateDevis() {
  const [loading, setLoading] = useState(false);

  const handleGeneratePDF = async () => {
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
      const htmlContent = generateDevisPdf();

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

      if (!response.ok) throw new Error("Erreur génération PDF");

      // Télécharger le PDF
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
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

  return (
    <button
      onClick={handleGeneratePDF}
      disabled={loading}
      className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
    >
      {loading ? "Génération en cours..." : "Générer le devis PDF"}
    </button>
  );
}
