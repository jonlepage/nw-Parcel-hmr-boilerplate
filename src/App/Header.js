import React from 'react';
import { Box } from '@material-ui/core';

import { view } from '@risingstack/react-easy-state';
const Header = () => {
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
				logo
			</Box>
			<Box p={0.5} m={0.5} bgcolor='grey.300'>
				navigations
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
					Item 1
				</Box>
				<Box m={0.2} bgcolor='grey.300'>
					Item 1
				</Box>
				<Box m={0.2} bgcolor='grey.300'>
					Item 1
				</Box>
			</Box>
			<Box m={0.5} bgcolor='grey.300' flexWrap='nowrap'>
				item
			</Box>
			<Box m={0.5} bgcolor='grey.300' flexWrap='nowrap'>
				_ [] X
			</Box>
		</Box>
	);
};

export default view(Header);
