/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-08-29 12:31:44
 * @modify date 2019-08-29 12:31:44
 * @desc Form for user login
 */

import React, { FunctionComponent } from 'react';
import { Form, Input, Checkbox } from 'antd';
import { WrappedFormUtils, FormComponentProps } from 'antd/lib/form/Form';
import useRouter from 'use-react-router';
import { History } from 'history';

import { LoginCard, LoginIcon, LoginSubmitButton, LoginForgot } from '../../assets/styles/components/LoginForm';
import { TextCenter } from '../../assets/styles/components/Common';
import LoginFormHeader from './LoginFormHeader';
import authService from '../../services/auth-service';

interface FormModel {
	username: string;
	password: string;
	remember: boolean;
}

/**
 * Verify login information and call backend to get the auth token
 * @param form 
 * @param history 
 */
const handleSubmit = (form: WrappedFormUtils | undefined, history: History) => {
	if (!form) return;

	form.validateFields((err, values: FormModel) => {
		if (err) return;

		// TODO: set up back end auth call
		authService.setAuthentication(
			'token',
			{ email: values.username, password: values.password, name: 'test' },
			values.remember
		);

		// navigate to home
		history.push('/');
	});
};

const LoginForm: FunctionComponent<FormComponentProps> = ({ form }) => {
	const { getFieldDecorator } = form;
	const { history } = useRouter();

	return (
		<LoginCard bordered={false}>
			<LoginFormHeader />
			<Form
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit(form, history);
				}}
			>
				<Form.Item>
					{getFieldDecorator('username', {
						rules: [ { required: true, message: 'Por favor insira seu nome de usuário!' } ]
					})(<Input prefix={<LoginIcon type="user" />} placeholder="Usuário" />)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator('password', {
						rules: [ { required: true, message: 'Por favor insira sua senha!' } ]
					})(<Input prefix={<LoginIcon type="lock" />} type="password" placeholder="Senha" />)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator('remember', {
						valuePropName: 'checked',
						initialValue: true
					})(<Checkbox>Lembra-se</Checkbox>)}
					<LoginForgot href="">Esqueci a senha</LoginForgot>
					<LoginSubmitButton type="primary" htmlType="submit">
						Entrar
					</LoginSubmitButton>
					<TextCenter>
						Ou <a href="/">Registre-se!</a>
					</TextCenter>
				</Form.Item>
			</Form>
		</LoginCard>
	);
};

export default Form.create({ name: 'login_form' })(LoginForm);
