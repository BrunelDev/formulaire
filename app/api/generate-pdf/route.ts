import chromium from "@sparticuz/chromium"
import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer-core";

export async function POST(request: NextRequest) {
  try {
    const { htmlContent, filename = "devis.pdf" } = await request.json();

    const isDev = process.env.NODE_ENV === "development";
    let browser;

    if (isDev) {
      // En développement local
      const puppeteerFull = await import("puppeteer-core");
      browser = await puppeteerFull.default.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      });
    } else {
      // En production (Vercel)
      const executablePath = await chromium.executablePath();

      browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: null,
        executablePath,
        headless: true,
      });
    }

    const page = await browser.newPage();

    // Charger le HTML
    await page.setContent(htmlContent, {
      waitUntil: "networkidle0",
    });

    // Attendre que les fonts soient chargées
    await page.evaluateHandle("document.fonts.ready");

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
      {
        error: error instanceof Error ? error.message : "Erreur inconnue",
        stack: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}

// Important pour Vercel
export const maxDuration = 60;
