import { ExerciseModel } from './exercise.model';
import { MessageModel } from './message.model';

export interface LessonModel {
	video: string;
	title: string;
	description: string;
	messages: Array<MessageModel>;
	exercises: Array<ExerciseModel>;
}
