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

// * Creo delle validazioni per far sì che l'utente (tramite il prompt) mi dia valori validi


const getWordFromUser = (text) => {
    let word;
    do {
        word = prompt(text).trim();
    } while (!word || !isNaN(word));

    return word;
}

const getNumberFromuser = (text) => {
    let number;
    do {
        number = parseInt(prompt(text).trim());
    } while (isNaN(number) || number < 0);

    return number;
}



//! Connetto l'oggetto del DOM con JS
const resultElement = document.getElementById('result');
const resultArrayElement = document.getElementById('result-array');
const resultUserElement = document.getElementById('result-user');
const name = document.getElementById('name');
const lastname = document.getElementById('lastname');
const age = document.getElementById('age');
const button = document.getElementById('button');


getWordFromUser('Inserisci un nome');
getWordFromUser('Inserisci un cognome');
getNumberFromuser('Inserisci un numero');








/*
//! Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
const student = {
    nome: 'Nicolas',
    cognome: 'Maranzano',
    eta: 32,
}

// Connetto l'oggetto del DOM con JS
const resultElement = document.getElementById('result');
const resultArrayElement = document.getElementById('result-array');
const resultUserElement = document.getElementById('result-user');
const name = document.getElementById('name');
const lastname = document.getElementById('lastname');
const age = document.getElementById('age');
const button = document.getElementById('button');

// const newStudentName = name.value;
// const newStudentLastName = lastname.value;
// const newStudentAge = age.value;

//!VERSIONE NORMALE

const newStudentName = prompt('Inserisci il nome dello studente');
const newStudentLastName = prompt('Inserisci il cognome dello studente');
const newStudentAge = prompt('Inserisci età dello studente');


const newStudent = { nome: newStudentName, cognome: newStudentLastName, eta: newStudentAge };

//! Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

for (let key in student) {
    console.log(student[key]);
    resultElement.innerHTML += ` ${key}: ${student[key]} <br> `
}


//! Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).

const studentsList = [
    { nome: 'Pippo', cognome: 'Franco', eta: 80 },
    { nome: 'John', cognome: 'Wick', eta: 40 },
    { nome: 'Daenerys', cognome: 'Targaryen', eta: 23 }
]

//| Inserire nell'array esistente il nuovo, creato dal "push"
studentsList.push(newStudent);
console.log(studentsList);

//! Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.

for (let j = 0; j < studentsList.length; j++) {
    const currentStudent = studentsList[j];
    resultArrayElement.innerHTML += `Nome: ${currentStudent.nome} <br> Cognome: ${currentStudent.cognome}<br>`;
}

//! Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.


//! BONUS

button.addEventListener('click', function () {
    studentsList.push(newStudent);
    console.log(studentsList);
    for (let j = 0; j < studentsList.length; j++) {
        const now = studentsList[j];
        resultUserElement.innerHTML += `Nome: ${now['nome']} <br> Cognome: ${now['cognome']}<br> Eta': ${now['eta']}<br>`;
    }
})
*/



