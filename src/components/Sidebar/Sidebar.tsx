import React, { FunctionComponent, useState } from 'react';
import { Menu, Icon } from 'antd';

import { Sider, SideBarLogo, SideBarLogoImg } from '../../assets/styles/components/Sidebar';
import { AppName } from '../../assets/styles/components/Common';
import logo from '../../assets/images/shortify-logo.png';

const { SubMenu } = Menu;

const Sidebar: FunctionComponent = () => {
	const [ collapsed, setCollapsed ] = useState(false);

	const onCollapse = (collapsed: boolean) => {
		console.log(collapsed);
		setCollapsed(collapsed);
	};

	return (
		<div id="app-sidebar">
			<Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
				<SideBarLogo>
					<SideBarLogoImg collapsed={collapsed} src={logo} />
					{!collapsed && <AppName>Shortify</AppName>}
				</SideBarLogo>
				<Menu theme="dark" defaultSelectedKeys={[ '1' ]} mode="inline">
					<Menu.Item key="1">
						<Icon type="pie-chart" />
						<span>Option 1</span>
					</Menu.Item>
					<Menu.Item key="2">
						<Icon type="desktop" />
						<span>Option 2</span>
					</Menu.Item>
					<SubMenu
						key="sub1"
						title={
							<span>
								<Icon type="user" />
								<span>User</span>
							</span>
						}
					>
						<Menu.Item key="3">Tom</Menu.Item>
						<Menu.Item key="4">Bill</Menu.Item>
						<Menu.Item key="5">Alex</Menu.Item>
					</SubMenu>
					<SubMenu
						key="sub2"
						title={
							<span>
								<Icon type="team" />
								<span>Team</span>
							</span>
						}
					>
						<Menu.Item key="6">Team 1</Menu.Item>
						<Menu.Item key="8">Team 2</Menu.Item>
					</SubMenu>
					<Menu.Item key="9">
						<Icon type="file" />
						<span>File</span>
					</Menu.Item>
				</Menu>
			</Sider>
		</div>
	);
};

export default Sidebar;
