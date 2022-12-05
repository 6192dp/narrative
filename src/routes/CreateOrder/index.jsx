import { useNavigate } from "react-router-dom";
import { axiosRequest } from "../../api";
import { BUY_ORDERS_URL } from "../../utils/constants";
import CreateComponentCard from "./components/CreateComponentCard";

const CreateOrder = ({ countries, dataSets, updateDataSets }) => {

    const navigate = useNavigate();

    const handleSaveOrder = async (data) => {
        const response = await axiosRequest({ url: `${BUY_ORDERS_URL}`, method: 'POST', data });
        if (response) {
            navigate('/', { replace: true })
        }

    }

    return (<CreateComponentCard countries={countries} dataSets={dataSets} updateDataSets={updateDataSets} handleSaveOrder={handleSaveOrder} />)
}

export default CreateOrder;