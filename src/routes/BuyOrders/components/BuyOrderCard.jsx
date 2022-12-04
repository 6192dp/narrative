import { useNavigate } from "react-router-dom";
import { formatDate } from "../../../utils/helpers";

const BuyOrderCard = ({buyOrder})=>{

    const navigate = useNavigate();

    const handleBuyOrderCardClick =() =>{
        navigate(`/buyOrderDetails/${buyOrder.id}`)
    }
    return (
        <div className="root_buyOrderCard" onClick={handleBuyOrderCardClick}>
            <div>
                <div className="lbl_buyOrderCard">Order Name</div>
                <div className="val_buyOrderCard">{buyOrder.name}</div>
            </div>
            <div>
                <div className="lbl_buyOrderCard">Date Created</div>
                <div className="val_buyOrderCard">{formatDate(buyOrder.createdAt)}</div>
            </div>
            <div>
                <div className="lbl_buyOrderCard">Budget</div>
                <div className="val_buyOrderCard">${buyOrder.budget}</div>
            </div>
        </div>
    )
}

export default BuyOrderCard;