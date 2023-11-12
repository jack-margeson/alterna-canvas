import "./ShopItem.scss";
import { useState } from 'react';

function ShopItem({buttext, desc, pts}) {
    const [styleName, setStyleName] = useState("shop-button");

    const buttonSelected = () => {
        setStyleName(styleName === "shop-button-active" ? "shop-button" : "shop-button-active");
        const currentPoints = document.getElementById("points")
        currentPoints.textContent = parseInt(currentPoints.textContent, 10) - pts
    }

	return (
        <>
            <button className={styleName} onClick={buttonSelected}>{buttext}</button>
            <p className="shop-description">{desc}</p>
        </>
    );
}

export default ShopItem;
