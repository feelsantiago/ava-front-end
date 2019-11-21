/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-08-26 12:59:45
 * @modify date 2019-08-26 12:59:45
 * @desc Dashboard home page
 */

import React, { FunctionComponent } from 'react';
import useRouter from 'use-react-router';

import { HomeCard, HomeCardAdd, HomeCardText, HomeContent, AddPlusImg } from '../../assets/styles/pages/Home';
import plus from '../../assets/images/plus.png';
import { cursoService } from '../../services/curso.service';

const Home: FunctionComponent = () => {
	const { history } = useRouter();

	return (
		<HomeContent id="app-home">
			{cursoService.getAll().map((curso, index) => (
				<HomeCard key={index} background="#DCDE6D" onClick={() => history.push(`curso/${curso.id}`)}>
					<HomeCardText>{curso.title}</HomeCardText>
				</HomeCard>
			))}

			<HomeCardAdd onClick={() => history.push('criar/curso')}>
				<AddPlusImg src={plus} />
			</HomeCardAdd>
		</HomeContent>
	);
};

export default Home;
