/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-09-02 13:14:42
 * @modify date 2019-09-02 13:14:42
 * @desc Dashboard Header
 */

import React, { FunctionComponent } from 'react';
import { Dropdown, Button } from 'antd';
import useRouter from 'use-react-router';

import {
	DashboardHeader,
	HeaderLogo,
	HeaderPerfil,
	HeaderNavigation,
	HeaderNavItem
} from '../../assets/styles/layouts/Header';
import Menu from './Menu';
import logo from '../../assets/images/ava-logo.png';

const Header: FunctionComponent = () => {
	const { history } = useRouter();

	return (
		<DashboardHeader>
			<HeaderNavigation>
				<HeaderLogo src={logo} />
				<HeaderNavItem onClick={() => history.push('/')}>Cursos</HeaderNavItem>
			</HeaderNavigation>
			<HeaderPerfil>
				<Dropdown overlay={<Menu history={history} />}>
					<Button shape="circle" icon="user" />
				</Dropdown>
			</HeaderPerfil>
		</DashboardHeader>
	);
};

export default Header;
