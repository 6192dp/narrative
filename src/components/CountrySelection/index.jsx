import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { axiosRequest } from "../../api";
import { GET_COUNTRIES_URL } from "../../utils/constants";
import './styles.css';

const CountrySelection = ({ selectedCountries, updateSelectedCountries, updateCountries, countries }) => {

    useEffect(() => {
        fetchCountries();
    }, []);

    const fetchCountries = async () => {
        const response = await axiosRequest({ url: GET_COUNTRIES_URL, method: 'GET' });
        if (response?.length) {
            updateCountries(response);
        }
    }

    const handleCountryClick = (country) => {
        let result;
        if (selectedCountries.includes(country['countryCode'])) {
            result = selectedCountries.filter(i => country['countryCode'] !== i);
        } else {
            result = [...selectedCountries, country['countryCode']];
        }
        updateSelectedCountries(result);
    }

    const isSelectedCountry = (country) => {
        return selectedCountries.includes(country['countryCode']);
    }

    let location = useLocation();

    if (countries?.length && !location.pathname.includes('buyOrderDetails') && !location.pathname.includes('createOrder')) {
        return (
            <div className="root_countrySelection">
                <div className="hdr_countrySelection">Included countries:</div>
                <div className="countriesList">
                    {countries.map(i => {

                        return (<div key={i['countryCode']} onClick={() => { handleCountryClick(i) }}
                            className={isSelectedCountry(i) ? 'selectedCountry' : 'unSelectedCountry'}>
                            {i['name']}
                        </div>)

                    })}
                </div>

            </div>
        )
    }

    return <div />
}

export default CountrySelection;