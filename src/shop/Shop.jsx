import "./Shop.scss";
import ShopItem from "./ShopItem";

function Shop({childToParent}) {
    childToParent("Classes");

	return (
		<div className="shop-main">
            <ul>
                <li>
                    <ShopItem buttext={"70 pts"} desc={"Skip one lecture"} className="shop-item"></ShopItem>
                </li>
                <li>
                    <ShopItem buttext={"90 pts"} desc={"1 day extension on a homework"} className="shop-item"></ShopItem>
                </li>
                <li>
                    <ShopItem buttext={"110 pts"} desc={"Add 10% to one quiz"} className="shop-item"></ShopItem>
                </li>
                <li>
                    <ShopItem buttext={"120 pts"} desc={"Add 10% to one homework"} className="shop-item"></ShopItem>
                </li>
                <li>
                    <ShopItem buttext={"200 pts"} desc={"Drop lowest quiz"} className="shop-item"></ShopItem>
                </li>
                <li>
                    <ShopItem buttext={"230 pts"} desc={"Drop lowest homework"} className="shop-item"></ShopItem>
                </li>
                <li>
                    <ShopItem buttext={"250 pts"} desc={"15 Bearcat Card Dollars"} className="shop-item"></ShopItem>
                </li>
            </ul>
		</div>
	);
}

export default Shop;
