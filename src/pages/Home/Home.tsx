/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-08-26 12:59:45
 * @modify date 2019-08-26 12:59:45
 * @desc Dashboard home page
 */

import React, { FunctionComponent } from 'react';

import { HomeCard, HomeCardText } from '../../assets/styles/pages/Home';

const Home: FunctionComponent = () => {
	return (
		<div id="app-home">
			<HomeCard background="#DCDE6D">
				<HomeCardText>Javascript</HomeCardText>
			</HomeCard>
		</div>
	);
};

export default Home;
