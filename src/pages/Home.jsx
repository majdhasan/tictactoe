import React, { useEffect } from 'react'
import socketClient from 'socket.io-client'

import { Navigation, CreateGameForm, JoinGameForm } from '../components'

function Home() {
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
                <CreateGameForm></CreateGameForm>
                <hr />
                <JoinGameForm></JoinGameForm>
            </div>
        </div>
    )
}

export { Home };