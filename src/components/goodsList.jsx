import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
    const { goods = [], addToBasket = Function.prototype } = props;

    if (!goods.length) {
        return <h5>Нету ничево у нас блин остань съели украли всё вот так</h5>;
    }

    return (
        <div className="goods">
            {goods.map((item) => (
                <GoodsItem key={item.imdbID} {...item} addToBasket={addToBasket} />
            ))}
        </div>
    );
}

export { GoodsList };