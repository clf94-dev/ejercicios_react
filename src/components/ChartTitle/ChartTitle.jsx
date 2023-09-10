import PropTypes from 'prop-types'
 function ChartTitle({title}) {
    return (
        <div className={`ml-6 ${title !== "Total"? "mt-5" : ""}`}>
            <p className='text-gray-700 text-sm'>{title}</p>
        </div>
    )
}

ChartTitle.propTypes = {
    title: PropTypes.string,
}
export default ChartTitle;
