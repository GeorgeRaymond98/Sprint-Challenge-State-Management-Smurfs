import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';
import Smurf from './Smurf';

const SmurfsList = (props) => {
	const { smurfs, deleteSmurf } = useContext(SmurfContext);

	return (
		<div className="SmurfsList">
			{smurfs && smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} deleteSmurf={deleteSmurf} />)}
		</div>
	);
};

export default SmurfsList; 
