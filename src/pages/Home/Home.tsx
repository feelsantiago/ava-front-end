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

const Home: FunctionComponent = () => {
	const { history } = useRouter();

	return (
		<HomeContent id="app-home">
			<HomeCard background="#DCDE6D" onClick={() => history.push('curso')}>
				<HomeCardText>Javascript</HomeCardText>
			</HomeCard>
			<HomeCard background="#DCDE6D">
				<HomeCardText>Javascript</HomeCardText>
			</HomeCard>
			<HomeCard background="#DCDE6D">
				<HomeCardText>Javascript</HomeCardText>
			</HomeCard>
			<HomeCard background="#DCDE6D">
				<HomeCardText>Javascript</HomeCardText>
			</HomeCard>
			<HomeCardAdd onClick={() => history.push('criar/curso')}>
				<AddPlusImg src={plus} />
			</HomeCardAdd>
		</HomeContent>
	);
};

export default Home;
