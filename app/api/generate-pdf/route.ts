// app/api/generate-pdf/route.ts
import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer-core";

export async function POST(request: NextRequest) {
  try {
    const { htmlContent, filename = "devis.pdf" } = await request.json();

    // Détection de l'environnement
    const isDev = process.env.NODE_ENV === "development";
    const isWindows = process.platform === "win32";

    let browser;

    if (isDev) {
      // En développement local, utilisez puppeteer complet
      const puppeteerFull = await import("puppeteer");
      browser = await puppeteerFull.default.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      });
    } else {
      // En production (Vercel), utilisez chromium
      const chromium = (await import("@sparticuz/chromium")).default;
      browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: {
          width: 1920,
          height: 1080,
        },
        executablePath: await chromium.executablePath(),
        headless: true,
      });
    }

    const page = await browser.newPage();

    // Charger le HTML
    await page.setContent(htmlContent, {
      waitUntil: "networkidle0",
    });

    // Générer le PDF
    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "20px",
        bottom: "20px",
        left: "20px",
        right: "20px",
      },
    });

    await browser.close();

    return new NextResponse(Buffer.from(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    console.error("Erreur génération PDF:", error);
    return NextResponse.json(
      { error: "Erreur lors de la génération du PDF" },
      { status: 500 }
    );
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
  maxDuration: 60,
};
