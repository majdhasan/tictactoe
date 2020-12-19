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
        socketRef.current.on('gameCreated', data => {
            setGame(data.game)
        })

        socketRef.current.on('gameUpdated', data => {
            console.log("gameUpdated", data);
            setGame(data.game)
        })
    });

    const handleClick = e => {
        const { name } = e.target;
        const newPlayBoard = game.playBoard
        newPlayBoard[name] = player.symbol
        setGame({ ...game, playBoard: newPlayBoard })
        socketRef.current.emit("updateGame", { gameId: game.id, playerId: player.id, box: name })
        console.log(`the box with the name ${name} has been clicked`);
    }
    return (

        <div className="home-header">
            { player && <p>Hello {player.name}</p>}
            <h1>Its your Turn 👇</h1>
            <div className="board">

                {game && game.playBoard.map((box, index) => {

                    if (player && game && player.id !== game.playerTurn) {
                        return (
                            <div key={index + "box"} className="box" id={`box-${index}`}>
                                <button disabled name={"box" + index} onClick={handleClick} className="box-button">{box}</button>
                            </div>
                        )
                    } else {
                        return (
                            <div key={index + "box"} className="box" id={`box-${index}`}>
                                <button key={index + "box"} name={index} onClick={handleClick} className="box-button">{box}</button>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export { Game }