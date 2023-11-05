import "./ClassPage.scss";
import * as React from "react";
import { Button, Dialog } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GradingIcon from "@mui/icons-material/Grading";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";

function ClassPage({ childToParent, course }) {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = (value) => {
		setOpen(false);
	};

	let class_display = { id: course };
	switch (course) {
		case "CS5160":
			class_display.display_name = "Computer Graphics I";
			break;
		case "CS5001":
			class_display.display_name = "CS Senior Design I";
			break;
		case "CS5167":
			class_display.display_name = "User Interface I";
			break;
		default:
			break;
	}

	console.log(class_display);

	return (
		<div className="class-page-container">
			<div className="class-page-buttons">
				<div className="class-page-buttons-left">
					<Button
						variant="contained"
						startIcon={<ArrowBackIcon />}
						onClick={null}
					>
						All Classes
					</Button>
				</div>
				<div className="class-page-buttons-right">
					<Button
						variant="contained"
						startIcon={<GradingIcon />}
						onClick={handleClickOpen}
					>
						View Grades
					</Button>
					<Button variant="contained" startIcon={<RecordVoiceOverIcon />}>
						Launch Zoom
					</Button>
				</div>
			</div>
			<div className="class-page-main">
				<h2>
					{class_display.id.toString()} -{" "}
					{class_display.display_name.toString()}
				</h2>{" "}
				<br></br>
				<h4>Class Announcements</h4>
				<br></br>
				<h4>Assignments</h4>
				<br></br>
				<h4>Course Materials</h4>
				<br></br>
				<h4>Syllabus</h4>
				<br></br>
				<h4>Grades</h4>
			</div>

			<Dialog
				fullWidth="true"
				maxWidth="md"
				open={open}
				onClose={handleClose}
				sx={{ minHeight: "80vh" }}
			>
				<div className="class-page-grades-dialog">
					<h4>Grades</h4>
				</div>
			</Dialog>
		</div>
	);
}

export default ClassPage;
