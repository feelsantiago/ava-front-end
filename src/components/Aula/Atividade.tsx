import React, { FunctionComponent } from 'react';
import { Radio } from 'antd';
import { Content, SendButton } from '../../assets/styles/components/Atividade';
import { TextCenter } from '../../assets/styles/components/Common';
import { ExerciseModel } from '../../models/exercise.model';

interface AtividadeProps {
	exercise: Array<ExerciseModel>;
}

const Atividade: FunctionComponent<AtividadeProps> = ({ exercise }) => {
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
			<SendButton>Enviar</SendButton>
		</TextCenter>
	);
};

export default Atividade;
