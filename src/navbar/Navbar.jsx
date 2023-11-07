import "./Navbar.scss";
import { useState } from 'react';

function Navbar({childToParent}) {
    const [styleName1, setStyleName1] = useState("navbar-button-active");
	const [styleName2, setStyleName2] = useState("navbar-button");
	const [styleName3, setStyleName3] = useState("navbar-button");
	const [styleName4, setStyleName4] = useState("navbar-button");
	const [styleName5, setStyleName5] = useState("navbar-button");

	const classesSelected = () => {
        childToParent("Classes");
        setStyleName1("navbar-button-active");
		setStyleName2("navbar-button");
		setStyleName3("navbar-button");
		setStyleName4("navbar-button");
		setStyleName5("navbar-button");
    };

	const shopSelected = () => {
        childToParent("Shop");
		setStyleName1("navbar-button");
		setStyleName2("navbar-button-active");
		setStyleName3("navbar-button");
		setStyleName4("navbar-button");
		setStyleName5("navbar-button");
    };

	const leaderboardSelected = () => {
        childToParent("Leaderboard");
        setStyleName1("navbar-button");
		setStyleName2("navbar-button");
		setStyleName3("navbar-button-active");
		setStyleName4("navbar-button");
		setStyleName5("navbar-button");
    };
	const announcementsSelected = () => {
        childToParent("Announcements");
        setStyleName1("navbar-button");
		setStyleName2("navbar-button");
		setStyleName3("navbar-button");
		setStyleName4("navbar-button-active");
		setStyleName5("navbar-button");
    };
	const todoSelected = () => {
        childToParent("Todo");
        setStyleName1("navbar-button");
		setStyleName2("navbar-button");
		setStyleName3("navbar-button");
		setStyleName4("navbar-button");
		setStyleName5("navbar-button-active");
    };

	return (
		<div className="navbar-main">
			<ul>
				<li>
					<button className={styleName1} onClick={classesSelected}>Classes</button>
				</li>
				<li>
					<button className={styleName2} onClick={shopSelected}>Shop</button>
				</li>
				<li>
					<button className={styleName3} onClick={leaderboardSelected}>Leaderboard</button>
				</li>
				<li>
					<button className={styleName4} onClick={announcementsSelected}>Announcements</button>
				</li>
				<li>
					<button className={styleName5} onClick={todoSelected}>To Do</button>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
