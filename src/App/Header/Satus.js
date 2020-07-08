import React from 'react';
import { Box } from '@material-ui/core';
import { view } from '@risingstack/react-easy-state';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Satus = () => {
	return (
		<Box px={1} mx={1} bgcolor='grey.800'>
			<Avatar size='small' icon={<UserOutlined />} /> offline -Git
		</Box>
	);
};

export default view(Satus);
