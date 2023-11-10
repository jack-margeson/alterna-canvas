import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TodoItem from "./TodoItem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";

function ClassCard({
	childToParent,
	course,
	title,
	upcoming,
	notificationsCount,
}) {
	const cardSelected = () => {
		childToParent(course);
	};

	return (
		<Card
			className="card-container"
			sx={{
				border: "1px solid #dedbd6",
				color: "#f0edeeff",
				backgroundColor: "#181a1b",
				minWidth: 450,
				borderRadius: 1,
			}}
		>
			<CardContent className="card-content">
				<Typography sx={{ fontSize: 16, fontWeight: 800 }} gutterBottom>
					{course}
				</Typography>
				<Typography variant="h5" component="div">
					{title}
				</Typography>
				<Typography sx={{ mb: 1.5 }}>Undergraduate</Typography>
				<Typography
					sx={{ textDecoration: "underline", fontSize: 16 }}
					variant="body2"
				>
					Assignments Due:
				</Typography>
				{Array.isArray(upcoming) &&
					upcoming.map((item, index) => <TodoItem key={index} text={item} />)}
			</CardContent>
			<CardActions sx={{ marginTop: "-10px" }}>
				<Button
					variant="contained"
					size="small"
					sx={{ fontSize: 16, marginLeft: 1, marginBottom: 1 }}
					onClick={cardSelected}
				>
					Go to Class Page
				</Button>
				<Badge badgeContent={notificationsCount} color="primary">
					<NotificationsIcon
						sx={{ marginLeft: (theme) => theme.spacing(28) }}
					/>
				</Badge>
			</CardActions>
		</Card>
	);
}

export default ClassCard;
