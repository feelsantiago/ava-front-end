import { AlternativeModel } from './alternative.model';

export interface ExerciseModel {
	question: string;
	alternatives: Array<AlternativeModel>;
}
