import "./Content.scss";
import Shop from "../shop/Shop";

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
				
			</div>
		)
	}
	
}

export default Content;
