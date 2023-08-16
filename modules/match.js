import game from "./game.js";

// El primer jugador que consiga 2 juegos, gana el partido
const match = (player1, player2) => {
    // inicio del contador de juegos de cada jugador
    let player1match = 0
    let player2match = 0
    //Resultado del juego
    let result = 0
    // Estadísticas del partido
    const  matchStatistics = {}
    matchStatistics.matchCounter = 0
    matchStatistics.matchPoints = []
    matchStatistics.gamesStatistics = []
    while (true) {
        console.log(`        Comienza el juego ${matchStatistics.matchCounter + 1}`)
        // Se suma un juego
        matchStatistics.matchCounter += 1
        // Se juega un juego
        const matchGame = game(player1, player2, matchStatistics.matchCounter)
        if (matchGame.result === 1) {
            player1match += 1
        } else {
            player2match += 1
        }
        matchStatistics.matchPoints.push(`${player1match} - ${player2match}`)
        matchStatistics.gamesStatistics.push(matchGame)
        if (player1match === 2) {
            //Gana jugador 1
            result = 1
            break
        }
        if (player2match === 2) {
            //Gana jugador 2
            result = 2
            break
        }
    }
    matchStatistics.result = result
    return matchStatistics
}

export default match
