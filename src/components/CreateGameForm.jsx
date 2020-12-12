import React from 'react'


export default function CreateGameForm() {
    return (
        <div>
            <div className="section-hedaer">
                Create a new game
            </div>
            <form action="">
                <div class="form-group">
                    <input type="name" class="form-control" id="name" placeholder="Enter Your Nickname" />
                </div>
                <button type="button" class="btn btn-primary btn-lg btn-block">Create</button>

            </form>
        </div>
    )
}

export { CreateGameForm }