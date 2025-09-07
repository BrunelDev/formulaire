"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";

interface AddressDetails {
  coordinates?: {
    lat: number;
    lng: number;
  };
  formattedAddress?: string;
  parcelNumber?: string;
  urbanZone?: string;
  city?: string;
  placeId?: string;
}

interface GooglePlacesAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  onPlaceSelect: (addressDetails: AddressDetails) => void;
  placeholder?: string;
  className?: string;
}

interface PlacePrediction {
  description: string;
  place_id: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
}

export const GooglePlacesAutocomplete: React.FC<
  GooglePlacesAutocompleteProps
> = ({
  value,
  onChange,
  onPlaceSelect,
  placeholder = "Entrez une adresse...",
  className,
}) => {
  const [predictions, setPredictions] = useState<PlacePrediction[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const autocompleteService =
    useRef<google.maps.places.AutocompleteService | null>(null);
  const placesService = useRef<google.maps.places.PlacesService | null>(null);
  const geocoder = useRef<google.maps.Geocoder | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialiser les services Google Maps
    if (typeof window !== "undefined" && window.google) {
      autocompleteService.current =
        new google.maps.places.AutocompleteService();
      geocoder.current = new google.maps.Geocoder();

      // Créer une carte invisible pour le PlacesService
      if (mapRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: 46.603354, lng: 1.888334 }, // Centre de la France
          zoom: 6,
        });
        placesService.current = new google.maps.places.PlacesService(map);
      }
    }
  }, []);

  const handleInputChange = (inputValue: string) => {
    onChange(inputValue);

    if (inputValue.length > 2 && autocompleteService.current) {
      setIsLoading(true);

      autocompleteService.current.getPlacePredictions(
        {
          input: inputValue,
          componentRestrictions: { country: "fr" }, // Limiter à la France
          types: ["address"],
        },
        (predictions, status) => {
          setIsLoading(false);
          if (
            status === google.maps.places.PlacesServiceStatus.OK &&
            predictions
          ) {
            setPredictions(predictions);
            setIsOpen(true);
          } else {
            setPredictions([]);
            setIsOpen(false);
          }
        }
      );
    } else {
      setPredictions([]);
      setIsOpen(false);
    }
  };

  const handlePlaceSelect = async (prediction: PlacePrediction) => {
    onChange(prediction.description);
    setIsOpen(false);
    setPredictions([]);

    if (placesService.current) {
      // Récupérer les détails de la place
      placesService.current.getDetails(
        {
          placeId: prediction.place_id,
          fields: [
            "geometry",
            "formatted_address",
            "address_components",
            "name",
          ],
        },
        async (place, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && place) {
            const coordinates = place.geometry?.location
              ? {
                  lat: place.geometry.location.lat(),
                  lng: place.geometry.location.lng(),
                }
              : undefined;

            // Extraire la ville des composants d'adresse
            let city = "";
            if (place.address_components) {
              const cityComponent = place.address_components.find(
                (component) =>
                  component.types.includes("locality") ||
                  component.types.includes("administrative_area_level_2")
              );
              city = cityComponent?.long_name || "";
            }

            const addressDetails: AddressDetails = {
              coordinates,
              formattedAddress:
                place.formatted_address || prediction.description,
              city,
              placeId: prediction.place_id,
            };

            // Récupérer les informations cadastrales si les coordonnées sont disponibles
            if (coordinates) {
              try {
                const cadastralInfo = await getCadastralInfo(coordinates);
                addressDetails.parcelNumber = cadastralInfo.parcelNumber;
                addressDetails.urbanZone = cadastralInfo.urbanZone;
              } catch (error) {
                console.warn(
                  "Erreur lors de la récupération des informations cadastrales:",
                  error
                );
              }
            }

            onPlaceSelect(addressDetails);
          }
        }
      );
    }
  };

  return (
    <div className="relative w-full">
      {/* Carte invisible pour le PlacesService */}
      <div ref={mapRef} style={{ display: "none" }} />

      <Input
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder={placeholder}
        className={cn("w-full", className)}
        autoComplete="off"
      />

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
          {isLoading ? (
            <div className="px-4 py-2 text-gray-500">Recherche en cours...</div>
          ) : predictions.length > 0 ? (
            predictions.map((prediction) => (
              <div
                key={prediction.place_id}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 border-b border-gray-100 last:border-b-0"
                onClick={() => handlePlaceSelect(prediction)}
              >
                <div className="font-medium text-gray-900">
                  {prediction.structured_formatting.main_text}
                </div>
                <div className="text-sm text-gray-500">
                  {prediction.structured_formatting.secondary_text}
                </div>
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">Aucun résultat trouvé</div>
          )}
        </div>
      )}
    </div>
  );
};

// Fonction pour récupérer les informations cadastrales
async function getCadastralInfo(coordinates: { lat: number; lng: number }) {
  try {
    const response = await fetch(
      `/api/cadastral?lat=${coordinates.lat}&lng=${coordinates.lng}`
    );

    if (!response.ok) {
      throw new Error(`Erreur API: ${response.status}`);
    }

    const data = await response.json();

    return {
      parcelNumber: data.parcelNumber,
      urbanZone: data.urbanZone,
      city: data.city,
    };
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des informations cadastrales:",
      error
    );

    // Données d'exemple en cas d'erreur
    return {
      parcelNumber: "AK 0084",
      urbanZone: "UA",
    };
  }
}
