import React, { useState } from 'react';
import { view, store } from '@risingstack/react-easy-state';
import { Box } from '@material-ui/core';
import { Dropdown, Typography, Menu } from 'antd';
import { MenueOS_store } from './MenueOS.store';
const { Text } = Typography;

export const Store_MenueOS = store({
	DATA: [
		{
			_root: true,
			_id: 'File',
			_txt: 'File',

			_underline: 'F',
			_iconPath: '',
			shortKey: ['ctrl', 'f'],
			overlay: [
				'newProject',
				'loadProjet',
				'_split',
				'saveProjet',
				'saveAsProjet',
				'exports',
				'_split',
				'projetSetting',
				'_split',
				'closeProjet',
				'exitApp',
			],
		},
		{
			_id: '_split',
			_txt: '',
		},
		{
			_root: false,
			_id: 'newProject',
			_txt: '-New project',

			_underline: 'N',
			_iconPath: '../../res/img/menu/NEW.png',
			shortKey: ['ctrl', 'N'],
			overlay: [],
		},
		{
			_root: false,
			_id: 'loadProjet',
			_txt: '-Load Projet',

			_underline: 'L',
			_iconPath: '../../res/img/menu/LOAD.png',
			shortKey: ['ctrl', 'L'],
			overlay: [],
		},
		{
			_root: false,
			_id: 'saveProjet',
			_txt: '-save',
			_underline: 's',
			_iconPath: '../../res/img/menu/SAVE.png',
			shortKey: ['ctrl', 's'],
			overlay: [],
		},
		{
			_root: false,
			_id: 'saveAsProjet',
			_txt: '-save as',

			_underline: 's',
			_iconPath: '../../res/img/menu/SAVEAS.png',
			shortKey: ['ctrl', 'shift', 's'],
			overlay: [],
		},
		{
			_root: false,
			_id: 'exports',
			_txt: '-save as',

			_underline: 's',
			_iconPath: '../../res/img/menu/EXPORT.png',
			shortKey: ['ctrl', 'e'],
			overlay: [],
		},
		{
			_root: false,
			_id: 'projetSetting',
			_txt: '-Settings',

			_underline: 's',
			_iconPath: '../../res/img/menu/SETTING.png',
			shortKey: ['ctrl', 'e'],
			overlay: [],
		},
		{
			_root: false,
			_id: 'closeProjet',
			_txt: '-Close',

			_underline: '',
			_iconPath: '../../res/img/menu/CLOSE.png',
			shortKey: [],
			overlay: [],
		},
		{
			_root: false,
			_id: 'exitApp',
			_txt: '-Exit',

			_underline: '',
			_iconPath: '../../res/img/menu/EXIT.png',
			shortKey: [],
			overlay: [],
		},
		{
			_root: true,
			_id: 'Edition',
			_txt: 'Edition',

			_underline: 'E',
			_iconPath: '',
			shortKey: ['ctrl', 'f'],
			overlay: [],
		},
		{
			_root: true,
			_id: 'Navigate',
			_txt: 'Navigate',

			_underline: 'N',
			_iconPath: '',
			shortKey: ['ctrl', 'f'],
			overlay: [],
		},
		{
			_root: true,
			_id: 'View',
			_txt: 'View',

			_underline: 'V',
			_iconPath: '',
			shortKey: ['ctrl', 'f'],
			overlay: [],
		},
		{
			_root: true,
			_id: 'Help',
			_txt: 'Help',

			_underline: 'H',
			_iconPath: '',
			shortKey: ['ctrl', 'f'],
			overlay: [],
		},
	],
	getOverlay(id) {
		const { overlay } = Store_MenueOS.getByID(id);
		return (
			<Menu>
				{overlay.map((id, i) => {
					const { _id, _txt, _iconPath, shortKey } = Store_MenueOS.getByID(id);
					if (_txt) {
						return (
							<Menu.Item key={i} className='OsMenue'>
								<Text type='secondary'>
									<img className='OsMenue' src={_iconPath} alt='Logo' />
									{_txt}
									{shortKey && (
										<Text code type='warning'>
											{shortKey}
										</Text>
									)}
								</Text>
							</Menu.Item>
						);
					} else {
						return <Menu.Divider key={i} />;
					}
				})}
			</Menu>
		);
	},
	getByID(id) {
		return this.DATA.find((data) => data._id === id);
	},
	getRoots() {
		return this.DATA.filter((data) => data._root);
	},
});

const MenueOS = () => {
	const { getOverlay } = Store_MenueOS;
	const DATA = Store_MenueOS.getRoots();
	function underline(_txt = '', _underline = '') {
		const arr = _txt.split(_underline, 2);
		return (
			<>
				{arr[1] && arr[0]}
				<Text underline>
					<b>{_underline}</b>
				</Text>
				<Text>{arr[1] || arr[0]}</Text>
			</>
		);
	}
	return (
		<Box className='OsMenue' display='flex'>
			{DATA.map((data) => {
				const { _id, _txt, _underline } = data;
				return (
					<Dropdown
						key={_id}
						className='OsMenue'
						overlay={getOverlay(_id)}
						trigger={['click']}
					>
						<Text type='secondary'>{underline(_txt, _underline)}</Text>
					</Dropdown>
				);
			})}
		</Box>
	);
};

export default view(MenueOS);
