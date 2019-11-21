import { cursos } from '../storage/cursos';
import { CursoModel } from '../models/curso.model';
import shortId from 'shortid';

class CursoService {
	getAll () {
		return cursos;
	}

	getById (id: string | undefined) {
		return cursos.find((curso) => curso.id === id);
	}

	insert (curso: CursoModel) {
		curso.id = shortId();
		cursos.push(curso);
	}
}

export const cursoService = new CursoService();
