import round from "./round.js"

const game = (player1, player2, gameStatistics) => {
    /* 
        Para ganar un juego, el jugador ha de cumplir estos requisitos:
        - Debe ganar 4 rondas
        -Para que un juego se considere como victoria, debe tener una diferencia de 2 con respecto al otro jugador cuando llegue a 4. Es decir, si el jugador 1, tiene 4 rondas ganadas y el jugador 2 tiene 3, el jugador 1 aun no es considerado ganador. Tendria que ganar una quinta ronda. El máximo de rondas es 7 en caso de ser un partido muy reñido.
    */
    // Contador de juegos
    let gameCounter = 0
    // inicio del contador de juegos de cada jugador
    let player1games = 0
    let player2games = 0
    //Resultado del juego
    let result = 0
    // Estadísticas parciales de la ronda
    let partialStatistics = []
    // Estadísticas de la ronda
    let roundStatistics = {
        roundNumber: 0,
        points: [[]],
        result: 0
    }
    //Empezamos hasta que un jugador llegue a 4 rondas
    while (true) {
        // Se juega una ronda
        const gameRound = round(player1, player2, roundStatistics)
        if (gameRound.result === 1) {
            player1games += 1
        } else {
            player2games += 1
        }
        // Se suma un juego
        gameStatistics.gameCounter += 1
        gameStatistics.roundsStatistics.push(roundStatistics)
        partialStatistics.push(`${player1games} - ${player2games}`)
        //console.log(`El resultado del juego es ${player1}: ${player1games} - ${player2}: ${player2games}`)
        if (player1games >= 4 && (player1games - player2games) >= 2) {
            //Gana jugador 1
            result = 1
            break
        }
        if (player2games >= 4 && (player2games - player1games) >= 2) {
            //Gana jugador 2
            result = 2
            break
        }
        if (player1games === 7) {
            //Gana jugador 1
           result = 1
            break
        }
        if (player2games === 7) {
            //Gana jugador 2
           result = 2
            break
        }
    }
    if (result === 1) {
        //console.log(`El ganador del juego es ${player1}`)
    } else {
        //console.log(`El ganador del juego es ${player2}`)
    }
    gameStatistics.gamePoints.push(partialStatistics)
    gameStatistics.result = result
    return gameStatistics
}

export default game