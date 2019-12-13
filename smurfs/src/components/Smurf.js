import React from 'react';

 const Smurf = props => {
    console.log(props);

    return (
        <div className="Card">
            <h2>{props.smurf.name}</h2>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
            <button onClick={()=> props.deleteSmurf(props.smurf.id)}>Be gone Smurf!</button>
        </div>
    )
}
export default Smurf;