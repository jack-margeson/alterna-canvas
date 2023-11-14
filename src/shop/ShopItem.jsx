import "./ShopItem.scss";
import { useState } from 'react';

function ShopItem({ buttext, desc, pts }) {
    const [styleName, setStyleName] = useState("shop-button");
    const [buttonActive, setButtonActive] = useState(false);

    const buttonSelected = () => {
        setStyleName(styleName === "shop-button-active" ? "shop-button" : "shop-button-active");
        const shopValue = document.getElementById("shop-value");
        if (!buttonActive) {
            setButtonActive(true);
            shopValue.textContent = Number(shopValue.textContent) + pts;
        } else {
            setButtonActive(false);
            shopValue.textContent = Number(shopValue.textContent) - pts;
        }
    }

    return (
        <>
            <button className={styleName} onClick={buttonSelected}>{buttext}</button>
            <p className="shop-description">{desc}</p>
        </>
    );
}

export default ShopItem;
