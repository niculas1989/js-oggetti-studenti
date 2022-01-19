console.log('JS OK');

/*
Descrizione:
1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.
BONUS:
Usiamo il DOM per stampare e chiedere le informazioni all'utente!
*/

//! Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
const student = {
    nome: 'Nicolas',
    cognome: 'Maranzano',
    eta: 32,
}

console.log(student);

//! Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

// Connetto l'oggetto del DOM con JS
const resultElement = document.getElementById('result');

for (let key in student) {
    console.log(key);
}

//! Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).

const studentsList = [
    { nome: 'Pippo', cognome: 'Franco', eta: 80 },
    { nome: 'John', cognome: 'Wick', eta: 40 },
    { nome: 'Daenerys', cognome: 'Targaryen', eta: 23 }
]

//! Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.

for (let j = 0; j < studentsList.length; j++) {
    const currentStudent = studentsList[j];
    console.log(currentStudent.nome);
    console.log(currentStudent.cognome);
}


