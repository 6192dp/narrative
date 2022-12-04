import BuyOrderCard from "./BuyOrderCard";
import '../styles.css';

const BuyOrderList = ({ buyOrders, selectedCountries }) => {
    let filteredArray = [];
    if (selectedCountries.length === 0) {
        filteredArray = buyOrders;
    } else {
        const keyArrayUtil = [];
        buyOrders.forEach(buyOrder => {
            const temp = buyOrder.countries;
            for (let i = 0; i < temp.length; i++) {
                // check if atleast one country is matched with selected country and make sure there is no duplication
                if (selectedCountries.includes(temp[i]) && !keyArrayUtil.includes(buyOrder.id)) {
                    keyArrayUtil.push(buyOrder.id);
                    filteredArray.push(buyOrder)
                }
            }
        });
    }

    return <>
        <div className="hdr_buyOrderList">Your Buy Orders</div>
        <div className="count_buyOrderList">Showing <b>{filteredArray.length}</b> results</div>
        <div className="">
            {filteredArray?.map(buyOrder => {
                return <BuyOrderCard key={buyOrder.id} buyOrder={buyOrder} />
            })}
        </div>
    </>

}

export default BuyOrderList;