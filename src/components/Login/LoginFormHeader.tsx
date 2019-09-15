/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-08-29 12:31:44
 * @modify date 2019-08-29 12:31:44
 * @desc Logo and app name for login form
 */

import React, { FunctionComponent } from 'react';

import { LoginLogo, LoginCardHeader } from '../../assets/styles/components/LoginForm';
import { AppName } from '../../assets/styles/components/Common';
import logo from '../../assets/images/shortify-logo.png';

const LoginFormHeader: FunctionComponent = () => {
	return (
		<LoginCardHeader>
			<LoginLogo alt="logo" src={logo} />
			<AppName>Shortify</AppName>
		</LoginCardHeader>
	);
};

export default LoginFormHeader;
