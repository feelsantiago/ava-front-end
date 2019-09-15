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
`;
