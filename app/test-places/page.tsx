"use client";

import { GooglePlacesTestComponent } from "@/components/GooglePlacesAutocomplete/TestComponent";

export default function TestPlacesPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Test Google Places Autocomplete
          </h1>
          <p className="text-gray-600">
            Page de test pour vérifier le fonctionnement du composant GooglePlacesAutocomplete
          </p>
        </div>
        
        <GooglePlacesTestComponent />
        
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
          >
            ← Retour au formulaire principal
          </a>
        </div>
      </div>
    </div>
  );
}
