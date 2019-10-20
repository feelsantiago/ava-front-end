import { FunctionComponent } from 'react';
import { GuardResolve } from '../guard';

export interface Route {
	path: string;
	component: FunctionComponent | any;
	exact?: boolean;
	guards?: Array<GuardResolve>;
	redirectTo?: string;
	routes?: Array<Route>;
}
