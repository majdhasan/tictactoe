import React, { useState } from 'react'

function JoinGameForm() {

    const [id, setId] = useState('');

    const handleChange = e => {
        const { value } = e.target;
        setId(value);
    }

    const handleClick = e => {
        if (id !== '') {
            e.preventDefault();
            console.log(id);
        }

        // TODO
    }

    return (
        <div>
            <div className="section-hedaer">
                Join an existing game
            </div>
            <form action="">

                <div class="form-group">
                    <input value={id} onChange={handleChange} type="id" class="form-control" id="exampleInputEmail1" aria-describedby="idHelp" placeholder="Enter Game ID" />
                    <small id="idHelp" class="form-text text-muted">Ask your opponent for the ID</small>
                </div>
                <button onClick={handleClick} type="button" class="btn btn-primary btn-lg btn-block">Join</button>

            </form>
        </div>
    )
}

export { JoinGameForm }