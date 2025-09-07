# Configuration Google Places Autocomplete

## 🎯 Fonctionnalités implémentées

✅ **GooglePlacesAutocomplete** avec liste déroulante  
✅ **Récupération des coordonnées GPS** (latitude, longitude)  
✅ **Nom du lieu formaté** (ex: "16 rue latapie 33650 La Brède")  
✅ **Numéro de parcelle cadastrale** (ex: "AK 0084")  
✅ **Zone d'urbanisme** (ex: "UA")  
✅ **Mairie/ville** (ex: "La Brède")  
✅ **Mode dégradé** si l'API Google Maps n'est pas disponible  

## 🚀 Installation et Configuration

### 1. Installer les dépendances (si pas déjà fait)

```bash
bun add react-google-places-autocomplete @types/google.maps
```

### 2. Configurer la clé API Google Maps

1. **Créer un projet Google Cloud** :
   - Allez sur [Google Cloud Console](https://console.cloud.google.com/)
   - Créez un nouveau projet ou sélectionnez un projet existant

2. **Activer les APIs nécessaires** :
   - Maps JavaScript API
   - Places API
   - Geocoding API

3. **Créer une clé API** :
   - Allez dans "APIs & Services" > "Credentials"
   - Cliquez sur "Create Credentials" > "API Key"
   - Configurez les restrictions (domaines, IPs, etc.)

4. **Ajouter la clé dans votre projet** :
   ```bash
   # Créez un fichier .env.local
   echo "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here" > .env.local
   ```

### 3. Démarrer le serveur de développement

```bash
bun dev
```

## 📋 Utilisation

Le composant est déjà intégré dans `FormOne`. Voici comment il fonctionne :

1. **Saisie d'adresse** : L'utilisateur tape dans le champ
2. **Suggestions** : Une liste déroulante apparaît avec les suggestions Google Places
3. **Sélection** : L'utilisateur clique sur une suggestion
4. **Récupération automatique** : Le système récupère :
   - Les coordonnées GPS
   - Le numéro de parcelle cadastrale
   - La zone d'urbanisme
   - La ville/mairie
5. **Affichage** : Les informations sont affichées dans le récapitulatif

## 🔧 Structure des fichiers créés

```
components/GooglePlacesAutocomplete/
├── GooglePlacesAutocomplete.tsx    # Composant principal avec Google Places
├── GooglePlacesWrapper.tsx         # Wrapper avec gestion du chargement API
├── index.ts                        # Exports et types
└── README.md                       # Documentation détaillée

app/api/cadastral/
└── route.ts                        # API pour récupérer les données cadastrales

services/
└── cadastralService.ts             # Service pour les APIs cadastrales

lib/
└── googleMaps.ts                   # Utilitaires Google Maps

context/
└── useContext.ts                   # Contexte étendu avec AddressDetails
```

## 🎨 Exemple d'utilisation dans un autre composant

```tsx
import { GooglePlacesWrapper, AddressDetails } from "@/components/GooglePlacesAutocomplete";

function MyComponent() {
  const [address, setAddress] = useState("");

  const handlePlaceSelect = (addressDetails: AddressDetails) => {
    console.log("Coordonnées:", addressDetails.coordinates);
    console.log("Parcelle:", addressDetails.parcelNumber);
    console.log("Zone urbanisme:", addressDetails.urbanZone);
    console.log("Ville:", addressDetails.city);
  };

  return (
    <GooglePlacesWrapper
      value={address}
      onChange={setAddress}
      onPlaceSelect={handlePlaceSelect}
      placeholder="Entrez une adresse..."
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
    />
  );
}
```

## 📊 Données récupérées

```typescript
interface AddressDetails {
  coordinates?: {
    lat: number;        // Latitude GPS
    lng: number;        // Longitude GPS
  };
  formattedAddress?: string;  // "16 rue latapie 33650 La Brède"
  parcelNumber?: string;      // "AK 0084"
  urbanZone?: string;         // "UA"
  city?: string;              // "La Brède"
  placeId?: string;           // ID Google Places
}
```

## 🛡️ Mode dégradé

Si l'API Google Maps n'est pas disponible :
- Le composant affiche un input simple
- Les fonctionnalités d'autocomplétion ne sont pas disponibles
- Un message d'information est affiché
- L'utilisateur peut toujours saisir une adresse manuellement

## 🌍 APIs utilisées

1. **Google Places API** : Autocomplétion et détails des lieux
2. **Google Geocoding API** : Conversion adresse ↔ coordonnées
3. **API Géoportail IGN** : Informations cadastrales françaises
4. **API Géoportail Urbanisme** : Zones PLU/POS

## 🔍 Test et débogage

1. **Vérifier la clé API** :
   ```javascript
   console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
   ```

2. **Tester l'autocomplétion** :
   - Tapez "16 rue latapie la brède"
   - Vérifiez que les suggestions apparaissent
   - Sélectionnez une adresse
   - Vérifiez les données dans le récapitulatif

3. **Vérifier les APIs cadastrales** :
   - Ouvrez les outils de développement
   - Regardez les appels à `/api/cadastral`
   - Vérifiez les données retournées

## 🚨 Résolution des problèmes

### L'autocomplétion ne fonctionne pas
- Vérifiez que la clé API est correcte
- Vérifiez que les APIs sont activées dans Google Cloud
- Vérifiez les restrictions de la clé API

### Les données cadastrales ne s'affichent pas
- Les APIs publiques peuvent être temporairement indisponibles
- Le composant affiche "Non disponible" en cas d'erreur
- Vérifiez les logs de la console pour plus de détails

### Mode dégradé activé
- Vérifiez la clé API dans `.env.local`
- Redémarrez le serveur de développement
- Vérifiez la console pour les erreurs de chargement

## 📈 Améliorations possibles

- Mise en cache des résultats cadastraux
- Support d'autres pays que la France
- Interface de configuration des restrictions géographiques
- Intégration avec d'autres APIs cadastrales
- Mode hors ligne avec données pré-chargées
