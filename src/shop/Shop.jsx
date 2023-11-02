import "./Shop.css";
import ShopItem from "./ShopItem";

function Shop() {
	return (
		<div className="shop-main">
            <ul>
                <li>
                    <ShopItem buttext={"50 pts"} desc={"Skip one lecture"} className="shop-item"></ShopItem>
                </li>
                <li>
                    <ShopItem buttext={"100 pts"} desc={"Add 5% to one homework"} className="shop-item"></ShopItem>
                </li>
                <li>
                    <ShopItem buttext={"200 pts"} desc={"Drop lowest quiz"} className="shop-item"></ShopItem>
                </li>
            </ul>
		</div>
	);
}

export default Shop;
