import React, { useEffect } from 'react'
import socketClient from 'socket.io-client'

import { Navigation, CreateGameForm, JoinGameForm } from '../components'

function Home() {

    const handleSubmit = (name, id) => {

        console.log(`name: ${name} and id: ${id}`);
    }

    return (
        <div>
            {/* <Navigation></Navigation> */}
            <div className="container">
                <div className="home-header">
                    Tic Tac Win
                </div>
                <hr />
                <p className="description">Start a new game or join an existing game</p>
                <hr />
                <CreateGameForm onSubmit={handleSubmit} />
                <hr />
                <JoinGameForm onSubmit={handleSubmit} />
            </div>
        </div>
    )
}

export { Home };