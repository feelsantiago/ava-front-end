/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-08-29 12:29:27
 * @modify date 2019-08-29 12:29:27
 * @desc Define styles for login forms
 */

import React from 'react';
import styled from 'styled-components';
import { Card, Icon, Button } from 'antd';

import { BackgroundColors } from '../variables';
import { TextCenter } from './Common';

export const LoginCard = styled((props) => <Card {...props} />)`
	width: 320px;
	background: ${BackgroundColors.lightGrey} !important;
`;

export const LoginIcon = styled((props) => <Icon {...props} />)`
	color: rgba(0,0,0,.25)
`;

export const LoginSubmitButton = styled((props) => <Button {...props} />)`
	width: 100%;
`;

export const LoginForgot = styled.a`float: right;`;

export const LoginLogo = styled.img`
	width: 60px;
	margin-right: 8px;
`;

export const LoginCardHeader = styled(TextCenter)`
	cursor: pointer;
    margin-bottom: 10px;
`;
