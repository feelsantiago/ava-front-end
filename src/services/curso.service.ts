import { cursos } from '../storage/cursos';
import { CursoModel } from '../model/curso.model';
import shortId from 'shortid';

class CursoService {
	getAll () {
		return cursos;
	}

	getById (id: string) {
		cursos.find((curso) => curso.id === id);
	}

	insert (curso: CursoModel) {
		curso.id = shortId();
		cursos.push(curso);
	}
}

const cursoService = new CursoService();
