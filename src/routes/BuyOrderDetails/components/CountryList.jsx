const CountryList = ({ countryCodeList, countries }) => {

    if (countryCodeList?.length) {
        return countryCodeList.map(country => {
            const index = countries.map(i => i.countryCode).indexOf(country);
            return <div key={countries[index]?.countryCode} className='tile_country'>{countries[index]?.name}</div>
        })
    } else {
        return <div />
    }

}

export default CountryList;