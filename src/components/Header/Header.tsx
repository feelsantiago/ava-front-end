/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-09-02 13:14:42
 * @modify date 2019-09-02 13:14:42
 * @desc Dashboard Header
 */

import React, { FunctionComponent } from 'react';
import { DashboardHeader } from '../../assets/styles/layouts/Header';

const Header: FunctionComponent = () => {
	return (
		<div id="app-header">
			<DashboardHeader />
		</div>
	);
};

export default Header;
