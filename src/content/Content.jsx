import "./Content.scss";
import Shop from "../shop/Shop";
import Leaderboard from "../leaderboard/Leaderboard"

function Content({page}) {
	if(page==="Classes"){
		return (
			<div className="content-main">
				
			</div>
		);
	}
	else if(page==="Shop"){
		return (
			<div className="content-main">
				<Shop></Shop>
			</div>
		);
	}
	else if(page==="Leaderboard"){
		return (
			<div className="content-main">
				<Leaderboard 
				first={"Kody Penn, 2400pts"} 
				second={"Jack Margeson, 2373pts"} 
				third={"Alex Yang, 2201pts"}
				totalpts={"2199pts"}
				rank={"4th"}>
				</Leaderboard>
			</div>
		)
	}
	
}

export default Content;
