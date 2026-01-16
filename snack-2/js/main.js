// funzione per generare un numero randomico
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const squadreCalcio = [
  { nome: "Squadra A", puntiFatti: randomNumber(1, 5), falliSubiti: randomNumber(1, 5) },
  { nome: "Squadra B", puntiFatti: randomNumber(1, 5), falliSubiti: randomNumber(1, 5) },
  { nome: "Squadra C", puntiFatti: randomNumber(1, 5), falliSubiti: randomNumber(1, 5) },
  { nome: "Squadra D", puntiFatti: randomNumber(1, 5), falliSubiti: randomNumber(1, 5) },
];

console.table(squadreCalcio);

const squadreNomiFalli = [];

// scorro l'array originale
for (const squadra of squadreCalcio) {
  // inserisco nel nuovo array solo nomi e falli
  squadreNomiFalli.push({ nome: squadra.nome, falliSubiti: squadra.falliSubiti });
}

console.table(squadreNomiFalli);
