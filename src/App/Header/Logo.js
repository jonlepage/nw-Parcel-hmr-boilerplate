import React from 'react';
import { Box } from '@material-ui/core';
import { view } from '@risingstack/react-easy-state';

const Logo = () => {
	return (
		<Box px={1}>
			<img
				height={20}
				src='./res/icon/appicon.png'
				alt='Logo'
				title={'v1.0b'}
			/>
		</Box>
	);
};

export default view(Logo);
