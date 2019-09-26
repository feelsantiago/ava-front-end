import React, { FunctionComponent } from 'react';
import { Video } from '../../assets/styles/components/VideoAula';

const VideoAula: FunctionComponent = () => {
	return (
		<div>
			<Video src="https://www.youtube.com/embed/tbLziJchz48" />
			<h1>Titulo</h1>
			<p>Descricao</p>
		</div>
	);
};

export default VideoAula;
