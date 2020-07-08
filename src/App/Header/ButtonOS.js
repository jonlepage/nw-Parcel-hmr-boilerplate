import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import Minimizer from './ButtonOS/Minimizer';
import Resizer from './ButtonOS/Resizer';
import Exit from './ButtonOS/Exit';

const ButtonOS = () => {
	return (
		<Box
			className='OsWin'
			display='flex'
			justifyContent='flex-end'
			alignItems='flex-start'
		>
			<Minimizer />
			<Resizer />
			<Exit />
		</Box>
	);
};

export default view(ButtonOS);
