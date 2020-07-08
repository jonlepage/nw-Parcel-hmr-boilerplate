import React, { useState } from 'react';
import { view, store } from '@risingstack/react-easy-state';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import { Box } from '@material-ui/core';

const App = () => {
	return (
		<>
			<Box
				className='OsNav'
				bgcolor='grey.700'
				display='flex'
				flexGrow={1}
				justifyContent='center'
				flexDirection='column'
				//style={{ padding: 2, alignItems: 'center' }}
			>
				<Header />
				<Body />
				<Footer />
			</Box>
		</>
	);
};

export default view(App);
