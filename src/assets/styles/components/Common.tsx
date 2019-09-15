/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-08-29 13:38:43
 * @modify date 2019-08-29 13:38:43
 * @desc Define common styles for all components
 */

import styled from 'styled-components';

export const TextCenter = styled.div`text-align: center;`;

export const AppName = styled.span`
	text-transform: uppercase;
	display: inline-block;
	font-weight: 700;
	color: #1890ff;
	background-image: -webkit-gradient(
		linear,
		37.219838% 34.532506%,
		36.425669% 93.178216%,
		from(#29cdff),
		to(#0a60ff),
		color-stop(.37, #148eff)
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size: 20px;
`;

export const Padding = styled.div`padding: ${(props: { value: number }) => props.value}px;`;
