import styled from 'styled-components';

interface MensagemProps {
	owner?: boolean;
}

export const MessageArea =
	styled.div <
	MensagemProps >
	`
	display: flex;
	flex-direction: column;
	background-color: ${(props) => (props.owner ? '#E7F9DF' : '#f5f5f5')};
	padding: 10px;
    border-radius: 10px;
    width: 90%;
    margin-left: ${(props) => (props.owner ? '50px' : '0px')};
    margin-bottom: 10px;
`;

export const MessageTime = styled.div`text-align: right;`;
export const MessageImage = styled.div`margin: 5px;`;
export const MessageContent = styled.div`display: flex;`;
export const MessageText = styled.p`margin: 0;`;
export const MessageName = styled.h5`margin: 0;`;
