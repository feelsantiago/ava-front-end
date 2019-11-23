import React, { FunctionComponent, useState } from 'react';
import { InputArea, TextArea, InputButton } from '../../assets/styles/components/InputMessage';
import { chatService } from '../../services/chat.service';

const InputMessage: FunctionComponent = () => {
	const [ message, setMessage ] = useState<string>();

	return (
		<InputArea>
			<TextArea value={message} onChange={({ target: { value } }) => setMessage(value)} />
			<InputButton
				onClick={() => {
					if (message) chatService.sendMessage(message);
				}}
			>
				>
			</InputButton>
		</InputArea>
	);
};

export default InputMessage;
