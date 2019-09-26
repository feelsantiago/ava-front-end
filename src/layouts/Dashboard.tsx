/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-08-26 12:43:13
 * @modify date 2019-08-26 12:43:13
 * @desc Default layout for dashboard
 */

import React, { FunctionComponent } from 'react';
import { Breadcrumb, BackTop } from 'antd';

import Header from '../components/Header';
import { DashboardContent, DashboardChildrenContent, DashboardLayout } from '../assets/styles/layouts/Content';
import { DashboardFooter, FooterText } from '../assets/styles/layouts/Footer';
import { Padding } from '../assets/styles/components/Common';
import { useSelector } from 'react-redux';
import { AppState } from '../redux/store';

const Dashboard: FunctionComponent = ({ children }) => {
	const layout = useSelector((state: AppState) => state.layout.state);

	return (
		<div id="app-dashboard">
			<DashboardLayout>
				<Header />
				<DashboardContent>
					<Breadcrumb style={{ margin: '84px 16px 16px 0px' }}>
						<Breadcrumb.Item>Cursos</Breadcrumb.Item>
					</Breadcrumb>
					<DashboardChildrenContent padding={layout.padding}>{children}</DashboardChildrenContent>
					<Padding value={10} />
					<DashboardFooter>
						<FooterText>Santiago's Bros. ©2019</FooterText>
					</DashboardFooter>
				</DashboardContent>
				<BackTop />
			</DashboardLayout>
		</div>
	);
};

export default Dashboard;
