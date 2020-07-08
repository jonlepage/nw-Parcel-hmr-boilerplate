import React from 'react';
import { Box } from '@material-ui/core';
import { view } from '@risingstack/react-easy-state';
import { Store_Global } from '../../stores/Store_Global';

const Title = () => {
	const { _projetName, _ext } = Store_Global.META;

	return (
		<Box
			display='flex'
			flexGrow={1}
			mx={1}
			justifyContent='center'
			alignItems='center'
		>
			<div>
				{_projetName}
				{_ext}
			</div>
		</Box>
	);
};

export default view(Title);
