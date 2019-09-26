import styled from 'styled-components';

export const InputArea = styled.div`
	display: flex;
	border: 1px solid rgba(0, 0, 0, 0.1);
	box-sizing: border-box;
	border-radius: 5px;
`;

export const TextArea = styled.textarea`
	border: none;
	width: 100%;
	background: #f5f5f5;
	resize: none;
`;

export const InputButton = styled.button`
	border: none;
	border-left: 1px solid rgba(0, 0, 0, 0.1);
	background: #f5f5f5;
	padding: 0px 20px;

	:hover {
		cursor: pointer;
		background: #eae9e9;
	}
`;
