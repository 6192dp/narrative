const DatasetDetail = ({ dataSets, datasetIds, isEdit, updateEditDataSetIds, editDataSetIds }) => {
    if (datasetIds?.length) {
        return datasetIds.map(i => {

            const index = dataSets.map(item => item.id).indexOf(i);
            const cardItem = dataSets[index];

            const handleEditDatasetClick = () => {
                if (isEdit && !editDataSetIds.includes(i)) {
                    const result = [...editDataSetIds, i];
                    updateEditDataSetIds(result);
                } else if (isEdit && editDataSetIds.includes(i)) {
                    const result = editDataSetIds.filter(item => item !== i);
                    updateEditDataSetIds(result);
                }
            }

            return (
                <div key={i} className={isEdit && editDataSetIds.includes(i) ? "root_datasetDetailSelect" : "root_datasetDetail"} onClick={handleEditDatasetClick}>
                    <img src={cardItem?.thumbnailUrl} alt="Dataset for order details page" />
                    <div>
                        <div className="lbl_datasetDetail">{cardItem?.label}</div>
                        <div className="val_datasetDetail">${cardItem?.costPerRecord} per record</div>
                    </div>

                </div>
            )
        })
    }
    return <div />
}


export default DatasetDetail;