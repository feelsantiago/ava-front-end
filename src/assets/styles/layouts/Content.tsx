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

export const DashboardLayout = styled((props) => <Layout {...props} />)`
	height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
`;

export const DashboardContent = styled((props) => <Content {...props} />)`
	margin: 24px 50px; 
	overflow: initial
`;

export const DashboardChildrenContent = styled.div`
	padding: 24px;
	background: #fff;
	min-height: 400px;
	box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.1);
`;
