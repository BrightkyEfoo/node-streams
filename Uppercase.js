// Les flux duplex (Duplex Streams) sont des flux qui peuvent à la fois lire et écrire des données. 
// Ils combinent les fonctionnalités des flux en lecture et en écriture. 
// Voici un exemple d'utilisation des flux duplex avec une classe personnalisée :

import { Duplex } from "stream";

// Classe Duplex personnalisée pour transformer les données textuelles en majuscules
class UpperCaseTransform extends Duplex {
  constructor() {
    super();
  }

  // Méthode _write pour écrire des données dans le flux
  _write(chunk, encoding, callback) {
    const upperCaseData = chunk.toString().toUpperCase();
    this.push(upperCaseData);
    callback();
  }

  // Méthode _read pour lire des données du flux
  _read(size) {
    // Ne fait rien car la transformation est effectuée dans _write()
  }
}

// Utilisation
const upperCaseTransform = new UpperCaseTransform();

upperCaseTransform.on("data", (data) => {
  console.log("Données transformées en majuscules :", data.toString());
});

upperCaseTransform.write("hello\n");
upperCaseTransform.write("world\n");
upperCaseTransform.end();
