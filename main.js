//ESERCIZIO 1

let persona = {
    nome: `Luca`,
    cognome: `Perini`,
    eta: `23`,
    saluto: function () {
        console.log(`Ciao ${this.nome}!`)
    }

}

persona.saluto()

//ESERCIZIO 2

let rubrica = {

    'contacts': [

        { 'nome': 'Nicola', 'telefono': '3331111111' },

        { 'nome': 'Lorenzo', 'telefono': '3332222222' },

        { 'nome': 'Paola', 'telefono': '3333333333' },

        { 'nome': 'Jenny', 'telefono': '3334444444' }

    ],

    showContact: function (index) {
        console.log(this.contacts[index]);
    },


    showContacts: function () {
        console.log(this.contacts);
    },

    addContacts: function (nome, telefono) {
        console.log(this.contacts.push({ nome, telefono }));
    },

    removeContact: function (index) {
        this.contacts.splice(index, 1);
    },
    editContact: function (index, nome, telefono) {
        this.contacts.splice(index, 1);
        console.log(this.contacts.push({ nome, telefono }));
    }

}

rubrica.showContacts();
rubrica.showContact(1)
rubrica.addContacts("Giulia", "3475868645");
rubrica.removeContact(0);
rubrica.addContacts("Fabio", "34753443645");
rubrica.editContact(0, "Dario", "363474837");


//ESERCIZIO 3


let bowling = {

    'players': [
        { 'name': 'Livio', 'scores': [] },
        { 'name': 'Paola', 'scores': [] },
        { 'name': 'Filippo', 'scores': [] },
        { 'name': 'Giuseppe', 'scores': [] }
    ],


    generateScores: function () {
        this.players.forEach(player => {
            for (let i = 0; i < 10; i++) {
                player.scores.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
            }
        });
    },

    finalScores: function () {
        this.players.forEach(player => {
            player.finalScore = player.scores.reduce((acc, n) => acc + n, 0);
        });
    },

    addPlayer: function (name) {
        this.players.push({ 'name': name, 'scores': [] });
        this.generateScores();
    },

    winner: function () {
        this.finalScores();
        this.players.sort((a, b) => b.finalScore - a.finalScore);
        return this.players[0];
    },

    scoreRank: function () {
        this.finalScores();
        this.players.sort((a, b) => b.finalScore - a.finalScore);
        return this.players.map(player => `${player.name}: ${player.finalScore}`);
    }
};

console.log("Final scores:");
bowling.finalScores();
console.log(bowling.players);

bowling.addPlayer('Guido');
console.log("Added a new player:", bowling.players);

console.log("The winner is", bowling.winner());

console.log("Final Scores:");
console.log(bowling.scoreRank());

