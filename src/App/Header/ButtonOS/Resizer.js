import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Store_Global, UTILITY } from '../../../stores/Store_Global';
const win = UTILITY.isNw() ? nw.Window.get() : void 0;

const Resizer = () => {
	const { APP } = Store_Global;
	APP._isMaximised ? win?.restore() : win?.maximize();
	return (
		<Box
			className='OsWin button'
			px={2}
			mx={0}
			onClick={(e) => {
				APP._isMaximised = !APP._isMaximised;
			}}
		>
			[]
		</Box>
	);
};

export default view(Resizer);
