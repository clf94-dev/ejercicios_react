import PropTypes from 'prop-types';
import Stadistics from '../Stadistics/Stadistics';
import ProbabilityChart from '../ProbabilityChart/ProbabilityChart';
function Card({title, data, color, secondExercise, type, chart}) {
    return (
        <div className="card ">
            <div className={`flex flex-col h-full w-full justify-center m-auto p-4 bg-white rounded ${!secondExercise ? "dark:bg-gray-800 dark:border dark:border-gray-100" : ""}`}>
                {secondExercise ? <>
                    <h3 className='font-bold text-xl '>{title}</h3>
                    <Stadistics brush={title === "Testing"} data={data} color={color} />
                </> : <div className='flex flex-col'>
                    {/* <h3 className='font-bold text-xl '>{title}</h3> */}
                    <div className='flex flex-row  justify-center text-center mb-[3px] '>
                        <p className='text-lg dark:text-white pt-[4px] '>Most Likely {title} {title === "Nationality" ? "(%)" : ""} :</p>
                        <p className='text-3xl font-bold text-blue-700 dark:text-blue-500 ml-3 capitalize'>{data[type]}</p>
                    </div>
                    {data.probability ? <div className='flex flex-row  justify-center text-center '>
                        <p className='text-lg text-gray-500 dark:text-gray-200'>Probability:</p>
                        <p className='text-xl font-bold text-blue-700 dark:text-blue-500 ml-3'>{data.probability * 100}%</p>
                    </div>: null}
                    {chart && data ? <ProbabilityChart data={data.country} color={color} /> : null}
                </div>}
            </div>
        </div>
    );
}
    Card.propTypes = {
        title: PropTypes.string,
        data: PropTypes.object,
        color: PropTypes.string,
        secondExercise: PropTypes.bool,
        type: PropTypes.string,
        chart: PropTypes.bool
    }

    export default Card;