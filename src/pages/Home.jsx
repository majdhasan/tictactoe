import React, { useEffect, useState } from 'react'
import socketClient from 'socket.io-client'

import { Navigation, CreateGameForm, JoinGameForm } from '../components'
import { Game } from './Game';

function Home() {

    const [showGame, setShowGame] = useState(false)

    const handleSubmit = (name, id) => {
        console.log(`name: ${name} and id: ${id}`);
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
                {showGame && <Game />}
            </div>
        </div>
    )
}

export { Home };