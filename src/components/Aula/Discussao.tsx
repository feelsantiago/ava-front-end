import React, { FunctionComponent, useEffect, useState } from 'react';
import Message from './Message';
import { MessageSection } from '../../assets/styles/components/Discussao';
import { Divider, message } from 'antd';
import InputMessage from './InputMessage';
import { MessageModel } from '../../models/message.model';
import { chatService } from '../../services/chat.service';

interface DiscussaoProps {
	messages: Array<MessageModel>;
}

const Discussao: FunctionComponent<DiscussaoProps> = ({ messages }) => {
	const [ chat, setChat ] = useState(messages);

	useEffect(() => {
		const subscription = chatService.subscribe((message: string) => {
			const newMessage: MessageModel = { ...messages[0], owner: true, date: new Date(), message: message };
			setChat([ ...chat, newMessage ]);
			messages.push(newMessage);
		});

		return function cleanUp () {
			subscription.unsubscribe();
		};
	});

	return (
		<div id="app-discussao">
			<MessageSection>
				{chat.map((message, index) => (
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
