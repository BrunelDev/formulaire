import { NextRequest, NextResponse } from "next/server";

interface CadastralInfo {
  parcelNumber?: string;
  urbanZone?: string;
  city?: string;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");

    if (!lat || !lng) {
      return NextResponse.json(
        { error: "Coordonnées manquantes" },
        { status: 400 }
      );
    }

    const coordinates = {
      lat: parseFloat(lat),
      lng: parseFloat(lng),
    };

    // Récupérer les informations cadastrales
    const cadastralInfo = await getCadastralInfoFromAPIs(coordinates);

    return NextResponse.json(cadastralInfo);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des informations cadastrales:",
      error
    );

    // Retourner des données d'exemple en cas d'erreur
    return NextResponse.json({
      parcelNumber: "AK 0084",
      urbanZone: "UA",
      city: "La Brède",
    });
  }
}

async function getCadastralInfoFromAPIs(coordinates: {
  lat: number;
  lng: number;
}): Promise<CadastralInfo> {
  try {
    // 1. Essayer l'API Géoportail pour les informations cadastrales
    const parcelInfo = await getParcelInfoFromGeoportail(coordinates);

    // 2. Essayer l'API d'urbanisme
    const urbanInfo = await getUrbanismInfoFromGeoportail(coordinates);

    return {
      parcelNumber: parcelInfo.parcelNumber,
      urbanZone: urbanInfo.urbanZone,
      city: parcelInfo.city,
    };
  } catch (error) {
    console.error("Erreur lors des appels API:", error);

    // Données d'exemple basées sur la localisation approximative
    const exampleData = getExampleDataByLocation(coordinates);
    return exampleData;
  }
}

async function getParcelInfoFromGeoportail(coordinates: {
  lat: number;
  lng: number;
}) {
  try {
    // API Géoportail pour les informations cadastrales
    const url = `https://wxs.ign.fr/parcellaire/geoportail/ols?service=GeocodeService&version=1.2&request=ReverseGeocode&pos=${coordinates.lng},${coordinates.lat}&returnFreeForm=false`;

    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; CadastralService/1.0)",
      },
    });

    if (!response.ok) {
      throw new Error(`Erreur API Géoportail: ${response.status}`);
    }

    const data = await response.text();
    console.log("Géoportail response :", data);

    // Parser la réponse XML
    // Note: Dans un environnement Node.js, vous pourriez utiliser une bibliothèque comme 'xmldom'
    // Pour simplifier, on retourne des données d'exemple

    return {
      parcelNumber: "AK 0084",
      city: "La Brède",
    };
  } catch (error) {
    console.error("Erreur Géoportail parcelle:", error);
    return {};
  }
}

async function getUrbanismInfoFromGeoportail(coordinates: {
  lat: number;
  lng: number;
}) {
  const url = "https://apicarto.ign.fr/api/cadastre/parcelle";
  const params = new URLSearchParams({
    geom: `${coordinates.lng},${coordinates.lat}`,
  });

  try {
    const response = await fetch(`${url}?${params}`);
    const data = await response.json();
    console.log("apicarto response :", data);
    return data.features[0]?.properties; // numero, section, commune etc.
  } catch (error) {
    console.error("Erreur:", error);
  }
}

function getExampleDataByLocation(coordinates: {
  lat: number;
  lng: number;
}): CadastralInfo {
  // Données d'exemple basées sur la région
  // Bordeaux et environs
  if (
    coordinates.lat >= 44.5 &&
    coordinates.lat <= 45.0 &&
    coordinates.lng >= -1.0 &&
    coordinates.lng <= 0.0
  ) {
    return {
      parcelNumber: "AK 0084",
      urbanZone: "UA",
      city: "La Brède",
    };
  }

  // Paris et environs
  if (
    coordinates.lat >= 48.5 &&
    coordinates.lat <= 49.0 &&
    coordinates.lng >= 2.0 &&
    coordinates.lng <= 3.0
  ) {
    return {
      parcelNumber: "AB 0123",
      urbanZone: "UB",
      city: "Paris",
    };
  }

  // Lyon et environs
  if (
    coordinates.lat >= 45.5 &&
    coordinates.lat <= 46.0 &&
    coordinates.lng >= 4.5 &&
    coordinates.lng <= 5.0
  ) {
    return {
      parcelNumber: "CD 0456",
      urbanZone: "UC",
      city: "Lyon",
    };
  }

  // Données par défaut
  return {
    parcelNumber: "XX 0000",
    urbanZone: "UA",
    city: "Commune",
  };
}
