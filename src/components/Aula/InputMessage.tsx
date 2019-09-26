import React, { FunctionComponent } from 'react';
import { InputArea, TextArea, InputButton } from '../../assets/styles/components/InputMessage';

const InputMessage: FunctionComponent = () => {
	return (
		<InputArea>
			<TextArea />
			<InputButton>></InputButton>
		</InputArea>
	);
};

export default InputMessage;
