/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-09-02 13:14:42
 * @modify date 2019-09-02 13:14:42
 * @desc Dashboard Header
 */

import React, { FunctionComponent } from 'react';
import useRouter from 'use-react-router';

import { DashboardHeader, HeaderLogo } from '../../assets/styles/layouts/Header';
import authService from '../../services/auth-service';
import logo from '../../assets/images/ava-logo.png';

const Header: FunctionComponent = () => {
	const { history } = useRouter();

	return (
		<div id="app-header">
			<DashboardHeader>
				<HeaderLogo src={logo} />
			</DashboardHeader>
		</div>
	);
};

export default Header;
