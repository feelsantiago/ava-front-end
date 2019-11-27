/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-08-26 12:52:09
 * @modify date 2019-08-26 12:52:09
 * @desc Describe every route from system
 */

import { Route } from './routes/interfaces/route';
import Login from './layouts/Login';
import Auth from './pages/Auth';
import Dashboard from './layouts/Dashboard';
import Home from './pages/Home';
import About from './pages/About';
import authGuard from './guards/auth-guard';
import Curso from './pages/Curso';
import Aula from './pages/Aula';
import CriarCurso from './components/Criar/CriarCurso';
import EditarCurso from './components/Criar/EditarCurso';
import EditarModulo from './components/Criar/EditarModulo';
import CriarAula from './components/Criar/CriarAula';

const routes: Array<Route> = [
	{
		path: '/login',
		component: Login,
		routes: [
			{
				path: '',
				exact: true,
				component: Auth
			}
		]
	},
	{
		path: '/',
		component: Dashboard,
		redirectTo: '/login',
		guards: [ authGuard ],
		routes: [
			{
				path: '/',
				exact: true,
				component: Home
			},
			{
				path: 'about',
				component: About
			},
			{
				path: 'curso/:id',
				exact: true,
				component: Curso
			},
			{
				path: 'aula/:id/:moduleIndex/:lessonIndex',
				exact: true,
				component: Aula
			},
			{
				path: 'criar/curso',
				exact: true,
				component: CriarCurso
			},
			{
				path: 'editar/curso/:id',
				exact: true,
				component: EditarCurso
			},
			{
				path: 'editar/modulo/:id/:moduleIndex',
				exact: true,
				component: EditarModulo
			},
			{
				path: 'criar/aula/:id/:moduleIndex/:aulaIndex?',
				exact: true,
				component: CriarAula
			}
		]
	}
];

export default routes;
