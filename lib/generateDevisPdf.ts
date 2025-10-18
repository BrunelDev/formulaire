import { DevisRecord } from "./calculator";

export default function generateDevisPdf(
  devis: DevisRecord[],
  client: { nom: string; prenom: string; email: string; tel: string },
  reference?: string,
  numDevis?: string,
  logoBase64?: string
) {
  //const logoDataUri = logoBase64 ? `data:image/jpeg;base64,${logoBase64}` : "";
  const logoDataUri = "https://formulaire.mesplansdepermis.fr/images/logo.jpg";
  const totalHT = devis.reduce((sum, item) => sum + (item.totalht || 0), 0);
  const totalTVA = totalHT * 0.2;
  const totalTTC = totalHT + totalTVA;

  const formatPrice = (price: number) => price.toFixed(2);

  const dateDevis = new Date().toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const devisNum = numDevis || `${Date.now()}`;
  const refDevis = reference || `DEVIS-${new Date().getFullYear()}`;

  const devisRows = devis
    .map(
      (item) => `
    <tr>
      <td>${item.designation}</td>
      <td class="text-center">${item.quantity || 1}</td>
      <td class="text-right">${formatPrice(item.pu || 0)} €</td>
      <td class="text-center">${item.tva || 20}%</td>
      <td class="text-right">${formatPrice(item.totalht || 0)} €</td>
    </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Devis - Mes Plans de Permis</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Figtree', Arial, sans-serif;
            font-size: 11pt;
            color : #021327;
            padding: 40px;
            line-height: 1.4;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
        }
        
        .header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 2px solid #042347;
        }
        
        .company-info {
            flex: 1;
        }
        
        .company-name {
            font-size: 16pt;
            font-weight: bold;
            color: #042347;
            margin-bottom: 10px;
        }
        
        .company-details {
            font-size: 9pt;
            line-height: 1.6;
        }
        
        .reference-box {
            text-align: right;
            padding: 15px;
        }
        
        .reference-box div {
            margin-bottom: 5px;
            font-size: 10pt;
        }
        
        .client-info {
            margin-bottom: 30px;
        }
        
        .client-info h3 {
            color: #042347;
            margin-bottom: 10px;
            font-size: 12pt;
        }
        
        .devis-info {
            margin-bottom: 30px;
            padding: 15px;
        }
        
        .devis-info div {
            margin-bottom: 5px;
            font-size: 10pt;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
        }
        
        thead {
            background: #042347;
            color: white;
        }
        
        th {
            padding: 0 8px;
            text-align: left;
            font-weight: bold;
            font-size: 10pt;
            border-left: 1px solid #ddd;
        }
            
    th:last-child {
            border-right: 1px solid #ddd;
        }
        
        
        td {
            padding: 10px 8px;
            border-bottom: 1px solid #ddd;
            border-right: 1px solid #ddd;
            border-left: 1px solid #ddd;

            font-size: 10pt;
        }
        
        td:last-child {
            border-right: 1px solid #ddd;
        }
        
        tbody tr:hover {
            background: #f5f5f5;
        }
        
        .text-right {
            text-align: right;
        }
        
        .text-center {
            text-align: center;
        }
        
        .bottom-section {
            border: 1px solid #e0e0e0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }
        
        .payment-terms {
            flex: 1;
            margin: 0 20px;
        }
        
        .payment-terms h3 {
            color: #333;
            font-size: 11pt;
            margin-bottom: 10px;
        }
        
        .payment-terms p {
            font-size: 10pt;
            line-height: 1.5;
        }
        
        .total-section {
            width: 350px;
            background: #f8f9fa;
            padding: 25px;
        }
        
        .total-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 0;
            font-size: 11pt;
            font-weight: 700;
        }
        
        .total-row:not(:last-child) {
            border-bottom: 1px solid #e0e0e0;
        }
        
        .total-row span:first-child {
            color: #333;
        }
        
        .total-row span:last-child {
            color: #1a1a1a;
        }
        
        .total-row.final {
            background: transparent;
            padding: 15px 0 0 0;
            margin-top: 10px;
            border-bottom: none;
        }
        
        .total-row.final span:first-child {
            font-size: 13pt;
            font-weight: 700;
            color: #042347;
        }
        
        .total-row.final span:last-child {
            font-size: 14pt;
            font-weight: 700;
            color: #042347;
        }
        
        .signature-section {
            margin-top: 40px;
            text-align: right;
        }
        
        .signature-box {
            display: inline-block;
            border: 1px solid #333;
            padding: 15px 30px;
            margin-top: 10px;
        }
        
        @media print {
            body {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- En-tête -->
        <div class="header">
            <div class="company-info">
                ${
                  logoDataUri
                    ? `<img src="${logoDataUri}" style="width:222px; height:61px; margin-bottom: 10px;" alt="logo">`
                    : ""
                }
                <div class="company-details">
                    <strong>MES PLANS DE PERMIS</strong><br>
                    34C RUE LATAPIE<br>
                    33650 LA BRÈDE<br>
                    FRANCE<br>
                    Port. : +33 6 56 74 54 70<br>
                    <span style="text-decoration: underline;">contact@mesplansdepermis.fr</span><br>
                    <span style="text-decoration: underline;">www.mesplansdepermis.fr</span><br>
                    <strong>N° TVA Intracommunautaire:</strong> FR01937970176<br>
                    <strong>N° SIRET:</strong> 93797017600015<br>
                    <strong>Code NAF:</strong> 71.12B<br>
                    <strong>RCS:</strong> 937 970 176 R.C.S. Bordeaux<br>
                    <strong>Capital:</strong> 500 €
                </div>
            </div>
            
            <div class="reference-box">
            <div style="margin-bottom:60px;"><strong >${refDevis}</strong></div>

                <!-- Informations client -->
                <div class="client-info">
                    <strong>${client.nom} ${client.prenom}</strong><br>
                    Port. : ${client.tel}<br>
                    Email : ${client.email}
                </div>
            </div>
        </div>
        
        <!-- Informations devis -->
        <div class="devis-info">
            <div><strong>N° ${devisNum}</strong></div>
            <div>${dateDevis}</div>
        </div>
        
        <!-- Tableau des prestations -->
        <table>
            <thead>
                <tr>
                    <th>Désignation</th>
                    <th class="text-center">Quantité</th>
                    <th class="text-right">PU</th>
                    <th class="text-center">TVA</th>
                    <th class="text-right">Montant HT</th>
                </tr>
            </thead>
            <tbody>
                ${devisRows}
            </tbody>
        </table>
        
        <!-- Section totaux et paiement -->
        <div class="bottom-section">
            <!-- Conditions de paiement -->
            <div class="payment-terms">
            <p><strong>Bon pour Accord</strong></p>

                <h3>Conditions de paiement :</h3>
                <p>• 100,00 % soit <strong>${formatPrice(
                  totalTTC
                )} €</strong> : Paiement après réception de l'Avant-Projet Sommaire.</p>
            </div>
            
            <!-- Totaux -->
            <div class="total-section">
                <div class="total-row">
                    <span>Total HT</span>
                    <span>${formatPrice(totalHT)} €</span>
                </div>
                <div class="total-row">
                    <span>TVA (20%)</span>
                    <span>${formatPrice(totalTVA)} €</span>
                </div>
                <div class="total-row final">
                    <span>Total TTC</span>
                    <span>${formatPrice(totalTTC)} €</span>
                </div>
            </div>
        </div>
        
        <!-- Signature -->
        <div class="signature-section">
            <div class="signature-box">
                Signature
            </div>
        </div>
    </div>
</body>
</html>`;
}
