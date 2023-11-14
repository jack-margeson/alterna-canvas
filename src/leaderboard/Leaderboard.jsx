/*https://codepen.io/coralielm/pen/BazQOXZ*/
import "./Leaderboard.scss";

function Leaderboard({childToParent, name1, pts1, name2, pts2, name3, pts3}) {
    childToParent("Classes");
    let points = document.getElementById("points").textContent;
    points = parseInt(points.replace(/\s/g, ""))
    let rank;

    const timebuttonPressed = () => {
		pts1 = pts1 + Math.floor(Math.random() * 170) + 150;
        console.log(pts1.toString())
        pts2 = pts2 + Math.floor(Math.random() * 150) + 130;
        console.log(pts2.toString())
        pts3 = pts3 + Math.floor(Math.random() * 130) + 110;
        console.log(pts3.toString())
        points = points + Math.floor(Math.random() * 110) + 90;
        document.getElementById("points").textContent = points;
	};

    if (points === "2000"){
        rank = "4th";
    }
    else if (points === "2373"){
        rank = "2nd";
    }
    else if (points === "2400"){
        rank = "1st";
    }
    else if (points === "2021" || points === " 2021"){
        rank = "3rd";
    }
    else{
        rank = "5th";
    }

	return (
        <div className="leaderboard-main">
            <div className="container podium">
                <div className="podium__item">
                    <p className="podium__city">{name2.concat(", ",pts2.toString())}</p>
                    <div className="podium__rank second">2</div>
                </div>
                <div className="podium__item">
                    <p className="podium__city">{name1.concat(", ",pts1.toString())}</p>
                    <div className="podium__rank first">1</div>
                </div>
                <div className="podium__item">
                    <p className="podium__city">{name3.concat(", ",pts3.toString())}</p>
                    <div className="podium__rank third">3</div>
                </div>
            </div>
            <div className="text-area">
                <p>Your cumulative points: {points.toString()}</p>
                <p>Your rank: {rank}</p>
            </div>
            <div className="button-area">
                <button className="time-button" onClick={timebuttonPressed}>+1 week</button>
            </div>
        </div>
	)	
}

export default Leaderboard;