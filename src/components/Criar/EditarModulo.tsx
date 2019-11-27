import React, { FunctionComponent, useState, useEffect } from 'react';
import { List, Button } from 'antd';
import { useParams } from 'react-router';
import { TextCenter, Padding } from '../../assets/styles/components/Common';
import { cursoService } from '../../services/curso.service';
import { CursoModel } from '../../models/curso.model';
import useRouter from 'use-react-router';

const EditarModulo: FunctionComponent = () => {
	const { id, moduleIndex } = useParams();
	const [ curso, setCurso ] = useState<CursoModel>();
	const { history } = useRouter();

	useEffect(() => setCurso(cursoService.getById(id)), []);
	if (!curso || !moduleIndex) return <div>Curso Não Encontrado</div>;
	console.log(curso);
	return (
		<div>
			<h1>Editar Modulo</h1>
			<List
				header={<h3>Aulas</h3>}
				bordered
				dataSource={curso.modules[parseInt(moduleIndex)].lessons}
				renderItem={(item) => (
					<List.Item actions={[ <a key="list-edit">editar</a>, <a key="list-excluir">excluir</a> ]}>
						{item.title}
					</List.Item>
				)}
			/>
			<Padding value={10} />
			<TextCenter>
				<Button
					size="large"
					type="primary"
					onClick={() => history.push(`/criar/aula/${curso.id}/${moduleIndex}`)}
				>
					Nova Aula
				</Button>
			</TextCenter>
		</div>
	);
};

export default EditarModulo;
