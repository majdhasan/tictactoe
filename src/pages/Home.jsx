import React, { useEffect, useState } from 'react'
import socketClient from 'socket.io-client'

import { CreateGameForm, JoinGameForm } from '../components'
import { Game } from './Game';

function Home() {

    const [showGame, setShowGame] = useState(false)
    const [gameId, setGameId] = useState(false)
    const [name, setName] = useState(false)

    const handleSubmit = (name, id, type) => {
        console.log(`name: ${name} wants to ${type} a game`);
        setGameId(id)
        setName(name)
        setShowGame(true)
    }

    return (
        <div>
            <div className="container">
                {!showGame && (
                    <>
                        <div className="home-header">
                            Tic Tac Win
                        </div>
                        <p className="text-muted">Start a new game or join an existing game</p>
                        <hr />
                        <CreateGameForm onSubmit={handleSubmit} />
                        <hr />
                        <JoinGameForm onSubmit={handleSubmit} />
                    </>
                )}
                {showGame && <Game gameId={gameId} name={name} />}
            </div>
        </div>
    )
}

export { Home };