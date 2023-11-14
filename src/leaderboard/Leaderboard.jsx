/*https://codepen.io/coralielm/pen/BazQOXZ*/
import "./Leaderboard.scss";

function Leaderboard({childToParent, first, second, third}) {
    childToParent("Classes");
    let points = document.getElementById("points").textContent;
    let rank = "3rd";
    if (points === "2000"){
        rank = "4th";
    }
    else if (points === "2373"){
        rank = "2nd";
    }
    else if (points === "2400"){
        rank = "1st";
    }
    else if (points === "2021"){
        rank = "3rd";
    }
    else{
        rank = "5th";
    }

	return (
        <div className="leaderboard-main">
            <div className="container podium">
                <div className="podium__item">
                    <p className="podium__city">{second}</p>
                    <div className="podium__rank second">2</div>
                </div>
                <div className="podium__item">
                    <p className="podium__city">{first}</p>
                    <div className="podium__rank first">1</div>
                </div>
                <div className="podium__item">
                    <p className="podium__city">{third}</p>
                    <div className="podium__rank third">3</div>
                </div>
            </div>
            <div className="text-area">
                <p>Your cumulative points: {points}</p>
                <p>Your rank: {rank}</p>
            </div>
        </div>
	)	
}

export default Leaderboard;
