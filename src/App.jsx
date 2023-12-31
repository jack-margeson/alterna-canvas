import "./App.scss";

//import  ClassPage  from "./class-page/ClassPage";
import Content from "./content/Content";
import Navbar from "./navbar/Navbar";
import Profile from "./profile/Profile";
import Titlebar from "./titlebar/Titlebar";
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
	const [titletext, settitletext] = useState('Classes');

	const childToParent = (childtitletext) => {
		settitletext(childtitletext);
	}

	const theme = createTheme({
		typography: {
			fontFamily: 'Cabin'
		},
		palette: {
			primary: {
				main: "#2c666eff"
			},
			secondary: {
				main: "#dedbd6"
			}
		},

	});



	return (
		<ThemeProvider theme={theme}>
			<div className="main">
				<div className="display-container">
					<div className="sidebar-container">
						<div className="profile-container">
							<Profile childToParent={childToParent}></Profile>
						</div>
						<div className="navigation-container">
							<Navbar childToParent={childToParent}></Navbar>
						</div>
					</div>
					<div className="body-container">
						<div className="titlebar-container">
							<Titlebar text={titletext}></Titlebar>
						</div>
						<div className="content-container">
							<Content page={titletext}></Content>
						</div>
					</div>
				</div>
				<div className="global-footer-container">
					<p>
						<a href="https://github.com/jack-margeson/alterna-canvas">
							CS5167 User Interface I project #2, Alterna-Canvas.
						</a>{" "}
						Built with 💖 by Jack, Kody, Alex, and Al.
					</p>
				</div>
			</div>
		</ThemeProvider>

	);
}

export default App;
