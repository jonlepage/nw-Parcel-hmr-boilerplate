import React from 'react';
import { view } from '@risingstack/react-easy-state';
import { Box } from '@material-ui/core';

const Body = () => {
	return (
		<Box
			className='OsNav'
			bgcolor='grey.700'
			display='flex'
			justifyContent='center'
			flexGrow={1}
			//style={{ padding: 2, alignItems: 'center' }}
		>
			<Box p={0.5} m={0.5} flexGrow={1} bgcolor='grey.300'>
				body
			</Box>
		</Box>
	);
};

export default view(Body);
