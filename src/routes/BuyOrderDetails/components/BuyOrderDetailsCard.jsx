import '../styles.css'
import CountryList from './CountryList';
import DatasetCards from './DatasetDetail';

const BuyOrderDetailsCard = ({ buyOrder, countries, handleDeleteOrderClick, dataSets }) => {
    return (
        <div className='root_buyOrderDetailsCard'>
            <div className='hdr_buyOrderList'>Buy Order Details</div>
            {buyOrder ?
                <div className="root_form">
                    <div className="root_flex">
                        <div className="root_order">
                            <div className='lbl_buyOrderCard'>Order Name</div>
                            <div>{buyOrder.name}</div>
                        </div>
                        <div className="root_date">
                            <div className='lbl_buyOrderCard'>Date Created</div>
                            <div>{buyOrder.createdAt}</div>
                        </div>
                    </div>
                    <br />

                    <div className="root_date">
                        <div className='lbl_buyOrderCard'>Order budget</div>
                        <div>${buyOrder.budget}</div>
                    </div>
                    <br />

                    <div className="root_date">
                        <div className='lbl_buyOrderCard'>Included datasets</div>
                        <div className='root_dataSetList'>
                            <DatasetCards dataSets={dataSets} datasetIds={buyOrder.datasetIds} />
                        </div>
                    </div>
                    <br />

                    <div className="root_date">
                        <div className='lbl_buyOrderCard'>Included countries</div>
                        <div className='root_countryList'>
                            <CountryList countries={countries} countryCodeList={buyOrder.countries} />
                        </div>
                    </div>
                    <br />
                    <br />

                    <div className='root_buttons'>
                        <button>Edit Order</button>
                        <button onClick={handleDeleteOrderClick}>Delete Order</button>

                    </div>
                </div>

                : <div />}

        </div>
    )
}

export default BuyOrderDetailsCard;