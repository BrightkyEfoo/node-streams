// Les Writable streams fournissent une interface pour écrire des données. 
// Ils peuvent être utilisés pour écrire dans des fichiers, envoyer des données à une API
//  ou stocker des données dans une base de données. 
// Un exemple custom pourrait être un flux d'écriture de données dans un fichier de log.

import { Writable } from 'stream';

class Logger extends Writable {
  constructor(options) {
    super(options);
  }

  _write(chunk, encoding, callback) {
    console.log('Données reçues :', chunk.toString());
    callback();
  }
}

// Utilisation
const logger = new Logger();
logger.write('Hello, world!');
logger.end();
