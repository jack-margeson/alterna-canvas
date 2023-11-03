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
						<Card childToParent={childToParent} course={"CS5101"} title={"Automata"} upcoming={"HW1"}></Card>
						<Card childToParent={childToParent} course={"CS5125"} title={"UI"} upcoming={"Quiz 3"}></Card>
						<Card childToParent={childToParent} course={"CS6007"} title={"Requirements Engineering"} upcoming={"Quiz 4"}></Card>
					</div>
				</div>
			);
		}
		else if (card === "CS5101"){
			return (
				<div className="content-main">
					<div className="class-card-container">
						<Card childToParent={childToParent} course={"CS5101"} title={"Automata"} upcoming={"HW1"}></Card>
					</div>
				</div>
			);
		}
		else if (card === "CS5125"){
			return (
				<div className="content-main">
					<div className="class-card-container">
						<Card childToParent={childToParent} course={"CS5125"} title={"UI"} upcoming={"Quiz 3"}></Card>
					</div>
				</div>
			);
		}
		else if (card === "CS6007"){
			return (
				<div className="content-main">
					<div className="class-card-container">
						<Card childToParent={childToParent} course={"CS6007"} title={"Requirements Engineering"} upcoming={"Quiz 4"}></Card>
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
