import React, { FunctionComponent } from 'react';
import { Radio } from 'antd';
import { Content, SendButton } from '../../assets/styles/components/Atividade';
import { TextCenter } from '../../assets/styles/components/Common';
import { ExerciseModel } from '../../models/exercise.model';
import { useParams } from 'react-router';
import useRouter from 'use-react-router';

interface AtividadeProps {
	exercise: Array<ExerciseModel>;
}

const Atividade: FunctionComponent<AtividadeProps> = ({ exercise }) => {
	const { history } = useRouter();
	const { id } = useParams();

	return (
		<TextCenter>
			<Content>
				{exercise.map((exercise) => (
					<span>
						<h5>{exercise.question}</h5>
						<Radio.Group>
							{exercise.alternatives.map((alternative, index) => (
								<Radio value={index} key={index}>
									{alternative.label}
								</Radio>
							))}
						</Radio.Group>
					</span>
				))}
			</Content>
			<SendButton onClick={() => history.push(`/curso/${id}`)}>Enviar</SendButton>
		</TextCenter>
	);
};

export default Atividade;
