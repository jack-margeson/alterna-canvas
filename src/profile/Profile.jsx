import "./Profile.scss";
import Avatar from '@mui/material/Avatar';


function Profile({childToParent}) {

	const ProfileSelected = () => {
		childToParent("Profile");
	}
	return (
		<div className="profile-main">
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					marginTop: "15px"

				}}>
				
				<Avatar
					sx={{ width: 75, height: 75 }} 
					className="profile-avatar"
					onClick = {ProfileSelected}>
						<p id="profile-avatar" >AY</p>
				</Avatar>
			</div>
			
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					marginTop: "20px"
				}}>
				<div
					style={{
						fontSize: "1.5em",
						display: "inline-flex"
					}}>
					Points:&nbsp; <div id="points"> 2021</div>
				</div>
				
			</div>
		</div>
	);
}

export default Profile;
