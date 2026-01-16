const biciDaCorsa = [
  { nome: "Bici A", peso: 5 },
  { nome: "Bici B", peso: 7 },
  { nome: "Bici C", peso: 4 },
  { nome: "Bici D", peso: 8 },
];

// dichiaro temporaneamente che la più leggera è la prima
let biciLeggera = biciDaCorsa[0];

// scorro l'array
for (const bici of biciDaCorsa) {
  // se "bici" è più leggera di "biciLeggera", allora "biciLeggera" viene sovrascritta
  if (bici.peso < biciLeggera.peso) {
    biciLeggera = bici;
  }
}

// stampo il risultato
console.log(`La più leggera è la ${biciLeggera.nome}`);
