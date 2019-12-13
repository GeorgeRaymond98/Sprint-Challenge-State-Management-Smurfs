import React, {useState, useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContexts';

const SmurfForm = () => {
    const [ newSmurf, setNewSmurf ] = useState({
        name:"",
        age:"",
        height:""
    })
    const {addSmurf} = useContext(SmurfContext);

    const handleChanges = e => {
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value});
    }
    const handleSubmit = e => {
        addSmurf(newSmurf);
    }
    return (
        <div className="smurForm">
            <h2>Smurf it Up!</h2>
            <form onSubmit={e => handleSubmit(e)} >
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={newSmurf.name}
                    onChange={e => handleChanges(e)}
                />
                    <input
                    type="number"
                    name="age"
                    placeholder="age"
                    value={newSmurf.age}
                    onChange={e => handleChanges(e)}
                />
                <input
                    type="number"
                    name="height"
                    placeholder="height"
                    value={newSmurf.height}
                    onChange={e => handleChanges(e)}
                />
                <button>Add smurf </button>
            </form>
        </div>
    )
}

export default SmurfForm