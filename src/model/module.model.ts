import { LessonModel } from './lesson.model';

export interface ModuleModel {
	name: string;
	lessons: Array<LessonModel>;
}
