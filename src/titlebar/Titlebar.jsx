import "./Titlebar.scss";

function Titlebar({ text }) {
	if (text === "Todo") {
		text = "To Do";
	}
	return (
		<div className="titlebar-main">
			<p className="titlebar-title">{text}</p>
		</div>
	);
}

export default Titlebar;
