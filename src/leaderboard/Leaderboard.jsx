/*https://codepen.io/coralielm/pen/BazQOXZ*/
import "./Leaderboard.scss";

function Leaderboard({childToParent, name1, pts1, name2, pts2, name3, pts3}) {
    childToParent("Classes");
    let points = document.getElementById("points").textContent;
    points = parseInt(points.replace(/\s/g, ""))
    let rank;

    const timebuttonPressed = () => {
        if(pts1 === points){
            pts1 = pts1 + Math.floor(Math.random() * 170) + 150;
            document.getElementById("1text").textContent = name1.concat(", ",pts1.toString());
            pts2 = pts2 + Math.floor(Math.random() * 150) + 130;
            document.getElementById("2text").textContent = name2.concat(", ",pts2.toString());
            pts3 = pts3 + Math.floor(Math.random() * 130) + 110;
            document.getElementById("3text").textContent = name3.concat(", ",pts3.toString());
            points = pts1;
            document.getElementById("points").textContent = points;
            document.getElementById("pid").textContent = "Your cumulative points: ".concat(pts1.toString());
        }
        else if (pts2 === points){
            pts1 = pts1 + Math.floor(Math.random() * 170) + 150;
            document.getElementById("1text").textContent = name1.concat(", ",pts1.toString());
            pts2 = pts2 + Math.floor(Math.random() * 150) + 130;
            document.getElementById("2text").textContent = name2.concat(", ",pts2.toString());
            pts3 = pts3 + Math.floor(Math.random() * 130) + 110;
            document.getElementById("3text").textContent = name3.concat(", ",pts3.toString());
            points = pts2;
            document.getElementById("points").textContent = points;
            document.getElementById("pid").textContent = "Your cumulative points: ".concat(pts2.toString());
        }
        else if (pts3 === points){
            pts1 = pts1 + Math.floor(Math.random() * 170) + 150;
            document.getElementById("1text").textContent = name1.concat(", ",pts1.toString());
            pts2 = pts2 + Math.floor(Math.random() * 150) + 130;
            document.getElementById("2text").textContent = name2.concat(", ",pts2.toString());
            pts3 = pts3 + Math.floor(Math.random() * 130) + 110;
            document.getElementById("3text").textContent = name3.concat(", ",pts3.toString());
            points = pts3;
            document.getElementById("points").textContent = points;
            document.getElementById("pid").textContent = "Your cumulative points: ".concat(pts3.toString());
        }
        else{
            pts1 = pts1 + Math.floor(Math.random() * 170) + 150;
            document.getElementById("1text").textContent = name1.concat(", ",pts1.toString());
            pts2 = pts2 + Math.floor(Math.random() * 150) + 130;
            document.getElementById("2text").textContent = name2.concat(", ",pts2.toString());
            pts3 = pts3 + Math.floor(Math.random() * 130) + 110;
            document.getElementById("3text").textContent = name3.concat(", ",pts3.toString());
            points = points + Math.floor(Math.random() * 110) + 90;
            document.getElementById("points").textContent = points;
            document.getElementById("pid").textContent = "Your cumulative points: ".concat(points.toString());
        }
		
	};

    if (points >= pts1){
        rank = "1st";
    }
    else if (points >= pts2){
        rank = "2nd";
    }
    else if (points >= pts3){
        rank = "3rd";
    }
    else{
        rank = "4th";
    }

	return (
        <div className="leaderboard-main">
            <div className="container podium">
                <div className="podium__item">
                    <p className="podium__city" id="2text">{name2.concat(", ",pts2.toString())}</p>
                    <div className="podium__rank second">2</div>
                </div>
                <div className="podium__item">
                    <p className="podium__city" id="1text">{name1.concat(", ",pts1.toString())}</p>
                    <div className="podium__rank first">1</div>
                </div>
                <div className="podium__item">
                    <p className="podium__city" id="3text">{name3.concat(", ",pts3.toString())}</p>
                    <div className="podium__rank third">3</div>
                </div>
            </div>
            <div className="text-area">
                <p id="pid">Your cumulative points: {points.toString()}</p>
                <p>Your rank: {rank}</p>
            </div>
            <div className="button-area">
                <button className="time-button" onClick={timebuttonPressed}>+1 week</button>
            </div>
        </div>
	)	
}

export default Leaderboard;