// Tabla de de puntuaciones
const points = ['   0', '  15', '  30', '  40', 'Gana', 'Deu.', 'Adv.', 'Gana']

// Generar un ganador aleatorio (jugador 1 ó jugador 2)
const randomPoint = () => Math.floor(Math.random() * 2) + 1

const showScore2 = (partialStatistics, player1, player2, gameCounter) => {
    let stringPlayer1 = ''
    let stringPlayer2 = ''
    console.log(`          Comienza ronda ${gameCounter}`)
    for (let i = 0; i < partialStatistics.length; i++) {
        stringPlayer1 = stringPlayer1 + (`  ${partialStatistics[i].substring(0, 4)}`)
    }
    console.log(`          ${player1} -> ${stringPlayer1}`)
    for (let i = 0; i < partialStatistics.length; i++) {
        stringPlayer2 = stringPlayer2 + (`  ${partialStatistics[i].substring(7, 11)}`)
    }
    console.log(`          ${player2} -> ${stringPlayer2}`)
}

// Simular una ronda. Recibe como parámetros, los nombres de los jugadoes. El primer parámetro es el jugador 1, y el segundo es el jugador2
const round = (player1, player2, gameCounter) => {
    // Puntos acumulados por cada jugador
    let player1Points = 0
    let player2Points = 0
    // Resultado de la ronda
    let result = 0
    // Fase 0 hasta que haya un ganador o se llegue a Deuce
    // Fase 1 hasta que haya un ganador despues de un deuce
    let phase = 0
    // Estadísticas de la ronda
    let partialStatistics = []
    // Empieza la ronda
    //Hasta que haya un deuce o un ganador
    while (phase === 0) {
        // Se juega la ronda
        const playPoint = randomPoint()
        // Se suma el punto al jugador ganador
        if (playPoint === 1) { 
            player1Points += 1
        } else {
            player2Points += 1
        }
        // Se guarda la estadística de la ronda
        partialStatistics.push(`${points[player1Points]} - ${points[player2Points]}`)
        // Se muestra la puntuación
        // Gana player1
        if (player1Points === 4 && player2Points < 3) {
            result = 1
            phase = 1
        }
        //Gana player2  
        if (player2Points === 4 && player1Points < 3) {
            result = 2
            phase = 1
        }
        // 40 - 40 -> Deuce
        if (player1Points === 3 && player2Points === 3) {
            player1Points = 5
            player2Points = 5
            phase = 1
        }
    }
    // Hay un ganador?
    if (result !== 1 && result !== 2) {
        //Estoy en Deuce
        while (phase === 1) {
            // Se juega la ronda
            const playPoint = randomPoint()
            if (playPoint === 1) { 
                player1Points += 1
            } else {
                player2Points += 1
            }
            // Se guarda la estadística de la ronda
            partialStatistics.push(`${points[player1Points]} - ${points[player2Points]}`)
            // Se muestra la puntuación
            // Gana player1
             if (player1Points === 7 && player2Points < 6) {
                result = 1
                phase = 0
            }
            //Gana player2  
            if (player2Points === 7 && player1Points < 6) {
                result = 2
                phase = 0
            }
            // 40 - 40 -> Deuce
            if (player1Points === 6 && player2Points === 6) {
                player1Points = 5
                player2Points = 5
            }
        }
    }
    // Se guarda el resultado de la ronda
    showScore2(partialStatistics, player1, player2, gameCounter)
    const roundStatistics = {}
    roundStatistics.roundPoints = partialStatistics
    roundStatistics.result = result
    //console.log('Salida round. roundStatistics: ', roundStatistics)
    return roundStatistics
}

export default round
