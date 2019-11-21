import React, { FunctionComponent } from 'react';
import Message from './Message';
import { MessageSection } from '../../assets/styles/components/Discussao';
import { Divider } from 'antd';
import InputMessage from './InputMessage';
import { MessageModel } from '../../models/message.model';

interface DiscussaoProps {
	messages: Array<MessageModel>;
}

const Discussao: FunctionComponent<DiscussaoProps> = ({ messages }) => {
	return (
		<div id="app-discussao">
			<MessageSection>
				{messages.map((message, index) => (
					<Message
						key={index}
						name={message.name}
						owner={message.owner}
						text={message.message}
						time="15:00"
					/>
				))}
			</MessageSection>
			<Divider />
			<InputMessage />
		</div>
	);
};

export default Discussao;
