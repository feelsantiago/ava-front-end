/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-08-26 12:59:45
 * @modify date 2019-08-26 12:59:45
 * @desc Dashboard home page
 */

import React, { FunctionComponent, useState } from 'react';

import { HomeCard, HomeCardAdd, HomeCardText, HomeContent, AddPlusImg } from '../../assets/styles/pages/Home';
import plus from '../../assets/images/plus.png';

const Home: FunctionComponent = () => {
	return (
		<HomeContent id="app-home">
			<HomeCard background="#DCDE6D">
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
			<HomeCardAdd>
				<AddPlusImg src={plus} />
			</HomeCardAdd>
		</HomeContent>
	);
};

export default Home;
