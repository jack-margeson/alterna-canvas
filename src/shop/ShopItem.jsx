import "./ShopItem.scss";

function ShopItem({buttext, desc}) {
	return (
        <>
            <button className="shop-button">{buttext}</button>
            <p className="shop-description">{desc}</p>
        </>
    );
}

export default ShopItem;
