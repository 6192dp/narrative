import BuyOrderCard from "./BuyOrderCard";
import '../styles.css';

const BuyOrderList = ({ buyOrders, selectedCountries }) => {
    if (buyOrders?.length) {
        return <>
            <div className="hdr_buyOrderList">Your Buy Orders</div>
            <div className="count_buyOrderList">Showing <b>{buyOrders.length}</b> results</div>
            <div className="">
                {buyOrders.map(buyOrder => {
                    return <BuyOrderCard key={buyOrder.id} buyOrder={buyOrder} />
                })}
            </div>
        </>
    }

}

export default BuyOrderList;