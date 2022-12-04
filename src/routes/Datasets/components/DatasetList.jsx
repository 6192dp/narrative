import DatasetCard from "./DatasetCard";
import '../styles.css';

const DatasetList = ({ dataSets, selectedCountries, countries }) => {

    const counts = {};
    for (let i = 0; i < countries.length; i++) {
        for (let j = 0; j < countries[i].storedData.length; j++) {
            counts[countries[i].storedData[j].datasetId] = counts[countries[i].storedData[j].datasetId] ?
                counts[countries[i].storedData[j].datasetId] + countries[i].storedData[j].recordCount
                : countries[i].storedData[j].recordCount;
        }
    }

    if (selectedCountries.length === 0 || selectedCountries.length === countries.length) {
        return (
            <>
                <div className="hdr_buyOrderList">Datasets</div>
                <div className="count_buyOrderList">Showing <b>{dataSets.length}</b> results</div>
                <div className="root_dataList">
                    {dataSets?.map(dataSet => <DatasetCard key={dataSet.id} dataSet={dataSet} counts={counts} />)}
                </div>
            </>
        )
    } else {
        const idsArr = [];
        for (let i = 0; i < countries.length; i++) {
            if (selectedCountries.includes(countries[i].countryCode)) {
                for (let j = 0; j < countries[i].storedData.length; j++) {
                    if (countries[i].storedData[j].recordCount > 0 && !idsArr.includes(countries[i].storedData[j].datasetId)) {
                        idsArr.push(countries[i].storedData[j].datasetId);
                    }
                }
            }
        }
        const result = dataSets?.filter(item => idsArr.includes(item.id));
        return (
            <>
                <div className="hdr_buyOrderList">Datasets</div>
                <div className="count_buyOrderList">Showing <b>{result.length}</b> results</div>
                <div className="root_dataList">
                    {result?.map(dataSet => <DatasetCard key={dataSet.id} dataSet={dataSet} counts={counts} />)}
                </div>
            </>
        )

    }


}

export default DatasetList;