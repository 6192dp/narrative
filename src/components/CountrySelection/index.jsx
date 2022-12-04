import { useEffect, useState } from "react";
import { fetchRequest } from "../../api";
import { GET_COUNTRIES_URL } from "../../utils/constants";
import './styles.css';

const CountrySelection = ({selectedCountries, updateSelectedCountries}) => {
    const [countries, updateCountries] = useState([]);
    

    useEffect(() => {
        fetchCountries();
    }, []);

    const fetchCountries = async () => {
        const response = await fetchRequest(GET_COUNTRIES_URL);
        console.log(response);
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

    if (countries?.length) {
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