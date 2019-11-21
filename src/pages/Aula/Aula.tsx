import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Menu, Icon } from 'antd';

import { removeLayoutPadding } from '../../redux/layout/actions';
import { AulaLayout, AulaSider, AulaContent, AulaMenu } from '../../assets/styles/pages/Aula';
import VideoAula from '../../components/Aula/VideoAula';
import Discussao from '../../components/Aula/Discussao';
import Atividade from '../../components/Aula/Atividade';
import { useParams } from 'react-router';
import { cursoService } from '../../services/curso.service';

const { Item } = Menu;
const firstContent = 'aula';

const Aula: FunctionComponent = () => {
	const dispatch = useDispatch();
	const [ content, setContent ] = useState(firstContent);
	const { id, moduleIndex, lessonIndex } = useParams();
	const curso = cursoService.getById(id);

	useEffect(
		() => {
			dispatch(removeLayoutPadding({ padding: false }));

			return function returnLayoutPadding () {
				dispatch(removeLayoutPadding({ padding: true }));
			};
		},
		[ dispatch ]
	);

	if (!curso || !moduleIndex || !lessonIndex) return <div>Curso Not Found</div>;
	const aula = curso.modules[parseInt(moduleIndex)].lessons[parseInt(lessonIndex)];

	const renderContent = (content: string) => {
		switch (content) {
			case 'discussao':
				return <Discussao messages={aula.messages} />;
			case 'atividade':
				return <Atividade exercise={aula.exercises} />;
			default:
				return <VideoAula title={aula.title} description={aula.description} video={aula.video} />;
		}
	};

	return (
		<AulaLayout>
			<AulaSider>
				<AulaMenu mode="inline" defaultSelectedKeys={[ firstContent ]}>
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
