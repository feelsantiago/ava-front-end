/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-08-26 12:43:13
 * @modify date 2019-08-26 12:43:13
 * @desc Default layout for dashboard
 */

import React, { FunctionComponent } from 'react';
import { Layout, Breadcrumb, BackTop } from 'antd';

import Header from '../components/Header';
import { DashboardContent, DashboardChildrenContent, Container } from '../assets/styles/layouts/Content';
import { DashboardFooter, FooterText } from '../assets/styles/layouts/Footer';

const Dashboard: FunctionComponent = ({ children }) => {
	return (
		<div id="app-dashboard">
			<Layout>
				<Container>
					<Header />
					<DashboardContent>
						<Breadcrumb style={{ margin: '84px 16px 16px 0px' }}>
							<Breadcrumb.Item>User</Breadcrumb.Item>
							<Breadcrumb.Item>Bill</Breadcrumb.Item>
						</Breadcrumb>
						<DashboardChildrenContent>{children}</DashboardChildrenContent>
					</DashboardContent>
					<BackTop />
					<DashboardFooter>
						<FooterText>Upplify Inc ©2019</FooterText>
					</DashboardFooter>
				</Container>
			</Layout>
		</div>
	);
};

export default Dashboard;
