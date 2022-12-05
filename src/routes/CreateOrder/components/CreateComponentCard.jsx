import { useState } from "react";
import { formatDate, getInputValueFromId } from "../../../utils/helpers";
import CountryList from "../../BuyOrderDetails/components/CountryList";
import DatasetDetail from "../../BuyOrderDetails/components/DatasetDetail";

const CreateComponentCard = ({ countries, dataSets, handleSaveOrder }) => {

    const [editDataSetIds, updateEditDataSetIds] = useState([]);
    const [editCountryIds, updateCountryIds] = useState([]);

    const handleCancelClick = () => {
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
            <div className='hdr_buyOrderList'>Create Buy Order</div>

            <div className="root_form">
                <div className="root_flex">
                    <div className="root_order">
                        <div className='lbl_buyOrderCard'>Order Name</div>
                        <input type="text" id="name" />
                    </div>
                    <div className="root_date">
                        <div className='lbl_buyOrderCard'>Date Created</div>
                        <div>{formatDate(new Date())}</div>
                    </div>
                </div>
                <br />

                <div className="root_date">
                    <div className='lbl_buyOrderCard'>Order budget</div>
                    <input type="text" id="budget" />
                </div>
                <br />

                <div className="root_date">
                    <div className='lbl_buyOrderCard'>Included datasets</div>
                    <div className='root_dataSetList'>
                        <DatasetDetail dataSets={dataSets} datasetIds={[1,2,3,4,5]}
                            updateEditDataSetIds={updateEditDataSetIds} isEdit={true} editDataSetIds={editDataSetIds} />
                    </div>
                </div>
                <br />

                <div className="root_date">
                    <div className='lbl_buyOrderCard'>Included countries</div>
                    <div className='root_countryList'>
                        <CountryList countries={countries} countryCodeList={['US', 'GB', 'CA', 'AU']}
                            editCountryIds={editCountryIds} updateCountryIds={updateCountryIds} isEdit={true} />
                    </div>
                </div>
                <br />
                <br />

                <div className='root_buttons'>
                    <button onClick={handleSaveOrderClick} className="btn_save">Save Order</button>
                    <button onClick={handleCancelClick} className="btn_cancel">Cancel</button>

                </div>



            </div>

        </div>
    );
}

export default CreateComponentCard;