// les transform Streams fournissent une interface pour transformer les données à mesure 
// qu'elles traversent le flux. Ils sont souvent utilisés pour manipuler les données de 
// manière asynchrone ou pour effectuer des opérations de traitement en temps réel. 
// Un exemple custom pourrait être un flux de transformation de données brutes en données 
// encodées dans un format spécifique comme JSON.

import { Transform } from "stream";

class JSONParser extends Transform {
  constructor() {
    super({ objectMode: true });
  }

  _transform(chunk, encoding, callback) {
    try {
      const parsedData = JSON.parse(chunk);
      this.push(parsedData);
      callback();
    } catch (error) {
      callback(error);
    }
  }
}

// Utilisation
const jsonParser = new JSONParser();
jsonParser.on("data", (data) => {
  console.log("Données JSON parsées :", data);
});
jsonParser.write('{"name": "John", "age": 30}');
jsonParser.end();
