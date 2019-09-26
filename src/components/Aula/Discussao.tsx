import React, { FunctionComponent } from 'react';
import Message from './Message';

const Discussao: FunctionComponent = () => {
	return (
		<div>
            <Message name="Name" text="There are many variations of passages of Lorem Ipsum available, 
                but the majority have suffered alteration in some form" time="15:00"/>
            <Message owner={true} name="Name" text="There are many variations of passages of Lorem Ipsum available, 
                but the majority have suffered alteration in some form" time="15:00"/>
            <Message name="Name" text="There are many variations of passages of Lorem Ipsum available, 
                but the majority have suffered alteration in some form" time="15:00"/>
			<hr />
		</div>
	);
};

export default Discussao;
