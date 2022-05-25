import React from 'react';

// import onlineIcon from '../../icons/onlineIcon.png';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';

import './TextContainer.css';

const TextContainer = ({ users }) => (
<div className="textContainer">
	{
	users
		? (
		<div>
			<h1>People currently chatting:</h1>
			<div className="activeContainer">
			<h2>
				{users.map(({name}) => (
				<div key={name} className="activeItem">
					{name}
					<img alt="Online Icon" src={OnlinePredictionIcon}/>
				</div>
				))}
			</h2>
			</div>
		</div>
		)
		: null
	}
</div>
);

export default TextContainer;
