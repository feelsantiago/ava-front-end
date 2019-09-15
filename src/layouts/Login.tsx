/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-08-26 12:43:37
 * @modify date 2019-08-26 12:43:37
 * @desc Default layout for authentication pages
 */

import React, { FunctionComponent } from 'react';
import { Layout } from 'antd';

import { LoginFooter, FooterText } from '../assets/styles/layouts/Footer';

const { Content } = Layout;

const Login: FunctionComponent = ({ children }) => {
	return (
		<div id="app-login">
			<Layout>
				<Content>{children}</Content>
				<LoginFooter>
					<FooterText>Upplify Inc ©2019</FooterText>
				</LoginFooter>
			</Layout>
		</div>
	);
};

export default Login;
