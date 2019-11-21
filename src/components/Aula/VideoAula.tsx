import React, { FunctionComponent } from 'react';
import { Video } from '../../assets/styles/components/VideoAula';

interface VideoAulaProps {
	title: string;
	description: string;
	video: string;
}

const VideoAula: FunctionComponent<VideoAulaProps> = ({ title, description, video }) => {
	return (
		<div>
			<Video src={video} />
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	);
};

export default VideoAula;
