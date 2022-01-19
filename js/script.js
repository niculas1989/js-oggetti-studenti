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

//! Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.


//! BONUS
//connessione con gli elementi del DOM
const name = document.getElementById('name').value;
const lastname = document.getElementById('lastname').value;
const age = document.getElementById('age').value;
const button = document.getElementById('button');

const newStudentName = name.value;
const newStudentLastName = lastname.value;
const newStudentAge = age.value;


const newStudent = [
    { nome: newStudentName, cognome: newStudentLastName, eta: newStudentAge }
]

button.addEventListener('click', function () {
    studentsList.push(newStudent);
    console.log(studentsList);
})



/*
const newStudentName = prompt('Inserisci il nome dello studente');
const newStudentLastName = prompt('Inserisci il cognome dello studente');
const newStudentAge = prompt('Inserisci età dello studente');
*/


