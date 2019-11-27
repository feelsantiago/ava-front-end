import React, { FunctionComponent, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { WrappedFormUtils, FormComponentProps } from 'antd/lib/form/Form';
import { History } from 'history';
import useRouter from 'use-react-router';
import { TextCenter } from '../../assets/styles/components/Common';
import { CriarCursoSubmitButton } from '../../assets/styles/components/CriarCurso';
import { cursoService } from '../../services/curso.service';
import { ExerciseModel } from '../../models/exercise.model';
import { ExercisesDivider } from '../../assets/styles/components/CriarAula';
import { CursoModel } from '../../models/curso.model';
import { ModuleModel } from '../../models/module.model';
import { useParams } from 'react-router';

const { TextArea } = Input;

interface FormModel {
	title: string;
	description: string;
	video: string;
	exercises: Array<ExerciseModel>;
}

const handleSubmit = (
	form: WrappedFormUtils | undefined,
	module: ModuleModel,
	cursoId: string,
	moduleIndex: string,
	history: History
) => {
	if (!form) return;

	form.validateFields((err, values: FormModel) => {
		if (err) return;

		module.lessons.push({ ...values, messages: [] });
		history.push(`/editar/modulo/${cursoId}/${moduleIndex}`);
	});
};

const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 4 }
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 16 }
	}
};
const CriarAula: FunctionComponent<FormComponentProps> = ({ form }) => {
	const { history } = useRouter();
	const { getFieldDecorator } = form;
	const { id, moduleIndex, aulaIndex } = useParams();
	const [ exercises, setExercises ] = useState<Array<ExerciseModel>>([]);

	const curso = cursoService.getById(id);
	if (!id || !moduleIndex || !curso) return <div>Curso Nao Encontrado</div>;

	const moduleSelected = curso.modules[parseInt(moduleIndex)];

	return (
		<div>
			<TextCenter>
				<h1>Criar Aula</h1>
			</TextCenter>
			<Form
				{...formItemLayout}
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit(form, moduleSelected, id, moduleIndex, history);
				}}
			>
				<Form.Item label="Titulo">
					{getFieldDecorator('title', {
						rules: [ { required: true, message: 'Por favor insira o titulo do curso!' } ]
					})(<Input placeholder="Titulo do curso" />)}
				</Form.Item>
				<Form.Item label="Descrição">
					{getFieldDecorator('description', {
						rules: [ { required: true, message: 'Por favor insira a descrição do curso!' } ]
					})(<TextArea rows={4} placeholder="Descrição do curso" />)}
				</Form.Item>
				<Form.Item label="Video">
					{getFieldDecorator('video', {
						rules: [ { required: true, message: 'Video Embed URl' } ]
					})(<Input placeholder="Video" />)}
				</Form.Item>
				<ExercisesDivider />
				<TextCenter>
					<h3>Exercicios</h3>
				</TextCenter>
				<ExercisesDivider />
				<Form.Item label=" ">
					<TextCenter>
						<CriarCursoSubmitButton type="primary" htmlType="submit">
							Criar
						</CriarCursoSubmitButton>
					</TextCenter>
				</Form.Item>
			</Form>
		</div>
	);
};

export default Form.create({ name: 'login_form' })(CriarAula);
