import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatDate, getInputValueFromId } from '../../../utils/helpers';
import '../styles.css'
import CountryList from './CountryList';
import DatasetDetail from './DatasetDetail';

const BuyOrderDetailsCard = ({ buyOrder, countries, handleDeleteOrderClick, dataSets, handleSaveOrder }) => {
    const [isEdit, updateIsEdit] = useState(false);
    const [editDataSetIds, updateEditDataSetIds] = useState([]);
    const [editCountryIds, updateCountryIds] = useState([]);

    const navigate = useNavigate();

    const handleEditOrderClick = () => {
        updateIsEdit(true);
    }

    const handleCancelClick = () => {
        updateIsEdit(false);
        updateEditDataSetIds([]);
        updateCountryIds([]);
    }

    const handleSaveOrderClick = () => {
        const name = getInputValueFromId('name');
        const budget = Number.parseFloat(getInputValueFromId('budget'));
        const data = { name, createdAt: new Date(), budget, datasetIds: editDataSetIds, countries: editCountryIds };
        if (name === '') {
            alert('Order Name cannot be empty');
        } else if (budget === '' || isNaN(budget)) {
            alert('Order budget cannot be empty');
        }
        else if (editDataSetIds.length === 0) {
            alert('Select atleast one dataset');
        } else if (editCountryIds.length === 0) {
            alert('Select atleast country dataset');
        }
        else {
            handleSaveOrder(data);
        }

    }

    return (
        <div className='root_buyOrderDetailsCard'>
            <div className='hdr_buyOrderList'> {isEdit ? 'Edit Buy Order ' : 'Buy Order Details'}</div>
            {buyOrder ?
                <div className="root_form">
                    <div className="root_flex">
                        <div className="root_order">
                            <div className='lbl_buyOrderCard'>Order Name</div>
                            {isEdit ? <input type="text" defaultValue={buyOrder.name} id="name" /> : <div>{buyOrder.name}</div>}
                        </div>
                        <div className="root_date">
                            <div className='lbl_buyOrderCard'>Date Created</div>
                            <div>{formatDate(buyOrder.createdAt)}</div>
                        </div>
                    </div>
                    <br />

                    <div className="root_date">
                        <div className='lbl_buyOrderCard'>Order budget</div>
                        {isEdit ? <input type="text" defaultValue={buyOrder.budget} id="budget" /> : <div>${buyOrder.budget}</div>}
                    </div>
                    <br />

                    <div className="root_date">
                        <div className='lbl_buyOrderCard'>Included datasets</div>
                        <div className='root_dataSetList'>
                            <DatasetDetail dataSets={dataSets} datasetIds={buyOrder.datasetIds}
                                updateEditDataSetIds={updateEditDataSetIds} isEdit={isEdit} editDataSetIds={editDataSetIds} />
                        </div>
                    </div>
                    <br />

                    <div className="root_date">
                        <div className='lbl_buyOrderCard'>Included countries</div>
                        <div className='root_countryList'>
                            <CountryList countries={countries} countryCodeList={buyOrder.countries}
                                editCountryIds={editCountryIds} updateCountryIds={updateCountryIds} isEdit={isEdit} />
                        </div>
                    </div>
                    <br />
                    <br />
                    {isEdit ?
                        <div className='root_buttons'>
                            <button onClick={handleCancelClick} className="btn_cancel">Cancel</button>
                            <button onClick={handleSaveOrderClick} className="btn_save">Save Order</button>
                        </div>
                        : <div className='root_buttons'>

                            <button onClick={handleEditOrderClick} className="btn_edit">Edit Order</button>
                            <button onClick={() => { navigate('/createOrder') }} className="btn_create">Create Order</button>
                            <button onClick={handleDeleteOrderClick} className="btn_delete">Delete Order</button>

                        </div>
                    }

                </div>

                : <div />}

        </div>
    )
}

export default BuyOrderDetailsCard;