import "./ShopItem.scss";
import { useState } from 'react';

function ShopItem({buttext, desc}) {
    const [styleName, setStyleName] = useState("shop-button");

    const buttonSelected = () => {
        setStyleName(styleName === "shop-button-active" ? "shop-button" : "shop-button-active");
    }

	return (
        <>
            <button className={styleName} onClick={buttonSelected}>{buttext}</button>
            <p className="shop-description">{desc}</p>
        </>
    );
}

export default ShopItem;
