// Tabla de de puntuaciones
const points = ['0', '15', '30', '40', 'Gana', 'Deuce', 'Advantage', 'Gana']

// Generar un ganador aleatorio (jugador 1 ó jugador 2)
const randomPoint = () => Math.floor(Math.random() * 2) + 1

// Mostrar la puntuación le la ronda
const showScore = (player1, player2, player1Points, player2Points) => {
    if (player1Points === 4) console.log(`Puntuación -> Gana ${player1}`)
    else if (player1Points === 3 && player2Points === 3) console.log(`Puntuación -> Deuce`)
    else if (player2Points === 4) console.log(`Gana ${player2}`)
    else if (player1Points === 5 && player2Points === 5) console.log(`Puntuación -> Deuce`)
    else if (player1Points === 6 && player2Points < 6) console.log(`Puntuación -> Advantage ${player1}`)
    else if (player2Points === 6 && player1Points < 6) console.log(`Puntuación -> Advantage ${player2}`)
    else if (player1Points === 7 && player2Points< 6) console.log(`Puntuación -> Gana ${player1}`)
    else if (player2Points === 7 && player1Points< 6) console.log(`Puntuación -> Gana ${player2}`)
    else if (player1Points === 6 && player2Points === 6) console.log(`Puntuación -> Deuce`)
    else console.log(`Puntuación -> ${points[player1Points]} - ${points[player2Points]}`)
}

// Simular una ronda. Recibe como parámetros, los nombres de los jugadoes. El primer parámetro es el jugador 1, y el segundo es el jugador2
const round = (player1, player2, roundStatistics) => {
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
    //console.log('Empieza la ronda entre ' + player1 + ' y ' + player2)
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
        //Se suma una ronda
        roundStatistics.roundNumber += 1
        // Se guarda la estadística de la ronda
        partialStatistics.push(`${points[player1Points]} - ${points[player2Points]}`)
        // Se muestra la puntuación
        //showScore(player1, player2, player1Points, player2Points)
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
            //Se suma una ronda
            roundStatistics.roundNumber += 1
            // Se guarda la estadística de la ronda
            partialStatistics.push(`${points[player1Points]} - ${points[player2Points]}`)
            // Se muestra la puntuación
            //showScore(player1, player2, player1Points, player2Points)
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
    roundStatistics.points = partialStatistics
    roundStatistics.result = result
    return roundStatistics
}

export default round
