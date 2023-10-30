import "./App.scss";

//import  ClassPage  from "./class-page/ClassPage";
import Content from "./content/Content";
import Navbar from "./navbar/Navbar";
import Profile from "./profile/Profile";
import Titlebar from "./titlebar/Titlebar";

function App() {
	return (
		<div className="main">
			<div className="display-container">
				<div className="sidebar-container">
					<div className="profile-container">
						<Profile></Profile>
					</div>
					<div className="navigation-container">
						<Navbar></Navbar>
					</div>
				</div>
				<div className="body-container">
					<div className="titlebar-container">
						<Titlebar></Titlebar>
					</div>
					<div className="content-container">
						<Content></Content>
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
	);
}

export default App;
