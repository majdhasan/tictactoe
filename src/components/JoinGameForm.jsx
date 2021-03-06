import React, { useState } from 'react'

function JoinGameForm({ onSubmit }) {

    const [state, setState] = useState({ id: '', name: '' })


    const handleChange = e => {
        const { id, value } = e.target;
        setState(oldvalue => {
            return { ...oldvalue, [id]: value }
        }
        )
    };

    const handleClick = () => {
        const { id, name } = state;
        if (id !== '' && name !== '') {
            onSubmit(state.name, state.id, 'join')
        }
    }

    return (
        <div>
            <div className="section-hedaer">
                Join an existing game
            </div>
            <form action="">

                <div className="form-group">
                    <input value={state.id} onChange={handleChange} type="id" className="form-control" id="id" aria-describedby="idHelp" placeholder="Enter Game ID" /><br />
                    <input value={state.name} onChange={handleChange} type="name" className="form-control" id="name" placeholder="Enter Your Nickname" />
                    <small id="idHelp" className="form-text text-muted">Ask your opponent for the ID</small>
                </div>
                <button onClick={handleClick} type="button" className="btn btn-primary btn-lg btn-block">Join</button>

            </form>
        </div>
    )
}

export { JoinGameForm }