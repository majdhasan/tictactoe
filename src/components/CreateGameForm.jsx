import React, { useState } from 'react'


export default function CreateGameForm({ onSubmit }) {

    const [name, setName] = useState('');

    const handleChange = e => {
        const { value } = e.target;
        setName(value);
    }

    const handleClick = () => {

        if (name !== '') {
            onSubmit(name, null, 'create')
        }
    }

    return (
        <div>
            <div className="section-hedaer">
                Create a new game
            </div>
            <form >
                <div className="form-group">
                    <input value={name} onChange={handleChange} type="name" className="form-control" id="name" placeholder="Enter Your Nickname" />
                </div>
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={handleClick}>Create</button>

            </form>
        </div>
    )
}

export { CreateGameForm }