// Les readable streams fournissent une interface pour lire les données. 
// Ils peuvent être utilisés pour lire des fichiers, récupérer des données à partir d'une 
// source réseau comme une requête HTTP ou encore générer des données de manière dynamique. 
// Un exemple custom pourrait être un flux de lecture de données à partir d'un fichier CSV 
// et leur transformation en objets JavaScript.

import { Readable } from 'node:stream';

class CSVReader extends Readable {
  constructor(data) {
    super();
    this.data = data;
  }

  _read() {
    for (const row of this.data) {
      this.push(row.join(',') + '\n');
    }
    this.push(null);
  }
}

// Utilisation
const data = [
  ['John', 'Doe', '30'],
  ['Jane', 'Doe', '28']
];
const csvReader = new CSVReader(data);
csvReader.pipe(process.stdout); // Affiche les données CSV dans la console
