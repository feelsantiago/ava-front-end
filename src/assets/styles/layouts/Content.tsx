/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-09-02 13:17:38
 * @modify date 2019-09-02 13:17:38
 * @desc Define content styles
 */

import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

const { Content } = Layout;

export const DashboardContent = styled((props) => <Content {...props} />)`
	margin: 24px 50px; 
	overflow: initial
`;

export const DashboardChildrenContent = styled.div`
	padding: 24px;
	background: #fff;
	min-height: 420px;
	box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
	height: 100vh;
	-ms-flex: 1 1;
	flex: 1 1;
	width: 100%;
	overflow-y: auto;
	overflow-x: hidden;
`;
