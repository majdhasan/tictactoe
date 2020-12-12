import React from 'react'

function JoinGameForm() {
    return (
        <div>
            <div className="section-hedaer">
                Join an existing game
            </div>
            <form action="">

                <div class="form-group">
                    <input type="id" class="form-control" id="exampleInputEmail1" aria-describedby="idHelp" placeholder="Enter Game ID" />
                    <small id="idHelp" class="form-text text-muted">Ask your opponent for the ID</small>
                </div>
                <button type="button" class="btn btn-primary btn-lg btn-block">Join</button>

            </form>
        </div>
    )
}

export { JoinGameForm }