import React, { FunctionComponent } from 'react';
import { Form, Input, Button } from 'antd';
import { WrappedFormUtils, FormComponentProps } from 'antd/lib/form/Form';
import { History } from 'history';
import useRouter from 'use-react-router';
import { TextCenter } from '../../assets/styles/components/Common';
import { CriarCursoSubmitButton } from '../../assets/styles/components/CriarCurso';

const { TextArea } = Input;

interface FormModel {
	title: string;
	description: string;
}

const handleSubmit = (form: WrappedFormUtils | undefined, history: History) => {
	if (!form) return;

	form.validateFields((err, values: FormModel) => {
		if (err) return;

		history.push('/');
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

const CriarCurso: FunctionComponent<FormComponentProps> = ({ form }) => {
	const { history } = useRouter();
	const { getFieldDecorator } = form;

	return (
		<div>
			<TextCenter>
				<h1>Criar Curso</h1>
			</TextCenter>
			<Form
				{...formItemLayout}
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit(form, history);
				}}>
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

export default Form.create({ name: 'login_form' })(CriarCurso);
