import "./ClassPage.scss";
import * as React from "react";
import { Button, Dialog } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GradingIcon from "@mui/icons-material/Grading";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DownloadIcon from "@mui/icons-material/Download";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import AnnouncementIcon from "@mui/icons-material/Announcement";

import ComputerGraphicsHW4 from "../course-data/computer_graphics/assignments/assignment_04";
import ComputerGraphicsSyllabus from "../course-data/computer_graphics/course_info/computer_graphics_syllabus";
import SeniorDesignHW1 from "../course-data/senior_design/assignments/assignment_01";
import SeniorDesignSyllabus from "../course-data/senior_design/course_info/senior_design_syllabus";
import UIHW5 from "../course-data/ui/assignments/assignment_05";
import UISyllabus from "../course-data/ui/course_info/ui_syllabus";

function ClassPage({ childToParent, course }) {
	const [open, setOpen] = React.useState(false);

	const [openContentDialog, setOpenContentDialog] = React.useState(false);

	const [submitButtonStatus, setSubmitButtonStatus] = React.useState(true);

	const [accValues, setAccValues] = React.useState([
		false,
		false,
		false,
		false,
		false,
	]);

	const [currAdditionalInformation, setCurrAdditionalInformation] =
		React.useState([-1]);

	const additionalInformation = [
		<p>0</p>,
		<p>1</p>,
		<p>2</p>,
		<SeniorDesignHW1></SeniorDesignHW1>,
		<ComputerGraphicsHW4></ComputerGraphicsHW4>,
		<UIHW5></UIHW5>,
		<p>6</p>,
		<p>7</p>,
		<p>8</p>,
		<SeniorDesignSyllabus></SeniorDesignSyllabus>,
		<ComputerGraphicsSyllabus></ComputerGraphicsSyllabus>,
		<UISyllabus></UISyllabus>,
		<p>12</p>,
		<p>13</p>,
		<p>14</p>,
		<p>15</p>,
		<p>16</p>,
		<p>17</p>,
		<p>18</p>,
		<p>	Your assignment has been submitted! Points have been added to your total.</p>
	];

	const toggleAccordion = (index, expanded) => {
		let temp = [false, false, false, false, false];
		if (expanded === true) {
			temp[index] = true;
		} else {
			accValues[index] = false;
		}
		setAccValues(temp);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = (value) => {
		setOpen(false);
	};

	const handleContentClickOpen = (e, value) => {
		setCurrAdditionalInformation(value);
		setOpenContentDialog(true);
	};

	const handleContentClose = (value) => {
		setOpenContentDialog(false);
	};

	const redirectToZoom = () => {
		window.open("https://zoom.us/", "_blank", "noreferrer");
	};

	const backSelected = () => {
		childToParent("Classes");
	};

	const fileInputted = (event) => {
		setSubmitButtonStatus(false);
	}

	const handleSubmit = (event) => {
		console.log(event);
		setCurrAdditionalInformation(19);
		setOpenContentDialog(true);
		let currentPoints = document.getElementById("points").textContent;
		document.getElementById("points").textContent = Number(currentPoints) + 200;
		let tmpColor = document.getElementById("points").style.color;
		document.getElementById("points").style.color = "green";
		setTimeout(() => {
			document.getElementById("points").style.color = tmpColor;
		}, 3000);
		setSubmitButtonStatus(true);
	}

	let gradesInformation = <p></p>;

	let class_display = { id: course };
	switch (course) {
		case "CS5160":
			class_display.display_name = "Computer Graphics I";
			gradesInformation = (
				<div className="grades-information">
					<h1>Grades</h1>
					<p>Homework 1 ..... 87/100</p>
					<p>Quiz 1 ......... 9/10</p>
					<p>Homework 2 ..... 45/50</p>
				</div>
			);
			break;
		case "CS5001":
			class_display.display_name = "CS Senior Design I";
			gradesInformation = (
				<div className="grades-information">
					<h1>Grades</h1>
					<p>Homework 1 ..... 97/100</p>
					<p>Homework 2 ..... 99/100</p>
				</div>
			);
			break;
		case "CS5167":
			class_display.display_name = "User Interface I";
			gradesInformation = (
				<div className="grades-information">
					<h1>Grades</h1>
					<p>Homework 1 ............ 100/100</p>
					<p>In-Class Activity ..... 20/20</p>
				</div>
			);
			break;
		default:
			break;
	}

	return (
		<div className="class-page-container">
			<div className="class-page-buttons">
				<div className="class-page-buttons-left">
					<Button
						variant="contained"
						startIcon={<ArrowBackIcon />}
						onClick={backSelected}
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
					<Button
						variant="contained"
						startIcon={<RecordVoiceOverIcon />}
						onClick={redirectToZoom}
					>
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
			</div>

			<div className="class-page-accordion">
				<Accordion
					expanded={accValues[0]}
					onChange={(e, expanded) => toggleAccordion(0, expanded)}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						sx={{ padding: "0px", paddingLeft: "15px" }}
					>
						<Typography>Class Announcements</Typography>
					</AccordionSummary>
					<AccordionDetails
						sx={{
							margin: "0",
							padding: "0",
							maxHeight: "auto",
							overflowY: "auto",
						}}
					>
						{course === "CS5001" && (
							<>
								<List
									sx={{
										width: "100%",
										maxWidth: 300,
										bgcolor: "background.paper",
										padding: "0",
									}}
								>
									<ListItem>
										<ListItemAvatar>
											<Avatar>
												<AnnouncementIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemButton
											onClick={(event) => handleContentClickOpen(event, 0)}
										>
											<ListItemText
												primary="Project advisor deadline"
												secondary="Posted on: Sep 30"
											/>
										</ListItemButton>
									</ListItem>
								</List>
							</>
						)}
					</AccordionDetails>
					<AccordionDetails
						sx={{
							margin: "0",
							padding: "0",
							maxHeight: "auto",
							overflowY: "auto",
						}}
					>
						{course === "CS5160" && (
							<>
								<List
									sx={{
										width: "100%",
										maxWidth: 300,
										bgcolor: "background.paper",
										padding: "0",
									}}
								>
									<ListItem>
										<ListItemAvatar>
											<Avatar>
												<AnnouncementIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemButton
											onClick={(event) => handleContentClickOpen(event, 1)}
										>
											<ListItemText
												primary="Bring your laptop to next class"
												secondary="Posted on: Sep 30"
											/>
										</ListItemButton>
									</ListItem>
								</List>
							</>
						)}
					</AccordionDetails>
					<AccordionDetails
						sx={{
							margin: "0",
							padding: "0",
							maxHeight: "auto",
							overflowY: "auto",
						}}
					>
						{course === "CS5167" && (
							<>
								<List
									sx={{
										width: "100%",
										maxWidth: 300,
										bgcolor: "background.paper",
										padding: "0",
									}}
								>
									<ListItem>
										<ListItemAvatar>
											<Avatar>
												<AnnouncementIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemButton
											onClick={(event) => handleContentClickOpen(event, 2)}
										>
											<ListItemText
												primary="Class cancelled Friday"
												secondary="Posted on: Sep 30"
											/>
										</ListItemButton>
									</ListItem>
								</List>
							</>
						)}
					</AccordionDetails>
				</Accordion>

				<Accordion
					expanded={accValues[1]}
					onChange={(e, expanded) => toggleAccordion(1, expanded)}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						sx={{ padding: "0px", paddingLeft: "15px" }}
					>
						<Typography>Assignments</Typography>
					</AccordionSummary>
					<AccordionDetails
						sx={{
							margin: "0",
							padding: "0",
							maxHeight: "auto",
							overflowY: "auto",
						}}
					>
						{course === "CS5001" && (
							<>
								<List
									sx={{
										width: "100%",
										maxWidth: 360,
										bgcolor: "background.paper",
									}}
								>
									<ListItem sx={{ width: "32vw" }}>
										<ListItemAvatar>
											<Avatar>
												<AssignmentIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemButton
											onClick={(event) => handleContentClickOpen(event, 3)}
										>
											<ListItemText
												primary="Project Proposal"
												secondary="Due: Oct 14th 11:59pm"
											/>
										</ListItemButton>
										<input type="file" onChange={fileInputted} />
										<Button variant="contained" disabled={submitButtonStatus} onClick={handleSubmit}>Submit</Button>
									</ListItem>
								</List>
							</>
						)}
					</AccordionDetails>

					<AccordionDetails
						sx={{
							margin: "0",
							padding: "0",
							maxHeight: "auto",
							overflowY: "auto",
						}}
					>
						{course === "CS5160" && (
							<>
								<List
									sx={{
										width: "100%",
										maxWidth: 360,
										bgcolor: "background.paper",
									}}
								>
									<ListItem sx={{ width: "32vw" }}>
										<ListItemAvatar>
											<Avatar>
												<AssignmentIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemButton
											onClick={(event) => handleContentClickOpen(event, 4)}
										>
											<ListItemText
												primary="HW 4a"
												secondary="Due: Oct 14th 11:59pm"
											/>
										</ListItemButton>
										<input type="file" onChange={fileInputted} />
										<Button variant="contained" disabled={submitButtonStatus} onClick={handleSubmit}>Submit</Button>
									</ListItem>
								</List>
							</>
						)}
					</AccordionDetails>

					<AccordionDetails
						sx={{
							margin: "0",
							padding: "0",
							maxHeight: "auto",
							overflowY: "auto",
						}}
					>
						{course === "CS5167" && (
							<>
								<List
									sx={{
										width: "100%",
										maxWidth: 360,
										bgcolor: "background.paper",
									}}
								>
									<ListItem sx={{ width: "32vw" }}>
										<ListItemAvatar>
											<Avatar>
												<AssignmentIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemButton
											onClick={(event) => handleContentClickOpen(event, 5)}
										>
											<ListItemText
												primary="HW 5"
												secondary="Due: Oct 14th 11:59pm"
											/>
										</ListItemButton>
										<input type="file" onChange={fileInputted} />
										<Button variant="contained" disabled={submitButtonStatus} onClick={handleSubmit}>Submit</Button>
									</ListItem>
								</List>
							</>
						)}
					</AccordionDetails>
				</Accordion>

				<Accordion
					expanded={accValues[2]}
					onChange={(e, expanded) => toggleAccordion(2, expanded)}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						sx={{ padding: "0px", paddingLeft: "15px" }}
					>
						<Typography>Course Materials</Typography>
					</AccordionSummary>
					<AccordionDetails
						sx={{
							margin: "0",
							padding: "0",
							maxHeight: "auto",
							overflowY: "auto",
						}}
					>
						{course === "CS5001" && (
							<>
								<List
									sx={{
										width: "100%",
										maxWidth: 360,
										bgcolor: "background.paper",
									}}
								>
									<ListItem>
										<a
											href="Course-Material.txt"
											download="Course-Material.txt"
										>
											<ListItemButton>
												<Avatar>
													<DownloadIcon />
												</Avatar>
											</ListItemButton>
										</a>
										<ListItemButton
											onClick={(event) => handleContentClickOpen(event, 6)}
										>
											<ListItemText
												primary="Senior Design Project Ideas"
												secondary="Posted on: Sep 30"
											/>
										</ListItemButton>
									</ListItem>
								</List>
							</>
						)}
					</AccordionDetails>

					<AccordionDetails
						sx={{
							margin: "0",
							padding: "0",
							maxHeight: "auto",
							overflowY: "auto",
						}}
					>
						{course === "CS5160" && (
							<>
								<List
									sx={{
										width: "100%",
										maxWidth: 360,
										bgcolor: "background.paper",
									}}
								>
									<ListItem>
										<ListItemAvatar>
											<Avatar>
												<AssignmentIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemButton
											onClick={(event) => handleContentClickOpen(event, 7)}
										>
											<ListItemText
												primary="Computer Graphics tutorial 1"
												secondary="Posted on: Sep 30"
											/>
										</ListItemButton>
									</ListItem>
								</List>
							</>
						)}
					</AccordionDetails>

					<AccordionDetails
						sx={{
							margin: "0",
							padding: "0",
							maxHeight: "auto",
							overflowY: "auto",
						}}
					>
						{course === "CS5167" && (
							<>
								<List
									sx={{
										width: "100%",
										maxWidth: 360,
										bgcolor: "background.paper",
									}}
								>
									<ListItem>
										<ListItemAvatar>
											<Avatar>
												<AssignmentIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemButton
											onClick={(event) => handleContentClickOpen(event, 8)}
										>
											<ListItemText
												primary="User Interface Powerpoint "
												secondary="Posted on: Sep 30"
											/>
										</ListItemButton>
									</ListItem>
								</List>
							</>
						)}
					</AccordionDetails>
				</Accordion>

				<Accordion
					expanded={accValues[3]}
					onChange={(e, expanded) => toggleAccordion(3, expanded)}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						sx={{ padding: "0px", paddingLeft: "15px" }}
					>
						<Typography>Syllabus</Typography>
					</AccordionSummary>
					<AccordionDetails
						sx={{
							margin: "0",
							padding: "0",
							maxHeight: "auto",
							overflowY: "auto",
						}}
					>
						{course === "CS5001" && (
							<>
								<List
									sx={{
										width: "100%",
										maxWidth: 360,
										bgcolor: "background.paper",
									}}
								>
									<ListItem>
										<ListItemAvatar>
											<Avatar>
												<AssignmentIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemButton
											onClick={(event) => handleContentClickOpen(event, 9)}
										>
											<ListItemText
												primary="CS5001 Syllabus"
												secondary="Due: Oct 14th 11:59pm"
											/>
										</ListItemButton>
									</ListItem>
								</List>
							</>
						)}
					</AccordionDetails>

					<AccordionDetails
						sx={{
							margin: "0",
							padding: "0",
							maxHeight: "auto",
							overflowY: "auto",
						}}
					>
						{course === "CS5160" && (
							<>
								<List
									sx={{
										width: "100%",
										maxWidth: 360,
										bgcolor: "background.paper",
									}}
								>
									<ListItem>
										<ListItemAvatar>
											<Avatar>
												<AssignmentIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemButton
											onClick={(event) => handleContentClickOpen(event, 10)}
										>
											{" "}
											<ListItemText
												primary="CS5160 Syllabus"
												secondary="Due: Oct 14th 11:59pm"
											/>
										</ListItemButton>
									</ListItem>
								</List>
							</>
						)}
					</AccordionDetails>

					<AccordionDetails
						sx={{
							margin: "0",
							padding: "0",
							maxHeight: "auto",
							overflowY: "auto",
						}}
					>
						{course === "CS5167" && (
							<>
								<List
									sx={{
										width: "100%",
										maxWidth: 360,
										bgcolor: "background.paper",
									}}
								>
									<ListItem>
										<ListItemAvatar>
											<Avatar>
												<AssignmentIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemButton
											onClick={(event) => handleContentClickOpen(event, 11)}
										>
											{" "}
											<ListItemText
												primary="CS5167 Syllabus"
												secondary="Due: Oct 14th 11:59pm"
											/>
										</ListItemButton>
									</ListItem>
								</List>
							</>
						)}
					</AccordionDetails>
				</Accordion>

				<Accordion
					expanded={accValues[4]}
					onChange={(e, expanded) => toggleAccordion(4, expanded)}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						sx={{ padding: "0px", paddingLeft: "15px" }}
					>
						<Typography>Grades</Typography>
					</AccordionSummary>
					<AccordionDetails
						sx={{
							margin: "0",
							padding: "0",
							maxHeight: "auto",
							overflowY: "auto",
						}}
					>
						{course === "CS5001" && (
							<>
								<List
									sx={{
										width: "100%",
										maxWidth: 360,
										bgcolor: "background.paper",
									}}
								>
									<ListItem>
										<ListItemAvatar>
											<Avatar>
												<AssignmentIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemButton
											onClick={(event) => handleContentClickOpen(event, 12)}
										>
											<ListItemText primary="Homework 1" secondary="97/100" />
										</ListItemButton>
									</ListItem>
									<ListItem>
										<ListItemAvatar>
											<Avatar>
												<AssignmentIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemButton
											onClick={(event) => handleContentClickOpen(event, 13)}
										>
											<ListItemText primary="Homework 2" secondary="99/100" />
										</ListItemButton>
									</ListItem>
								</List>
							</>
						)}
					</AccordionDetails>

					<AccordionDetails
						sx={{
							margin: "0",
							padding: "0",
							maxHeight: "auto",
							overflowY: "auto",
						}}
					>
						{course === "CS5160" && (
							<>
								<List
									sx={{
										width: "100%",
										maxWidth: 360,
										bgcolor: "background.paper",
									}}
								>
									<ListItem>
										<ListItemAvatar>
											<Avatar>
												<AssignmentIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemButton
											onClick={(event) => handleContentClickOpen(event, 14)}
										>
											{" "}
											<ListItemText primary="Homework 1" secondary="87/100" />
										</ListItemButton>
									</ListItem>
									<ListItem>
										<ListItemAvatar>
											<Avatar>
												<AssignmentIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemButton
											onClick={(event) => handleContentClickOpen(event, 15)}
										>
											{" "}
											<ListItemText primary="Quiz 1" secondary="9/10" />
										</ListItemButton>
									</ListItem>
									<ListItem>
										<ListItemAvatar>
											<Avatar>
												<AssignmentIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemButton
											onClick={(event) => handleContentClickOpen(event, 16)}
										>
											{" "}
											<ListItemText primary="Homework 2" secondary="45/50" />
										</ListItemButton>
									</ListItem>
								</List>
							</>
						)}
					</AccordionDetails>

					<AccordionDetails
						sx={{
							margin: "0",
							padding: "0",
							maxHeight: "auto",
							overflowY: "auto",
						}}
					>
						{course === "CS5167" && (
							<>
								<List
									sx={{
										width: "100%",
										maxWidth: 360,
										bgcolor: "background.paper",
									}}
								>
									<ListItem>
										<ListItemAvatar>
											<Avatar>
												<AssignmentIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemButton
											onClick={(event) => handleContentClickOpen(event, 17)}
										>
											{" "}
											<ListItemText primary="Homework 1" secondary="100/100" />
										</ListItemButton>
									</ListItem>
									<ListItem>
										<ListItemAvatar>
											<Avatar>
												<AssignmentIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemButton
											onClick={(event) => handleContentClickOpen(event, 18)}
										>
											{" "}
											<ListItemText
												primary="In-Class Activity"
												secondary="20/20"
											/>
										</ListItemButton>
									</ListItem>
								</List>
							</>
						)}
					</AccordionDetails>
				</Accordion>
			</div>

			<Dialog
				fullWidth="true"
				maxWidth="md"
				open={open}
				onClose={handleClose}
				sx={{ minHeight: "80vh" }}
			>
				<div className="class-page-grades-dialog">{gradesInformation}</div>
			</Dialog>

			<Dialog
				fullWidth="true"
				maxWidth="md"
				open={openContentDialog}
				onClose={handleContentClose}
				sx={{ minHeight: "80vh", backgroundColor: "#00000011" }}
			>
				<div className="class-page-grades-dialog">
					{additionalInformation[currAdditionalInformation]}
				</div>
			</Dialog>
		</div>
	);
}

export default ClassPage;
