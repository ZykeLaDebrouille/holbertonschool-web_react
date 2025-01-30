// Interface Student
export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Deux étudiants
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "Paris",
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Lyon",
  };
  
  // Liste des étudiants
  const studentsList: Student[] = [student1, student2];
  
  // Création du tableau HTML dans le DOM
  const body = document.querySelector("body");
  const table = document.createElement("table");
  
  // Ajouter une ligne pour chaque étudiant
  studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();
  
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });
  
  // Ajout du tableau au DOM
  body?.appendChild(table);
  
