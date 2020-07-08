import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Store_Main, UTILITY } from '../../../stores/Store_Global';

const Exit = () => {
	return (
		<Box
			className='OsWin button btn-exit'
			px={2}
			mx={0}
			onClick={(e) => {
				Store_Main.SaveData();
				UTILITY.isNw() && nw.App.quit();
			}}
		>
			X
		</Box>
	);
};

export default view(Exit);
