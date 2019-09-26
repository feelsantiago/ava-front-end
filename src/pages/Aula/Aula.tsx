import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';

import { removeLayoutPadding } from '../../redux/layout/actions';
import { AulaLayout, AulaSider, AulaContent, AulaMenu } from '../../assets/styles/pages/Aula';
import VideoAula from '../../components/Aula/VideoAula';
import Discussao from '../../components/Aula/Discussao';
import Atividade from '../../components/Aula/Atividade';

const { Item } = Menu;

const Aula: FunctionComponent = () => {
	const dispatch = useDispatch();
	const [ content, setContent ] = useState('discussao');

	useEffect(
		() => {
			dispatch(removeLayoutPadding({ padding: false }));

			return function returnLayoutPadding () {
				dispatch(removeLayoutPadding({ padding: true }));
			};
		},
		[ dispatch ]
	);

	const renderContent = (content: string) => {
		switch (content) {
			case 'aula':
				return <VideoAula />;
			case 'discussao':
				return <Discussao />;
			case 'atividade':
				return <Atividade />;
			default:
				return <VideoAula />;
		}
	};

	return (
		<AulaLayout>
			<AulaSider>
				<AulaMenu mode="inline" defaultSelectedKeys={[ 'discussao' ]}>
					<Item key="aula" onClick={() => setContent('aula')}>
						<span>
							<Icon type="play-circle" />
							Aula
						</span>
					</Item>
					<Item key="discussao" onClick={() => setContent('discussao')}>
						<span>
							<Icon type="usergroup-add" />
							Discussão
						</span>
					</Item>
					<Item key="atividade" onClick={() => setContent('atividade')}>
						<span>
							<Icon type="form" />
							Atividade
						</span>
					</Item>
				</AulaMenu>
			</AulaSider>
			<AulaContent>{renderContent(content)}</AulaContent>
		</AulaLayout>
	);
};

export default Aula;
