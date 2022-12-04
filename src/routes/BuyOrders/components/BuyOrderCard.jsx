const BuyOrderCard = ({buyOrder})=>{
    return (
        <div className="root_buyOrderCard">
            <div>
                <div className="lbl_buyOrderCard">Order Name</div>
                <div className="val_buyOrderCard">{buyOrder.name}</div>
            </div>
            <div>
                <div className="lbl_buyOrderCard">Date Created</div>
                <div className="val_buyOrderCard">{buyOrder.createdAt}</div>
            </div>
            <div>
                <div className="lbl_buyOrderCard">Budget</div>
                <div className="val_buyOrderCard">${buyOrder.budget}</div>
            </div>
        </div>
    )
}

export default BuyOrderCard;