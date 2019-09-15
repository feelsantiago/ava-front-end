import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

interface HomeCardProps {
	background: string;
}

export const HomeCard = styled((props) => <Card {...props} />)`
	width: 250px;
	height: 100px;
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
    border-radius: 10px !important;
    cursor: pointer;
    background: ${(props: HomeCardProps) => props.background} !important;

    :hover {
        border: 1px solid #1890ff;
    }
`;

export const HomeCardText = styled.p`
	margin: 0;
	color: white;
	font-size: 18px;
`;
