import React, { FunctionComponent } from 'react';
import {
	MessageArea,
	MessageContent,
	MessageImage,
	MessageText,
	MessageName,
	MessageTime
} from '../../assets/styles/components/Message';

import userLogo from '../../assets/images/professor-logo.svg';

interface MessageProps {
	name: string;
	text: string;
	time: string;
	owner?: boolean;
}

const Message: FunctionComponent<MessageProps> = ({ name, text, time, owner }) => {
	return (
		<MessageArea owner={owner}>
			<MessageContent>
				<MessageImage>
					<img src={userLogo} />
				</MessageImage>
				<MessageText>
					<MessageName>{name}</MessageName>
					{text}
				</MessageText>
			</MessageContent>
			<MessageTime>{time}</MessageTime>
		</MessageArea>
	);
};

export default Message;
