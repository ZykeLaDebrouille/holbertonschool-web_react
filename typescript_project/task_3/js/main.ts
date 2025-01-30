/// <reference path="./crud.d.ts" />

// Import des types
import { RowID, RowElement } from "./interface";

// Import du module CRUD
import * as CRUD from "./crud";

// Création d'un nouvel élément RowElement
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insertion et récupération de l'ID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted Row ID: ${newRowID}`);

// Mise à jour de l'élément
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);

// Suppression de l'élément
CRUD.deleteRow(newRowID);
