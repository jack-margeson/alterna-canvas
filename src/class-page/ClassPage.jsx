import "./ClassPage.scss";
import * as React from "react";
import { Button, Dialog } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GradingIcon from "@mui/icons-material/Grading";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AssignmentIcon from '@mui/icons-material/Assignment';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import AnnouncementIcon from '@mui/icons-material/Announcement';




function ClassPage({ childToParent, course }) {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = (value) => {
		setOpen(false);
	};

	const redirectToZoom = () => {
		window.open('https://zoom.us/', "_blank", "noreferrer")
	};

	const backSelected = () => {
        childToParent("Classes");
    }

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
					<Button variant="contained" startIcon={<RecordVoiceOverIcon />} onClick = {redirectToZoom}>
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
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" sx={{padding: '0px', paddingLeft: '15px'}}>
				<Typography>Class Announcements</Typography>
			</AccordionSummary>
			<AccordionDetails sx={{margin: '0', padding: '0', maxHeight: '40px', overflowY: 'auto' }}>
				{course === "CS5001" && (
				<>
					<List
					sx={{
						width: '100%',
						maxWidth: 300,
						bgcolor: 'background.paper',
						padding: '0'
					}}
					>
					<ListItem>
						<ListItemAvatar>
						<Avatar >
							<AnnouncementIcon />
						</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Project advisor deadline" secondary="Posted on: Sep 30" />
						
					</ListItem>
					
					</List>
				</>
				)}
			</AccordionDetails>
			<AccordionDetails sx={{margin: '0', padding: '0', maxHeight: '40px', overflowY: 'auto' }}>
				{course === "CS5160" && (
				<>
					<List
					sx={{
						width: '100%',
						maxWidth: 300,
						bgcolor: 'background.paper',
						padding: '0'
					}}
					>
					<ListItem>
						<ListItemAvatar>
						<Avatar >
							<AnnouncementIcon />
						</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Bring your laptop to next class" secondary="Posted on: Sep 30" />
						
					</ListItem>
					
					</List>
				</>
				)}
			</AccordionDetails>
			<AccordionDetails sx={{margin: '0', padding: '0', maxHeight: '40px', overflowY: 'auto' }}>
				{course === "CS5167" && (
				<>
					<List
					sx={{
						width: '100%',
						maxWidth: 300,
						bgcolor: 'background.paper',
						padding: '0'
					}}
					>
					<ListItem>
						<ListItemAvatar>
						<Avatar >
							<AnnouncementIcon />
						</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Class cancelled Friday" secondary="Posted on: Sep 30" />
						
					</ListItem>
					
					</List>
				</>
				)}
			</AccordionDetails>
		</Accordion>


			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" sx={{padding: '0px', paddingLeft: '15px'}}>
					<Typography>Assignments</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{margin: '0', padding: '0', maxHeight: '40px', overflowY: 'auto' }}>
					{course === "CS5001" && (
			<>
				<List
				sx={{
					width: '100%',
					maxWidth: 360,
					bgcolor: 'background.paper',
				}}
				>
				<ListItem>
					<ListItemAvatar>
					<Avatar>
						<AssignmentIcon />
					</Avatar>
					</ListItemAvatar>
					<ListItemText primary="Project Proposal" secondary="Due: Oct 14th 11:59pm" />
				</ListItem>
				</List>
			</>
			)}
				</AccordionDetails>

				<AccordionDetails sx={{margin: '0', padding: '0', maxHeight: '40px', overflowY: 'auto' }}>
					{course === "CS5160" && (
			<>
				<List
				sx={{
					width: '100%',
					maxWidth: 360,
					bgcolor: 'background.paper',
				}}
				>
				<ListItem>
					<ListItemAvatar>
					<Avatar>
						<AssignmentIcon />
					</Avatar>
					</ListItemAvatar>
					<ListItemText primary="HW 4a" secondary="Due: Oct 14th 11:59pm" />
				</ListItem>
				</List>
			</>
			)}
				</AccordionDetails>

				<AccordionDetails sx={{margin: '0', padding: '0', maxHeight: '40px', overflowY: 'auto' }}>
					{course === "CS5167" && (
			<>
				<List
				sx={{
					width: '100%',
					maxWidth: 360,
					bgcolor: 'background.paper',
				}}
				>
				<ListItem>
					<ListItemAvatar>
					<Avatar>
						<AssignmentIcon />
					</Avatar>
					</ListItemAvatar>
					<ListItemText primary="HW 5" secondary="Due: Oct 14th 11:59pm" />
				</ListItem>
				</List>
			</>
			)}
				</AccordionDetails>
			</Accordion>


			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" sx={{padding: '0px', paddingLeft: '15px'}}>
					<Typography>Course Materials</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{margin: '0', padding: '0', maxHeight: '40px', overflowY: 'auto' }}>
					{course === "CS5001" && (
			<>
				<List
				sx={{
					width: '100%',
					maxWidth: 360,
					bgcolor: 'background.paper',
				}}
				>
				<ListItem>
					<ListItemAvatar>
					<Avatar>
						<AssignmentIcon />
					</Avatar>
					</ListItemAvatar>
					<ListItemText primary="Senior Design Project Ideas" secondary="Posted on: Sep 30" />
				</ListItem>
				</List>
			</>
			)}
				</AccordionDetails>

				<AccordionDetails sx={{margin: '0', padding: '0', maxHeight: '40px', overflowY: 'auto' }}>
					{course === "CS5160" && (
			<>
				<List
				sx={{
					width: '100%',
					maxWidth: 360,
					bgcolor: 'background.paper',
				}}
				>
				<ListItem>
					<ListItemAvatar>
					<Avatar>
						<AssignmentIcon />
					</Avatar>
					</ListItemAvatar>
					<ListItemText primary="Computer Graphics tutorial 1" secondary="Posted on: Sep 30" />
				</ListItem>
				</List>
			</>
			)}
				</AccordionDetails>

				<AccordionDetails sx={{margin: '0', padding: '0', maxHeight: '40px', overflowY: 'auto' }}>
					{course === "CS5167" && (
			<>
				<List
				sx={{
					width: '100%',
					maxWidth: 360,
					bgcolor: 'background.paper',
				}}
				>
				<ListItem>
					<ListItemAvatar>
					<Avatar>
						<AssignmentIcon />
					</Avatar>
					</ListItemAvatar>
					<ListItemText primary="User Interface Powerpoint " secondary="Posted on: Sep 30" />
				</ListItem>
				</List>
			</>
			)}
				</AccordionDetails>
			</Accordion>


			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" sx={{padding: '0px', paddingLeft: '15px'}}>
					<Typography>Syllabus</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{margin: '0', padding: '0', maxHeight: '40px', overflowY: 'auto' }}>
					{course === "CS5001" && (
			<>
				<List
				sx={{
					width: '100%',
					maxWidth: 360,
					bgcolor: 'background.paper',
				}}
				>
				<ListItem>
					<ListItemAvatar>
					<Avatar>
						<AssignmentIcon />
					</Avatar>
					</ListItemAvatar>
					<ListItemText primary="CS5001 Syllabus" secondary="Due: Oct 14th 11:59pm" />
				</ListItem>
				</List>
			</>
			)}
				</AccordionDetails>

				<AccordionDetails sx={{margin: '0', padding: '0', maxHeight: '40px', overflowY: 'auto' }}>
					{course === "CS5160" && (
			<>
				<List
				sx={{
					width: '100%',
					maxWidth: 360,
					bgcolor: 'background.paper',
				}}
				>
				<ListItem>
					<ListItemAvatar>
					<Avatar>
						<AssignmentIcon />
					</Avatar>
					</ListItemAvatar>
					<ListItemText primary="CS5160 Syllabus" secondary="Due: Oct 14th 11:59pm" />
				</ListItem>
				</List>
			</>
			)}
				</AccordionDetails>

				<AccordionDetails sx={{margin: '0', padding: '0', maxHeight: '40px', overflowY: 'auto' }}>
					{course === "CS5167" && (
			<>
				<List
				sx={{
					width: '100%',
					maxWidth: 360,
					bgcolor: 'background.paper',
				}}
				>
				<ListItem>
					<ListItemAvatar>
					<Avatar>
						<AssignmentIcon />
					</Avatar>
					</ListItemAvatar>
					<ListItemText primary="CS5167 Syllabus" secondary="Due: Oct 14th 11:59pm" />
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
				<div className="class-page-grades-dialog">
					<h4>Grades</h4>
				</div>
			</Dialog>
		</div>
	);
}

export default ClassPage;