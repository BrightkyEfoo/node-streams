import { Readable } from "stream";

// Définition d'un générateur de flux personnalisé pour les nombres de 1 à 100
class NumbersStream extends Readable {
  constructor(limit) {
    super({ objectMode: true }); // Définir objectMode à true si vous avez des objets JavaScript

    this.currentNumber = 1;
    this.limit = limit;
  }

  // Méthode _read() pour générer le flux
  _read() {
    if (this.currentNumber <= this.limit) {
      // Émission du nombre actuel comme un chunk de données
      this.push(this.currentNumber);
      this.currentNumber++;
    } else {
      // Fin du flux
      this.push(null);
    }
  }
}

// Création d'une instance de NumbersStream
const numbersStream = new NumbersStream(5);

// Consommation du flux
numbersStream.on("data", (data) => {
  console.log("Nombre reçu:", data);
});



numbersStream.on("end", () => {
  console.log("Fin du flux.");
});
