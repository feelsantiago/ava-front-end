/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-09-02 13:17:38
 * @modify date 2019-09-02 13:17:38
 * @desc Define headers styles
 */

import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

const { Header } = Layout;

export const DashboardHeader = styled((props) => <Header {...props} />)`
	background: #000B30; 
	padding: 0;
	position: fixed;
    z-index: 1;
	width: 100%;
	display: flex;
    justify-content: space-between;
`;

export const HeaderLogo = styled.img`
	width: 35px;
	height: 35px;
	margin-left: 50px;
	cursor: pointer;
`;

export const HeaderPerfil = styled.div`
	float: right;
	margin-right: 50px;
`;

export const HeaderNavigation = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
`;

export const HeaderNavItem = styled.div`
	margin: 0 25px;
	display: flex;
	color: white;
	background: #1890ff;
	height: 64px;
	padding: 0 20px;

	:hover {
		cursor: pointer;
	}
`;
