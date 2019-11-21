import React, { FunctionComponent } from 'react';
import { Menu as AntMenu, Icon } from 'antd';

import authService from '../../services/auth.service';
import { History } from 'history';

interface MenuProps {
	history: History;
}

const Menu: FunctionComponent<MenuProps> = ({ history }) => {
	return (
		<AntMenu>
			<AntMenu.Item key="1" onClick={() => console.log(1)}>
				<Icon type="user" />
				Perfil
			</AntMenu.Item>
			<AntMenu.Item
				key="2"
				onClick={() => {
					authService.logout();
					history.push('/login');
				}}
			>
				<Icon type="logout" />
				Sair
			</AntMenu.Item>
		</AntMenu>
	);
};

export default Menu;
