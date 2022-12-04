import DatasetCard from "./DatasetCard";
import '../styles.css';

const DatasetList = ({ dataSets }) => {
    if (dataSets?.length) {
        return <div className="root_dataList">
            {dataSets.map(dataSet => <DatasetCard key={dataSet.id} dataSet={dataSet} />)}
        </div>
    }
}

export default DatasetList;