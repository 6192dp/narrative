
const DatasetCard = ({ dataSet, counts }) => {

    return (
        <div className="root_datasetCard">
            <div className="root_header">
                <img className="img_datasetCard" src={dataSet.thumbnailUrl} alt="Dataset thumbnail" />
                <div className="hdr_datasetCard">{dataSet.label}</div>
            </div>
            <div className="lbl_datasetCard">Dataset Description</div>
            <div className="val_datasetCard">{dataSet.description}</div>
            <div className="root_row">
                <div className="lbl_datasetCard">Cost per record:</div>
                <div className="val_datasetCard">${dataSet.costPerRecord}</div>
            </div>
            <div className="root_row">
                <div className="lbl_datasetCard">Available records:</div>
                <div className="val_datasetCard">{counts[dataSet.id]} records</div>
            </div>
            <div>
                <div className="lbl_datasetCard">Included countries:</div>
                <div className="val_datasetCard">4500 records</div>
            </div>
        </div>
    )

}


export default DatasetCard;