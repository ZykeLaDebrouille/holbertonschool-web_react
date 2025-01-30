// Interface pour les crédits majeurs avec branding
interface MajorCredits {
  credits: number;
  __brand: "MajorCredits"; // Branding pour différencier le type
}

// Interface pour les crédits mineurs avec branding
interface MinorCredits {
  credits: number;
  __brand: "MinorCredits"; // Branding pour différencier le type
}

// Fonction pour créer un objet MajorCredits (évite les erreurs de typage)
export function createMajorCredits(credits: number): MajorCredits {
  return { credits, __brand: "MajorCredits" };
}

// Fonction pour créer un objet MinorCredits (évite les erreurs de typage)
export function createMinorCredits(credits: number): MinorCredits {
  return { credits, __brand: "MinorCredits" };
}

// Addition des crédits pour les matières majeures
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return createMajorCredits(subject1.credits + subject2.credits);
}

// Addition des crédits pour les matières mineures
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return createMinorCredits(subject1.credits + subject2.credits);
}

// Tests
const major1 = createMajorCredits(3);
const major2 = createMajorCredits(4);
const minor1 = createMinorCredits(2);
const minor2 = createMinorCredits(1);

const totalMajor = sumMajorCredits(major1, major2);
const totalMinor = sumMinorCredits(minor1, minor2);

console.log(`Total Major Credits: ${totalMajor.credits}`); // Résultat attendu : 7
console.log(`Total Minor Credits: ${totalMinor.credits}`); // Résultat attendu : 3
