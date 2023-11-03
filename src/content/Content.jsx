import "./Content.scss";
import Shop from "../shop/Shop";
import Leaderboard from "../leaderboard/Leaderboard";
import Card from "../class-card/ClassCard";
import Announcements from "../announcements/Announcements";
import { useState } from 'react';


function Content({ page }) {
	const [card, setCard] = useState("Classes");
  
  	const childToParent = (childdata) => {
    	setCard(childdata);
  	}



	if (page === "Classes") {
		if (card === page){
			return (
				<div className="content-main">
					<div className="class-card-container">
						<Card childToParent={childToParent} course={"1"}></Card>
						<Card childToParent={childToParent} course={"2"}></Card>
						<Card childToParent={childToParent} course={"3"}></Card>
					</div>
				</div>
			);
		}
		else if (card === "1"){
			return (
				<div className="content-main">
					<div className="class-card-container">
						<Card childToParent={childToParent} course={"1"} title={"CS5101"} upcoming={"HW1"}></Card>
					</div>
				</div>
			);
		}
		else if (card === "2"){
			return (
				<div className="content-main">
					<div className="class-card-container">
						<Card childToParent={childToParent} course={"2"} title={"CS5125"} upcoming={"Quiz 3"}></Card>
					</div>
				</div>
			);
		}
		else if (card === "3"){
			return (
				<div className="content-main">
					<div className="class-card-container">
						<Card childToParent={childToParent} course={"3"} title={"CS6007"} upcoming={"Quiz 4"}></Card>
					</div>
				</div>
			);
		}
		else{
			return (
				<div className="content-main">
					<div className="class-card-container">
						<p>problemo</p>
					</div>
				</div>
			);
		}
		
	}
	else if (page === "Shop") {
		return (
			<div className="content-main">
				<Shop childToParent={childToParent}></Shop>
			</div>
		);
	} 
	else if (page === "Leaderboard") {
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
	}
	else if (page === "Announcements") {
		return (
			<div className="content-main">
				<Announcements childToParent={childToParent}></Announcements>
			</div>
		);
	}
	else{
		return(
			<p>problemo in content.jsx page</p>
		)
	}
}

export default Content;
