import DatasetCard from "./DatasetCard";
import '../styles.css';

const DatasetList = ({ dataSets }) => {
    if (dataSets?.length) {
        return(
            <>
            <div className="hdr_buyOrderList">Datasets</div>
            <div className="count_buyOrderList">Showing <b>{dataSets.length}</b> results</div>
            <div className="root_dataList">
            {dataSets.map(dataSet => <DatasetCard key={dataSet.id} dataSet={dataSet} />)}
        </div>
            </>
        )
    }
}

export default DatasetList;