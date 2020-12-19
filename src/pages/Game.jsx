import React, { useState, useEffect, useRef } from 'react'
import io from 'socket.io-client'


function Game({ gameId, name }) {

    const SERVER = 'http://localhost:5001/'

    const [player, setPlayer] = useState(null)
    const [game, setGame] = useState(null)

    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = io(SERVER, {
            transports: ['websocket'], jsonp: false
        });

        socketRef.current.connect();
        const eventType = gameId ? "joinGame" : 'createGame'
        socketRef.current.emit(eventType, { name, gameId })
    }, [SERVER, gameId, name])

    useEffect(() => {
        socketRef.current.on('playerCreated', data => {
            setPlayer(data.player)
        })
        socketRef.current.on('gameJoined', data => {
            setGame(data.game)
        })
        socketRef.current.on('gameCreated', data => {
            setGame(data.game)
        })

        socketRef.current.on('gameUpdated', data => {
            console.log("gameUpdated", data);
            if (game && data.game.id === game.id) {
                setGame(data.game)
            }

        })
    });

    const handleClick = e => {
        const { name } = e.target;
        socketRef.current.emit("updateGame", { gameId: game.id, playerId: player.id, box: name })
    }

    return (

        <div className="home-header">
            { player && <p>Hello {player.name}</p>}
            <h4>Game ID: {game && game.id}</h4>
            <h4>{(game && game.status === "waiting") ? "Please wait for the other player to join" : (game && game.playerTurn === player.id ? "Its your Turn 👇" : "It's the other player's turn")}</h4>
            <div className="board">

                {game && game.playBoard.map((box, index) => {
                    console.log(game.playBoard);
                    return (
                        <div key={index + "box"} className="box" id={`box-${index}`}>
                            <button disabled={player && game && (player.id !== game.playerTurn || game.status !== "started" || box !== null)} name={index} onClick={handleClick} className="box-button">{box}</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export { Game }