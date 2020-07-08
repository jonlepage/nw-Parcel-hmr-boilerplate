import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { UTILITY } from '../../../stores/Store_Global';
const win = UTILITY.isNw() ? nw.Window.get() : void 0;

const Minimizer = () => {
	return (
		<Box
			className='OsWin button'
			px={2}
			mx={0}
			onClick={(e) => {
				win?.minimize();
			}}
		>
			_
		</Box>
	);
};

export default view(Minimizer);
