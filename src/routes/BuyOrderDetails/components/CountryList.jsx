const CountryList = ({ countryCodeList, countries, updateCountryIds, editCountryIds, isEdit }) => {

    if (countryCodeList?.length) {
        return countryCodeList.map(country => {
            const index = countries.map(i => i.countryCode).indexOf(country);

            const handleEditCountryClick = () => {
                if (isEdit && !editCountryIds.includes(country)) {
                    const result = [...editCountryIds, country];
                    updateCountryIds(result);
                } else if (isEdit && editCountryIds.includes(country)) {
                    const result = editCountryIds.filter(item => item !== country);
                    updateCountryIds(result);
                }
            }

            return <div key={countries[index]?.countryCode} className={isEdit && editCountryIds.includes(country) ? 'countryTileSelected' : 'countryTile'} onClick={handleEditCountryClick}>{countries[index]?.name}</div>
        })
    } else {
        return <div />
    }

}

export default CountryList;