import React, { FunctionComponent } from 'react';
import { CursoHeader } from '../../assets/styles/pages/Curso';
import { useDispatch } from 'react-redux';
import { removeLayoutPadding } from '../../redux/layout/actions';

const Curso: FunctionComponent = () => {
	const dispatch = useDispatch();
	dispatch(removeLayoutPadding({ padding: false }));

	return (
		<div id="app-curso-page">
			<CursoHeader />
		</div>
	);
};

export default Curso;
