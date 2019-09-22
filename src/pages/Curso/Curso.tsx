import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Row, Col, Tree } from 'antd';

import {
	CursoHeader,
	CursoContent,
	CursoDescription,
	CursoSubscription,
	CursoProfessorArea,
	ProfessorLogoArea,
	ProfessorDescriptionArea
} from '../../assets/styles/pages/Curso';
import { removeLayoutPadding } from '../../redux/layout/actions';

import reactLogo from '../../assets/images/react-logo.svg';
import professorLogo from '../../assets/images/professor-logo.svg';

const { TreeNode } = Tree;

const Curso: FunctionComponent = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(removeLayoutPadding({ padding: false }));

		return function returnLayoutPadding () {
			dispatch(removeLayoutPadding({ padding: true }));
		};
	}, []);

	return (
		<div id="app-curso-page">
			<CursoHeader>
				<img alt="curso-logo" src={reactLogo} />
				<h1>Aprenda React do Zero</h1>
			</CursoHeader>
			<CursoContent>
				<CursoDescription>
					Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
					classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
					professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
					consectetur, from a Lorem Ipsum passage, and going through the cites
				</CursoDescription>
				<CursoSubscription>
					<Button size="large">Se Inscrever</Button>
				</CursoSubscription>
				<CursoProfessorArea>
					<Row>
						<Col span={1}>
							<ProfessorLogoArea alt="professor-logo" src={professorLogo} />
						</Col>
						<Col span={23}>
							<ProfessorDescriptionArea>
								<h3>Professor</h3>
								<p>
									There are many variations of passages of Lorem Ipsum available, but the majority
									have suffered alteration in some form, by injected humour.
								</p>
							</ProfessorDescriptionArea>
						</Col>
					</Row>
				</CursoProfessorArea>
				<Tree checkable defaultExpandedKeys={[ '0', '1' ]}>
					<TreeNode title="Modulo 1" key="0">
						<TreeNode title="Aula 1" key="0-0" />
						<TreeNode title="Aula 2" key="0-1" />
					</TreeNode>
					<TreeNode title="Modulo 12" key="1">
						<TreeNode title="Aula 1" key="1-0" />
						<TreeNode title="Aula 2" key="1-1" />
					</TreeNode>
				</Tree>
			</CursoContent>
		</div>
	);
};

export default Curso;
