import game from "./game.js";

// El primer jugador que consiga 2 juegos, gana el partido

const match = (player1, player2, matchStatistics) => {
    // inicio del contador de juegos de cada jugador
    let player1match = 0
    let player2match = 0
    //Resultado del juego
    let result = 0
    // Estadísticas del partido
    let gameStatistics = {
        gameCounter: 0,
        roundsStatistics: [],
        gamePoints: [],
        result: 0
    }
    while (true) {
        // Se suma un juego
        matchStatistics.matchCounter += 1
        // Se juega un juego
        const matchGame = game(player1, player2, gameStatistics)
        if (matchGame.result === 1) {
            player1match += 1
        } else {
            player2match += 1
        }
        matchStatistics.matchPoints.push(`${player1match} - ${player2match}`)
        matchStatistics.gamesStatistics.push(gameStatistics)
        //console.log(`El resultado del partido es ${player1}: ${player1match} - ${player2}: ${player2match}`)
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
