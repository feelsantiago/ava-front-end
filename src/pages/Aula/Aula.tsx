import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';

import { removeLayoutPadding } from '../../redux/layout/actions';
import { AulaLayout, AulaSider, AulaContent, AulaMenu } from '../../assets/styles/pages/Aula';

const { Item } = Menu;

const Aula: FunctionComponent = () => {
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(removeLayoutPadding({ padding: false }));

			return function returnLayoutPadding () {
				dispatch(removeLayoutPadding({ padding: true }));
			};
		},
		[ dispatch ]
	);

	return (
		<AulaLayout>
			<AulaSider>
				<AulaMenu mode="inline" defaultSelectedKeys={[ 'aula' ]}>
					<Item key="aula">
						<span>
							<Icon type="play-circle" />
							Aula
						</span>
					</Item>
					<Item key="discussao">
						<span>
							<Icon type="usergroup-add" />
							Discussão
						</span>
					</Item>
					<Item key="atividade">
						<span>
							<Icon type="form" />
							Atividade
						</span>
					</Item>
				</AulaMenu>
			</AulaSider>
			<AulaContent>Content</AulaContent>
		</AulaLayout>
	);
};

export default Aula;
