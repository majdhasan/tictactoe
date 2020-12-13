import React, { useState, useEffect, useRef } from 'react'
import io from 'socket.io-client'


function Game({ gameId, name }) {

    const SERVER = 'http://localhost:5001/'

    const [player, setPlayer] = useState({})
    const [game, setGame] = useState({})
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
            console.log("playerCreated", data);
        })

        socketRef.current.on('gameUpdated', data => {
            console.log("gameUpdated", data);
        })
    });
    return (
        <div>
            <h1>Game is on </h1>
        </div>
    )
}

export { Game }