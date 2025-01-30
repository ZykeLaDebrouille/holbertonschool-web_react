// Import des types depuis interface.ts
import { RowID, RowElement } from "./interface";

// Déclaration des fonctions CRUD disponibles dans crud.js
declare module CRUD {
  function insertRow(row: RowElement): RowID;
  function deleteRow(rowId: RowID): void;
  function updateRow(rowId: RowID, row: RowElement): RowID;
}

export = CRUD;

