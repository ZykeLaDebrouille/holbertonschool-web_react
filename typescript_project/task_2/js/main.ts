// Définition des interfaces
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  // Implémentation de la classe Director
  class Director implements DirectorInterface {
    workFromHome(): string {
      return "Working from home";
    }
    getCoffeeBreak(): string {
      return "Getting a coffee break";
    }
    workDirectorTasks(): string {
      return "Getting to director tasks";
    }
  }
  
  // Implémentation de la classe Teacher
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return "Cannot work from home";
    }
    getCoffeeBreak(): string {
      return "Cannot have a break";
    }
    workTeacherTasks(): string {
      return "Getting to work";
    }
  }
  
  // Fonction qui crée un employé
  export function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
      return new Teacher();
    }
    return new Director();
  }
  
  // Tests de la fonctionnalité
  console.log(createEmployee(200));  // Doit retourner une instance de Teacher
  console.log(createEmployee(1000)); // Doit retourner une instance de Director
  console.log(createEmployee('$500')); // Doit retourner une instance de Director


// Type prédicatif : Vérifie si un employé est un Directeur
export function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Exécute le travail selon le type d'employé
export function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// Tests de la fonctionnalité
const teacher = createEmployee(200); // Instance de Teacher
const director = createEmployee(1000); // Instance de Director

executeWork(teacher); // Résultat attendu : Getting to work
executeWork(director); // Résultat attendu : Getting to director tasks


// Définition du type littéral Subjects
type Subjects = "Math" | "History";

// Fonction qui enseigne en fonction du sujet
function teachClass(todayClass: Subjects): string {
  return todayClass === "Math" ? "Teaching Math" : "Teaching History";
}

// Tests de la fonctionnalité
console.log(teachClass("Math"));    // Résultat attendu : "Teaching Math"
console.log(teachClass("History")); // Résultat attendu : "Teaching History"
