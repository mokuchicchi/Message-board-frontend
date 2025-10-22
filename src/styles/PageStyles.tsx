import styled from 'styled-components';

// SignInPage

export const SSignInFrame = styled.div`
	background-color: #f8f8f8;
	margin: 5rem;
	padding-top: 1rem;
	padding-bottom: 1rem;
	border-radius: 1rem;
	box-shadow: 0 1rem 1rem #aaaaaa;
`;

export const SSignInRow = styled.div`
	display: block;
	width: auto;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
`;

export const SSignInLabel = styled.span`
	display: inline-block;
	width: 5rem;
	vertical-align: top;
	text-align: right;
	margin-right: 1rem;
	margin-bottom: 1rem;
`;

export const SSignInInput = styled.span`
	display: inline-block;
	width: auto;
	vertical-align: top;
`;

export const SLeftButton = styled.button`
	background-color: #444444;
	color: #f0f0f0;
	padding: 0.3rem 2rem;
	border-radius: 0.5rem;
	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;

export const SRightButton = styled.button`
	background-color: #444444;
	color: #f0f0f0;
	padding: 0.3rem 2rem;
	margin-left: 0.8rem;
	border-radius: 0.5rem;
	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;
