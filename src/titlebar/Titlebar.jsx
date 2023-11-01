import "./Titlebar.scss";

function Titlebar({text}) {
	return (
		<div className="titlebar-main">
			<p className="titlebar-title">{text}</p>
		</div>
	);
}

export default Titlebar;
