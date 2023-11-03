import "./Content.scss";
import Shop from "../shop/Shop";
import Leaderboard from "../leaderboard/Leaderboard";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

let card = (
	<Card sx={{ minWidth: 275 }}>
		<CardContent>
			<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
				Word of the Day
			</Typography>
			<Typography variant="h5" component="div">
				benevolent
			</Typography>
			<Typography sx={{ mb: 1.5 }} color="text.secondary">
				adjective
			</Typography>
			<Typography variant="body2">
				well meaning and kindly.
				<br />
				{'"a benevolent smile"'}
			</Typography>
		</CardContent>
		<CardActions>
			<Button size="small">Learn More</Button>
		</CardActions>
	</Card>
);

function Content({ page }) {
	if (page === "Classes") {
		return (
			<div className="content-main">
				<div className="class-card-container">
					{card}
					{card}
					{card}
					{card}
					{card}
					{card}
				</div>
			</div>
		);
	} else if (page === "Shop") {
		return (
			<div className="content-main">
				<Shop></Shop>
			</div>
		);
	} else if (page === "Leaderboard") {
		return (
			<div className="content-main">
				<Leaderboard
					first={"Kody Penn, 2400pts"}
					second={"Jack Margeson, 2373pts"}
					third={"Alex Yang, 2201pts"}
					totalpts={"2199pts"}
					rank={"4th"}
				></Leaderboard>
			</div>
		);
	}
}

export default Content;
