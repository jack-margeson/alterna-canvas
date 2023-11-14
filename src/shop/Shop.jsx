import * as React from "react";
import { Button, Dialog } from "@mui/material";
import "./Shop.scss";
import ShopItem from "./ShopItem";

function Shop({ childToParent }) {
    childToParent("Classes");

    const [open, setOpen] = React.useState(false);

    const [shopDialogString, setShopDialogString] = React.useState("");

    const handleClose = (value) => {
        setOpen(false);
    };

    const handleBuy = () => {
        const totalPoints = document.getElementById("points");
        const shopValue = document.getElementById("shop-value");

        if (Number(shopValue.textContent) !== 0) {
            if (Number(totalPoints.textContent) < Number(shopValue.textContent)) {
                setShopDialogString("Insufficent point funds! Try earning more points by submitting assignments.")
            } else {
                totalPoints.textContent = Number(totalPoints.textContent) - Number(shopValue.textContent);
                setShopDialogString("Transaction complete! You spent " + shopValue.textContent + " points and now have a total of " + totalPoints.textContent + " points.")
                let tmpColor = totalPoints.style.color;
                totalPoints.style.color = "red";
                setTimeout(() => {
                    totalPoints.style.color = tmpColor;
                }, 3000);
            }
            setOpen(true);
        }
    }

    return (
        <div className="shop-main">
            <ul>
                <li>
                    <ShopItem pts={70} buttext={"70 pts"} desc={"Skip one lecture"} className="shop-item"></ShopItem>
                </li>
                <li>
                    <ShopItem pts={90} buttext={"90 pts"} desc={"1 day extension on a homework"} className="shop-item"></ShopItem>
                </li>
                <li>
                    <ShopItem pts={110} buttext={"110 pts"} desc={"Add 10% to one quiz"} className="shop-item"></ShopItem>
                </li>
                <li>
                    <ShopItem pts={120} buttext={"120 pts"} desc={"Add 10% to one homework"} className="shop-item"></ShopItem>
                </li>
                <li>
                    <ShopItem pts={200} buttext={"200 pts"} desc={"Drop lowest quiz"} className="shop-item"></ShopItem>
                </li>
                <li>
                    <ShopItem pts={230} buttext={"230 pts"} desc={"Drop lowest homework"} className="shop-item"></ShopItem>
                </li>
                <li>
                    <ShopItem pts={250} buttext={"250 pts"} desc={"15 Bearcat Card Dollars"} className="shop-item"></ShopItem>
                </li>
            </ul>
            <div className="shop-buy">
                <span>Total: </span> <span id="shop-value">0</span> <span> points</span>
                <Button id="shop-button" sx={{ width: "14vw", marginLeft: "15px" }} onClick={handleBuy} variant="contained">Buy</Button>

            </div>


            <Dialog
                fullWidth="true"
                maxWidth="md"
                open={open}
                onClose={handleClose}
                sx={{ minHeight: "80vh" }}
            >
                <div className="shop-dialog">
                    <p>
                        {shopDialogString}
                    </p>
                </div>
            </Dialog>
        </div>
    );
}

export default Shop;
