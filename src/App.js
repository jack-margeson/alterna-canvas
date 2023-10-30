import "./App.scss";

function App() {
	return (
		<div className="main">
			<div className="display-container">
				<div className="sidebar-container">
					<div className="profile-container">
						<p>profile comp here</p>
					</div>
					<div className="navigation-container">
						<p>navigation comp here</p>
					</div>
				</div>
				<div className="body-container">
					<div className="titlebar-container">
						<p>titlebar comp here</p>
					</div>
					<div className="content-container">
						<p>main content comp here</p>
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
