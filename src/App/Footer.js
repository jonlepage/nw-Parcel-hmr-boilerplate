import React from 'react';
import { view } from '@risingstack/react-easy-state';
import { Box } from '@material-ui/core';

const Footer = () => {
	return (
		<Box
			className='OsNav'
			bgcolor='grey.700'
			display='flex'
			flexWrap='nowrap'
			alignItems='stretch'
			justifyContent='flex-end'
			//style={{ padding: 2, alignItems: 'center' }}
		>
			<Box p={0.5} m={0.5} bgcolor='grey.300'>
				box
			</Box>
			<Box p={0.5} m={0.5} bgcolor='grey.300'>
				box
			</Box>
			<Box p={0.5} m={0.5} bgcolor='grey.300'>
				box
			</Box>
			<Box
				p={0.5}
				m={0.5}
				flexWrap='nowrap'
				display='flex'
				flexGrow={1}
				justifyContent='center'
				bgcolor='background.paper'
			>
				<Box m={0.2} bgcolor='grey.300'>
					_box
				</Box>
			</Box>
			<Box m={0.5} bgcolor='grey.300' flexWrap='nowrap'>
				box
			</Box>
		</Box>
	);
};

export default view(Footer);
