const DatasetDetail = ({ dataSets, datasetIds }) => {
    if (datasetIds.length) {
        return datasetIds.map(i => {

            const index = dataSets.map(item => item.id).indexOf(i);
            const cardItem = dataSets[index];

            return (
                <div key={i} className='root_datasetDetail'>
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