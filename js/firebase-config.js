/* ============================================================
   SmartZonen: Firebase-konfiguration
   Genbruger Firebase-projektet "ai-korekort" (samme konto),
   men skriver til sit eget dokument (stats/smartzonen), saa
   tallene ikke blandes med AI-koerekortets besoegstaeller.
   Disse vaerdier er offentlige projekt-identifikatorer, ikke
   hemmeligheder, adgangen styres af Firestore Security Rules.
   ============================================================ */

const firebaseConfig = {
  apiKey: "AIzaSyAF-r-Sz4DO3n-RyAQq2ZDFTI8EesCZC-k",
  authDomain: "ai-korekort.firebaseapp.com",
  projectId: "ai-korekort",
  storageBucket: "ai-korekort.firebasestorage.app",
  messagingSenderId: "357179136807",
  appId: "1:357179136807:web:1b6ed280ffed803a53a702",
};

if (typeof firebase !== "undefined") {
  firebase.initializeApp(firebaseConfig);
}

