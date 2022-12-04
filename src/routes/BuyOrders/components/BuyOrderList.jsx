import BuyOrderCard from "./BuyOrderCard";
import '../styles.css';

const BuyOrderList = ({ buyOrders }) => {
    if (buyOrders?.length) {
        return <>
            <div className="hdr_buyOrderList">Your Buy Orders</div>
            <div className="count_buyOrderList">Showing <b>{buyOrders.length}</b> results</div>
            {buyOrders.map(buyOrder => {
                return <BuyOrderCard key={buyOrder.id} buyOrder={buyOrder} />
            })}
        </>
    }

}

export default BuyOrderList;