import React, { FunctionComponent } from 'react';
import { Radio } from 'antd';
import { Content, SendButton } from '../../assets/styles/components/Atividade';
import { TextCenter } from '../../assets/styles/components/Common';

const Atividade: FunctionComponent = () => {
	return (
		<TextCenter>
			<Content>
				<h5>
					1. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
					making this the first true generator?
				</h5>
				<Radio.Group>
					<Radio value={1}>A</Radio>
					<Radio value={2}>B</Radio>
					<Radio value={3}>C</Radio>
					<Radio value={4}>D</Radio>
				</Radio.Group>
				<h5>
					2. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
					making this the first true generator?
				</h5>
				<Radio.Group>
					<Radio value={1}>A</Radio>
					<Radio value={2}>B</Radio>
					<Radio value={3}>C</Radio>
					<Radio value={4}>D</Radio>
				</Radio.Group>
				<h5>
					3. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
					making this the first true generator?
				</h5>
				<Radio.Group>
					<Radio value={1}>A</Radio>
					<Radio value={2}>B</Radio>
					<Radio value={3}>C</Radio>
					<Radio value={4}>D</Radio>
				</Radio.Group>
				<h5>
					4. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
					making this the first true generator?
				</h5>
				<Radio.Group>
					<Radio value={1}>A</Radio>
					<Radio value={2}>B</Radio>
					<Radio value={3}>C</Radio>
					<Radio value={4}>D</Radio>
				</Radio.Group>
				<h5>
					5. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
					making this the first true generator?
				</h5>
				<Radio.Group>
					<Radio value={1}>A</Radio>
					<Radio value={2}>B</Radio>
					<Radio value={3}>C</Radio>
					<Radio value={4}>D</Radio>
				</Radio.Group>
				<h5>
					6. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
					making this the first true generator?
				</h5>
				<Radio.Group>
					<Radio value={1}>A</Radio>
					<Radio value={2}>B</Radio>
					<Radio value={3}>C</Radio>
					<Radio value={4}>D</Radio>
				</Radio.Group>
			</Content>
			<SendButton>Enviar</SendButton>
		</TextCenter>
	);
};

export default Atividade;
