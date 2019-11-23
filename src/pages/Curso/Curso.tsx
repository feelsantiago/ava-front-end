import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Tree, Button } from 'antd';
import useRouter from 'use-react-router';

import {
	CursoHeader,
	CursoContent,
	CursoDescription,
	CursoSubscription,
	CursoProfessorArea,
	ProfessorLogoArea,
	ProfessorDescriptionArea,
	SubscriptionButton
} from '../../assets/styles/pages/Curso';
import { removeLayoutPadding } from '../../redux/layout/actions';

import reactLogo from '../../assets/images/react-logo.svg';
import professorLogo from '../../assets/images/professor-logo.svg';
import { AntTreeNodeSelectedEvent } from 'antd/lib/tree';
import { useParams } from 'react-router';
import { cursoService } from '../../services/curso.service';
import { CursoModel } from '../../models/curso.model';

const { TreeNode } = Tree;

const Curso: FunctionComponent = () => {
	const dispatch = useDispatch();
	const { history } = useRouter();
	const { id } = useParams();
	const [ subscription, setSubscription ] = useState(false);
	const [ curso, setCurso ] = useState<CursoModel>();

	useEffect(
		() => {
			dispatch(removeLayoutPadding({ padding: false }));

			return function returnLayoutPadding () {
				dispatch(removeLayoutPadding({ padding: true }));
			};
		},
		[ dispatch ]
	);

	useEffect(() => {
		const curso = cursoService.getById(id);
		setSubscription(curso ? curso.subscription : false);
		setCurso(curso);
	}, []);

	if (!curso) return <div>Curso Not Found</div>;

	/** Handle Curso Tree Selected Aula */
	const onSelectHandle = (selectedKeys: string[], info: AntTreeNodeSelectedEvent) => {
		const [ moduleIndex, lessonIndex ] = selectedKeys[0].split('-').map((element) => parseInt(element));
		history.push(`/aula/${curso.id}/${moduleIndex}/${lessonIndex}}`);
	};

	return (
		<div id="app-curso-page">
			<CursoHeader>
				<img alt="curso-logo" src={reactLogo} />
				<h1>{curso.title}</h1>
			</CursoHeader>
			<CursoContent>
				<CursoDescription>{curso.description}</CursoDescription>
				<CursoSubscription>
					{curso.owner ? (
						<Button size="large" onClick={() => history.push(`/editar/curso/${curso.id}`)}>
							Editar Curso
						</Button>
					) : (
						<SubscriptionButton
							size="large"
							subscription={subscription}
							onClick={() => {
								curso.subscription = !curso.subscription;
								setSubscription(curso.subscription);
							}}
						>
							{subscription ? 'Inscrito' : 'Se Inscrever'}
						</SubscriptionButton>
					)}
				</CursoSubscription>
				<CursoProfessorArea>
					<Row>
						<Col span={1}>
							<ProfessorLogoArea alt="professor-logo" src={professorLogo} />
						</Col>
						<Col span={1} />
						<Col span={22}>
							<ProfessorDescriptionArea>
								<h3>{curso.professor.name}</h3>
								<p>{curso.professor.description}</p>
							</ProfessorDescriptionArea>
						</Col>
					</Row>
				</CursoProfessorArea>
				<Tree checkable defaultExpandedKeys={[ '0', '1' ]} onSelect={onSelectHandle}>
					{curso.modules.map((module, index) => (
						<TreeNode key={index.toString()} title={module.name} disableCheckbox selectable={false}>
							{module.lessons.map((lesson, lessonIndex) => (
								<TreeNode title={lesson.title} key={`${index}-${lessonIndex}`} disableCheckbox />
							))}
						</TreeNode>
					))}
				</Tree>
			</CursoContent>
		</div>
	);
};

export default Curso;
