import React, { FunctionComponent } from 'react';

import RoutesModule from './routes/route-module';
import routes from './routes';

const App: FunctionComponent = () => {
	return (
		<div id="app">
			<RoutesModule routes={routes} />
		</div>
	);
};

export default App;
