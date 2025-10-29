import styled from 'styled-components';

// Body
export const SBody = styled.div`
	width: 100%;
	height: calc(100vh - 3.5rem);
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

// Content

export const SContents = styled.div`
	flex: 1 1 70%;
	width: 100%;
	height: 100%;
	background-color: aliceblue;
	padding: 0.5rem;
`;

// Header

export const SHeader = styled.div`
	background-color: #222;
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 3.5rem;
`;

export const SLogo = styled.div`
	color: white;
	padding: 1rem;
	text-align: center;
	justify-content: start;
`;

export const SRightItem = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: end;
`;

export const SName = styled.div`
	color: white;
	padding: 1rem;
	text-align: center;
`;

export const SLogout = styled.div`
	color: white;
	padding: 1rem;
	text-align: center;
	&:hover {
		cursor: pointer;
	}
`;

// Post

export const SPost = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0.5rem 0rem;
	border-bottom: 0.1rem solid #aaa;
	text-align: left;
	padding-left: 1rem;
	padding-bottom: 0.25rem;
`;

export const SUserName = styled.div`
	font-size: small;
	color: #000044;
`;

export const SDate = styled.div`
	margin-left: 0.5rem;
	font-size: small;
	color: #000044;
`;

export const SDeleteButton = styled.button`
	min-width: 3rem;
	height: 2.5rem;
	margin-right: 1rem;
	border-radius: 0.5rem;
	color: white;
	background-color: gray;
	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;

// PostList

export const SPostList = styled.div`
	background-color: white;
	height: calc(100% - 5rem);
	margin: 1rem 0.5rem;
	overflow-y: scroll;
`;

export const SReloadButton = styled.button`
	min-width: 20%;
	height: 2.5rem;
	padding: 0.25rem;
	border-radius: 0.5rem;
	color: white;
	background-color: #b7972d;
	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;

// SideBar

export const SSidebar = styled.div`
	flex: 1 1 30%;
	width: 100%;
	height: 100%;
	padding: 0.5rem;
	background-color: lightblue;
`;

export const SSideBarRow = styled.div`
	margin: 0.25rem;
	text-align: left;
`;

export const SSideBarTextArea = styled.textarea`
	border-radius: 0.25rem;
	box-sizing: border-box;
	box-shadow: inset 0.1rem 0.1rem 0.25rem #cccccc;
	min-width: 100%;
	min-height: 10rem;
	padding: 0.5rem;
	resize: vertical;
`;

export const SSideBarButton = styled.button`
	width: 100%;
	max-width: 24rem;
	height: 2rem;
	padding: 0.25rem;
	border-radius: 0.5rem;
	color: white;
	background-color: black;
	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;
