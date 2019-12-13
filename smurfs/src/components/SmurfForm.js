import React, { useState, useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';

const SmurfsForm = () => {
	const [ newSmurf, setNewSmurf ] = useState({
		name: '',
		age: '',
		height: ''
	});
	const { addSmurfs } = useContext(SmurfContext);

	const handleChange = e => {
		setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
	};

	const handleSubmit = () => {
		addSmurfs(newSmurf);
	};

	return (
		<div className="SmurfForm">
			<h2>Smurf it up</h2>
			<form onSubmit={e => handleSubmit(e)}>
				<input
					type="text"
					name="name"
					placeholder="name"
					value={newSmurf.name}
					onChange={e => handleChange(e)}
				/>
				<input
					type="number"
					name="age"
					placeholder="age"
					value={newSmurf.age}
					onChange={e => handleChange(e)}
				/>
				<input
					type="text"
					name="height"
					placeholder="height"
					value={newSmurf.height}
					onChange={e => handleChange(e)}
				/>
				<button>Add Smurf</button>
			</form>
		</div>
	);
};

export default SmurfsForm;

