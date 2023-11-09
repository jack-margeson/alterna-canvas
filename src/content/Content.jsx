import "./Content.scss";
import Shop from "../shop/Shop";
import Leaderboard from "../leaderboard/Leaderboard";
import Card from "../class-card/ClassCard";
import Announcements from "../announcements/Announcements";
import ProfilePage from "../profile-page/profile-page";
import { useState } from "react";
import ClassPage from "../class-page/ClassPage";

function Content({ page }) {
	const [card, setCard] = useState("Classes");

	const childToParent = (childdata) => {
		setCard(childdata);
	};

	if (page === "Classes") {
		if (card === page) {
			return (
				<div className="content-main">
					<div className="class-card-container">
						<Card
							childToParent={childToParent}
							course={"CS5160"}
							title={"Computer Graphics I"}
							upcoming={"HW1"}
						></Card>
						<Card
							childToParent={childToParent}
							course={"CS5001"}
							title={"CS Senior Design I"}
							upcoming={"Quiz 3"}
						></Card>
						<Card
							childToParent={childToParent}
							course={"CS5167"}
							title={"User Interface I"}
							upcoming={"Quiz 4"}
						></Card>
					</div>
				</div>
			);
		} else if (card === "CS5160") {
			return (
				<div className="content-main">
					<ClassPage
						childToParent={childToParent}
						course={"CS5160"}
					></ClassPage>
				</div>
			);
		} else if (card === "CS5001") {
			return (
				<div className="content-main">
					<ClassPage
						childToParent={childToParent}
						course={"CS5001"}
					></ClassPage>
				</div>
			);
		} else if (card === "CS5167") {
			return (
				<div className="content-main">
					<ClassPage
						childToParent={childToParent}
						course={"CS5167"}
					></ClassPage>
				</div>
			);
		} else {
			return (
				<div className="content-main">
					<div className="class-card-container">
						<p>problemo</p>
					</div>
				</div>
			);
		}
	} else if (page === "Shop") {
		return (
			<div className="content-main">
				<Shop childToParent={childToParent}></Shop>
			</div>
		);
	} else if (page === "Leaderboard") {
		return (
			<div className="content-main">
				<Leaderboard
					childToParent={childToParent}
					first={"Kody Penn, 2400pts"}
					second={"Jack Margeson, 2373pts"}
					third={"Alex Yang, 2201pts"}
					totalpts={"2199pts"}
					rank={"4th"}
				></Leaderboard>
			</div>
		);
	} else if (page === "Announcements") {
		return (
			<div className="content-main">
				<Announcements childToParent={childToParent}></Announcements>
			</div>
		);
		
	} else if (page === "Profile") {
		return(
			<div className="content-main">
				<ProfilePage childToParent={childToParent}></ProfilePage>
			</div>
		);
		
	}else {
		return <p>problemo in content.jsx page</p>;
	}
}

export default Content;
