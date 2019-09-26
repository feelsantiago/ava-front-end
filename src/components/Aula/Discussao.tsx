import React, { FunctionComponent } from 'react';
import Message from './Message';
import { MessageSection } from '../../assets/styles/components/Discussao';
import { Divider } from 'antd';
import InputMessage from './InputMessage';

const Discussao: FunctionComponent = () => {
	const loremIpsum =
		'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form';

	return (
		<div id="app-discussao">
			<MessageSection>
				<Message name="Name" text={loremIpsum} time="15:00" />
				<Message owner={true} name="Name" text={loremIpsum} time="15:00" />
				<Message name="Name" text={loremIpsum} time="15:00" />
				<Message name="Name" text={loremIpsum} time="15:00" />
				<Message name="Name" text={loremIpsum} time="15:00" />
				<Message name="Name" text={loremIpsum} time="15:00" />
				<Message name="Name" text={loremIpsum} time="15:00" />
				<Message owner={true} name="Name" text={loremIpsum} time="15:00" />
			</MessageSection>
			<Divider />
			<InputMessage />
		</div>
	);
};

export default Discussao;
