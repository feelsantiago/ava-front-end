/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-09-02 13:17:38
 * @modify date 2019-09-02 13:17:38
 * @desc Define sidebar styles
 */

import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

const { Sider: AntSider } = Layout;

export const Sider = styled((props) => <AntSider {...props} />)`
	overflow: auto;
	height: 100vh;
`;

export const SideBarLogo = styled.div`
	height: 32px;
	margin: 16px;
`;

export const SideBarLogoImg =
	styled.img <
	{ collapsed: boolean } >
	`
	height: 32px;
	margin: ${(props) => (props.collapsed ? '10px' : '5px')};
`;
