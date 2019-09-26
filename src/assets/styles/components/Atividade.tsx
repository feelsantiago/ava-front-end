import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

export const Content = styled.div`
	height: 280px;
	overflow: auto;
`;

export const SendButton = styled((props) => <Button {...props} />)`
    margin-top: 25px;
    background: rgba(55, 213, 51, 0.5);
    color: white;
    width: 170px;

    :hover {
        background-color: white;
        color: #37D433;
        border-color: #37D433;
    }
`;
