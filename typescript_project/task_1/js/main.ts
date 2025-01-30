// Interface Teacher   // --- Task 2 ---
export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Propriétés supplémentaires
  }
  
  // Interface Directors qui étend Teacher
  export interface Directors extends Teacher {
    numberOfReports: number; // Propriété spécifique aux Directeurs
  }
  
  // Création d'un objet Director
  const director1: Directors = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  console.log(director1);

  // --- Task 3 ---
  

  // Interface pour la fonction printTeacher
export function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
  }
  
  // Test de la fonction
  console.log(printTeacher("John", "Doe")); // J. Doe
  console.log(printTeacher("Jane", "Smith")); // J. Smith

  // --- Task 4 ---

  // Interface pour le constructeur
export interface StudentConstructor {
    new (firstName: string, lastName: string): StudentInterface;
  }
  
  // Interface pour la classe StudentClass
  export interface StudentInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Classe StudentClass
  class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  // Test de la classe
  const student: StudentInterface = new StudentClass("John", "Doe");
  console.log(student.displayName()); // John
  console.log(student.workOnHomework()); // Currently working
  