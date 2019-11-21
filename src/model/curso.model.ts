import { ProfessorModel } from './professor.model';
import { ModuleModel } from './module.model';

export interface CursoModel {
	id: string;
	title: string;
	description: string;
	professor: ProfessorModel;
	owner: boolean;
	modules: Array<ModuleModel>;
}
