import React from 'react';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';

const { Content, Sider } = Layout;

export const AulaLayout = styled((props) => <Layout {...props} />)`
    padding: 24px 0; 
    background: #fff;
`;

export const AulaSider = styled((props) => <Sider {...props} />)`
    width: 200px;
`;

export const AulaContent = styled((props) => <Content {...props} />)`
    padding: 0 24px; 
    min-height: 280px;
`;

export const AulaMenu = styled((props) => <Menu {...props} />)`
    height: 100%;
`;
