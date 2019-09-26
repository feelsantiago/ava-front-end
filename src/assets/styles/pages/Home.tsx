import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

interface HomeCardProps {
	background: string;
}

export const HomeCard = styled((props) => <Card {...props} />)`
	width: 230px;
	height: 100px;
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
	border-radius: 10px !important;
	margin: 5px !important;
    cursor: pointer;
    background: ${(props: HomeCardProps) => props.background} !important;

    :hover {
        border: 1px solid #1890ff;
    }
`;

export const HomeCardAdd = styled(HomeCard)`
	background: #FFF;
	border: 1px dashed #92d5fb !important;

	:hover {
		border: 1px solid #92d5fb !important;
	}
`;

export const AddPlusImg = styled.img`
	height: 45px;
	width: 45px;
`;

export const HomeCardText = styled.p`
	margin: 0;
	color: white;
	font-size: 18px;
`;

export const HomeContent = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
