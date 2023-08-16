import match from './modules/match.js'
// Pedimos el número de jugadores del torneo
const isPowerOfTwo = (x) => x > 0 && (x & (x - 1)) == 0;
let numberOfPlayers = 0 
while (isPowerOfTwo(numberOfPlayers) === false) {
    numberOfPlayers = prompt('Introduce el número de jugadores. (2 / 4 / 8 / 16 / 32 )')
}

const players = []
for (let i = 0; i < numberOfPlayers; i++) {
    const player = prompt(`Introduce el nombre del jugador ${i + 1}`)
    if (player === player.includes(player)) continue
    players.push(player)
}

// Inicializamos el array de jugadores
//const players = ['Luis', 'Carlos', 'Juan', 'Pedro', 'Pablo', 'Javier', 'Jorge', 'Miguel', 'Antonio', 'Jose', 'Manuel', 'David', 'Daniel', 'Francisco', 'Rafael', 'Jose Antonio', 'Jose Luis', 'Javier', 'Jesus', 'Fernando', 'Sergio', 'Miguel Angel', 'Alberto', 'Alejandro', 'Juan Carlos', 'Alvaro', 'Ramon', 'Enrique', 'Diego', 'Raul', 'Ivan', 'Jaime', 'Oscar', 'Victor', 'Ruben', 'Andres', 'Joaquin', 'Santiago', 'Eduardo', 'Julian', 'Adrian', 'Sergio', 'Hugo', 'Tomas', 'Roberto', 'Ignacio', 'Mariano', 'Martin', 'Agustin', 'Samuel', 'Marcos', 'Nicolas', 'Cristian', 'Alfonso', 'Juan Jose', 'Juan Antonio', 'Pascual', 'Jose Manuel', 'Juan Manuel', 'Lorenzo', 'Jordi', 'Guillermo', 'Gabriel', 'Jose Maria', 'Salvador', 'Marc', 'Joan', 'Ismael', 'Jose Miguel', 'Aitor', 'Jose Ramon', 'Jose Carlos', 'Josep', 'Jose Angel', 'Jose Francisco', 'Jose Ignacio', 'Jose Vicente', 'Jose Enrique', 'Josep Maria', 'Josep Antoni', 'Josep Lluis', 'Josep M', 'Josep Ramon', 'Josep Miquel', 'Josep P', 'Josep T', 'Josep M', 'Josep C', 'Josep A', 'Josep F', 'Josep I', 'Josep V', 'Josep E', 'Josep J', 'Josep R', 'Josep N', 'Josep S', 'Josep D', 'Josep L', 'Josep G', 'Josep B', 'Josep K', 'Josep O', 'Josep X', 'Josep Q', 'Josep Z', 'Josep Y', 'Josep U', 'Josep W', 'Josep H', 'Josep Ñ', 'Josep Ú', 'Josep Ü', 'Josep Ö', 'Josep Ç', 'Josep É', 'Josep À', 'Jose', 'Carlos D', 'Luis F', 'Gerardo M', 'Gregorio H', 'Fernando J', 'Angel R', 'Pedro o', 'Angel P', 'Eduardo M', 'Samuel L']
// Pedimos los nombres de los jugadores

const showScore = (player1, player2, matchStatistics, matchNumber) => {
    console.log(`      Resultado del partido ${matchNumber}`)
    let stringPlayer1 = ''
    let stringPlayer2 = ''
    for (let i = 0; i < matchStatistics.length; i++) {
        stringPlayer1 = stringPlayer1 + (`  ${matchStatistics[i].substring(0, 1)}`)
    }
    console.log(`      ${player1} -> ${stringPlayer1}`)
    for (let i = 0; i < matchStatistics.length; i++) {
        stringPlayer2 = stringPlayer2 + (`  ${matchStatistics[i].substring(4, 5)}`)
    }
    console.log(`      ${player2} -> ${stringPlayer2}`)
}

// Barajamos los jugadores
let newPlayers = players.sort( () => Math.random() - 0.5 );

// Total de eliminatorias
const totalplayOffs = Math.log2(newPlayers.length)

// Estadísticas del torneo
const tournamentStatistics = []

// Para cada eliminatoria
for (let i = 0; i < totalplayOffs; i++) {

    console.log(`Eliminatoria ${i + 1}`)
    console.log('--------------')

    //Montamos el cuadro de la eliminatoria
    let tournament = []
    for (let i = 0; i < newPlayers.length; i += 2) {
        tournament.push([newPlayers[i], newPlayers[i + 1]])
    }

    let matchNumber = 0

    // Mostrar el cuadro de la eliminatoria
    for (let i = 0; i < tournament.length; i++) {
        console.log(`   Partido ${i + 1}: ${tournament[i][0]} vs ${tournament[i][1]}`)
        matchNumber = i + 1
    }  

    console.log('')
    const playersForNextPlayOff = []
    // Simular eliminatoria
    for (let i = 0; i < tournament.length; i++) {
        const player1 = tournament[i][0]
        const player2 = tournament[i][1]
        // Simular partido
        console.log(`      Comienza el partido ${i + 1}: ${player1} vs ${player2}`)
        // Inicializamos las estadísticas del partido
        let matchStatistics = {
            matchCounter: 0,
            gamesStatistics: [],
            matchPoints: [],
            result: 0
        }
        const matchResult = match(player1, player2, matchStatistics)
        tournamentStatistics.push(matchResult)
        showScore(player1, player2, matchResult.matchPoints, matchNumber)
        if (matchResult.result === 1) {
            console.log(`      Gana el partido ${player1}`)
            playersForNextPlayOff.push(player1)
        } else {  
            console.log(`      Gana el partido ${player2}`)
            playersForNextPlayOff.push(player2)
        }
        console.log('')
    }
    newPlayers = playersForNextPlayOff
}

console.log('Resultados del torneo: ', tournamentStatistics)

console.log(`El ganador del torneo es ${newPlayers[0]}`)
