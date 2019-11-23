import React, { FunctionComponent, useState, useEffect } from 'react';
import { List, Button, Modal, Input } from 'antd';
import { useParams } from 'react-router';
import useRouter from 'use-react-router';

import { TextCenter, Padding } from '../../assets/styles/components/Common';
import { cursoService } from '../../services/curso.service';
import { CursoModel } from '../../models/curso.model';
import { ModuleModel } from '../../models/module.model';

const EditarCurso: FunctionComponent = () => {
	const { id } = useParams();
	const { history } = useRouter();
	const [ curso, setCurso ] = useState<CursoModel>();
	const [ showModal, setShowModal ] = useState(false);
	const [ moduleName, setModuleName ] = useState<string>();
	const [ modules, setModules ] = useState<Array<ModuleModel>>([]);

	useEffect(() => {
		const curso = cursoService.getById(id);
		if (curso) {
			setCurso(curso);
			setModules([ ...curso.modules ]);
		}
	}, []);

	if (!curso) return <div>Curso Não Encontrado</div>;

	return (
		<div>
			<h1>Editar Curso</h1>
			<List
				header={<h3>Modulos</h3>}
				bordered
				dataSource={modules}
				renderItem={(item, index) => (
					<List.Item
						actions={[
							<a
								key="list-edit"
								onClick={(event) => {
									event.preventDefault();
									history.push(`/editar/modulo/${id}/${index}`);
								}}
							>
								editar
							</a>,
							<a key="list-delete">excluir</a>
						]}
					>
						{item.name}
					</List.Item>
				)}
			/>
			<Padding value={10} />
			<TextCenter>
				<Button size="large" type="primary" onClick={() => setShowModal(true)}>
					Novo Modulo
				</Button>
			</TextCenter>
			<Modal
				title="Novo Modulo"
				visible={showModal}
				onOk={() => {
					if (!moduleName) return setShowModal(false);
					curso.modules.push({ name: moduleName, lessons: [] });
					setModules([ ...modules, { name: moduleName, lessons: [] } ]);
					setShowModal(false);
				}}
				onCancel={() => setShowModal(false)}
			>
				<Input
					placeholder="Nome do Modulo"
					value={moduleName}
					onChange={({ target: { value } }) => setModuleName(value)}
				/>
			</Modal>
		</div>
	);
};

export default EditarCurso;
